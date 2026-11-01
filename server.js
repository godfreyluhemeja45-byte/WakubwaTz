// =========================================================
// WAKUBWATZ - LOCAL STATIC & SYNC SERVER
// Run with: node server.js
// =========================================================

const http = require('http');
const fs = require('fs');
const path = require('path');
const { syncAll } = require('./sync');

const PORT = process.env.PORT || 3000;
const BASE_DIR = __dirname;
const VIDEOS_JSON_PATH = path.join(BASE_DIR, 'videos.json');

const MIME_TYPES = {
    '.html': 'text/html; charset=utf-8',
    '.css': 'text/css; charset=utf-8',
    '.js': 'application/javascript; charset=utf-8',
    '.json': 'application/json; charset=utf-8',
    '.png': 'image/png',
    '.jpg': 'image/jpeg',
    '.jpeg': 'image/jpeg',
    '.gif': 'image/gif',
    '.svg': 'image/svg+xml',
    '.mp4': 'video/mp4',
    '.webm': 'video/webm',
    '.mp3': 'audio/mpeg',
    '.ico': 'image/x-icon'
};

const server = http.createServer(async (req, res) => {
    // CORS headers for all requests
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Range');

    if (req.method === 'OPTIONS') {
        res.writeHead(204);
        res.end();
        return;
    }

    let reqUrl = req.url.split('?')[0];

    // API Endpoint: /api/proxy-video (Bypasses Bunny CDN Hotlink / Referer Block)
    if (reqUrl === '/api/proxy-video') {
        const urlObj = new URL(req.url, `http://${req.headers.host || 'localhost:3000'}`);
        const targetUrl = urlObj.searchParams.get('url');

        if (!targetUrl) {
            res.writeHead(400, { 'Content-Type': 'text/plain' });
            res.end('Missing url param');
            return;
        }

        try {
            const parsedTarget = new URL(targetUrl);
            const https = require('https');

            const headers = {
                'User-Agent': req.headers['user-agent'] || 'Mozilla/5.0 (Windows NT 10.0; Win64; x64)',
                'Referer': 'https://chimbotamu.com/',
                'Origin': 'https://chimbotamu.com'
            };

            if (req.headers.range) {
                headers['Range'] = req.headers.range;
            }

            const proxyReq = https.request(parsedTarget, {
                method: req.method,
                headers: headers
            }, (proxyRes) => {
                const outHeaders = {
                    'Access-Control-Allow-Origin': '*',
                    'Access-Control-Allow-Headers': 'Content-Type, Range',
                    'Access-Control-Expose-Headers': 'Content-Range, Content-Length, Accept-Ranges',
                    'Content-Type': proxyRes.headers['content-type'] || 'video/mp4',
                    'Accept-Ranges': 'bytes'
                };

                if (proxyRes.headers['content-range']) {
                    outHeaders['Content-Range'] = proxyRes.headers['content-range'];
                }
                if (proxyRes.headers['content-length']) {
                    outHeaders['Content-Length'] = proxyRes.headers['content-length'];
                }

                res.writeHead(proxyRes.statusCode, outHeaders);
                proxyRes.pipe(res);
            });

            proxyReq.on('error', (err) => {
                console.error('Video proxy error:', err.message);
                if (!res.headersSent) {
                    res.writeHead(502, { 'Content-Type': 'text/plain' });
                    res.end('Proxy streaming failed: ' + err.message);
                }
            });

            req.pipe(proxyReq);
            return;
        } catch (e) {
            res.writeHead(500, { 'Content-Type': 'text/plain' });
            res.end('Server error: ' + e.message);
            return;
        }
    }

    // API Endpoint: /api/videos
    if (reqUrl === '/api/videos') {
        try {
            if (!fs.existsSync(VIDEOS_JSON_PATH)) {
                await syncAll();
            }
            const data = fs.readFileSync(VIDEOS_JSON_PATH, 'utf-8');
            res.writeHead(200, { 'Content-Type': 'application/json; charset=utf-8' });
            res.end(data);
        } catch (err) {
            res.writeHead(500, { 'Content-Type': 'application/json' });
            res.end(JSON.stringify({ error: err.message }));
        }
        return;
    }

    // API Endpoint: /api/sync
    if (reqUrl === '/api/sync') {
        try {
            const list = await syncAll();
            res.writeHead(200, { 'Content-Type': 'application/json; charset=utf-8' });
            res.end(JSON.stringify({ success: true, count: list ? list.length : 0 }));
        } catch (err) {
            res.writeHead(500, { 'Content-Type': 'application/json' });
            res.end(JSON.stringify({ success: false, error: err.message }));
        }
        return;
    }

    if (reqUrl === '/') reqUrl = '/index.html';

    const filePath = path.join(BASE_DIR, decodeURIComponent(reqUrl));

    // Prevent directory traversal
    if (!filePath.startsWith(BASE_DIR)) {
        res.writeHead(403, { 'Content-Type': 'text/plain' });
        res.end('403 Forbidden');
        return;
    }

    fs.stat(filePath, (err, stats) => {
        if (err || !stats.isFile()) {
            res.writeHead(404, { 'Content-Type': 'text/html; charset=utf-8' });
            res.end(`
                <body style="background:#07090e;color:#fff;font-family:sans-serif;text-align:center;padding:50px;">
                    <h2>404 - Faili Halijapatikana</h2>
                    <p><a href="/" style="color:#ff2a4d;">Bofya hapa kurudi WakubwaTz</a></p>
                </body>
            `);
            return;
        }

        const ext = path.extname(filePath).toLowerCase();
        const contentType = MIME_TYPES[ext] || 'application/octet-stream';

        // Support video range requests for smooth streaming
        const range = req.headers.range;
        if (range && (ext === '.mp4' || ext === '.webm')) {
            const total = stats.size;
            const parts = range.replace(/bytes=/, "").split("-");
            const partialstart = parts[0];
            const partialend = parts[1];

            const start = parseInt(partialstart, 10);
            const end = partialend ? parseInt(partialend, 10) : total - 1;
            const chunksize = (end - start) + 1;

            const file = fs.createReadStream(filePath, { start: start, end: end });
            res.writeHead(206, {
                'Content-Range': `bytes ${start}-${end}/${total}`,
                'Accept-Ranges': 'bytes',
                'Content-Length': chunksize,
                'Content-Type': contentType
            });
            file.pipe(res);
        } else {
            res.writeHead(200, {
                'Content-Type': contentType,
                'Content-Length': stats.size
            });
            fs.createReadStream(filePath).pipe(res);
        }
    });
});

server.listen(PORT, () => {
    console.log(`
=============================================================
🔥 WAKUBWATZ SERVER IMENZA KUKIMBIA KIKAMILIFU! 🔥
-------------------------------------------------------------
🌐 Tembelea kwenye kivinjari: http://localhost:${PORT}
🚀 Video zote za ChimboTamu zimeunganishwa na ziko tayari!
🔄 API ya Kusawazisha: http://localhost:${PORT}/api/sync
-------------------------------------------------------------
(Bonyeza Ctrl + C kusitisha server)
=============================================================
    `);

    // Auto sync on start if videos.json doesn't exist
    if (!fs.existsSync(VIDEOS_JSON_PATH)) {
        syncAll().catch(e => console.error('Startup sync error:', e.message));
    }
});
