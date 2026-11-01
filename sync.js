// =========================================================
// WAKUBWATZ - CHIMBOTAMU SYNC SCRIPT
// Run with: node sync.js
// =========================================================

const https = require('https');
const fs = require('fs');
const path = require('path');

const CHIMBOTAMU_BASE = 'https://chimbotamu.com';
const VIDEOS_FILE = path.join(__dirname, 'videos.json');

function fetchJson(url) {
    return new Promise((resolve, reject) => {
        https.get(url, { headers: { 'User-Agent': 'WakubwaTz/1.0' } }, (res) => {
            if (res.statusCode >= 300 && res.statusCode < 400 && res.headers.location) {
                return fetchJson(res.headers.location).then(resolve).catch(reject);
            }
            if (res.statusCode !== 200) {
                return reject(new Error(`Failed with status ${res.statusCode}`));
            }
            let data = '';
            res.on('data', chunk => data += chunk);
            res.on('end', () => {
                try {
                    resolve(JSON.parse(data));
                } catch (e) {
                    reject(e);
                }
            });
        }).on('error', reject);
    });
}

function extractGuid(str) {
    if (!str) return null;
    const match = str.match(/[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}/i);
    return match ? match[0] : null;
}

function formatViews(val) {
    const num = parseInt(val, 10);
    if (isNaN(num) || num === 0) {
        return `${Math.floor(Math.random() * 45 + 12)}.${Math.floor(Math.random() * 9)}K`;
    }
    if (num >= 1000000) return (num / 1000000).toFixed(1) + 'M';
    if (num >= 1000) return (num / 1000).toFixed(1) + 'K';
    return num.toString();
}

function formatDuration(dur) {
    if (!dur) return "04:30";
    return dur.trim();
}

function formatTimeAgo(dateStr) {
    if (!dateStr) return "Hivi karibuni";
    try {
        const d = new Date(dateStr);
        if (isNaN(d.getTime())) return dateStr;
        const now = new Date();
        const diffMs = now - d;
        const diffDays = Math.floor(diffMs / (1000 * 60 * 60 * 24));
        if (diffDays <= 0) return "Leo";
        if (diffDays === 1) return "Jana";
        if (diffDays < 7) return `Siku ${diffDays} zilizopita`;
        if (diffDays < 30) return `Wiki ${Math.floor(diffDays / 7)} zilizopita`;
        if (diffDays < 365) return `Miezi ${Math.floor(diffDays / 30)} iliyopita`;
        return `Mwaka ${Math.floor(diffDays / 365)} uliopita`;
    } catch {
        return "Hivi karibuni";
    }
}

async function syncAll() {
    console.log('🔄 Inaunganisha na kupakua orodha ya video kutoka chimbiotamu.com / chimbotamu.com...');
    
    try {
        const [rawVideos, rawMovies, rawSeries] = await Promise.all([
            fetchJson(`${CHIMBOTAMU_BASE}/api/content/videos`).catch(err => { console.warn('Videos err:', err.message); return []; }),
            fetchJson(`${CHIMBOTAMU_BASE}/api/content/movies`).catch(err => { console.warn('Movies err:', err.message); return []; }),
            fetchJson(`${CHIMBOTAMU_BASE}/api/content/series`).catch(err => { console.warn('Series err:', err.message); return []; })
        ]);

        console.log(`✅ ChimboTamu Imepatikana: ${rawVideos.length} videos, ${rawMovies.length} movies, ${rawSeries.length} series.`);

        const converted = [];

        // Convert Videos
        rawVideos.forEach((v, index) => {
            const guid = extractGuid(v.downloadUrl || v.embedCode || v.videoUrl);
            const videoUrl = v.downloadUrl || (guid ? `https://vz-6aac71b9-360.b-cdn.net/${guid}/play_480p.mp4` : '');
            let thumb = v.thumbnailUrl || (guid ? `https://vz-6aac71b9-360.b-cdn.net/${guid}/thumbnail.jpg` : '');
            if (!thumb) thumb = 'https://images.unsplash.com/photo-1536440136628-849c177e76a1?w=800&fit=crop';

            let category = 'bongo';
            const catLower = (v.category || '').toLowerCase();
            if (catLower.includes('connection')) category = 'connection';
            else if (catLower.includes('bongo')) category = 'bongo';
            else if (catLower.includes('film') || catLower.includes('movi')) category = 'filamu';
            else if (catLower.includes('music') || catLower.includes('muzik')) category = 'muziki';

            converted.push({
                id: 'chimbotamu-v-' + v.id,
                originId: v.id,
                source: 'chimbiotamu.com',
                title: v.title || 'Video Tamu',
                category: category,
                categoryName: v.category || 'Bongo Videos',
                duration: formatDuration(v.duration),
                views: formatViews(v.views),
                viewsCount: parseInt(v.views, 10) || (50000 - index * 800),
                timeAgo: formatTimeAgo(v.uploadDate),
                creator: v.channel || "ChimboTamu",
                creatorAvatar: v.channelAvatarUrl || "https://SwahiliPlay.b-cdn.net/chimbotamu.png",
                subscribers: "85.4K Wafuatiliaji",
                thumb: thumb,
                videoUrl: videoUrl,
                downloadUrl: v.downloadUrl || videoUrl,
                embedCode: v.embedCode || '',
                description: v.description || v.title,
                tags: v.tags && v.tags.length ? v.tags.map(t => `#${t.replace(/\s+/g, '')}`) : ['#ChimboTamu', '#WakubwaTz'],
                isTrending: index < 8,
                quality: "720p HD",
                likes: (v.likes && v.likes !== "0") ? v.likes : `${Math.floor(Math.random() * 8 + 2)}.${Math.floor(Math.random() * 9)}K`
            });
        });

        // Convert Movies
        rawMovies.forEach((m, index) => {
            const guid = extractGuid(m.downloadUrl || m.embedCode);
            const videoUrl = m.downloadUrl || (guid ? `https://vz-6aac71b9-360.b-cdn.net/${guid}/play_360p.mp4` : '');
            let thumb = m.backdropUrl || m.posterUrl || (guid ? `https://vz-6aac71b9-360.b-cdn.net/${guid}/thumbnail.jpg` : '');
            if (!thumb) thumb = 'https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?w=800&fit=crop';

            converted.push({
                id: 'chimbotamu-m-' + m.id,
                originId: m.id,
                source: 'chimbiotamu.com',
                title: m.title || 'Filamu Kamili',
                category: 'filamu',
                categoryName: 'Filamu Kamili',
                duration: formatDuration(m.duration || "1h 30m"),
                views: `${Math.floor(Math.random() * 60 + 20)}.${Math.floor(Math.random() * 9)}K`,
                viewsCount: 75000 - index * 1000,
                timeAgo: m.year ? `${m.year}` : "2026",
                creator: "ChimboTamu Filamu",
                creatorAvatar: "https://SwahiliPlay.b-cdn.net/chimbotamu.png",
                subscribers: "120K Wafuatiliaji",
                thumb: thumb,
                posterUrl: m.posterUrl || thumb,
                videoUrl: videoUrl,
                downloadUrl: m.downloadUrl || videoUrl,
                embedCode: m.embedCode || '',
                description: m.description || m.title,
                tags: m.genres && m.genres.length ? m.genres.map(g => `#${g}`) : ['#Filamu', '#ChimboTamu'],
                isTrending: index < 4,
                quality: "1080p Full HD",
                likes: `${Math.floor(Math.random() * 12 + 4)}.${Math.floor(Math.random() * 9)}K`
            });
        });

        fs.writeFileSync(VIDEOS_FILE, JSON.stringify(converted, null, 2), 'utf-8');
        console.log(`🎉 Ufanisi! Jumla ya video na sinema ${converted.length} zimehifadhiwa katika ${VIDEOS_FILE}`);
        return converted;
    } catch (err) {
        console.error('❌ Hitilafu wakati wa kusawazisha:', err.message);
    }
}

if (require.main === module) {
    syncAll();
}

module.exports = { syncAll };
