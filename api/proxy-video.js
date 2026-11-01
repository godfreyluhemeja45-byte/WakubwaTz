const https = require('https');

module.exports = (req, res) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, OPTIONS');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Range');
    res.setHeader('Access-Control-Expose-Headers', 'Content-Range, Content-Length, Accept-Ranges');

    if (req.method === 'OPTIONS') {
        res.status(204).end();
        return;
    }

    const targetUrl = req.query.url;
    if (!targetUrl) {
        res.status(400).send('Missing url parameter');
        return;
    }

    try {
        const parsedTarget = new URL(targetUrl);
        const headers = {
            'User-Agent': req.headers['user-agent'] || 'Mozilla/5.0 (Windows NT 10.0; Win64; x64)',
            'Referer': 'https://chimbotamu.com/',
            'Origin': 'https://chimbotamu.com'
        };

        if (req.headers.range) {
            headers['Range'] = req.headers.range;
        }

        const proxyReq = https.request(parsedTarget, {
            method: 'GET',
            headers: headers
        }, (proxyRes) => {
            res.setHeader('Content-Type', proxyRes.headers['content-type'] || 'video/mp4');
            res.setHeader('Accept-Ranges', 'bytes');
            if (proxyRes.headers['content-range']) {
                res.setHeader('Content-Range', proxyRes.headers['content-range']);
            }
            if (proxyRes.headers['content-length']) {
                res.setHeader('Content-Length', proxyRes.headers['content-length']);
            }

            res.status(proxyRes.statusCode);
            proxyRes.pipe(res);
        });

        proxyReq.on('error', (err) => {
            console.error('Vercel proxy error:', err.message);
            if (!res.headersSent) {
                res.status(502).send('Proxy error: ' + err.message);
            }
        });

        proxyReq.end();
    } catch (e) {
        res.status(500).send('Server error: ' + e.message);
    }
};
