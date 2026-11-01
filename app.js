/* =========================================================
   WAKUBWATZ - VIDEO STREAMING & DOWNLOAD JAVASCRIPT ENGINE
   ========================================================= */

// --- INITIAL VIDEO DATABASE (Clean / Empty - Ready for Custom Feed) ---
const DEFAULT_VIDEOS = [
  {
    "id": "chimbotamu-v-41",
    "originId": "41",
    "source": "chimbiotamu.com",
    "title": "Black Beauty Akamiwa",
    "category": "bongo",
    "categoryName": "Bongo Videos",
    "duration": "03:02",
    "views": "25.7K",
    "viewsCount": 50000,
    "timeAgo": "Miezi 5 iliyopita",
    "creator": "Bongo Videos",
    "creatorAvatar": "https://SwahiliPlay.b-cdn.net/chimbotamu.png",
    "subscribers": "85.4K Wafuatiliaji",
    "thumb": "https://vz-6aac71b9-360.b-cdn.net/ab41d6bb-b822-4f29-9a6c-6deb5fe93bb2/thumbnail.jpg",
    "videoUrl": "https://vz-6aac71b9-360.b-cdn.net/ab41d6bb-b822-4f29-9a6c-6deb5fe93bb2/play_480p.mp4",
    "downloadUrl": "https://vz-6aac71b9-360.b-cdn.net/ab41d6bb-b822-4f29-9a6c-6deb5fe93bb2/play_480p.mp4",
    "embedCode": "<div style=\"position:relative;padding-top:56.25%;\">\n    <iframe src=\"https://vz-6aac71b9-360.b-cdn.net/ab41d6bb-b822-4f29-9a6c-6deb5fe93bb2/play_480p.mp4?autoplay=true&loop=false&muted=false&preload=true&responsive=true\" loading=\"lazy\" style=\"border:0;position:absolute;top:0;height:100%;width:100%;\" allow=\"accelerometer;gyroscope;autoplay;encrypted-media;picture-in-picture;\" allowfullscreen=\"true\" id=\"v\"></iframe>\n    <a href=\"https://utamukitandani.site\" target=\"_blank\" id=\"o\" style=\"position:absolute;top:0;left:0;width:100%;height:100%;z-index:10;display:block;cursor:pointer;\"></a>\n</div>\n<script>\ndocument.getElementById('o').addEventListener('click',function(){this.style.display='none';});\nsetTimeout(function(){var o=document.getElementById('o');if(o)o.style.display='none';},5000);\n</script>",
    "description": "Black Beauty Akamiwa",
    "tags": [
      "#ChimboTamu",
      "#WakubwaTz"
    ],
    "isTrending": true,
    "quality": "720p HD",
    "likes": "2.6K"
  },
  {
    "id": "chimbotamu-v-40",
    "originId": "40",
    "source": "chimbiotamu.com",
    "title": "Wawili Wawili - Foursome",
    "category": "bongo",
    "categoryName": "Bongo Videos",
    "duration": "19:20",
    "views": "35.2K",
    "viewsCount": 49200,
    "timeAgo": "Miezi 5 iliyopita",
    "creator": "Bongo Videos",
    "creatorAvatar": "https://SwahiliPlay.b-cdn.net/chimbotamu.png",
    "subscribers": "85.4K Wafuatiliaji",
    "thumb": "https://vz-6aac71b9-360.b-cdn.net/9072c2af-1827-4cec-a2d9-2a06dcf0dd00/thumbnail.jpg",
    "videoUrl": "https://vz-6aac71b9-360.b-cdn.net/9072c2af-1827-4cec-a2d9-2a06dcf0dd00/play_240p.mp4",
    "downloadUrl": "https://vz-6aac71b9-360.b-cdn.net/9072c2af-1827-4cec-a2d9-2a06dcf0dd00/play_240p.mp4",
    "embedCode": "<div style=\"position:relative;padding-top:56.25%;\">\n    <iframe src=\"https://vz-6aac71b9-360.b-cdn.net/9072c2af-1827-4cec-a2d9-2a06dcf0dd00/play_240p.mp4?autoplay=true&loop=false&muted=false&preload=true&responsive=true\" loading=\"lazy\" style=\"border:0;position:absolute;top:0;height:100%;width:100%;\" allow=\"accelerometer;gyroscope;autoplay;encrypted-media;picture-in-picture;\" allowfullscreen=\"true\" id=\"v\"></iframe>\n    <a href=\"https://omg10.com/4/11730815\" target=\"_blank\" id=\"o\" style=\"position:absolute;top:0;left:0;width:100%;height:100%;z-index:10;display:block;cursor:pointer;\"></a>\n</div>\n<script>\ndocument.getElementById('o').addEventListener('click',function(){this.style.display='none';});\nsetTimeout(function(){var o=document.getElementById('o');if(o)o.style.display='none';},5000);\n</script>",
    "description": "Wanaume wawili na wanawake waili, foursome",
    "tags": [
      "#threesome"
    ],
    "isTrending": true,
    "quality": "720p HD",
    "likes": "4.6K"
  },
  {
    "id": "chimbotamu-v-39",
    "originId": "39",
    "source": "chimbiotamu.com",
    "title": "Mtoto anaikalia ipasavyo",
    "category": "bongo",
    "categoryName": "Bongo Videos",
    "duration": "02:52",
    "views": "22.0K",
    "viewsCount": 48400,
    "timeAgo": "Miezi 5 iliyopita",
    "creator": "Bongo Videos",
    "creatorAvatar": "https://SwahiliPlay.b-cdn.net/chimbotamu.png",
    "subscribers": "85.4K Wafuatiliaji",
    "thumb": "https://vz-6aac71b9-360.b-cdn.net/07fea723-bbd4-4686-a324-eefc418fce53/thumbnail.jpg",
    "videoUrl": "https://vz-6aac71b9-360.b-cdn.net/07fea723-bbd4-4686-a324-eefc418fce53/play_720p.mp4",
    "downloadUrl": "https://vz-6aac71b9-360.b-cdn.net/07fea723-bbd4-4686-a324-eefc418fce53/play_720p.mp4",
    "embedCode": "<div style=\"position:relative;padding-top:56.25%;\">\n    <iframe src=\"https://vz-6aac71b9-360.b-cdn.net/07fea723-bbd4-4686-a324-eefc418fce53/play_720p.mp4?autoplay=true&loop=false&muted=false&preload=true&responsive=true\" loading=\"lazy\" style=\"border:0;position:absolute;top:0;height:100%;width:100%;\" allow=\"accelerometer;gyroscope;autoplay;encrypted-media;picture-in-picture;\" allowfullscreen=\"true\" id=\"v\"></iframe>\n    <a href=\"https://utamukitandani.site\" target=\"_blank\" id=\"o\" style=\"position:absolute;top:0;left:0;width:100%;height:100%;z-index:10;display:block;cursor:pointer;\"></a>\n</div>\n<script>\ndocument.getElementById('o').addEventListener('click',function(){this.style.display='none';});\nsetTimeout(function(){var o=document.getElementById('o');if(o)o.style.display='none';},5000);\n</script>",
    "description": "Mtoto anaikalia ipasavyo",
    "tags": [
      "#ChimboTamu",
      "#WakubwaTz"
    ],
    "isTrending": true,
    "quality": "720p HD",
    "likes": "9.7K"
  },
  {
    "id": "chimbotamu-v-38",
    "originId": "38",
    "source": "chimbiotamu.com",
    "title": "Mtoto kapakwa mafuta mwili mzima",
    "category": "bongo",
    "categoryName": "Bongo Videos",
    "duration": "05:42",
    "views": "56.6K",
    "viewsCount": 47600,
    "timeAgo": "Miezi 5 iliyopita",
    "creator": "Bongo Videos",
    "creatorAvatar": "https://SwahiliPlay.b-cdn.net/chimbotamu.png",
    "subscribers": "85.4K Wafuatiliaji",
    "thumb": "https://vz-6aac71b9-360.b-cdn.net/b7820772-cc0a-4fa9-ab76-0348eb132ca3/thumbnail.jpg",
    "videoUrl": "https://vz-6aac71b9-360.b-cdn.net/b7820772-cc0a-4fa9-ab76-0348eb132ca3/play_480p.mp4",
    "downloadUrl": "https://vz-6aac71b9-360.b-cdn.net/b7820772-cc0a-4fa9-ab76-0348eb132ca3/play_480p.mp4",
    "embedCode": "<div style=\"position:relative;padding-top:56.25%;\">\n    <iframe src=\"https://vz-6aac71b9-360.b-cdn.net/b7820772-cc0a-4fa9-ab76-0348eb132ca3/play_480p.mp4?autoplay=true&loop=false&muted=false&preload=true&responsive=true\" loading=\"lazy\" style=\"border:0;position:absolute;top:0;height:100%;width:100%;\" allow=\"accelerometer;gyroscope;autoplay;encrypted-media;picture-in-picture;\" allowfullscreen=\"true\" id=\"v\"></iframe>\n    <a href=\"https://omg10.com/4/11730815\" target=\"_blank\" id=\"o\" style=\"position:absolute;top:0;left:0;width:100%;height:100%;z-index:10;display:block;cursor:pointer;\"></a>\n</div>\n<script>\ndocument.getElementById('o').addEventListener('click',function(){this.style.display='none';});\nsetTimeout(function(){var o=document.getElementById('o');if(o)o.style.display='none';},5000);\n</script>",
    "description": "Mtoto kapakwa mafuta mwili mzima",
    "tags": [
      "#ChimboTamu",
      "#WakubwaTz"
    ],
    "isTrending": true,
    "quality": "720p HD",
    "likes": "9.4K"
  },
  {
    "id": "chimbotamu-v-37",
    "originId": "37",
    "source": "chimbiotamu.com",
    "title": "Udsm Tobo Kubwa connection",
    "category": "connection",
    "categoryName": "Connection",
    "duration": "01:30",
    "views": "13.4K",
    "viewsCount": 46800,
    "timeAgo": "Miezi 5 iliyopita",
    "creator": "Connection",
    "creatorAvatar": "https://swahiliplay.com/wp-content/uploads/2026/03/chimbotamu.png",
    "subscribers": "85.4K Wafuatiliaji",
    "thumb": "https://vz-6aac71b9-360.b-cdn.net/0f3e4ef1-baa9-48ac-97e4-af10dfd3bfd4/thumbnail.jpg",
    "videoUrl": "https://vz-6aac71b9-360.b-cdn.net/0f3e4ef1-baa9-48ac-97e4-af10dfd3bfd4/play_240p.mp4",
    "downloadUrl": "https://vz-6aac71b9-360.b-cdn.net/0f3e4ef1-baa9-48ac-97e4-af10dfd3bfd4/play_240p.mp4",
    "embedCode": "<div style=\"position:relative;padding-top:56.25%;\">\n    <iframe src=\"https://vz-6aac71b9-360.b-cdn.net/0f3e4ef1-baa9-48ac-97e4-af10dfd3bfd4/play_240p.mp4?autoplay=true&loop=false&muted=false&preload=true&responsive=true\" loading=\"lazy\" style=\"border:0;position:absolute;top:0;height:100%;width:100%;\" allow=\"accelerometer;gyroscope;autoplay;encrypted-media;picture-in-picture;\" allowfullscreen=\"true\" id=\"v\"></iframe>\n    <a href=\"https://omg10.com/4/11730815\" target=\"_blank\" id=\"o\" style=\"position:absolute;top:0;left:0;width:100%;height:100%;z-index:10;display:block;cursor:pointer;\"></a>\n</div>\n<script>\ndocument.getElementById('o').addEventListener('click',function(){this.style.display='none';});\nsetTimeout(function(){var o=document.getElementById('o');if(o)o.style.display='none';},5000);\n</script>",
    "description": "connection ya mwanachuo wa udsm mwenye tobo kubwa.",
    "tags": [
      "#udsm",
      "#pango",
      "#tobo"
    ],
    "isTrending": true,
    "quality": "720p HD",
    "likes": "2.8K"
  },
  {
    "id": "chimbotamu-v-36",
    "originId": "36",
    "source": "chimbiotamu.com",
    "title": "Dogo Paten Connection",
    "category": "connection",
    "categoryName": "Connection",
    "duration": "00:19",
    "views": "44.1K",
    "viewsCount": 46000,
    "timeAgo": "Miezi 5 iliyopita",
    "creator": "Connection",
    "creatorAvatar": "https://swahiliplay.com/wp-content/uploads/2026/03/chimbotamu.png",
    "subscribers": "85.4K Wafuatiliaji",
    "thumb": "https://vz-6aac71b9-360.b-cdn.net/74e76a96-97f8-45bb-b17a-57deb16ff31c/thumbnail.jpg",
    "videoUrl": "https://vz-6aac71b9-360.b-cdn.net/74e76a96-97f8-45bb-b17a-57deb16ff31c/play_480p.mp4",
    "downloadUrl": "https://vz-6aac71b9-360.b-cdn.net/74e76a96-97f8-45bb-b17a-57deb16ff31c/play_480p.mp4",
    "embedCode": "<div style=\"position:relative;padding-top:56.25%;\">\n    <iframe src=\"https://vz-6aac71b9-360.b-cdn.net/74e76a96-97f8-45bb-b17a-57deb16ff31c/play_480p.mp4?autoplay=true&loop=false&muted=false&preload=true&responsive=true\" loading=\"lazy\" style=\"border:0;position:absolute;top:0;height:100%;width:100%;\" allow=\"accelerometer;gyroscope;autoplay;encrypted-media;picture-in-picture;\" allowfullscreen=\"true\" id=\"v\"></iframe>\n    <a href=\"https://omg10.com/4/11730815\" target=\"_blank\" id=\"o\" style=\"position:absolute;top:0;left:0;width:100%;height:100%;z-index:10;display:block;cursor:pointer;\"></a>\n</div>\n<script>\ndocument.getElementById('o').addEventListener('click',function(){this.style.display='none';});\nsetTimeout(function(){var o=document.getElementById('o');if(o)o.style.display='none';},5000);\n</script>",
    "description": "coonnection ya dogo paten video call na mtu wake",
    "tags": [
      "#connection",
      "#dogopaten"
    ],
    "isTrending": true,
    "quality": "720p HD",
    "likes": "5.0K"
  },
  {
    "id": "chimbotamu-v-35",
    "originId": "35",
    "source": "chimbiotamu.com",
    "title": "Binti was South Africa",
    "category": "connection",
    "categoryName": "Connection",
    "duration": "01:56",
    "views": "26.4K",
    "viewsCount": 45200,
    "timeAgo": "Miezi 7 iliyopita",
    "creator": "Connection",
    "creatorAvatar": "https://SwahiliPlay.b-cdn.net/chimbotamu.png",
    "subscribers": "85.4K Wafuatiliaji",
    "thumb": "https://vz-6aac71b9-360.b-cdn.net/ca685bac-520b-49ab-a9c8-e9aaf056a300/thumbnail.jpg",
    "videoUrl": "https://vz-6aac71b9-360.b-cdn.net/ca685bac-520b-49ab-a9c8-e9aaf056a300/play_360p.mp4",
    "downloadUrl": "https://vz-6aac71b9-360.b-cdn.net/ca685bac-520b-49ab-a9c8-e9aaf056a300/play_360p.mp4",
    "embedCode": "<div style=\"position:relative;padding-top:56.25%;\">\n    <iframe src=\"https://vz-6aac71b9-360.b-cdn.net/ca685bac-520b-49ab-a9c8-e9aaf056a300/play_360p.mp4?autoplay=true&loop=false&muted=false&preload=true&responsive=true\" loading=\"lazy\" style=\"border:0;position:absolute;top:0;height:100%;width:100%;\" allow=\"accelerometer;gyroscope;autoplay;encrypted-media;picture-in-picture;\" allowfullscreen=\"true\" id=\"v\"></iframe>\n    <a href=\"https://utamukitandani.site\" target=\"_blank\" id=\"o\" style=\"position:absolute;top:0;left:0;width:100%;height:100%;z-index:10;display:block;cursor:pointer;\"></a>\n</div>\n<script>\ndocument.getElementById('o').addEventListener('click',function(){this.style.display='none';});\nsetTimeout(function(){var o=document.getElementById('o');if(o)o.style.display='none';},5000);\n</script>",
    "description": "Connection ya msichana wa south africa alie ingiliwa na kurekodiwa bila ridhaa yake.",
    "tags": [
      "#ChimboTamu",
      "#WakubwaTz"
    ],
    "isTrending": true,
    "quality": "720p HD",
    "likes": "9.6K"
  },
  {
    "id": "chimbotamu-v-34",
    "originId": "34",
    "source": "chimbiotamu.com",
    "title": "Mama Amina",
    "category": "connection",
    "categoryName": "Connection",
    "duration": "00:32",
    "views": "17.8K",
    "viewsCount": 44400,
    "timeAgo": "Miezi 7 iliyopita",
    "creator": "Connection",
    "creatorAvatar": "https://SwahiliPlay.b-cdn.net/chimbotamu.png",
    "subscribers": "85.4K Wafuatiliaji",
    "thumb": "https://vz-6aac71b9-360.b-cdn.net/6c5b6ca7-d758-4dd5-b641-5cc4a5b6a9a9/thumbnail.jpg",
    "videoUrl": "https://vz-6aac71b9-360.b-cdn.net/6c5b6ca7-d758-4dd5-b641-5cc4a5b6a9a9/play_360p.mp4",
    "downloadUrl": "https://vz-6aac71b9-360.b-cdn.net/6c5b6ca7-d758-4dd5-b641-5cc4a5b6a9a9/play_360p.mp4",
    "embedCode": "<div style=\"position:relative;padding-top:56.25%;\">\n    <iframe src=\"https://vz-6aac71b9-360.b-cdn.net/6c5b6ca7-d758-4dd5-b641-5cc4a5b6a9a9/play_360p.mp4?autoplay=true&loop=false&muted=false&preload=true&responsive=true\" loading=\"lazy\" style=\"border:0;position:absolute;top:0;height:100%;width:100%;\" allow=\"accelerometer;gyroscope;autoplay;encrypted-media;picture-in-picture;\" allowfullscreen=\"true\" id=\"v\"></iframe>\n    <a href=\"https://omg10.com/4/11730815\" target=\"_blank\" id=\"o\" style=\"position:absolute;top:0;left:0;width:100%;height:100%;z-index:10;display:block;cursor:pointer;\"></a>\n</div>\n<script>\ndocument.getElementById('o').addEventListener('click',function(){this.style.display='none';});\nsetTimeout(function(){var o=document.getElementById('o');if(o)o.style.display='none';},5000);\n</script>",
    "description": "connection ya mama amina",
    "tags": [
      "#ChimboTamu",
      "#WakubwaTz"
    ],
    "isTrending": true,
    "quality": "720p HD",
    "likes": "9.8K"
  },
  {
    "id": "chimbotamu-v-33",
    "originId": "33",
    "source": "chimbiotamu.com",
    "title": "Mwanachuo wa NIT",
    "category": "connection",
    "categoryName": "Connection",
    "duration": "00:54",
    "views": "28.5K",
    "viewsCount": 43600,
    "timeAgo": "Miezi 7 iliyopita",
    "creator": "Connection",
    "creatorAvatar": "https://SwahiliPlay.b-cdn.net/chimbotamu.png",
    "subscribers": "85.4K Wafuatiliaji",
    "thumb": "https://vz-6aac71b9-360.b-cdn.net/e163e488-ea76-41c3-9eea-151bd279f700/thumbnail.jpg",
    "videoUrl": "https://vz-6aac71b9-360.b-cdn.net/e163e488-ea76-41c3-9eea-151bd279f700/play_360p.mp4",
    "downloadUrl": "https://vz-6aac71b9-360.b-cdn.net/e163e488-ea76-41c3-9eea-151bd279f700/play_360p.mp4",
    "embedCode": "<div style=\"position:relative;padding-top:56.25%;\">\n    <iframe src=\"https://vz-6aac71b9-360.b-cdn.net/e163e488-ea76-41c3-9eea-151bd279f700/play_360p.mp4?autoplay=true&loop=false&muted=false&preload=true&responsive=true\" loading=\"lazy\" style=\"border:0;position:absolute;top:0;height:100%;width:100%;\" allow=\"accelerometer;gyroscope;autoplay;encrypted-media;picture-in-picture;\" allowfullscreen=\"true\" id=\"v\"></iframe>\n    <a href=\"https://omg10.com/4/11730815\" target=\"_blank\" id=\"o\" style=\"position:absolute;top:0;left:0;width:100%;height:100%;z-index:10;display:block;cursor:pointer;\"></a>\n</div>\n<script>\ndocument.getElementById('o').addEventListener('click',function(){this.style.display='none';});\nsetTimeout(function(){var o=document.getElementById('o');if(o)o.style.display='none';},5000);\n</script>",
    "description": "connection ya Mwanachuo wa NIT",
    "tags": [
      "#ChimboTamu",
      "#WakubwaTz"
    ],
    "isTrending": false,
    "quality": "720p HD",
    "likes": "5.4K"
  },
  {
    "id": "chimbotamu-v-32",
    "originId": "32",
    "source": "chimbiotamu.com",
    "title": "Mwanachuo wa IFM babe nataka mtoto",
    "category": "connection",
    "categoryName": "Connection",
    "duration": "01:34",
    "views": "35.1K",
    "viewsCount": 42800,
    "timeAgo": "Miezi 7 iliyopita",
    "creator": "Connection",
    "creatorAvatar": "https://SwahiliPlay.b-cdn.net/chimbotamu.png",
    "subscribers": "85.4K Wafuatiliaji",
    "thumb": "https://vz-6aac71b9-360.b-cdn.net/413f620a-552e-4792-b694-8906653addd3/thumbnail.jpg",
    "videoUrl": "https://vz-6aac71b9-360.b-cdn.net/413f620a-552e-4792-b694-8906653addd3/play_360p.mp4",
    "downloadUrl": "https://vz-6aac71b9-360.b-cdn.net/413f620a-552e-4792-b694-8906653addd3/play_360p.mp4",
    "embedCode": "<div style=\"position:relative;padding-top:56.25%;\">\n    <iframe src=\"https://vz-6aac71b9-360.b-cdn.net/413f620a-552e-4792-b694-8906653addd3/play_360p.mp4?autoplay=true&loop=false&muted=false&preload=true&responsive=true\" loading=\"lazy\" style=\"border:0;position:absolute;top:0;height:100%;width:100%;\" allow=\"accelerometer;gyroscope;autoplay;encrypted-media;picture-in-picture;\" allowfullscreen=\"true\" id=\"v\"></iframe>\n    <a href=\"https://omg10.com/4/11730815\" target=\"_blank\" id=\"o\" style=\"position:absolute;top:0;left:0;width:100%;height:100%;z-index:10;display:block;cursor:pointer;\"></a>\n</div>\n<script>\ndocument.getElementById('o').addEventListener('click',function(){this.style.display='none';});\nsetTimeout(function(){var o=document.getElementById('o');if(o)o.style.display='none';},5000);\n</script>",
    "description": "But babe you said you were sleeping",
    "tags": [
      "#ChimboTamu",
      "#WakubwaTz"
    ],
    "isTrending": false,
    "quality": "720p HD",
    "likes": "7.3K"
  },
  {
    "id": "chimbotamu-v-31",
    "originId": "31",
    "source": "chimbiotamu.com",
    "title": "Mtoto wa Mchungaji 02",
    "category": "connection",
    "categoryName": "Connection",
    "duration": "00:59",
    "views": "48.7K",
    "viewsCount": 42000,
    "timeAgo": "Miezi 7 iliyopita",
    "creator": "Connection",
    "creatorAvatar": "https://SwahiliPlay.b-cdn.net/chimbotamu.png",
    "subscribers": "85.4K Wafuatiliaji",
    "thumb": "https://vz-6aac71b9-360.b-cdn.net/7bb88edb-a0c1-40bc-b4b8-6b3b2d58058f/thumbnail.jpg",
    "videoUrl": "https://vz-6aac71b9-360.b-cdn.net/7bb88edb-a0c1-40bc-b4b8-6b3b2d58058f/play_360p.mp4",
    "downloadUrl": "https://vz-6aac71b9-360.b-cdn.net/7bb88edb-a0c1-40bc-b4b8-6b3b2d58058f/play_360p.mp4",
    "embedCode": "<div style=\"position:relative;padding-top:56.25%;\">\n    <iframe src=\"https://vz-6aac71b9-360.b-cdn.net/7bb88edb-a0c1-40bc-b4b8-6b3b2d58058f/play_360p.mp4?autoplay=true&loop=false&muted=false&preload=true&responsive=true\" loading=\"lazy\" style=\"border:0;position:absolute;top:0;height:100%;width:100%;\" allow=\"accelerometer;gyroscope;autoplay;encrypted-media;picture-in-picture;\" allowfullscreen=\"true\" id=\"v\"></iframe>\n    <a href=\"https://omg10.com/4/11730815\" target=\"_blank\" id=\"o\" style=\"position:absolute;top:0;left:0;width:100%;height:100%;z-index:10;display:block;cursor:pointer;\"></a>\n</div>\n<script>\ndocument.getElementById('o').addEventListener('click',function(){this.style.display='none';});\nsetTimeout(function(){var o=document.getElementById('o');if(o)o.style.display='none';},5000);\n</script>",
    "description": "connection ya mtoto wa mchungaji",
    "tags": [
      "#ChimboTamu",
      "#WakubwaTz"
    ],
    "isTrending": false,
    "quality": "720p HD",
    "likes": "4.2K"
  },
  {
    "id": "chimbotamu-v-30",
    "originId": "30",
    "source": "chimbiotamu.com",
    "title": "Mtoto wa Mchungaji 01",
    "category": "connection",
    "categoryName": "Connection",
    "duration": "00:53",
    "views": "32.1K",
    "viewsCount": 41200,
    "timeAgo": "Miezi 7 iliyopita",
    "creator": "Connection",
    "creatorAvatar": "https://SwahiliPlay.b-cdn.net/chimbotamu.png",
    "subscribers": "85.4K Wafuatiliaji",
    "thumb": "https://vz-6aac71b9-360.b-cdn.net/f179db45-13c0-4a6a-8776-8c616f00727c/thumbnail.jpg",
    "videoUrl": "https://vz-6aac71b9-360.b-cdn.net/f179db45-13c0-4a6a-8776-8c616f00727c/play_360p.mp4",
    "downloadUrl": "https://vz-6aac71b9-360.b-cdn.net/f179db45-13c0-4a6a-8776-8c616f00727c/play_360p.mp4",
    "embedCode": "<div style=\"position:relative;padding-top:56.25%;\"><iframe src=\"https://iframe.mediadelivery.net/embed/285538/f179db45-13c0-4a6a-8776-8c616f00727c?autoplay=false&loop=false&muted=false&preload=true&responsive=true\" loading=\"lazy\" style=\"border:0;position:absolute;top:0;height:100%;width:100%;\" allow=\"accelerometer;gyroscope;autoplay;encrypted-media;picture-in-picture;\" allowfullscreen=\"true\"></iframe></div>",
    "description": "connection ya mtoto wa mchungaji",
    "tags": [
      "#ChimboTamu",
      "#WakubwaTz"
    ],
    "isTrending": false,
    "quality": "720p HD",
    "likes": "6.4K"
  },
  {
    "id": "chimbotamu-v-29",
    "originId": "29",
    "source": "chimbiotamu.com",
    "title": "Wadada walio Sagana 02",
    "category": "connection",
    "categoryName": "Connection",
    "duration": "01:01",
    "views": "28.2K",
    "viewsCount": 40400,
    "timeAgo": "Miezi 7 iliyopita",
    "creator": "Connection",
    "creatorAvatar": "https://SwahiliPlay.b-cdn.net/chimbotamu.png",
    "subscribers": "85.4K Wafuatiliaji",
    "thumb": "https://vz-6aac71b9-360.b-cdn.net/7d55ab74-19e9-45cf-a7ee-d8f68f12a540/thumbnail.jpg",
    "videoUrl": "https://vz-6aac71b9-360.b-cdn.net/7d55ab74-19e9-45cf-a7ee-d8f68f12a540/play_360p.mp4",
    "downloadUrl": "https://vz-6aac71b9-360.b-cdn.net/7d55ab74-19e9-45cf-a7ee-d8f68f12a540/play_360p.mp4",
    "embedCode": "<iframe src=\"https://iframe.mediadelivery.net/embed/285538/7d55ab74-19e9-45cf-a7ee-d8f68f12a540?autoplay=false&loop=false&muted=false&preload=true&responsive=true\" loading=\"lazy\" style=\"border:0;position:absolute;inset:0;height:100%;width:100%;\" allow=\"accelerometer;gyroscope;autoplay;encrypted-media;picture-in-picture;fullscreen\" allowfullscreen></iframe>",
    "description": "wadada wakisagana kwa dildo",
    "tags": [
      "#ChimboTamu",
      "#WakubwaTz"
    ],
    "isTrending": false,
    "quality": "720p HD",
    "likes": "4.3K"
  },
  {
    "id": "chimbotamu-v-28",
    "originId": "28",
    "source": "chimbiotamu.com",
    "title": "Wadada walio Sagana 01",
    "category": "connection",
    "categoryName": "Connection",
    "duration": "01:06",
    "views": "32.5K",
    "viewsCount": 39600,
    "timeAgo": "Miezi 7 iliyopita",
    "creator": "Connection",
    "creatorAvatar": "https://SwahiliPlay.b-cdn.net/chimbotamu.png",
    "subscribers": "85.4K Wafuatiliaji",
    "thumb": "https://vz-6aac71b9-360.b-cdn.net/6664b478-ff89-4bb5-80e6-855838eab3b1/thumbnail.jpg",
    "videoUrl": "https://vz-6aac71b9-360.b-cdn.net/6664b478-ff89-4bb5-80e6-855838eab3b1/play_360p.mp4",
    "downloadUrl": "https://vz-6aac71b9-360.b-cdn.net/6664b478-ff89-4bb5-80e6-855838eab3b1/play_360p.mp4",
    "embedCode": "<div style=\"position:relative;padding-top:56.25%;\">\n    <iframe src=\"https://vz-6aac71b9-360.b-cdn.net/6664b478-ff89-4bb5-80e6-855838eab3b1/play_360p.mp4?autoplay=true&loop=false&muted=false&preload=true&responsive=true\" loading=\"lazy\" style=\"border:0;position:absolute;top:0;height:100%;width:100%;\" allow=\"accelerometer;gyroscope;autoplay;encrypted-media;picture-in-picture;\" allowfullscreen=\"true\" id=\"v\"></iframe>\n    <a href=\"https://omg10.com/4/11730815\" target=\"_blank\" id=\"o\" style=\"position:absolute;top:0;left:0;width:100%;height:100%;z-index:10;display:block;cursor:pointer;\"></a>\n</div>\n<script>\ndocument.getElementById('o').addEventListener('click',function(){this.style.display='none';});\nsetTimeout(function(){var o=document.getElementById('o');if(o)o.style.display='none';},5000);\n</script>",
    "description": "wadada wakisagana kwa dildo",
    "tags": [
      "#ChimboTamu",
      "#WakubwaTz"
    ],
    "isTrending": false,
    "quality": "720p HD",
    "likes": "6.0K"
  },
  {
    "id": "chimbotamu-v-27",
    "originId": "27",
    "source": "chimbiotamu.com",
    "title": "Dogo alie mla mwalimu wake",
    "category": "connection",
    "categoryName": "Connection",
    "duration": "01:02",
    "views": "54.5K",
    "viewsCount": 38800,
    "timeAgo": "Miezi 7 iliyopita",
    "creator": "Connection",
    "creatorAvatar": "https://SwahiliPlay.b-cdn.net/chimbotamu.png",
    "subscribers": "85.4K Wafuatiliaji",
    "thumb": "https://vz-6aac71b9-360.b-cdn.net/f7543df4-c5c5-4229-b767-be0d641f3452/thumbnail_a7557dfd.jpg",
    "videoUrl": "https://vz-6aac71b9-360.b-cdn.net/f7543df4-c5c5-4229-b767-be0d641f3452/play_480p.mp4",
    "downloadUrl": "https://vz-6aac71b9-360.b-cdn.net/f7543df4-c5c5-4229-b767-be0d641f3452/play_480p.mp4",
    "embedCode": "<div style=\"position:relative;padding-top:56.25%;\">\n    <iframe src=\"https://vz-6aac71b9-360.b-cdn.net/f7543df4-c5c5-4229-b767-be0d641f3452/play_480p.mp4?autoplay=true&loop=false&muted=false&preload=true&responsive=true\" loading=\"lazy\" style=\"border:0;position:absolute;top:0;height:100%;width:100%;\" allow=\"accelerometer;gyroscope;autoplay;encrypted-media;picture-in-picture;\" allowfullscreen=\"true\" id=\"v\"></iframe>\n    <a href=\"https://omg10.com/4/11730815\" target=\"_blank\" id=\"o\" style=\"position:absolute;top:0;left:0;width:100%;height:100%;z-index:10;display:block;cursor:pointer;\"></a>\n</div>\n<script>\ndocument.getElementById('o').addEventListener('click',function(){this.style.display='none';});\nsetTimeout(function(){var o=document.getElementById('o');if(o)o.style.display='none';},5000);\n</script>",
    "description": "Dogo wa miaka 19 aliyemla mwalimu wake wa miaka 33",
    "tags": [
      "#ChimboTamu",
      "#WakubwaTz"
    ],
    "isTrending": false,
    "quality": "720p HD",
    "likes": "7.2K"
  },
  {
    "id": "chimbotamu-v-26",
    "originId": "26",
    "source": "chimbiotamu.com",
    "title": "Anko T",
    "category": "connection",
    "categoryName": "Connection",
    "duration": "00:09",
    "views": "29.8K",
    "viewsCount": 38000,
    "timeAgo": "Miezi 7 iliyopita",
    "creator": "Connection",
    "creatorAvatar": "https://SwahiliPlay.b-cdn.net/chimbotamu.png",
    "subscribers": "85.4K Wafuatiliaji",
    "thumb": "https://vz-6aac71b9-360.b-cdn.net/7eeff872-8763-4fdd-8e46-029598d6cf8a/thumbnail.jpg",
    "videoUrl": "https://vz-6aac71b9-360.b-cdn.net/7eeff872-8763-4fdd-8e46-029598d6cf8a/play_360p.mp4",
    "downloadUrl": "https://vz-6aac71b9-360.b-cdn.net/7eeff872-8763-4fdd-8e46-029598d6cf8a/play_360p.mp4",
    "embedCode": "<div style=\"position:relative;padding-top:56.25%;\">\n    <iframe src=\"https://vz-6aac71b9-360.b-cdn.net/7eeff872-8763-4fdd-8e46-029598d6cf8a/play_360p.mp4?autoplay=true&loop=false&muted=false&preload=true&responsive=true\" loading=\"lazy\" style=\"border:0;position:absolute;top:0;height:100%;width:100%;\" allow=\"accelerometer;gyroscope;autoplay;encrypted-media;picture-in-picture;\" allowfullscreen=\"true\" id=\"v\"></iframe>\n    <a href=\"https://omg10.com/4/11730815\" target=\"_blank\" id=\"o\" style=\"position:absolute;top:0;left:0;width:100%;height:100%;z-index:10;display:block;cursor:pointer;\"></a>\n</div>\n<script>\ndocument.getElementById('o').addEventListener('click',function(){this.style.display='none';});\nsetTimeout(function(){var o=document.getElementById('o');if(o)o.style.display='none';},5000);\n</script>",
    "description": "Inayosadikika kua Anko T connection",
    "tags": [
      "#ChimboTamu",
      "#WakubwaTz"
    ],
    "isTrending": false,
    "quality": "720p HD",
    "likes": "6.0K"
  },
  {
    "id": "chimbotamu-v-25",
    "originId": "25",
    "source": "chimbiotamu.com",
    "title": "Bonge la Dada",
    "category": "connection",
    "categoryName": "Connection",
    "duration": "00:54",
    "views": "21.5K",
    "viewsCount": 37200,
    "timeAgo": "Miezi 7 iliyopita",
    "creator": "Connection",
    "creatorAvatar": "https://SwahiliPlay.b-cdn.net/chimbotamu.png",
    "subscribers": "85.4K Wafuatiliaji",
    "thumb": "https://vz-6aac71b9-360.b-cdn.net/07c96ad4-5d59-4d6c-897e-fc0eab81ae20/thumbnail.jpg",
    "videoUrl": "https://vz-6aac71b9-360.b-cdn.net/07c96ad4-5d59-4d6c-897e-fc0eab81ae20/play_720p.mp4",
    "downloadUrl": "https://vz-6aac71b9-360.b-cdn.net/07c96ad4-5d59-4d6c-897e-fc0eab81ae20/play_720p.mp4",
    "embedCode": "<div style=\"position:relative;padding-top:56.25%;\">\n    <iframe src=\"https://vz-6aac71b9-360.b-cdn.net/07c96ad4-5d59-4d6c-897e-fc0eab81ae20/play_720p.mp4?autoplay=true&loop=false&muted=false&preload=true&responsive=true\" loading=\"lazy\" style=\"border:0;position:absolute;top:0;height:100%;width:100%;\" allow=\"accelerometer;gyroscope;autoplay;encrypted-media;picture-in-picture;\" allowfullscreen=\"true\" id=\"v\"></iframe>\n    <a href=\"https://omg10.com/4/11730815\" target=\"_blank\" id=\"o\" style=\"position:absolute;top:0;left:0;width:100%;height:100%;z-index:10;display:block;cursor:pointer;\"></a>\n</div>\n<script>\ndocument.getElementById('o').addEventListener('click',function(){this.style.display='none';});\nsetTimeout(function(){var o=document.getElementById('o');if(o)o.style.display='none';},5000);\n</script>",
    "description": "Inayosadikika kua Bonge la dada Connection",
    "tags": [
      "#ChimboTamu",
      "#WakubwaTz"
    ],
    "isTrending": false,
    "quality": "720p HD",
    "likes": "2.7K"
  },
  {
    "id": "chimbotamu-v-24",
    "originId": "24",
    "source": "chimbiotamu.com",
    "title": "Mrs Energy",
    "category": "connection",
    "categoryName": "Connection",
    "duration": "00:18",
    "views": "28.5K",
    "viewsCount": 36400,
    "timeAgo": "Miezi 7 iliyopita",
    "creator": "Connection",
    "creatorAvatar": "https://SwahiliPlay.b-cdn.net/chimbotamu.png",
    "subscribers": "85.4K Wafuatiliaji",
    "thumb": "https://vz-6aac71b9-360.b-cdn.net/cad5c346-f878-44fe-ab26-26e4a18a1850/thumbnail.jpg",
    "videoUrl": "https://vz-6aac71b9-360.b-cdn.net/cad5c346-f878-44fe-ab26-26e4a18a1850/play_360p.mp4",
    "downloadUrl": "https://vz-6aac71b9-360.b-cdn.net/cad5c346-f878-44fe-ab26-26e4a18a1850/play_360p.mp4",
    "embedCode": "<div style=\"position:relative;padding-top:56.25%;\">\n    <iframe src=\"https://vz-6aac71b9-360.b-cdn.net/cad5c346-f878-44fe-ab26-26e4a18a1850/play_360p.mp4?autoplay=true&loop=false&muted=false&preload=true&responsive=true\" loading=\"lazy\" style=\"border:0;position:absolute;top:0;height:100%;width:100%;\" allow=\"accelerometer;gyroscope;autoplay;encrypted-media;picture-in-picture;\" allowfullscreen=\"true\" id=\"v\"></iframe>\n    <a href=\"https://omg10.com/4/11730815\" target=\"_blank\" id=\"o\" style=\"position:absolute;top:0;left:0;width:100%;height:100%;z-index:10;display:block;cursor:pointer;\"></a>\n</div>\n<script>\ndocument.getElementById('o').addEventListener('click',function(){this.style.display='none';});\nsetTimeout(function(){var o=document.getElementById('o');if(o)o.style.display='none';},5000);\n</script>",
    "description": "connection inayosadikika kua ya mrs energy",
    "tags": [
      "#ChimboTamu",
      "#WakubwaTz"
    ],
    "isTrending": false,
    "quality": "720p HD",
    "likes": "4.2K"
  },
  {
    "id": "chimbotamu-v-23",
    "originId": "23",
    "source": "chimbiotamu.com",
    "title": "Petra Baby Kusagana",
    "category": "connection",
    "categoryName": "Connection",
    "duration": "05:16",
    "views": "35.5K",
    "viewsCount": 35600,
    "timeAgo": "Miezi 7 iliyopita",
    "creator": "Connection",
    "creatorAvatar": "https://SwahiliPlay.b-cdn.net/chimbotamu.png",
    "subscribers": "85.4K Wafuatiliaji",
    "thumb": "https://vz-6aac71b9-360.b-cdn.net/39afc047-d1c9-46aa-9b51-5fff107b60a6/thumbnail.jpg",
    "videoUrl": "https://vz-6aac71b9-360.b-cdn.net/39afc047-d1c9-46aa-9b51-5fff107b60a6/play_360p.mp4",
    "downloadUrl": "https://vz-6aac71b9-360.b-cdn.net/39afc047-d1c9-46aa-9b51-5fff107b60a6/play_360p.mp4",
    "embedCode": "<div style=\"position:relative;padding-top:56.25%;\">\n    <iframe src=\"https://vz-6aac71b9-360.b-cdn.net/39afc047-d1c9-46aa-9b51-5fff107b60a6/play_360p.mp4?autoplay=true&loop=false&muted=false&preload=true&responsive=true\" loading=\"lazy\" style=\"border:0;position:absolute;top:0;height:100%;width:100%;\" allow=\"accelerometer;gyroscope;autoplay;encrypted-media;picture-in-picture;\" allowfullscreen=\"true\" id=\"v\"></iframe>\n    <a href=\"https://omg10.com/4/11730815\" target=\"_blank\" id=\"o\" style=\"position:absolute;top:0;left:0;width:100%;height:100%;z-index:10;display:block;cursor:pointer;\"></a>\n</div>\n<script>\ndocument.getElementById('o').addEventListener('click',function(){this.style.display='none';});\nsetTimeout(function(){var o=document.getElementById('o');if(o)o.style.display='none';},5000);\n</script>",
    "description": "connection ya petra babe ya kusagana",
    "tags": [
      "#ChimboTamu",
      "#WakubwaTz"
    ],
    "isTrending": false,
    "quality": "720p HD",
    "likes": "3.2K"
  },
  {
    "id": "chimbotamu-v-22",
    "originId": "22",
    "source": "chimbiotamu.com",
    "title": "Wadada wawili jamaa mmoja",
    "category": "bongo",
    "categoryName": "Bongo Videos",
    "duration": "10:05",
    "views": "42.4K",
    "viewsCount": 34800,
    "timeAgo": "Miezi 7 iliyopita",
    "creator": "Bongo Videos",
    "creatorAvatar": "https://SwahiliPlay.b-cdn.net/chimbotamu.png",
    "subscribers": "85.4K Wafuatiliaji",
    "thumb": "https://vz-6aac71b9-360.b-cdn.net/796820fa-44cc-4604-9fdb-c8cb50b732ce/thumbnail.jpg",
    "videoUrl": "https://vz-6aac71b9-360.b-cdn.net/796820fa-44cc-4604-9fdb-c8cb50b732ce/play_360p.mp4",
    "downloadUrl": "https://vz-6aac71b9-360.b-cdn.net/796820fa-44cc-4604-9fdb-c8cb50b732ce/play_360p.mp4",
    "embedCode": "<div style=\"position:relative;padding-top:56.25%;\">\n    <iframe src=\"https://vz-6aac71b9-360.b-cdn.net/796820fa-44cc-4604-9fdb-c8cb50b732ce/play_360p.mp4?autoplay=true&loop=false&muted=false&preload=true&responsive=true\" loading=\"lazy\" style=\"border:0;position:absolute;top:0;height:100%;width:100%;\" allow=\"accelerometer;gyroscope;autoplay;encrypted-media;picture-in-picture;\" allowfullscreen=\"true\" id=\"v\"></iframe>\n    <a href=\"https://omg10.com/4/11730815\" target=\"_blank\" id=\"o\" style=\"position:absolute;top:0;left:0;width:100%;height:100%;z-index:10;display:block;cursor:pointer;\"></a>\n</div>\n<script>\ndocument.getElementById('o').addEventListener('click',function(){this.style.display='none';});\nsetTimeout(function(){var o=document.getElementById('o');if(o)o.style.display='none';},5000);\n</script>",
    "description": "threesome ya kibabe",
    "tags": [
      "#ChimboTamu",
      "#WakubwaTz"
    ],
    "isTrending": false,
    "quality": "720p HD",
    "likes": "3.2K"
  },
  {
    "id": "chimbotamu-v-21",
    "originId": "21",
    "source": "chimbiotamu.com",
    "title": "Mbolo kubwa inazama matakoni",
    "category": "bongo",
    "categoryName": "Bongo Videos",
    "duration": "10:56",
    "views": "19.3K",
    "viewsCount": 34000,
    "timeAgo": "Miezi 7 iliyopita",
    "creator": "Bongo Videos",
    "creatorAvatar": "https://SwahiliPlay.b-cdn.net/chimbotamu.png",
    "subscribers": "85.4K Wafuatiliaji",
    "thumb": "https://vz-6aac71b9-360.b-cdn.net/413f620a-552e-4792-b694-8906653addd3/thumbnail.jpg",
    "videoUrl": "https://vz-6aac71b9-360.b-cdn.net/413f620a-552e-4792-b694-8906653addd3/play_360p.mp4",
    "downloadUrl": "https://vz-6aac71b9-360.b-cdn.net/413f620a-552e-4792-b694-8906653addd3/play_360p.mp4",
    "embedCode": "<div style=\"position:relative;padding-top:56.25%;\">\n    <iframe src=\"https://vz-6aac71b9-360.b-cdn.net/413f620a-552e-4792-b694-8906653addd3/play_360p.mp4?autoplay=true&loop=false&muted=false&preload=true&responsive=true\" loading=\"lazy\" style=\"border:0;position:absolute;top:0;height:100%;width:100%;\" allow=\"accelerometer;gyroscope;autoplay;encrypted-media;picture-in-picture;\" allowfullscreen=\"true\" id=\"v\"></iframe>\n    <a href=\"https://omg10.com/4/11730815\" target=\"_blank\" id=\"o\" style=\"position:absolute;top:0;left:0;width:100%;height:100%;z-index:10;display:block;cursor:pointer;\"></a>\n</div>\n<script>\ndocument.getElementById('o').addEventListener('click',function(){this.style.display='none';});\nsetTimeout(function(){var o=document.getElementById('o');if(o)o.style.display='none';},5000);\n</script>",
    "description": "jamaa anasimika mbolo kwenye mali safi",
    "tags": [
      "#ChimboTamu",
      "#WakubwaTz"
    ],
    "isTrending": false,
    "quality": "720p HD",
    "likes": "6.0K"
  },
  {
    "id": "chimbotamu-v-20",
    "originId": "20",
    "source": "chimbiotamu.com",
    "title": "Huyu mrembo anakatika balaa",
    "category": "bongo",
    "categoryName": "Bongo Videos",
    "duration": "11:32",
    "views": "51.1K",
    "viewsCount": 33200,
    "timeAgo": "Miezi 7 iliyopita",
    "creator": "Bongo Videos",
    "creatorAvatar": "https://SwahiliPlay.b-cdn.net/chimbotamu.png",
    "subscribers": "85.4K Wafuatiliaji",
    "thumb": "https://vz-6aac71b9-360.b-cdn.net/cbb84b76-41fd-438a-bdb0-73ad3051096c/thumbnail.jpg",
    "videoUrl": "https://vz-6aac71b9-360.b-cdn.net/cbb84b76-41fd-438a-bdb0-73ad3051096c/play_360p.mp4",
    "downloadUrl": "https://vz-6aac71b9-360.b-cdn.net/cbb84b76-41fd-438a-bdb0-73ad3051096c/play_360p.mp4",
    "embedCode": "<div style=\"position:relative;padding-top:56.25%;\">\n    <iframe src=\"https://vz-6aac71b9-360.b-cdn.net/cbb84b76-41fd-438a-bdb0-73ad3051096c/play_360p.mp4?autoplay=true&loop=false&muted=false&preload=true&responsive=true\" loading=\"lazy\" style=\"border:0;position:absolute;top:0;height:100%;width:100%;\" allow=\"accelerometer;gyroscope;autoplay;encrypted-media;picture-in-picture;\" allowfullscreen=\"true\" id=\"v\"></iframe>\n    <a href=\"https://omg10.com/4/11730815\" target=\"_blank\" id=\"o\" style=\"position:absolute;top:0;left:0;width:100%;height:100%;z-index:10;display:block;cursor:pointer;\"></a>\n</div>\n<script>\ndocument.getElementById('o').addEventListener('click',function(){this.style.display='none';});\nsetTimeout(function(){var o=document.getElementById('o');if(o)o.style.display='none';},5000);\n</script>",
    "description": "mrembo anajua kuikatikia",
    "tags": [
      "#ChimboTamu",
      "#WakubwaTz"
    ],
    "isTrending": false,
    "quality": "720p HD",
    "likes": "8.1K"
  },
  {
    "id": "chimbotamu-v-19",
    "originId": "19",
    "source": "chimbiotamu.com",
    "title": "Mtoto mtamu huyu",
    "category": "bongo",
    "categoryName": "Bongo Videos",
    "duration": "10:15",
    "views": "41.3K",
    "viewsCount": 32400,
    "timeAgo": "Miezi 7 iliyopita",
    "creator": "Bongo Videos",
    "creatorAvatar": "https://SwahiliPlay.b-cdn.net/chimbotamu.png",
    "subscribers": "85.4K Wafuatiliaji",
    "thumb": "https://vz-6aac71b9-360.b-cdn.net/fb9aa287-12b2-4ad5-86a9-d2dd395e359d/thumbnail.jpg",
    "videoUrl": "https://vz-6aac71b9-360.b-cdn.net/fb9aa287-12b2-4ad5-86a9-d2dd395e359d/play_720p.mp4",
    "downloadUrl": "https://vz-6aac71b9-360.b-cdn.net/fb9aa287-12b2-4ad5-86a9-d2dd395e359d/play_720p.mp4",
    "embedCode": "<div style=\"position:relative;padding-top:56.25%;\">\n    <iframe src=\"https://vz-6aac71b9-360.b-cdn.net/fb9aa287-12b2-4ad5-86a9-d2dd395e359d/play_720p.mp4?autoplay=true&loop=false&muted=false&preload=true&responsive=true\" loading=\"lazy\" style=\"border:0;position:absolute;top:0;height:100%;width:100%;\" allow=\"accelerometer;gyroscope;autoplay;encrypted-media;picture-in-picture;\" allowfullscreen=\"true\" id=\"v\"></iframe>\n    <a href=\"https://utamukitandani.site\" target=\"_blank\" id=\"o\" style=\"position:absolute;top:0;left:0;width:100%;height:100%;z-index:10;display:block;cursor:pointer;\"></a>\n</div>\n<script>\ndocument.getElementById('o').addEventListener('click',function(){this.style.display='none';});\nsetTimeout(function(){var o=document.getElementById('o');if(o)o.style.display='none';},5000);\n</script>",
    "description": "Jamaa anajienjoia zigo",
    "tags": [
      "#ChimboTamu",
      "#WakubwaTz"
    ],
    "isTrending": false,
    "quality": "720p HD",
    "likes": "5.8K"
  },
  {
    "id": "chimbotamu-v-18",
    "originId": "18",
    "source": "chimbiotamu.com",
    "title": "Matako Makubwa Mazuri",
    "category": "bongo",
    "categoryName": "Bongo Videos",
    "duration": "11:40",
    "views": "24.1K",
    "viewsCount": 31600,
    "timeAgo": "Miezi 7 iliyopita",
    "creator": "Bongo Videos",
    "creatorAvatar": "https://SwahiliPlay.b-cdn.net/chimbotamu.png",
    "subscribers": "85.4K Wafuatiliaji",
    "thumb": "https://vz-6aac71b9-360.b-cdn.net/fb9aa287-12b2-4ad5-86a9-d2dd395e359d/thumbnail.jpg",
    "videoUrl": "https://vz-6aac71b9-360.b-cdn.net/fb9aa287-12b2-4ad5-86a9-d2dd395e359d/play_720p.mp4",
    "downloadUrl": "https://vz-6aac71b9-360.b-cdn.net/fb9aa287-12b2-4ad5-86a9-d2dd395e359d/play_720p.mp4",
    "embedCode": "<div style=\"position:relative;padding-top:56.25%;\">\n    <iframe src=\"https://vz-6aac71b9-360.b-cdn.net/fb9aa287-12b2-4ad5-86a9-d2dd395e359d/play_720p.mp4?autoplay=true&loop=false&muted=false&preload=true&responsive=true\" loading=\"lazy\" style=\"border:0;position:absolute;top:0;height:100%;width:100%;\" allow=\"accelerometer;gyroscope;autoplay;encrypted-media;picture-in-picture;\" allowfullscreen=\"true\" id=\"v\"></iframe>\n    <a href=\"https://utamukitandani.site\" target=\"_blank\" id=\"o\" style=\"position:absolute;top:0;left:0;width:100%;height:100%;z-index:10;display:block;cursor:pointer;\"></a>\n</div>\n<script>\ndocument.getElementById('o').addEventListener('click',function(){this.style.display='none';});\nsetTimeout(function(){var o=document.getElementById('o');if(o)o.style.display='none';},5000);\n</script>",
    "description": "Jamaa anajilia mali safi",
    "tags": [
      "#ChimboTamu",
      "#WakubwaTz"
    ],
    "isTrending": false,
    "quality": "720p HD",
    "likes": "4.8K"
  },
  {
    "id": "chimbotamu-v-17",
    "originId": "17",
    "source": "chimbiotamu.com",
    "title": "Wanawake wakisagana",
    "category": "bongo",
    "categoryName": "Bongo Videos",
    "duration": "02:56",
    "views": "36.5K",
    "viewsCount": 30800,
    "timeAgo": "Miezi 7 iliyopita",
    "creator": "Bongo Videos",
    "creatorAvatar": "https://SwahiliPlay.b-cdn.net/chimbotamu.png",
    "subscribers": "85.4K Wafuatiliaji",
    "thumb": "https://vz-6aac71b9-360.b-cdn.net/85227889-3bcb-4e93-ac02-dd98a54db860/thumbnail.jpg",
    "videoUrl": "https://vz-6aac71b9-360.b-cdn.net/85227889-3bcb-4e93-ac02-dd98a54db860/play_480p.mp4",
    "downloadUrl": "https://vz-6aac71b9-360.b-cdn.net/85227889-3bcb-4e93-ac02-dd98a54db860/play_480p.mp4",
    "embedCode": "<div style=\"position:relative;padding-top:56.25%;\">\n    <iframe src=\"https://vz-6aac71b9-360.b-cdn.net/85227889-3bcb-4e93-ac02-dd98a54db860/play_480p.mp4?autoplay=true&loop=false&muted=false&preload=true&responsive=true\" loading=\"lazy\" style=\"border:0;position:absolute;top:0;height:100%;width:100%;\" allow=\"accelerometer;gyroscope;autoplay;encrypted-media;picture-in-picture;\" allowfullscreen=\"true\" id=\"v\"></iframe>\n    <a href=\"https://omg10.com/4/11730815\" target=\"_blank\" id=\"o\" style=\"position:absolute;top:0;left:0;width:100%;height:100%;z-index:10;display:block;cursor:pointer;\"></a>\n</div>\n<script>\ndocument.getElementById('o').addEventListener('click',function(){this.style.display='none';});\nsetTimeout(function(){var o=document.getElementById('o');if(o)o.style.display='none';},5000);\n</script>",
    "description": "Warembo watatu wanasagana threesome",
    "tags": [
      "#ChimboTamu",
      "#WakubwaTz"
    ],
    "isTrending": false,
    "quality": "720p HD",
    "likes": "7.0K"
  },
  {
    "id": "chimbotamu-v-16",
    "originId": "16",
    "source": "chimbiotamu.com",
    "title": "Demu mwenye matako makubwa",
    "category": "bongo",
    "categoryName": "Bongo Videos",
    "duration": "04:26",
    "views": "25.0K",
    "viewsCount": 30000,
    "timeAgo": "Miezi 7 iliyopita",
    "creator": "Bongo Videos",
    "creatorAvatar": "https://SwahiliPlay.b-cdn.net/chimbotamu.png",
    "subscribers": "85.4K Wafuatiliaji",
    "thumb": "https://vz-6aac71b9-360.b-cdn.net/aaf26ca6-eafa-4ff8-b45f-aed514f01f36/thumbnail.jpg",
    "videoUrl": "https://vz-6aac71b9-360.b-cdn.net/aaf26ca6-eafa-4ff8-b45f-aed514f01f36/play_360p.mp4",
    "downloadUrl": "https://vz-6aac71b9-360.b-cdn.net/aaf26ca6-eafa-4ff8-b45f-aed514f01f36/play_360p.mp4",
    "embedCode": "<div style=\"position:relative;padding-top:56.25%;\">\n    <iframe src=\"hhttps://vz-6aac71b9-360.b-cdn.net/aaf26ca6-eafa-4ff8-b45f-aed514f01f36/play_360p.mp4?autoplay=true&loop=false&muted=false&preload=true&responsive=true\" loading=\"lazy\" style=\"border:0;position:absolute;top:0;height:100%;width:100%;\" allow=\"accelerometer;gyroscope;autoplay;encrypted-media;picture-in-picture;\" allowfullscreen=\"true\" id=\"v\"></iframe>\n    <a href=\"https://utamukitandani.site\" target=\"_blank\" id=\"o\" style=\"position:absolute;top:0;left:0;width:100%;height:100%;z-index:10;display:block;cursor:pointer;\"></a>\n</div>\n<script>\ndocument.getElementById('o').addEventListener('click',function(){this.style.display='none';});\nsetTimeout(function(){var o=document.getElementById('o');if(o)o.style.display='none';},5000);\n</script>",
    "description": "Jamaa kajitombea demu mwenye mataka makubwa",
    "tags": [
      "#ChimboTamu",
      "#WakubwaTz"
    ],
    "isTrending": false,
    "quality": "720p HD",
    "likes": "5.1K"
  },
  {
    "id": "chimbotamu-v-15",
    "originId": "15",
    "source": "chimbiotamu.com",
    "title": "Video ya Kufirana",
    "category": "bongo",
    "categoryName": "Bongo Videos",
    "duration": "12:59",
    "views": "55.8K",
    "viewsCount": 29200,
    "timeAgo": "Miezi 7 iliyopita",
    "creator": "Bongo Videos",
    "creatorAvatar": "https://SwahiliPlay.b-cdn.net/chimbotamu.png",
    "subscribers": "85.4K Wafuatiliaji",
    "thumb": "https://vz-6aac71b9-360.b-cdn.net/e36b560d-aa75-4826-b1d6-83821aa9c718/thumbnail.jpg",
    "videoUrl": "https://iframe.mediadelivery.net/embed/285538/e36b560d-aa75-4826-b1d6-83821aa9c718",
    "downloadUrl": "https://iframe.mediadelivery.net/embed/285538/e36b560d-aa75-4826-b1d6-83821aa9c718",
    "embedCode": "<div style=\"position:relative;padding-top:56.25%;\">\n    <iframe src=\"https://iframe.mediadelivery.net/embed/285538/e36b560d-aa75-4826-b1d6-83821aa9c718?autoplay=true&loop=false&muted=false&preload=true&responsive=true\" loading=\"lazy\" style=\"border:0;position:absolute;top:0;height:100%;width:100%;\" allow=\"accelerometer;gyroscope;autoplay;encrypted-media;picture-in-picture;\" allowfullscreen=\"true\" id=\"v\"></iframe>\n    <a href=\"https://utamukitandani.site\" target=\"_blank\" id=\"o\" style=\"position:absolute;top:0;left:0;width:100%;height:100%;z-index:10;display:block;cursor:pointer;\"></a>\n</div>\n<script>\ndocument.getElementById('o').addEventListener('click',function(){this.style.display='none';});\nsetTimeout(function(){var o=document.getElementById('o');if(o)o.style.display='none';},5000);\n</script>",
    "description": "mwanamke mwenye tatoo ya butterfly afilwa",
    "tags": [
      "#ChimboTamu",
      "#WakubwaTz"
    ],
    "isTrending": false,
    "quality": "720p HD",
    "likes": "8.8K"
  },
  {
    "id": "chimbotamu-v-14",
    "originId": "14",
    "source": "chimbiotamu.com",
    "title": "Mwanamke ananyonya Mboo",
    "category": "bongo",
    "categoryName": "Bongo Videos",
    "duration": "01:58",
    "views": "41.2K",
    "viewsCount": 28400,
    "timeAgo": "Miezi 7 iliyopita",
    "creator": "Bongo Videos",
    "creatorAvatar": "https://SwahiliPlay.b-cdn.net/chimbotamu.png",
    "subscribers": "85.4K Wafuatiliaji",
    "thumb": "https://vz-6aac71b9-360.b-cdn.net/43567076-5e60-4048-b251-67abe3f6d92c/thumbnail.jpg",
    "videoUrl": "https://vz-6aac71b9-360.b-cdn.net/43567076-5e60-4048-b251-67abe3f6d92c/play_720p.mp4",
    "downloadUrl": "https://vz-6aac71b9-360.b-cdn.net/43567076-5e60-4048-b251-67abe3f6d92c/play_720p.mp4",
    "embedCode": "<div style=\"position:relative;padding-top:56.25%;\">\n    <iframe src=\"https://vz-6aac71b9-360.b-cdn.net/43567076-5e60-4048-b251-67abe3f6d92c/play_720p.mp4?autoplay=true&loop=false&muted=false&preload=true&responsive=true\" loading=\"lazy\" style=\"border:0;position:absolute;top:0;height:100%;width:100%;\" allow=\"accelerometer;gyroscope;autoplay;encrypted-media;picture-in-picture;\" allowfullscreen=\"true\" id=\"v\"></iframe>\n    <a href=\"https://utamukitandani.site\" target=\"_blank\" id=\"o\" style=\"position:absolute;top:0;left:0;width:100%;height:100%;z-index:10;display:block;cursor:pointer;\"></a>\n</div>\n<script>\ndocument.getElementById('o').addEventListener('click',function(){this.style.display='none';});\nsetTimeout(function(){var o=document.getElementById('o');if(o)o.style.display='none';},5000);\n</script>",
    "description": "Jamaa ananyonywa mboo huku anatomba matiti",
    "tags": [
      "#ChimboTamu",
      "#WakubwaTz"
    ],
    "isTrending": false,
    "quality": "720p HD",
    "likes": "3.0K"
  },
  {
    "id": "chimbotamu-v-13",
    "originId": "13",
    "source": "chimbiotamu.com",
    "title": "Mtoto mzuri hana doa Atobwa",
    "category": "bongo",
    "categoryName": "Bongo Videos",
    "duration": "01:30",
    "views": "54.0K",
    "viewsCount": 27600,
    "timeAgo": "Miezi 7 iliyopita",
    "creator": "Bongo Videos",
    "creatorAvatar": "https://SwahiliPlay.b-cdn.net/chimbotamu.png",
    "subscribers": "85.4K Wafuatiliaji",
    "thumb": "https://vz-6aac71b9-360.b-cdn.net/7bd91718-4d1b-4474-80ec-13d7fb9d5715/thumbnail.jpg",
    "videoUrl": "https://vz-6aac71b9-360.b-cdn.net/7bd91718-4d1b-4474-80ec-13d7fb9d5715/play_360p.mp4",
    "downloadUrl": "https://vz-6aac71b9-360.b-cdn.net/7bd91718-4d1b-4474-80ec-13d7fb9d5715/play_360p.mp4",
    "embedCode": "<div style=\"position:relative;padding-top:56.25%;\">\n    <iframe src=\"https://vz-6aac71b9-360.b-cdn.net/7bd91718-4d1b-4474-80ec-13d7fb9d5715/play_360p.mp4?autoplay=true&loop=false&muted=false&preload=true&responsive=true\" loading=\"lazy\" style=\"border:0;position:absolute;top:0;height:100%;width:100%;\" allow=\"accelerometer;gyroscope;autoplay;encrypted-media;picture-in-picture;\" allowfullscreen=\"true\" id=\"v\"></iframe>\n    <a href=\"https://omg10.com/4/11730815\" target=\"_blank\" id=\"o\" style=\"position:absolute;top:0;left:0;width:100%;height:100%;z-index:10;display:block;cursor:pointer;\"></a>\n</div>\n<script>\ndocument.getElementById('o').addEventListener('click',function(){this.style.display='none';});\nsetTimeout(function(){var o=document.getElementById('o');if(o)o.style.display='none';},5000);\n</script>",
    "description": "pisi nzuri ya tobwa hadi jamaa kumwaga",
    "tags": [
      "#ChimboTamu",
      "#WakubwaTz"
    ],
    "isTrending": false,
    "quality": "720p HD",
    "likes": "8.3K"
  },
  {
    "id": "chimbotamu-v-12",
    "originId": "12",
    "source": "chimbiotamu.com",
    "title": "Mtoto modo atobwa na Kunyonya Mboo",
    "category": "bongo",
    "categoryName": "Bongo Videos",
    "duration": "08:28",
    "views": "50.5K",
    "viewsCount": 26800,
    "timeAgo": "Miezi 7 iliyopita",
    "creator": "Bongo Videos",
    "creatorAvatar": "https://SwahiliPlay.b-cdn.net/chimbotamu.png",
    "subscribers": "85.4K Wafuatiliaji",
    "thumb": "https://vz-6aac71b9-360.b-cdn.net/e9a0e6e5-7617-47c5-be58-3b73912205da/thumbnail.jpg",
    "videoUrl": "https://vz-6aac71b9-360.b-cdn.net/e9a0e6e5-7617-47c5-be58-3b73912205da/play_480p.mp4",
    "downloadUrl": "https://vz-6aac71b9-360.b-cdn.net/e9a0e6e5-7617-47c5-be58-3b73912205da/play_480p.mp4",
    "embedCode": "<div style=\"position:relative;padding-top:56.25%;\">\n    <iframe src=\"https://vz-6aac71b9-360.b-cdn.net/e9a0e6e5-7617-47c5-be58-3b73912205da/play_480p.mp4?autoplay=true&loop=false&muted=false&preload=true&responsive=true\" loading=\"lazy\" style=\"border:0;position:absolute;top:0;height:100%;width:100%;\" allow=\"accelerometer;gyroscope;autoplay;encrypted-media;picture-in-picture;\" allowfullscreen=\"true\" id=\"v\"></iframe>\n    <a href=\"https://utamukitandani.site\" target=\"_blank\" id=\"o\" style=\"position:absolute;top:0;left:0;width:100%;height:100%;z-index:10;display:block;cursor:pointer;\"></a>\n</div>\n<script>\ndocument.getElementById('o').addEventListener('click',function(){this.style.display='none';});\nsetTimeout(function(){var o=document.getElementById('o');if(o)o.style.display='none';},5000);\n</script>",
    "description": "Mrembo anakamiwa balaa",
    "tags": [
      "#ChimboTamu",
      "#WakubwaTz"
    ],
    "isTrending": false,
    "quality": "720p HD",
    "likes": "9.4K"
  },
  {
    "id": "chimbotamu-v-11",
    "originId": "11",
    "source": "chimbiotamu.com",
    "title": "Mrembo anajipimia",
    "category": "bongo",
    "categoryName": "Bongo Videos",
    "duration": "10:39",
    "views": "23.8K",
    "viewsCount": 26000,
    "timeAgo": "Miezi 7 iliyopita",
    "creator": "Bongo Videos",
    "creatorAvatar": "https://SwahiliPlay.b-cdn.net/chimbotamu.png",
    "subscribers": "85.4K Wafuatiliaji",
    "thumb": "https://vz-6aac71b9-360.b-cdn.net/71710272-86c2-43ab-90b7-c74f409abe3c/thumbnail.jpg",
    "videoUrl": "https://vz-6aac71b9-360.b-cdn.net/71710272-86c2-43ab-90b7-c74f409abe3c/play_720p.mp4",
    "downloadUrl": "https://vz-6aac71b9-360.b-cdn.net/71710272-86c2-43ab-90b7-c74f409abe3c/play_720p.mp4",
    "embedCode": "<div style=\"position:relative;padding-top:56.25%;\">\n    <iframe src=\"https://vz-6aac71b9-360.b-cdn.net/71710272-86c2-43ab-90b7-c74f409abe3c/play_720p.mp4?autoplay=true&loop=false&muted=false&preload=true&responsive=true\" loading=\"lazy\" style=\"border:0;position:absolute;top:0;height:100%;width:100%;\" allow=\"accelerometer;gyroscope;autoplay;encrypted-media;picture-in-picture;\" allowfullscreen=\"true\" id=\"v\"></iframe>\n    <a href=\"https://omg10.com/4/11730815\" target=\"_blank\" id=\"o\" style=\"position:absolute;top:0;left:0;width:100%;height:100%;z-index:10;display:block;cursor:pointer;\"></a>\n</div>\n<script>\ndocument.getElementById('o').addEventListener('click',function(){this.style.display='none';});\nsetTimeout(function(){var o=document.getElementById('o');if(o)o.style.display='none';},5000);\n</script>",
    "description": "Demu anaikatikia mbolo balaa",
    "tags": [
      "#ChimboTamu",
      "#WakubwaTz"
    ],
    "isTrending": false,
    "quality": "720p HD",
    "likes": "8.0K"
  },
  {
    "id": "chimbotamu-v-10",
    "originId": "10",
    "source": "chimbiotamu.com",
    "title": "Style ya Kusimama",
    "category": "bongo",
    "categoryName": "Bongo Videos",
    "duration": "02:34",
    "views": "56.1K",
    "viewsCount": 25200,
    "timeAgo": "Miezi 7 iliyopita",
    "creator": "Bongo Videos",
    "creatorAvatar": "https://SwahiliPlay.b-cdn.net/chimbotamu.png",
    "subscribers": "85.4K Wafuatiliaji",
    "thumb": "https://vz-6aac71b9-360.b-cdn.net/9b94a2f7-cdbf-48a2-a542-a0556f52d012/thumbnail.jpg",
    "videoUrl": "https://vz-6aac71b9-360.b-cdn.net/9b94a2f7-cdbf-48a2-a542-a0556f52d012/play_480p.mp4",
    "downloadUrl": "https://vz-6aac71b9-360.b-cdn.net/9b94a2f7-cdbf-48a2-a542-a0556f52d012/play_480p.mp4",
    "embedCode": "<div style=\"position:relative;padding-top:56.25%;\">\n    <iframe src=\"https://vz-6aac71b9-360.b-cdn.net/9b94a2f7-cdbf-48a2-a542-a0556f52d012/play_480p.mp4?autoplay=true&loop=false&muted=false&preload=true&responsive=true\" loading=\"lazy\" style=\"border:0;position:absolute;top:0;height:100%;width:100%;\" allow=\"accelerometer;gyroscope;autoplay;encrypted-media;picture-in-picture;\" allowfullscreen=\"true\" id=\"v\"></iframe>\n    <a href=\"https://utamukitandani.site\" target=\"_blank\" id=\"o\" style=\"position:absolute;top:0;left:0;width:100%;height:100%;z-index:10;display:block;cursor:pointer;\"></a>\n</div>\n<script>\ndocument.getElementById('o').addEventListener('click',function(){this.style.display='none';});\nsetTimeout(function(){var o=document.getElementById('o');if(o)o.style.display='none';},5000);\n</script>",
    "description": "Style ya kutomba huku wote mmesimama",
    "tags": [
      "#ChimboTamu",
      "#WakubwaTz"
    ],
    "isTrending": false,
    "quality": "720p HD",
    "likes": "9.6K"
  },
  {
    "id": "chimbotamu-v-9",
    "originId": "9",
    "source": "chimbiotamu.com",
    "title": "Mrembo anaikalia",
    "category": "bongo",
    "categoryName": "Bongo Videos",
    "duration": "01:55",
    "views": "13.0K",
    "viewsCount": 24400,
    "timeAgo": "Miezi 7 iliyopita",
    "creator": "Bongo Videos",
    "creatorAvatar": "https://SwahiliPlay.b-cdn.net/chimbotamu.png",
    "subscribers": "85.4K Wafuatiliaji",
    "thumb": "https://vz-6aac71b9-360.b-cdn.net/64e8b0a1-12da-4acb-bb02-7dd71796f2d4/thumbnail.jpg",
    "videoUrl": "https://vz-6aac71b9-360.b-cdn.net/64e8b0a1-12da-4acb-bb02-7dd71796f2d4/play_240p.mp4",
    "downloadUrl": "https://vz-6aac71b9-360.b-cdn.net/64e8b0a1-12da-4acb-bb02-7dd71796f2d4/play_240p.mp4",
    "embedCode": "<div style=\"position:relative;padding-top:56.25%;\">\n    <iframe src=\"https://vz-6aac71b9-360.b-cdn.net/64e8b0a1-12da-4acb-bb02-7dd71796f2d4/play_240p.mp4?autoplay=true&loop=false&muted=false&preload=true&responsive=true\" loading=\"lazy\" style=\"border:0;position:absolute;top:0;height:100%;width:100%;\" allow=\"accelerometer;gyroscope;autoplay;encrypted-media;picture-in-picture;\" allowfullscreen=\"true\" id=\"v\"></iframe>\n    <a href=\"https://utamukitandani.site\" target=\"_blank\" id=\"o\" style=\"position:absolute;top:0;left:0;width:100%;height:100%;z-index:10;display:block;cursor:pointer;\"></a>\n</div>\n<script>\ndocument.getElementById('o').addEventListener('click',function(){this.style.display='none';});\nsetTimeout(function(){var o=document.getElementById('o');if(o)o.style.display='none';},5000);\n</script>",
    "description": "mrembo anajua kuikalia mbolo",
    "tags": [
      "#ChimboTamu",
      "#WakubwaTz"
    ],
    "isTrending": false,
    "quality": "720p HD",
    "likes": "7.7K"
  },
  {
    "id": "chimbotamu-v-8",
    "originId": "8",
    "source": "chimbiotamu.com",
    "title": "Mama Amina",
    "category": "connection",
    "categoryName": "Connection",
    "duration": "00:32",
    "views": "32.5K",
    "viewsCount": 23600,
    "timeAgo": "Miezi 7 iliyopita",
    "creator": "Connection",
    "creatorAvatar": "https://SwahiliPlay.b-cdn.net/chimbotamu.png",
    "subscribers": "85.4K Wafuatiliaji",
    "thumb": "https://vz-6aac71b9-360.b-cdn.net/6c5b6ca7-d758-4dd5-b641-5cc4a5b6a9a9/thumbnail.jpg",
    "videoUrl": "https://vz-6aac71b9-360.b-cdn.net/6c5b6ca7-d758-4dd5-b641-5cc4a5b6a9a9/play_360p.mp4",
    "downloadUrl": "https://vz-6aac71b9-360.b-cdn.net/6c5b6ca7-d758-4dd5-b641-5cc4a5b6a9a9/play_360p.mp4",
    "embedCode": "<div style=\"position:relative;padding-top:56.25%;\">\n    <iframe src=\"https://vz-6aac71b9-360.b-cdn.net/6c5b6ca7-d758-4dd5-b641-5cc4a5b6a9a9/play_360p.mp4?autoplay=true&loop=false&muted=false&preload=true&responsive=true\" loading=\"lazy\" style=\"border:0;position:absolute;top:0;height:100%;width:100%;\" allow=\"accelerometer;gyroscope;autoplay;encrypted-media;picture-in-picture;\" allowfullscreen=\"true\" id=\"v\"></iframe>\n    <a href=\"https://utamukitandani.site\" target=\"_blank\" id=\"o\" style=\"position:absolute;top:0;left:0;width:100%;height:100%;z-index:10;display:block;cursor:pointer;\"></a>\n</div>\n<script>\ndocument.getElementById('o').addEventListener('click',function(){this.style.display='none';});\nsetTimeout(function(){var o=document.getElementById('o');if(o)o.style.display='none';},5000);\n</script>",
    "description": "Connection inayosadikika kua ya mama Amina",
    "tags": [
      "#mamaamina"
    ],
    "isTrending": false,
    "quality": "720p HD",
    "likes": "4.0K"
  },
  {
    "id": "chimbotamu-v-7",
    "originId": "7",
    "source": "chimbiotamu.com",
    "title": "Hii pisi inatobwa haitoi hata milio 🥺",
    "category": "bongo",
    "categoryName": "Bongo Videos",
    "duration": "02:19",
    "views": "39.6K",
    "viewsCount": 22800,
    "timeAgo": "Miezi 7 iliyopita",
    "creator": "Bongo Videos",
    "creatorAvatar": "https://SwahiliPlay.b-cdn.net/chimbotamu.png",
    "subscribers": "85.4K Wafuatiliaji",
    "thumb": "https://vz-6aac71b9-360.b-cdn.net/6f46ac62-c6e2-464c-b8a9-7f45adf424cc/thumbnail.jpg",
    "videoUrl": "https://vz-6aac71b9-360.b-cdn.net/6f46ac62-c6e2-464c-b8a9-7f45adf424cc/play_720p.mp4",
    "downloadUrl": "https://vz-6aac71b9-360.b-cdn.net/6f46ac62-c6e2-464c-b8a9-7f45adf424cc/play_720p.mp4",
    "embedCode": "<div style=\"position:relative;padding-top:56.25%;\">\n    <iframe src=\"https://vz-6aac71b9-360.b-cdn.net/6f46ac62-c6e2-464c-b8a9-7f45adf424cc/play_720p.mp4?autoplay=true&loop=false&muted=false&preload=true&responsive=true\" loading=\"lazy\" style=\"border:0;position:absolute;top:0;height:100%;width:100%;\" allow=\"accelerometer;gyroscope;autoplay;encrypted-media;picture-in-picture;\" allowfullscreen=\"true\" id=\"v\"></iframe>\n    <a href=\"https://utamukitandani.site\" target=\"_blank\" id=\"o\" style=\"position:absolute;top:0;left:0;width:100%;height:100%;z-index:10;display:block;cursor:pointer;\"></a>\n</div>\n<script>\ndocument.getElementById('o').addEventListener('click',function(){this.style.display='none';});\nsetTimeout(function(){var o=document.getElementById('o');if(o)o.style.display='none';},5000);\n</script>",
    "description": "Pisi mkavu huyu",
    "tags": [
      "#utamu"
    ],
    "isTrending": false,
    "quality": "720p HD",
    "likes": "4.2K"
  },
  {
    "id": "chimbotamu-m-23",
    "originId": "23",
    "source": "chimbiotamu.com",
    "title": "Sulutan",
    "category": "filamu",
    "categoryName": "Filamu Kamili",
    "duration": "1h 09m",
    "views": "59.4K",
    "viewsCount": 75000,
    "timeAgo": "2026",
    "creator": "ChimboTamu Filamu",
    "creatorAvatar": "https://SwahiliPlay.b-cdn.net/chimbotamu.png",
    "subscribers": "120K Wafuatiliaji",
    "thumb": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTh2fMJsBUKN-5z2TWlIqOOAeiL5fex4yJUNA&s",
    "posterUrl": "https://image.tmdb.org/t/p/w500/kd11696ab32WhHUeq5ZkWi9k09Y.jpg",
    "videoUrl": "https://vz-6aac71b9-360.b-cdn.net/ebf4ad1d-4a04-4a83-abf0-9cfe7e62f788/play_360p.mp4",
    "downloadUrl": "https://vz-6aac71b9-360.b-cdn.net/ebf4ad1d-4a04-4a83-abf0-9cfe7e62f788/play_360p.mp4",
    "embedCode": "<div style=\"position:relative;padding-top:56.25%;\">\n    <iframe src=\"https://vz-6aac71b9-360.b-cdn.net/ebf4ad1d-4a04-4a83-abf0-9cfe7e62f788/play_360p.mp4\"?autoplay=true&loop=false&muted=false&preload=true&responsive=true\" loading=\"lazy\" style=\"border:0;position:absolute;top:0;height:100%;width:100%;\" allow=\"accelerometer;gyroscope;autoplay;encrypted-media;picture-in-picture;\" allowfullscreen=\"true\" id=\"v\"></iframe>\n    <a href=\"https://omg10.com/4/11730815\" target=\"_blank\" id=\"o\" style=\"position:absolute;top:0;left:0;width:100%;height:100%;z-index:10;display:block;cursor:pointer;\"></a>\n</div>\n<script>\ndocument.getElementById('o').addEventListener('click',function(){this.style.display='none';});\nsetTimeout(function(){var o=document.getElementById('o');if(o)o.style.display='none';},5000);\n</script>",
    "description": "Mara anapogundua usaliti wa bwana harusi wake, anamweleza Lena, rafiki mpya. Uhusiano wao unaongezeka katika tamaa, wakihatarisha kazi zao na kuharibu maisha na matokeo hatari.",
    "tags": [
      "#drama",
      "#adult"
    ],
    "isTrending": true,
    "quality": "1080p Full HD",
    "likes": "15.3K"
  },
  {
    "id": "chimbotamu-m-22",
    "originId": "22",
    "source": "chimbiotamu.com",
    "title": "Check In",
    "category": "filamu",
    "categoryName": "Filamu Kamili",
    "duration": "1h 10m",
    "views": "22.3K",
    "viewsCount": 74000,
    "timeAgo": "2026",
    "creator": "ChimboTamu Filamu",
    "creatorAvatar": "https://SwahiliPlay.b-cdn.net/chimbotamu.png",
    "subscribers": "120K Wafuatiliaji",
    "thumb": "https://image.tmdb.org/t/p/w1280/wspOfgFVJde2jjD4vlIqy5Jc3yy.jpg",
    "posterUrl": "https://m.media-amazon.com/images/M/MV5BZTc4N2ExYmQtYzVlOC00ZjRjLTk2NWEtZjkxMzRlZjI0YzIzXkEyXkFqcGc@._V1_.jpg",
    "videoUrl": "https://vz-6aac71b9-360.b-cdn.net/ca685bac-520b-49ab-a9c8-e9aaf056a300/play_360p.mp4",
    "downloadUrl": "https://vz-6aac71b9-360.b-cdn.net/ca685bac-520b-49ab-a9c8-e9aaf056a300/play_360p.mp4",
    "embedCode": "<iframe src=\"https://iframe.mediadelivery.net/embed/285538/7d55ab74-19e9-45cf-a7ee-d8f68f12a540?autoplay=false&loop=false&muted=false&preload=true&responsive=true\" loading=\"lazy\" style=\"border:0;position:absolute;inset:0;height:100%;width:100%;\" allow=\"accelerometer;gyroscope;autoplay;encrypted-media;picture-in-picture;fullscreen\" allowfullscreen></iframe>",
    "description": "Wapokezi wawili katika moteli ya bei nafuu. Utaratibu wao wa utulivu huongezeka na kuwasili kwa mgeni wa kawaida wa ajabu ambaye anaanza kuzua mvutano, hamu na migogoro katika uhusiano wao dhaifu.",
    "tags": [
      "#adult",
      "#filipino",
      "#drama"
    ],
    "isTrending": true,
    "quality": "1080p Full HD",
    "likes": "4.0K"
  },
  {
    "id": "chimbotamu-m-21",
    "originId": "21",
    "source": "chimbiotamu.com",
    "title": "Selina's Gold",
    "category": "filamu",
    "categoryName": "Filamu Kamili",
    "duration": "1h 52m",
    "views": "28.0K",
    "viewsCount": 73000,
    "timeAgo": "2022",
    "creator": "ChimboTamu Filamu",
    "creatorAvatar": "https://SwahiliPlay.b-cdn.net/chimbotamu.png",
    "subscribers": "120K Wafuatiliaji",
    "thumb": "https://m.media-amazon.com/images/S/pv-target-images/3a704dcefa7edf8991c473d8fa79a6047565780b9db0988e90308535f63219a4.jpg",
    "posterUrl": "https://m.media-amazon.com/images/M/MV5BY2EyMTgwZTItZWQzOS00NWU5LTk5ZDItYTEyMzhjNzUzYzJhXkEyXkFqcGc@._V1_.jpg",
    "videoUrl": "https://vz-6aac71b9-360.b-cdn.net/0296cc09-8023-4f4c-825b-8019c907526b/play_360p.mp4",
    "downloadUrl": "https://vz-6aac71b9-360.b-cdn.net/0296cc09-8023-4f4c-825b-8019c907526b/play_360p.mp4",
    "embedCode": "<iframe src=\"https://iframe.mediadelivery.net/embed/285538/0296cc09-8023-4f4c-825b-8019c907526b?autoplay=false&loop=false&muted=false&preload=true&responsive=true\" loading=\"lazy\" style=\"border:0;position:absolute;inset:0;height:100%;width:100%;\" allow=\"accelerometer;gyroscope;autoplay;encrypted-media;picture-in-picture;fullscreen\" allowfullscreen></iframe>",
    "description": "Baba wa Selina anamuuza Tiago ambaye anamfanya kuwa mtumwa wa ngono. Kwa msaada wa Domeng, mtumwa kipofu wa Tiago, Selina anapanga njia ya kutoroka katika kuzimu hii\n",
    "tags": [
      "#Drama"
    ],
    "isTrending": true,
    "quality": "1080p Full HD",
    "likes": "6.5K"
  },
  {
    "id": "chimbotamu-m-20",
    "originId": "20",
    "source": "chimbiotamu.com",
    "title": "TL",
    "category": "filamu",
    "categoryName": "Filamu Kamili",
    "duration": "0h 45m",
    "views": "26.2K",
    "viewsCount": 72000,
    "timeAgo": "2024",
    "creator": "ChimboTamu Filamu",
    "creatorAvatar": "https://SwahiliPlay.b-cdn.net/chimbotamu.png",
    "subscribers": "120K Wafuatiliaji",
    "thumb": "https://cdnupload.com/wp-content/uploads/2024/03/TL-2024b.jpg",
    "posterUrl": "https://m.media-amazon.com/images/M/MV5BNTg1MDlkMTYtNGVmNC00YzViLWIyYTQtODQwZDc2ZDY0YWEwXkEyXkFqcGc@._V1_.jpg",
    "videoUrl": "https://vz-6aac71b9-360.b-cdn.net/3187d541-4cb8-4b1e-a31d-5f8a9839a6b8/play_360p.mp4",
    "downloadUrl": "https://vz-6aac71b9-360.b-cdn.net/3187d541-4cb8-4b1e-a31d-5f8a9839a6b8/play_360p.mp4",
    "embedCode": "<iframe src=\"https://iframe.mediadelivery.net/embed/285538/3187d541-4cb8-4b1e-a31d-5f8a9839a6b8?autoplay=false&loop=false&muted=false&preload=true&responsive=true\" loading=\"lazy\" style=\"border:0;position:absolute;inset:0;height:100%;width:100%;\" allow=\"accelerometer;gyroscope;autoplay;encrypted-media;picture-in-picture;fullscreen\" allowfullscreen></iframe>",
    "description": "Brenda, wakala bora katika kampuni ya BPO, huwa anapuuzwa kila mara linapokuja suala la kupandishwa cheo. Lakini safari hii ni tofauti, kwani anakuwa karibu sana kimapenzi na kiongozi wake wa timu. Je, nafasi aliyokuwa akiisubiri kwa muda mrefu sasa iko karibu? Au amejiingiza tu kwenye hali mbaya zaidi?",
    "tags": [
      "#Drama"
    ],
    "isTrending": true,
    "quality": "1080p Full HD",
    "likes": "4.7K"
  },
  {
    "id": "chimbotamu-m-19",
    "originId": "19",
    "source": "chimbiotamu.com",
    "title": "Breath Again",
    "category": "filamu",
    "categoryName": "Filamu Kamili",
    "duration": "1h 35m",
    "views": "72.4K",
    "viewsCount": 71000,
    "timeAgo": "2026",
    "creator": "ChimboTamu Filamu",
    "creatorAvatar": "https://SwahiliPlay.b-cdn.net/chimbotamu.png",
    "subscribers": "120K Wafuatiliaji",
    "thumb": "https://m.media-amazon.com/images/M/MV5BMWY3NTIwNWMtYTVhYy00YmE0LWJmMTQtNWVlZDViNTUwMjhlXkEyXkFqcGc@._V1_.jpg",
    "posterUrl": "https://m.media-amazon.com/images/M/MV5BMWY3NTIwNWMtYTVhYy00YmE0LWJmMTQtNWVlZDViNTUwMjhlXkEyXkFqcGc@._V1_.jpg",
    "videoUrl": "https://vz-6aac71b9-360.b-cdn.net/c1d79fc7-c97a-4899-bef9-f0c0278ba314/play_360p.mp4",
    "downloadUrl": "https://vz-6aac71b9-360.b-cdn.net/c1d79fc7-c97a-4899-bef9-f0c0278ba314/play_360p.mp4",
    "embedCode": "<iframe src=\"https://iframe.mediadelivery.net/embed/285538/c1d79fc7-c97a-4899-bef9-f0c0278ba314?autoplay=false&loop=false&muted=false&preload=true&responsive=true\" loading=\"lazy\" style=\"border:0;position:absolute;inset:0;height:100%;width:100%;\" allow=\"accelerometer;gyroscope;autoplay;encrypted-media;picture-in-picture;fullscreen\" allowfullscreen></iframe>",
    "description": "Mahusiano ya miaka saba ya wanandoa yanawekwa kwenye mtihani wanapojikuta wakivutiwa kutimiza tamaa zao za ndani kabisa za kimapenzi.",
    "tags": [
      "#Drama"
    ],
    "isTrending": false,
    "quality": "1080p Full HD",
    "likes": "13.8K"
  },
  {
    "id": "chimbotamu-m-18",
    "originId": "18",
    "source": "chimbiotamu.com",
    "title": "Panibugho",
    "category": "filamu",
    "categoryName": "Filamu Kamili",
    "duration": "1h 47m",
    "views": "61.4K",
    "viewsCount": 70000,
    "timeAgo": "2023",
    "creator": "ChimboTamu Filamu",
    "creatorAvatar": "https://SwahiliPlay.b-cdn.net/chimbotamu.png",
    "subscribers": "120K Wafuatiliaji",
    "thumb": "https://cdn2.pvvstream.pro/videos/-201700894/456244692/preview_800.jpg",
    "posterUrl": "https://m.media-amazon.com/images/M/MV5BZWQ2YmZmZWEtMDVhNC00N2QyLWI1ZmQtM2M1YzhhMGVmMWE4XkEyXkFqcGc@._V1_.jpg",
    "videoUrl": "https://vz-6aac71b9-360.b-cdn.net/45a8f3c4-011a-4a9c-bb0e-cf45f0c1a46b/play_360p.mp4",
    "downloadUrl": "https://vz-6aac71b9-360.b-cdn.net/45a8f3c4-011a-4a9c-bb0e-cf45f0c1a46b/play_360p.mp4",
    "embedCode": "<iframe src=\"https://iframe.mediadelivery.net/embed/285538/45a8f3c4-011a-4a9c-bb0e-cf45f0c1a46b?autoplay=false&loop=false&muted=false&preload=true&responsive=true\" loading=\"lazy\" style=\"border:0;position:absolute;inset:0;height:100%;width:100%;\" allow=\"accelerometer;gyroscope;autoplay;encrypted-media;picture-in-picture;fullscreen\" allowfullscreen></iframe>",
    "description": "Hadithi kuhusu dada watatu na mwanaume mmoja. Imewekwa mwishoni mwa miaka ya 90, ambapo simulizi ya mapenzi, chuki na wivu inaanza kujitokeza baada ya mgeni kuingia ghafla katika maisha ya dada hao watatu.\n",
    "tags": [
      "#Drama"
    ],
    "isTrending": false,
    "quality": "1080p Full HD",
    "likes": "13.2K"
  },
  {
    "id": "chimbotamu-m-17",
    "originId": "17",
    "source": "chimbiotamu.com",
    "title": "Top 1",
    "category": "filamu",
    "categoryName": "Filamu Kamili",
    "duration": "1h 38m",
    "views": "47.3K",
    "viewsCount": 69000,
    "timeAgo": "2024",
    "creator": "ChimboTamu Filamu",
    "creatorAvatar": "https://SwahiliPlay.b-cdn.net/chimbotamu.png",
    "subscribers": "120K Wafuatiliaji",
    "thumb": "https://nudecelebvideo.net/uploads/posts/2024-06/1719521028_002.jpg",
    "posterUrl": "https://images.plex.tv/photo?size=large-1280&url=https%3A%2F%2Fimage.tmdb.org%2Ft%2Fp%2Foriginal%2FaD3ObNzCfNH5WHXzmJXkXA7MRPP.jpg",
    "videoUrl": "https://vz-6aac71b9-360.b-cdn.net/2b11ac6f-84e3-4614-9add-2cc4e6536687/play_360p.mp4",
    "downloadUrl": "https://vz-6aac71b9-360.b-cdn.net/2b11ac6f-84e3-4614-9add-2cc4e6536687/play_360p.mp4",
    "embedCode": "<iframe src=\"https://iframe.mediadelivery.net/embed/285538/2b11ac6f-84e3-4614-9add-2cc4e6536687?autoplay=false&loop=false&muted=false&preload=true&responsive=true\" loading=\"lazy\" style=\"border:0;position:absolute;inset:0;height:100%;width:100%;\" allow=\"accelerometer;gyroscope;autoplay;encrypted-media;picture-in-picture;fullscreen\" allowfullscreen></iframe>",
    "description": "Azi na Dex wote wanapigania kuwa mwanafunzi bora wa darasa lao, lakini Dex huwa nyuma ya Azi kila mara. Kisha Dex anapanga kumfanya Azi ampende ili apoteze umakini wake, lakini mpango wake unageuka kuwa upanga wenye makali kuwili.\n",
    "tags": [
      "#Drama"
    ],
    "isTrending": false,
    "quality": "1080p Full HD",
    "likes": "8.8K"
  },
  {
    "id": "chimbotamu-m-16",
    "originId": "16",
    "source": "chimbiotamu.com",
    "title": "Sisid Marino",
    "category": "filamu",
    "categoryName": "Filamu Kamili",
    "duration": "1h 30m",
    "views": "25.2K",
    "viewsCount": 68000,
    "timeAgo": "2024",
    "creator": "ChimboTamu Filamu",
    "creatorAvatar": "https://SwahiliPlay.b-cdn.net/chimbotamu.png",
    "subscribers": "120K Wafuatiliaji",
    "thumb": "https://cdnupload.com/wp-content/uploads/2024/06/Sisid-Marino-2024b.jpg",
    "posterUrl": "https://m.media-amazon.com/images/M/MV5BOGZjOGMwZGYtYTJlNy00OTQzLTkwZGMtMTEwMDdkMjQ4MmEzXkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg",
    "videoUrl": "https://vz-6aac71b9-360.b-cdn.net/b090c307-9864-4d04-ab6c-403c39a49ade/play_360p.mp4",
    "downloadUrl": "https://vz-6aac71b9-360.b-cdn.net/b090c307-9864-4d04-ab6c-403c39a49ade/play_360p.mp4",
    "embedCode": "<iframe src=\"https://iframe.mediadelivery.net/embed/285538/b090c307-9864-4d04-ab6c-403c39a49ade?autoplay=false&loop=false&muted=false&preload=true&responsive=true\" loading=\"lazy\" style=\"border:0;position:absolute;inset:0;height:100%;width:100%;\" allow=\"accelerometer;gyroscope;autoplay;encrypted-media;picture-in-picture;fullscreen\" allowfullscreen></iframe>",
    "description": "Wanandoa walioko kwenye ndoa wanaingia kwenye huzuni kubwa baada ya kifo cha mtoto wao. Wanageukia ngono kama njia ya kukabiliana na maumivu yao, lakini umasikini unaanza kuwaathiri vibaya.\n",
    "tags": [
      "#Drama"
    ],
    "isTrending": false,
    "quality": "1080p Full HD",
    "likes": "14.7K"
  },
  {
    "id": "chimbotamu-m-15",
    "originId": "15",
    "source": "chimbiotamu.com",
    "title": "Boy Bastos",
    "category": "filamu",
    "categoryName": "Filamu Kamili",
    "duration": "1h 48m",
    "views": "55.1K",
    "viewsCount": 67000,
    "timeAgo": "2022",
    "creator": "ChimboTamu Filamu",
    "creatorAvatar": "https://SwahiliPlay.b-cdn.net/chimbotamu.png",
    "subscribers": "120K Wafuatiliaji",
    "thumb": "https://cdn2.pvvstream.pro/videos/-201700894/456242918/preview_800.jpg",
    "posterUrl": "https://m.media-amazon.com/images/M/MV5BMDI3OGJlOWUtNDhhZS00MjRiLTkyYWQtN2Q5ODAyZGNmYjJmXkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg",
    "videoUrl": "https://vz-6aac71b9-360.b-cdn.net/43224686-6a5a-43ac-a846-6caea94b43a7/play_360p.mp4",
    "downloadUrl": "https://vz-6aac71b9-360.b-cdn.net/43224686-6a5a-43ac-a846-6caea94b43a7/play_360p.mp4",
    "embedCode": "<div style=\"position:relative;padding-top:56.25%;\"><iframe src=\"https://iframe.mediadelivery.net/embed/285538/43224686-6a5a-43ac-a846-6caea94b43a7?autoplay=false&loop=false&muted=false&preload=true&responsive=true\" loading=\"lazy\" style=\"border:0;position:absolute;top:0;height:100%;width:100%;\" allow=\"accelerometer;gyroscope;autoplay;encrypted-media;picture-in-picture;\" allowfullscreen=\"true\"></iframe></div>",
    "description": "Felix ni kijana mwenye tamaa nyingi ambaye anakutana na mwanamke mwenye mvuto mkubwa atakayeishi nyumbani kwake na kumfundisha masuala ya mapenzi na mahusiano.\n",
    "tags": [
      "#Filipino",
      "#Comedy",
      "#Slapstick"
    ],
    "isTrending": false,
    "quality": "1080p Full HD",
    "likes": "7.4K"
  },
  {
    "id": "chimbotamu-m-14",
    "originId": "14",
    "source": "chimbiotamu.com",
    "title": "Sex Fury",
    "category": "filamu",
    "categoryName": "Filamu Kamili",
    "duration": "1h 29m",
    "views": "75.4K",
    "viewsCount": 66000,
    "timeAgo": "2026",
    "creator": "ChimboTamu Filamu",
    "creatorAvatar": "https://SwahiliPlay.b-cdn.net/chimbotamu.png",
    "subscribers": "120K Wafuatiliaji",
    "thumb": "https://eroticmv.com/wp-content/uploads/2022/11/sex-and-fury-1973.jpg",
    "posterUrl": "https://m.media-amazon.com/images/M/MV5BYTA0MGJhNjMtMDQ2MC00NDBlLWJiYTAtMTYwNmM3Njc5NWI5XkEyXkFqcGc@._V1_.jpg",
    "videoUrl": "https://vz-6aac71b9-360.b-cdn.net/92a87437-0333-4432-8d19-31d75a5198d3/play_360p.mp4",
    "downloadUrl": "https://vz-6aac71b9-360.b-cdn.net/92a87437-0333-4432-8d19-31d75a5198d3/play_360p.mp4",
    "embedCode": "<iframe src=\"https://iframe.mediadelivery.net/embed/285538/92a87437-0333-4432-8d19-31d75a5198d3?autoplay=false&loop=false&muted=false&preload=true&responsive=true\" loading=\"lazy\" style=\"border:0;position:absolute;inset:0;height:100%;width:100%;\" allow=\"accelerometer;gyroscope;autoplay;encrypted-media;picture-in-picture;fullscreen\" allowfullscreen></iframe>",
    "description": "Wakati wa enzi ya Meiji, mcheza kamari aitwaye Ochô analipiza kisasi dhidi ya viongozi watatu waliomuua baba yake, anamficha mwanamapinduzi anayesakwa na mamlaka, na anakutana na mwanamke mrembo lakini hatari kutoka Uingereza.",
    "tags": [
      "#Japanese",
      "#action",
      "#crime",
      "#drama",
      "#thriller"
    ],
    "isTrending": false,
    "quality": "1080p Full HD",
    "likes": "12.1K"
  },
  {
    "id": "chimbotamu-m-13",
    "originId": "13",
    "source": "chimbiotamu.com",
    "title": "Polar",
    "category": "filamu",
    "categoryName": "Filamu Kamili",
    "duration": "1h 57m",
    "views": "27.0K",
    "viewsCount": 65000,
    "timeAgo": "2019",
    "creator": "ChimboTamu Filamu",
    "creatorAvatar": "https://SwahiliPlay.b-cdn.net/chimbotamu.png",
    "subscribers": "120K Wafuatiliaji",
    "thumb": "https://img.pvvstream.pro/preview/Kqv1ZbyPoyt0JuEZPXltVg/-22878843_456240798/2048/sun9-71.vkuserphoto.ru/IxzqycAA-4LOLMb3QC9FFCIjEtomGEHx4os3wQ/M2AeAPiqiqM.jpg",
    "posterUrl": "https://www.tvguide.com/a/img/resize/7a7a8675713338635e2067c3414ae8ced596acbe/catalog/provider/2/13/2-53002de021e8a786dd4954c2f5bc17dc.jpg?auto=webp&fit=crop&height=300&width=200",
    "videoUrl": "https://vz-6aac71b9-360.b-cdn.net/2b6a1d11-84a8-43e8-b966-4ba4df9e0d0a/play_360p.mp4",
    "downloadUrl": "https://vz-6aac71b9-360.b-cdn.net/2b6a1d11-84a8-43e8-b966-4ba4df9e0d0a/play_360p.mp4",
    "embedCode": "<iframe src=\"https://iframe.mediadelivery.net/embed/285538/2b6a1d11-84a8-43e8-b966-4ba4df9e0d0a?autoplay=false&loop=false&muted=false&preload=true&responsive=true\" loading=\"lazy\" style=\"border:0;position:absolute;inset:0;height:100%;width:100%;\" allow=\"accelerometer;gyroscope;autoplay;encrypted-media;picture-in-picture;fullscreen\" allowfullscreen></iframe>",
    "description": "Sex",
    "tags": [
      "#Sex"
    ],
    "isTrending": false,
    "quality": "1080p Full HD",
    "likes": "14.4K"
  },
  {
    "id": "chimbotamu-m-12",
    "originId": "12",
    "source": "chimbiotamu.com",
    "title": "Nude with Guns",
    "category": "filamu",
    "categoryName": "Filamu Kamili",
    "duration": "1h 29h",
    "views": "63.1K",
    "viewsCount": 64000,
    "timeAgo": "2010",
    "creator": "ChimboTamu Filamu",
    "creatorAvatar": "https://SwahiliPlay.b-cdn.net/chimbotamu.png",
    "subscribers": "120K Wafuatiliaji",
    "thumb": "https://www.cinema-crazed.com/blog/wp-content/uploads/2010/12/nunsguns2.jpg",
    "posterUrl": "https://m.media-amazon.com/images/M/MV5BMjEyNzMzMTUzNl5BMl5BanBnXkFtZTcwMTUyNDMyNA@@._V1_.jpg",
    "videoUrl": "https://vz-6aac71b9-360.b-cdn.net/ba7bb33a-1df4-40c6-bc1b-c94ca1d30d30/play_360p.mp4",
    "downloadUrl": "https://vz-6aac71b9-360.b-cdn.net/ba7bb33a-1df4-40c6-bc1b-c94ca1d30d30/play_360p.mp4",
    "embedCode": "<iframe src=\"https://iframe.mediadelivery.net/embed/285538/ba7bb33a-1df4-40c6-bc1b-c94ca1d30d30?autoplay=false&loop=false&muted=false&preload=true&responsive=true\" loading=\"lazy\" style=\"border:0;position:absolute;inset:0;height:100%;width:100%;\" allow=\"accelerometer;gyroscope;autoplay;encrypted-media;picture-in-picture;fullscreen\" allowfullscreen></iframe>",
    "description": "Mtawa wa kike aliyeachwa akidhaniwa amekufa na kulazimishwa kuingia kwenye ukahaba anaingia kwenye safari ya kulipiza kisasi yenye mauti, akijiona anatenda kazi ya Mungu kwa kuwaadhibu wenye dhambi katika vita yake binafsi ya haki.",
    "tags": [
      "#Action",
      "#Comedy",
      "#Thriller",
      "#Nudes"
    ],
    "isTrending": false,
    "quality": "1080p Full HD",
    "likes": "9.4K"
  },
  {
    "id": "chimbotamu-m-11",
    "originId": "11",
    "source": "chimbiotamu.com",
    "title": "Desire",
    "category": "filamu",
    "categoryName": "Filamu Kamili",
    "duration": "1h 24m",
    "views": "53.7K",
    "viewsCount": 63000,
    "timeAgo": "2017",
    "creator": "ChimboTamu Filamu",
    "creatorAvatar": "https://SwahiliPlay.b-cdn.net/chimbotamu.png",
    "subscribers": "120K Wafuatiliaji",
    "thumb": "https://variety.com/wp-content/uploads/2018/06/desire-netflix.png",
    "posterUrl": "https://images.justwatch.com/poster/251791206/s718/desire-2017.jpg",
    "videoUrl": "https://vz-6aac71b9-360.b-cdn.net/079c3484-f906-44f4-a2e6-af764a4074ad/play_360p.mp4",
    "downloadUrl": "https://vz-6aac71b9-360.b-cdn.net/079c3484-f906-44f4-a2e6-af764a4074ad/play_360p.mp4",
    "embedCode": "<iframe src=\"https://iframe.mediadelivery.net/embed/285538/079c3484-f906-44f4-a2e6-af764a4074ad?autoplay=false&loop=false&muted=false&preload=true&responsive=true\" loading=\"lazy\" style=\"border:0;position:absolute;inset:0;height:100%;width:100%;\" allow=\"accelerometer;gyroscope;autoplay;encrypted-media;picture-in-picture;fullscreen\" allowfullscreen></iframe>",
    "description": "Lucía na Ofelia, dada wawili, hatimaye wanakutana tena baada ya miaka 7 kwenye harusi ya Lucía. Lakini Juan, mume wa Lucía, na Ofelia wanapokutana, wanahisi kana kwamba ndoto ya kuvuruga imevamia akili na miili yao.",
    "tags": [
      "#Comedy",
      "#Drama",
      "#Romance",
      "#Thriller"
    ],
    "isTrending": false,
    "quality": "1080p Full HD",
    "likes": "12.5K"
  },
  {
    "id": "chimbotamu-m-10",
    "originId": "10",
    "source": "chimbiotamu.com",
    "title": "Dayo",
    "category": "filamu",
    "categoryName": "Filamu Kamili",
    "duration": "1h 52m",
    "views": "22.6K",
    "viewsCount": 62000,
    "timeAgo": "2024",
    "creator": "ChimboTamu Filamu",
    "creatorAvatar": "https://SwahiliPlay.b-cdn.net/chimbotamu.png",
    "subscribers": "120K Wafuatiliaji",
    "thumb": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR6EgA7hnR7IecRs_uCDuXi1cFF9SoWvOu0ZQ&s",
    "posterUrl": "https://m.media-amazon.com/images/M/MV5BNjJlN2Q2ZWUtYThmNC00Mzk0LTkzNDYtYzg5NTc3YzI1YTRmXkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg",
    "videoUrl": "https://vz-6aac71b9-360.b-cdn.net/7b8a1b88-b6c6-413a-8dd3-b5668cdce9ff/play_360p.mp4",
    "downloadUrl": "https://vz-6aac71b9-360.b-cdn.net/7b8a1b88-b6c6-413a-8dd3-b5668cdce9ff/play_360p.mp4",
    "embedCode": "<iframe src=\"https://iframe.mediadelivery.net/embed/285538/7b8a1b88-b6c6-413a-8dd3-b5668cdce9ff?autoplay=false&loop=false&muted=false&preload=true&responsive=true\" loading=\"lazy\" style=\"border:0;position:absolute;inset:0;height:100%;width:100%;\" allow=\"accelerometer;gyroscope;autoplay;encrypted-media;picture-in-picture;fullscreen\" allowfullscreen></iframe>",
    "description": "Mcheza dansi wa klabu anaacha kila kitu na kuanza maisha mapya mahali ambapo hakuna anayemfahamu. Lakini inaonekana tamaa na vishawishi vinamfuata kila mahali anapoenda.",
    "tags": [
      "#Drama",
      "#Adult"
    ],
    "isTrending": false,
    "quality": "1080p Full HD",
    "likes": "8.5K"
  },
  {
    "id": "chimbotamu-m-9",
    "originId": "9",
    "source": "chimbiotamu.com",
    "title": "Cheaters",
    "category": "filamu",
    "categoryName": "Filamu Kamili",
    "duration": "0h 55m",
    "views": "25.4K",
    "viewsCount": 61000,
    "timeAgo": "2024",
    "creator": "ChimboTamu Filamu",
    "creatorAvatar": "https://SwahiliPlay.b-cdn.net/chimbotamu.png",
    "subscribers": "120K Wafuatiliaji",
    "thumb": "https://image.tmdb.org/t/p/original/zqXXFYSIxaN5qfRnShRSywtqmQC.jpg",
    "posterUrl": "https://m.media-amazon.com/images/M/MV5BYTE0ZDc3ZmQtMzc2MS00MGY4LWJjNTQtMmNlOGU3NzI1ZmEyXkEyXkFqcGc@._V1_QL75_UX190_CR0,2,190,281_.jpg",
    "videoUrl": "https://vz-6aac71b9-360.b-cdn.net/984c6adb-7d22-40cc-8450-c52524457a71/play_360p.mp4",
    "downloadUrl": "https://vz-6aac71b9-360.b-cdn.net/984c6adb-7d22-40cc-8450-c52524457a71/play_360p.mp4",
    "embedCode": "<iframe src=\"https://iframe.mediadelivery.net/embed/285538/984c6adb-7d22-40cc-8450-c52524457a71?autoplay=false&loop=false&muted=false&preload=true&responsive=true\" loading=\"lazy\" style=\"border:0;position:absolute;inset:0;height:100%;width:100%;\" allow=\"accelerometer;gyroscope;autoplay;encrypted-media;picture-in-picture;fullscreen\" allowfullscreen></iframe>",
    "description": "Wageni wawili wasiofahamiana wanakutana na kujikuta wakiwa na mvuto mkubwa wa kimapenzi kati yao, lakini baadaye wanagundua kuwa wote wawili tayari wako kwenye mahusiano na watu wengine. Je, wanawezaje kudumisha uhusiano ulioanza kwa ngono na usaliti?",
    "tags": [
      "#Drama",
      "#Adult"
    ],
    "isTrending": false,
    "quality": "1080p Full HD",
    "likes": "6.4K"
  },
  {
    "id": "chimbotamu-m-8",
    "originId": "8",
    "source": "chimbiotamu.com",
    "title": "Knock Knock",
    "category": "filamu",
    "categoryName": "Filamu Kamili",
    "duration": "1h 41m",
    "views": "56.5K",
    "viewsCount": 60000,
    "timeAgo": "2015",
    "creator": "ChimboTamu Filamu",
    "creatorAvatar": "https://SwahiliPlay.b-cdn.net/chimbotamu.png",
    "subscribers": "120K Wafuatiliaji",
    "thumb": "https://lionsgatelimited.com/cdn/shop/articles/KK_159_-_Ana_De_Armas_Bel_Keanu_Reeves_Evan_Lorenza_Izzo_Genesis_f61f9af0-d9ec-4f56-bda4-ae42c9fcfbf2.jpg?v=1757528543",
    "posterUrl": "https://m.media-amazon.com/images/M/MV5BMzc4YmQ5ODktZmY3Zi00NzE4LWEzMzUtOWI4NzNiODAyYjk0XkEyXkFqcGc@._V1_.jpg",
    "videoUrl": "https://vz-6aac71b9-360.b-cdn.net/9f42ef4a-6450-4bf3-8d2a-91cec265fab9/play_360p.mp4",
    "downloadUrl": "https://vz-6aac71b9-360.b-cdn.net/9f42ef4a-6450-4bf3-8d2a-91cec265fab9/play_360p.mp4",
    "embedCode": "<iframe src=\"https://iframe.mediadelivery.net/embed/285538/9f42ef4a-6450-4bf3-8d2a-91cec265fab9?autoplay=false&loop=false&muted=false&preload=true&responsive=true\" loading=\"lazy\" style=\"border:0;position:absolute;inset:0;height:100%;width:100%;\" allow=\"accelerometer;gyroscope;autoplay;encrypted-media;picture-in-picture;fullscreen\" allowfullscreen></iframe>",
    "description": "Mume na baba mwenye upendo anawasaidia wasichana wawili vijana waliokwama baada ya kubisha hodi mlangoni kwake, lakini wema wake unageuka kuwa kishawishi hatari na mchezo wa paka na panya wenye matokeo mabaya.",
    "tags": [
      "#Erotic",
      "#Crime",
      "#Thriller"
    ],
    "isTrending": false,
    "quality": "1080p Full HD",
    "likes": "10.7K"
  },
  {
    "id": "chimbotamu-m-7",
    "originId": "7",
    "source": "chimbiotamu.com",
    "title": "Fatale",
    "category": "filamu",
    "categoryName": "Filamu Kamili",
    "duration": "1h 44m",
    "views": "73.2K",
    "viewsCount": 59000,
    "timeAgo": "2020",
    "creator": "ChimboTamu Filamu",
    "creatorAvatar": "https://SwahiliPlay.b-cdn.net/chimbotamu.png",
    "subscribers": "120K Wafuatiliaji",
    "thumb": "https://variety.com/wp-content/uploads/2020/12/Fatale.jpg",
    "posterUrl": "https://m.media-amazon.com/images/M/MV5BYTQ4OTQyMGYtODc0Yy00MzcwLTkzOWQtNjNmNDIxN2QxODk4XkEyXkFqcGc@._V1_.jpg",
    "videoUrl": "https://vz-6aac71b9-360.b-cdn.net/9124f8cf-5fed-474e-a95f-979759f8da17/play_360p.mp4",
    "downloadUrl": "https://vz-6aac71b9-360.b-cdn.net/9124f8cf-5fed-474e-a95f-979759f8da17/play_360p.mp4",
    "embedCode": "<iframe src=\"https://iframe.mediadelivery.net/embed/285538/9124f8cf-5fed-474e-a95f-979759f8da17?autoplay=false&loop=false&muted=false&preload=true&responsive=true\" loading=\"lazy\" style=\"border:0;position:absolute;inset:0;height:100%;width:100%;\" allow=\"accelerometer;gyroscope;autoplay;encrypted-media;picture-in-picture;fullscreen\" allowfullscreen></iframe>",
    "description": "Baada ya usiku mmoja na mwanamke, mwanaume mmoja aliyefanikiwa na aliyeoa anajikuta ameingizwa katika uchunguzi mpya wa upelelezi wa polisi mwerevu.",
    "tags": [
      "#Drama",
      "#Mystery",
      "#Romance",
      "#Thriller"
    ],
    "isTrending": false,
    "quality": "1080p Full HD",
    "likes": "4.6K"
  }
];

// --- APP STATE MANAGEMENT ---
let appVideos = [];
let activeVideo = null;
let currentCategory = 'all';
let currentSearchTerm = '';
let currentSort = 'popular';
let watchlist = [];
let watchHistory = [];
let downloadedItems = [];
let isPlaying = false;
let controlsTimeout = null;

// Local Storage Keys
const STORAGE_KEYS = {
    VIDEOS: 'wakubwatz_custom_videos',
    WATCHLIST: 'wakubwatz_watchlist',
    HISTORY: 'wakubwatz_history',
    DOWNLOADS: 'wakubwatz_downloads',
    LIKES: 'wakubwatz_likes'
};

// --- INITIALIZATION ---
document.addEventListener('DOMContentLoaded', () => {
    initDatabase();
    initUIElements();
    initVideoPlayer();
    initEventListeners();
    renderFeed();
    updateBadges();
    updateHeroBanner();

    // Auto-sync in the background from chimbiotamu.com
    setTimeout(() => {
        syncFromChimboTamu(false);
    }, 1200);
});

// Load persistent data
function initDatabase() {
    const customVideos = JSON.parse(localStorage.getItem(STORAGE_KEYS.VIDEOS) || '[]');
    const cachedChimbo = JSON.parse(localStorage.getItem('wakubwatz_chimbotamu_cache') || '[]');
    
    // Combine custom uploads, cached chimbo videos, and default chimbo videos without duplicates
    const videoMap = new Map();
    DEFAULT_VIDEOS.forEach(v => videoMap.set(v.id, v));
    cachedChimbo.forEach(v => videoMap.set(v.id, v));
    customVideos.forEach(v => videoMap.set(v.id, v));
    appVideos = Array.from(videoMap.values());

    watchlist = JSON.parse(localStorage.getItem(STORAGE_KEYS.WATCHLIST) || '[]');
    watchHistory = JSON.parse(localStorage.getItem(STORAGE_KEYS.HISTORY) || '[]');
    downloadedItems = JSON.parse(localStorage.getItem(STORAGE_KEYS.DOWNLOADS) || '[]');
}

// UI Elements References
let videoPlayer, videoSource, playerWrapper, playerLoader, bigPlayBtn, customControls;
let playPauseBtn, progressBar, bufferBar, progressContainer, progressHandle;
let currentTimeEl, totalDurationEl, volumeSlider, volumeBtn;
let speedBtn, speedMenu, qualityBtn, qualityMenu, qualityLabel;
let pipBtn, theaterBtn, fullscreenBtn, rewindBtn, forwardBtn;

function initUIElements() {
    videoPlayer = document.getElementById('mainVideoPlayer');
    videoSource = document.getElementById('videoSource');
    playerWrapper = document.getElementById('playerWrapper');
    playerLoader = document.getElementById('playerLoader');
    bigPlayBtn = document.getElementById('bigPlayBtn');
    customControls = document.getElementById('customControls');
    
    playPauseBtn = document.getElementById('playPauseBtn');
    progressBar = document.getElementById('progressBar');
    bufferBar = document.getElementById('bufferBar');
    progressContainer = document.getElementById('progressContainer');
    progressHandle = document.getElementById('progressHandle');
    
    currentTimeEl = document.getElementById('currentTime');
    totalDurationEl = document.getElementById('totalDuration');
    volumeSlider = document.getElementById('volumeSlider');
    volumeBtn = document.getElementById('volumeBtn');
    
    speedBtn = document.getElementById('speedBtn');
    speedMenu = document.getElementById('speedMenu');
    qualityBtn = document.getElementById('qualityBtn');
    qualityMenu = document.getElementById('qualityMenu');
    qualityLabel = document.getElementById('qualityLabel');
    
    pipBtn = document.getElementById('pipBtn');
    theaterBtn = document.getElementById('theaterBtn');
    fullscreenBtn = document.getElementById('fullscreenBtn');
    rewindBtn = document.getElementById('rewindBtn');
    forwardBtn = document.getElementById('forwardBtn');
}

// --- RENDER VIDEO GRIDS ---
function renderFeed() {
    let filtered = [...appVideos];

    // Filter by Category
    if (currentCategory !== 'all') {
        filtered = filtered.filter(v => v.category.toLowerCase() === currentCategory.toLowerCase());
    }

    // Filter by Search
    if (currentSearchTerm.trim() !== '') {
        const term = currentSearchTerm.toLowerCase();
        filtered = filtered.filter(v => 
            v.title.toLowerCase().includes(term) ||
            v.creator.toLowerCase().includes(term) ||
            (v.tags && v.tags.some(t => t.toLowerCase().includes(term)))
        );
    }

    // Sort
    if (currentSort === 'popular') {
        filtered.sort((a, b) => b.viewsCount - a.viewsCount);
    } else if (currentSort === 'newest') {
        filtered.sort((a, b) => {
            const numA = parseInt(a.originId || (a.id && a.id.replace(/\D/g, '')) || 0, 10);
            const numB = parseInt(b.originId || (b.id && b.id.replace(/\D/g, '')) || 0, 10);
            return numB - numA;
        });
    } else if (currentSort === 'views') {
        filtered.sort((a, b) => b.viewsCount - a.viewsCount);
    } else if (currentSort === 'duration') {
        const parseDuration = (d) => {
            if (!d) return 0;
            const parts = d.split(':').map(Number);
            if (parts.length === 2) return parts[0] * 60 + parts[1];
            if (parts.length === 3) return parts[0] * 3600 + parts[1] * 60 + parts[2];
            return 0;
        };
        filtered.sort((a, b) => parseDuration(b.duration) - parseDuration(a.duration));
    }

    // Render Trending Row
    const trendingGrid = document.getElementById('trendingGrid');
    const trendingList = appVideos.filter(v => v.isTrending);
    document.getElementById('trendingCount').innerText = `${trendingList.length} Video`;
    trendingGrid.innerHTML = trendingList.map(v => createVideoCardHTML(v)).join('');

    // Render Main Grid
    const mainGrid = document.getElementById('mainVideoGrid');
    const feedCountEl = document.getElementById('feedCount');
    const emptyState = document.getElementById('emptyState');
    const feedSection = document.getElementById('feedSection');

    if (filtered.length === 0) {
        mainGrid.innerHTML = '';
        feedCountEl.innerText = '0 Video';
        emptyState.style.display = 'block';
    } else {
        emptyState.style.display = 'none';
        feedCountEl.innerText = `${filtered.length} Video`;
        mainGrid.innerHTML = filtered.map(v => createVideoCardHTML(v)).join('');
    }

    // Attach card event listeners
    attachCardListeners();
}

function createVideoCardHTML(video) {
    const isSaved = watchlist.includes(video.id);
    return `
        <div class="video-card" data-video-id="${video.id}">
            <div class="card-thumb-wrap">
                <img src="${video.thumb}" alt="${video.title}" class="card-thumb-img" loading="lazy">
                <div class="card-badges">
                    <span class="badge-tag hd">HD</span>
                    <span class="badge-tag">${video.category.toUpperCase()}</span>
                </div>
                <span class="card-duration">${video.duration}</span>
                <div class="card-hover-overlay">
                    <div class="play-hover-icon">
                        <i class="fa-solid fa-play"></i>
                    </div>
                </div>
            </div>

            <div class="card-details">
                <img src="${video.creatorAvatar}" alt="${video.creator}" class="creator-avatar-sm">
                <div class="card-text">
                    <h3 class="card-title" title="${video.title}">${video.title}</h3>
                    <div class="card-creator">
                        <span>${video.creator}</span>
                        <i class="fa-solid fa-circle-check"></i>
                    </div>
                    <div class="card-stats">
                        <span><i class="fa-solid fa-eye"></i> ${video.views}</span>
                        <span>•</span>
                        <span>${video.timeAgo}</span>
                    </div>
                </div>
            </div>

            <div class="card-quick-actions" onclick="event.stopPropagation();">
                <button class="btn-card-action dl-highlight" onclick="openDownloadModal('${video.id}')" title="Pakua Video Hii">
                    <i class="fa-solid fa-cloud-arrow-down"></i>
                    <span>Pakua</span>
                </button>
                <button class="btn-card-action" onclick="toggleWatchlist('${video.id}', event)" title="Hifadhi kwenye Orodha Yangu">
                    <i class="${isSaved ? 'fa-solid text-red' : 'fa-regular'} fa-bookmark"></i>
                    <span>${isSaved ? 'Imehifadhiwa' : 'Hifadhi'}</span>
                </button>
            </div>
        </div>
    `;
}

function attachCardListeners() {
    document.querySelectorAll('.video-card').forEach(card => {
        card.addEventListener('click', () => {
            const videoId = card.getAttribute('data-video-id');
            const found = appVideos.find(v => v.id === videoId);
            if (found) {
                openVideoPlayer(found);
            }
        });
    });
}

// --- VIDEO PLAYER LOGIC ---
function initVideoPlayer() {
    // Play/Pause Click
    playPauseBtn.addEventListener('click', togglePlayPause);
    bigPlayBtn.addEventListener('click', togglePlayPause);
    videoPlayer.addEventListener('click', togglePlayPause);

    // Rewind & Fast Forward (10s)
    rewindBtn.addEventListener('click', () => {
        videoPlayer.currentTime = Math.max(0, videoPlayer.currentTime - 10);
        showToast('Umerudi nyuma sekunde 10', 'info');
    });

    forwardBtn.addEventListener('click', () => {
        videoPlayer.currentTime = Math.min(videoPlayer.duration, videoPlayer.currentTime + 10);
        showToast('Umesonga mbele sekunde 10', 'info');
    });

    // Time update & Progress
    videoPlayer.addEventListener('timeupdate', updatePlayerProgress);

    // Buffer indicator
    videoPlayer.addEventListener('progress', updateBufferProgress);

    // Waiting / Buffering State
    videoPlayer.addEventListener('waiting', () => {
        playerLoader.classList.add('active');
    });

    videoPlayer.addEventListener('playing', () => {
        playerLoader.classList.remove('active');
        bigPlayBtn.classList.add('hidden');
        playPauseBtn.innerHTML = '<i class="fa-solid fa-pause"></i>';
        isPlaying = true;
    });

    videoPlayer.addEventListener('pause', () => {
        bigPlayBtn.classList.remove('hidden');
        playPauseBtn.innerHTML = '<i class="fa-solid fa-play"></i>';
        isPlaying = false;
    });

    // Video Ended: Auto recommend next
    videoPlayer.addEventListener('ended', () => {
        isPlaying = false;
        playPauseBtn.innerHTML = '<i class="fa-solid fa-rotate-right"></i>';
        showToast('Video imekwisha. Inapakia inayofuata...', 'info');
        playNextRecommendation();
    });

    // Volume & Mute
    volumeSlider.addEventListener('input', (e) => {
        videoPlayer.volume = e.target.value;
        if (e.target.value == 0) {
            volumeBtn.innerHTML = '<i class="fa-solid fa-volume-xmark"></i>';
        } else if (e.target.value < 0.5) {
            volumeBtn.innerHTML = '<i class="fa-solid fa-volume-low"></i>';
        } else {
            volumeBtn.innerHTML = '<i class="fa-solid fa-volume-high"></i>';
        }
    });

    volumeBtn.addEventListener('click', () => {
        if (videoPlayer.muted) {
            videoPlayer.muted = false;
            volumeSlider.value = videoPlayer.volume || 0.8;
            volumeBtn.innerHTML = '<i class="fa-solid fa-volume-high"></i>';
        } else {
            videoPlayer.muted = true;
            volumeSlider.value = 0;
            volumeBtn.innerHTML = '<i class="fa-solid fa-volume-xmark"></i>';
        }
    });

    // Scrub / Seek on Click and Drag
    let isProgressDragging = false;
    progressContainer.addEventListener('mousedown', (e) => {
        isProgressDragging = true;
        seekVideo(e);
    });
    document.addEventListener('mousemove', (e) => {
        if (isProgressDragging) {
            seekVideo(e);
        }
    });
    document.addEventListener('mouseup', () => {
        if (isProgressDragging) {
            isProgressDragging = false;
        }
    });

    // Mobile Touch Scrubbing
    progressContainer.addEventListener('touchstart', (e) => {
        isProgressDragging = true;
        if (e.touches && e.touches[0]) seekVideoTouch(e.touches[0]);
    }, { passive: true });
    document.addEventListener('touchmove', (e) => {
        if (isProgressDragging && e.touches && e.touches[0]) seekVideoTouch(e.touches[0]);
    }, { passive: true });
    document.addEventListener('touchend', () => {
        isProgressDragging = false;
    });

    function seekVideoTouch(touch) {
        const rect = progressContainer.getBoundingClientRect();
        const pos = Math.max(0, Math.min(1, (touch.clientX - rect.left) / rect.width));
        if (videoPlayer.duration) {
            videoPlayer.currentTime = pos * videoPlayer.duration;
        }
    }
    
    // Time tooltip on hover
    const timeTooltip = document.getElementById('timeTooltip');
    progressContainer.addEventListener('mousemove', (e) => {
        const rect = progressContainer.getBoundingClientRect();
        const pos = (e.clientX - rect.left) / rect.width;
        const targetTime = pos * videoPlayer.duration;
        if (!isNaN(targetTime)) {
            timeTooltip.style.left = `${e.clientX - rect.left}px`;
            timeTooltip.style.display = 'block';
            timeTooltip.innerText = formatTime(targetTime);
        }
    });
    progressContainer.addEventListener('mouseleave', () => {
        timeTooltip.style.display = 'none';
    });

    // Speed Menu
    speedBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        speedMenu.classList.toggle('active');
        qualityMenu.classList.remove('active');
    });

    document.querySelectorAll('#speedMenu .menu-item').forEach(item => {
        item.addEventListener('click', () => {
            const speed = parseFloat(item.getAttribute('data-speed'));
            videoPlayer.playbackRate = speed;
            speedBtn.innerText = `${speed}x`;
            document.querySelectorAll('#speedMenu .menu-item').forEach(i => i.classList.remove('active'));
            item.classList.add('active');
            speedMenu.classList.remove('active');
            showToast(`Kasi ya video: ${speed}x`, 'info');
        });
    });

    // Quality Menu
    qualityBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        qualityMenu.classList.toggle('active');
        speedMenu.classList.remove('active');
    });

    document.querySelectorAll('#qualityMenu .menu-item').forEach(item => {
        item.addEventListener('click', () => {
            const res = item.getAttribute('data-res');
            qualityLabel.innerText = res.toUpperCase();
            document.querySelectorAll('#qualityMenu .menu-item').forEach(i => i.classList.remove('active'));
            item.classList.add('active');
            qualityMenu.classList.remove('active');

            if (activeVideo && activeVideo.videoUrl && activeVideo.videoUrl.includes('play_')) {
                const currentSec = videoPlayer.currentTime;
                const wasPlaying = !videoPlayer.paused;
                const newResUrl = activeVideo.videoUrl.replace(/play_\d+p\.mp4/, `play_${res}.mp4`);
                const playUrl = getPlayableUrl(newResUrl);
                videoPlayer.src = playUrl;
                if (videoSource) videoSource.src = playUrl;
                videoPlayer.currentTime = currentSec;
                if (wasPlaying) videoPlayer.play().catch(() => {});
            }
            showToast(`Ubora umechaguliwa: ${res.toUpperCase()} (Streaming safi)`, 'success');
        });
    });

    // Close menus on outside click
    document.addEventListener('click', () => {
        speedMenu.classList.remove('active');
        qualityMenu.classList.remove('active');
    });

    // Picture in Picture
    pipBtn.addEventListener('click', async () => {
        try {
            if (document.pictureInPictureElement) {
                await document.exitPictureInPicture();
            } else if (videoPlayer !== document.pictureInPictureElement) {
                await videoPlayer.requestPictureInPicture();
            }
        } catch (err) {
            showToast('Picture-in-Picture haipatikani kwenye kifaa hiki.', 'info');
        }
    });

    // Theater Mode
    theaterBtn.addEventListener('click', () => {
        playerWrapper.classList.toggle('theater-mode');
        showToast('Mfumo wa Sinema umebadilishwa', 'info');
    });

    // Fullscreen Mode
    fullscreenBtn.addEventListener('click', () => {
        if (!document.fullscreenElement) {
            if (playerWrapper.requestFullscreen) {
                playerWrapper.requestFullscreen();
            }
            fullscreenBtn.innerHTML = '<i class="fa-solid fa-compress"></i>';
        } else {
            if (document.exitFullscreen) {
                document.exitFullscreen();
            }
            fullscreenBtn.innerHTML = '<i class="fa-solid fa-maximize"></i>';
        }
    });

    // Hide controls on idle during play
    playerWrapper.addEventListener('mousemove', resetControlsTimeout);
    playerWrapper.addEventListener('mouseleave', () => {
        if (isPlaying) customControls.classList.add('fade-out');
    });

    // Keyboard Shortcuts
    document.addEventListener('keydown', handleKeyboardShortcuts);
}

function resetControlsTimeout() {
    customControls.classList.remove('fade-out');
    clearTimeout(controlsTimeout);
    if (isPlaying) {
        controlsTimeout = setTimeout(() => {
            customControls.classList.add('fade-out');
        }, 3500);
    }
}

function handleKeyboardShortcuts(e) {
    const modalActive = document.getElementById('videoModalBackdrop').classList.contains('active');
    if (!modalActive) return;

    // Ignore if typing in comment or input
    if (e.target.tagName === 'INPUT' || e.target.tagName === 'TEXTAREA') return;

    if (e.key === ' ' || e.key === 'k') {
        e.preventDefault();
        togglePlayPause();
    } else if (e.key === 'ArrowRight') {
        e.preventDefault();
        videoPlayer.currentTime = Math.min(videoPlayer.duration, videoPlayer.currentTime + 10);
    } else if (e.key === 'ArrowLeft') {
        e.preventDefault();
        videoPlayer.currentTime = Math.max(0, videoPlayer.currentTime - 10);
    } else if (e.key === 'f') {
        e.preventDefault();
        fullscreenBtn.click();
    } else if (e.key === 'm') {
        e.preventDefault();
        volumeBtn.click();
    } else if (e.key === 'Escape') {
        closeVideoPlayerModal();
    }
}

function togglePlayPause() {
    if (videoPlayer.paused || videoPlayer.ended) {
        videoPlayer.play().catch(e => console.log('Autoplay blocked:', e));
    } else {
        videoPlayer.pause();
    }
}

function updatePlayerProgress() {
    if (!videoPlayer.duration) return;
    const current = videoPlayer.currentTime;
    const duration = videoPlayer.duration;
    const percent = (current / duration) * 100;
    
    progressBar.style.width = `${percent}%`;
    progressHandle.style.left = `${percent}%`;
    
    currentTimeEl.innerText = formatTime(current);
    totalDurationEl.innerText = formatTime(duration);
}

function updateBufferProgress() {
    if (videoPlayer.buffered.length > 0 && videoPlayer.duration) {
        const bufferedEnd = videoPlayer.buffered.end(videoPlayer.buffered.length - 1);
        const percent = (bufferedEnd / videoPlayer.duration) * 100;
        bufferBar.style.width = `${percent}%`;
    }
}

function seekVideo(e) {
    const rect = progressContainer.getBoundingClientRect();
    const pos = (e.clientX - rect.left) / rect.width;
    videoPlayer.currentTime = pos * videoPlayer.duration;
}

function formatTime(seconds) {
    if (isNaN(seconds)) return "00:00";
    const mins = Math.floor(seconds / 60);
    const secs = Math.floor(seconds % 60);
    return `${mins < 10 ? '0' : ''}${mins}:${secs < 10 ? '0' : ''}${secs}`;
}

// --- DUAL-MODE FAST STREAMING & CUSTOM VIDEO PLAYER ---
let currentPlayerMode = 'fast'; // 'fast' (ChimboTamu direct embed - Zero buffering lag) or 'custom' (HTML5)

function togglePlayerMode() {
    currentPlayerMode = (currentPlayerMode === 'fast') ? 'custom' : 'fast';
    const label = document.getElementById('playerModeLabel');
    const toggleBtn = document.getElementById('togglePlayerModeBtn');

    if (currentPlayerMode === 'fast') {
        if (label) label.innerText = 'Fast Stream';
        if (toggleBtn) {
            toggleBtn.style.color = '#10b981';
            toggleBtn.style.borderColor = 'rgba(16, 185, 129, 0.4)';
            toggleBtn.style.background = 'rgba(16, 185, 129, 0.15)';
        }
        showToast('Mtindo: Fast Direct Stream (Zero Buffering)', 'success');
    } else {
        if (label) label.innerText = 'Custom Player';
        if (toggleBtn) {
            toggleBtn.style.color = '#ff2a4d';
            toggleBtn.style.borderColor = 'rgba(255, 42, 77, 0.4)';
            toggleBtn.style.background = 'rgba(255, 42, 77, 0.15)';
        }
        showToast('Mtindo: Custom HTML5 Player', 'info');
    }

    if (activeVideo) {
        setupActivePlayer(activeVideo);
    }
}

function getPlayableUrl(url) {
    if (!url) return '';
    if (url.startsWith('blob:') || url.startsWith('data:')) return url;
    if (window.location.protocol.startsWith('http')) {
        return '/api/proxy-video?url=' + encodeURIComponent(url);
    }
    return url;
}

function setupActivePlayer(video) {
    const embedContainer = document.getElementById('embedStreamContainer');
    const embedIframe = document.getElementById('mainEmbedIframe');
    const customControls = document.getElementById('customControls');
    const bigPlayBtn = document.getElementById('bigPlayBtn');
    const playerLoader = document.getElementById('playerLoader');

    if (currentPlayerMode === 'fast') {
        // FAST DIRECT EMBED: Streams instantly from Bunny CDN with zero delay
        videoPlayer.pause();
        videoPlayer.style.display = 'none';
        if (customControls) customControls.style.display = 'none';
        if (bigPlayBtn) bigPlayBtn.classList.add('hidden');
        if (playerLoader) {
            playerLoader.classList.remove('active');
            playerLoader.style.display = 'none';
        }

        if (embedContainer) embedContainer.style.display = 'block';
        if (embedIframe) {
            let streamUrl = video.videoUrl || '';
            if (streamUrl.includes('b-cdn.net') && !streamUrl.includes('?')) {
                streamUrl += '?autoplay=true&loop=false&muted=false&preload=true&responsive=true';
            }
            embedIframe.src = streamUrl;
        }
    } else {
        // CUSTOM HTML5 PLAYER
        if (embedIframe) embedIframe.src = 'about:blank';
        if (embedContainer) embedContainer.style.display = 'none';

        videoPlayer.style.display = 'block';
        if (customControls) customControls.style.display = 'flex';
        if (playerLoader) {
            playerLoader.style.display = 'flex';
            playerLoader.classList.remove('active');
        }

        const playUrl = getPlayableUrl(video.videoUrl);
        videoPlayer.src = playUrl;
        if (videoSource) videoSource.src = playUrl;
        videoPlayer.load();

        videoPlayer.play().then(() => {
            isPlaying = true;
            if (bigPlayBtn) bigPlayBtn.classList.add('hidden');
            if (playPauseBtn) playPauseBtn.innerHTML = '<i class="fa-solid fa-pause"></i>';
        }).catch(() => {
            if (bigPlayBtn) bigPlayBtn.classList.remove('hidden');
            if (playPauseBtn) playPauseBtn.innerHTML = '<i class="fa-solid fa-play"></i>';
        });
    }
}

function openVideoPlayer(video) {
    activeVideo = video;

    setupActivePlayer(video);

    // Set UI Texts
    document.getElementById('playerVideoTitle').innerText = video.title;
    document.getElementById('metaVideoTitle').innerText = video.title;
    document.getElementById('metaViews').innerText = video.views;
    document.getElementById('metaTimeAgo').innerText = video.timeAgo;
    document.getElementById('metaCategory').innerText = (video.categoryName || video.category || 'VIDEO').toUpperCase();
    document.getElementById('metaDescription').innerText = video.description || video.title;
    document.getElementById('metaCreatorName').innerText = video.creator || 'ChimboTamu';
    document.getElementById('metaCreatorSubs').innerText = video.subscribers || '100K Wafuatiliaji';
    document.getElementById('metaCreatorAvatar').src = video.creatorAvatar || 'https://SwahiliPlay.b-cdn.net/chimbotamu.png';
    document.getElementById('likeCount').innerText = video.likes || "14.2K";

    // Tags
    const tagsBox = document.getElementById('metaTags');
    tagsBox.innerHTML = (video.tags || ['#WakubwaTz', '#ChimboTamu']).map(t => `<span class="tag">${t}</span>`).join('');

    // Update Action Buttons
    const isSaved = watchlist.includes(video.id);
    const favBtn = document.getElementById('actionFavBtn');
    favBtn.innerHTML = `<i class="${isSaved ? 'fa-solid text-red' : 'fa-regular'} fa-heart"></i> <span>${isSaved ? 'Imehifadhiwa' : 'Hifadhi'}</span>`;

    // Render Related Videos
    renderRelatedVideos(video);

    // Render Comments
    renderComments(video.id);

    // Save to Watch History
    addToHistory(video);

    // Open Modal
    const modalBackdrop = document.getElementById('videoModalBackdrop');
    modalBackdrop.classList.add('active');
    document.body.style.overflow = 'hidden';

    // Increment Views
    video.viewsCount += 1;
}

function closeVideoPlayerModal() {
    // Immediately stop iframe stream and audio
    const embedIframe = document.getElementById('mainEmbedIframe');
    if (embedIframe) embedIframe.src = 'about:blank';

    // Stop HTML5 video
    videoPlayer.pause();
    videoPlayer.removeAttribute('src');
    if (videoSource) videoSource.removeAttribute('src');
    videoPlayer.load();

    const modalBackdrop = document.getElementById('videoModalBackdrop');
    modalBackdrop.classList.remove('active');
    document.body.style.overflow = 'auto';
    activeVideo = null;
    isPlaying = false;
}

function playNextRecommendation() {
    if (!activeVideo) return;
    const currentIndex = appVideos.findIndex(v => v.id === activeVideo.id);
    const nextIndex = (currentIndex + 1) % appVideos.length;
    setTimeout(() => {
        openVideoPlayer(appVideos[nextIndex]);
    }, 1200);
}

function renderRelatedVideos(current) {
    const listEl = document.getElementById('relatedVideosList');
    const related = appVideos.filter(v => v.id !== current.id).slice(0, 6);
    
    listEl.innerHTML = related.map(v => `
        <div class="related-card" onclick="openVideoPlayer(appVideos.find(x => x.id === '${v.id}'))">
            <div class="related-thumb">
                <img src="${v.thumb}" alt="${v.title}">
                <span class="related-duration">${v.duration}</span>
            </div>
            <div class="related-info">
                <h4 class="related-card-title">${v.title}</h4>
                <span class="related-creator">${v.creator}</span>
                <span class="related-views">${v.views} • ${v.timeAgo}</span>
            </div>
        </div>
    `).join('');
}

// --- COMMENTS ENGINE ---
function getCommentsKey(videoId) {
    return `wkb_comments_${videoId}`;
}

function renderComments(videoId) {
    const listEl = document.getElementById('commentsList');
    const countEl = document.getElementById('commentsCount');
    
    let comments = JSON.parse(localStorage.getItem(getCommentsKey(videoId)) || 'null');
    if (!comments) {
        comments = [
            {
                name: "Rashid Ally",
                avatar: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&w=120&q=80",
                time: "Masaa 2 yaliyopita",
                text: "WakubwaTz hii website ni moto sana! Streaming inakwenda bila kuganda kabisa na download ni fasta sana. Safi sana!"
            },
            {
                name: "Amina Salim",
                avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=120&q=80",
                time: "Siku 1 iliyopita",
                text: "Video safi ya 4K, sauti nzuri! Nimeipakua kwa urahisi sana kwenye simu yangu."
            }
        ];
        localStorage.setItem(getCommentsKey(videoId), JSON.stringify(comments));
    }

    countEl.innerText = comments.length;
    listEl.innerHTML = comments.map(c => `
        <div class="comment-item">
            <img src="${c.avatar}" alt="${c.name}" class="comment-avatar">
            <div class="comment-body">
                <div class="comment-header">
                    <span class="comment-author">${c.name}</span>
                    <span class="comment-time">${c.time}</span>
                </div>
                <p class="comment-content">${c.text}</p>
            </div>
        </div>
    `).join('');
}

function postNewComment() {
    if (!activeVideo) return;
    const input = document.getElementById('newCommentInput');
    const text = input.value.trim();
    if (!text) {
        showToast('Tafadhali andika maoni yako kwanza!', 'info');
        return;
    }

    const key = getCommentsKey(activeVideo.id);
    const comments = JSON.parse(localStorage.getItem(key) || '[]');
    comments.unshift({
        name: "Wewe (Mtumiaji)",
        avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=120&q=80",
        time: "Sasa hivi",
        text: text
    });

    localStorage.setItem(key, JSON.stringify(comments));
    input.value = '';
    renderComments(activeVideo.id);
    showToast('Maoni yako yamechapishwa!', 'success');
}

// --- VIDEO DOWNLOAD ENGINE ---
let currentDownloadVideo = null;

function openDownloadModal(videoId) {
    const video = appVideos.find(v => v.id === videoId) || activeVideo;
    if (!video) return;

    currentDownloadVideo = video;
    document.getElementById('downloadVideoTitle').innerText = video.title;
    document.getElementById('downloadProgressBox').style.display = 'none';
    document.getElementById('dlBarFill').style.width = '0%';
    document.getElementById('downloadModal').classList.add('active');
}

function closeDownloadModal() {
    document.getElementById('downloadModal').classList.remove('active');
}

function executeDownload(quality, estimatedSize) {
    if (!currentDownloadVideo) return;
    
    const progressBox = document.getElementById('downloadProgressBox');
    const statusText = document.getElementById('dlStatusText');
    const percentText = document.getElementById('dlPercentText');
    const barFill = document.getElementById('dlBarFill');

    progressBox.style.display = 'block';
    statusText.innerText = `Inaanza kupakua faili la ${quality.toUpperCase()} (${estimatedSize})...`;
    
    let progress = 0;
    const interval = setInterval(() => {
        progress += Math.floor(Math.random() * 18) + 12;
        if (progress > 100) progress = 100;

        barFill.style.width = `${progress}%`;
        percentText.innerText = `${progress}%`;

        if (progress >= 100) {
            clearInterval(interval);
            statusText.innerText = "Imekamilika! Faili limewekwa kwenye 'Downloads' yako.";
            showToast(`Ufanisi: '${currentDownloadVideo.title.substring(0, 30)}...' imepakuliwa (${quality.toUpperCase()})`, 'success');

            // Trigger real direct browser download of the video file
            triggerBrowserDownload(currentDownloadVideo.videoUrl, `${currentDownloadVideo.title.replace(/[^a-zA-Z0-9]/g, '_')}_${quality}.mp4`);

            // Save to Downloads History
            saveDownloadedRecord(currentDownloadVideo, quality, estimatedSize);

            setTimeout(() => {
                closeDownloadModal();
            }, 1800);
        }
    }, 250);
}

function triggerBrowserDownload(url, filename) {
    // Create hidden anchor with download attribute
    const a = document.createElement('a');
    a.href = url;
    a.download = filename;
    a.target = '_blank';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
}

function saveDownloadedRecord(video, quality, size) {
    const record = {
        id: 'dl-' + Date.now(),
        videoId: video.id,
        title: video.title,
        quality: quality.toUpperCase(),
        size: size,
        date: new Date().toLocaleDateString('sw-TZ'),
        videoUrl: video.videoUrl
    };

    downloadedItems.unshift(record);
    localStorage.setItem(STORAGE_KEYS.DOWNLOADS, JSON.stringify(downloadedItems));
    updateBadges();
    renderDownloadsDrawer();
}

function renderDownloadsDrawer() {
    const listEl = document.getElementById('downloadsDrawerList');
    const countEl = document.getElementById('drawerDlCount');
    countEl.innerText = downloadedItems.length;

    if (downloadedItems.length === 0) {
        listEl.innerHTML = `
            <div class="drawer-empty">
                <i class="fa-solid fa-cloud-arrow-down"></i>
                <p>Bado haujapakua video yoyote.</p>
                <span>Bofya kitufe cha 'Pakua' kwenye video yoyote kuanza upakuaji wa kasi.</span>
            </div>
        `;
        return;
    }

    listEl.innerHTML = downloadedItems.map(item => `
        <div class="dl-item-card">
            <span class="dl-item-title" style="cursor: pointer;" onclick="playDownloadedItem('${item.videoId}')">${item.title}</span>
            <div class="dl-item-meta">
                <span><i class="fa-solid fa-file-video"></i> ${item.quality} (${item.size})</span>
                <span>${item.date}</span>
            </div>
            <div style="display: flex; gap: 8px; margin-top: 8px;">
                <button class="dl-item-btn" onclick="playDownloadedItem('${item.videoId}')" style="background: var(--primary-red); border: none; color: #fff; padding: 6px 12px; border-radius: 6px; cursor: pointer; font-size: 0.8rem; font-weight: 600; display: flex; align-items: center; gap: 6px;">
                    <i class="fa-solid fa-play"></i> Tazama Sasa
                </button>
                <a href="${item.videoUrl}" download="${item.title}.mp4" class="dl-item-btn" style="text-decoration: none;">
                    <i class="fa-solid fa-download"></i> Pakua Tena
                </a>
            </div>
        </div>
    `).join('');
}

function playDownloadedItem(videoId) {
    const found = appVideos.find(v => v.id === videoId);
    if (found) {
        document.getElementById('downloadsDrawerBackdrop').classList.remove('active');
        openVideoPlayer(found);
    } else {
        showToast('Video hii inapatikana kwenye kumbukumbu yako ya kupakua.', 'info');
    }
}

// --- WATCHLIST & HISTORY ---
function toggleWatchlist(videoId, event) {
    if (event) event.stopPropagation();
    
    const index = watchlist.indexOf(videoId);
    if (index === -1) {
        watchlist.push(videoId);
        showToast('Imehifadhiwa kwenye Orodha Yako (Watchlist)', 'success');
    } else {
        watchlist.splice(index, 1);
        showToast('Imeondolewa kwenye Orodha Yako', 'info');
    }

    localStorage.setItem(STORAGE_KEYS.WATCHLIST, JSON.stringify(watchlist));
    updateBadges();
    renderFeed();

    // If modal is open
    if (activeVideo && activeVideo.id === videoId) {
        const isSaved = watchlist.includes(videoId);
        document.getElementById('actionFavBtn').innerHTML = `<i class="${isSaved ? 'fa-solid text-red' : 'fa-regular'} fa-heart"></i> <span>${isSaved ? 'Imehifadhiwa' : 'Hifadhi'}</span>`;
    }
}

function addToHistory(video) {
    watchHistory = watchHistory.filter(id => id !== video.id);
    watchHistory.unshift(video.id);
    if (watchHistory.length > 50) watchHistory.pop();
    localStorage.setItem(STORAGE_KEYS.HISTORY, JSON.stringify(watchHistory));
}

function updateBadges() {
    const favBadge = document.getElementById('favCountBadge');
    const dlBadge = document.getElementById('downloadCountBadge');

    if (watchlist.length > 0) {
        favBadge.style.display = 'flex';
        favBadge.innerText = watchlist.length;
    } else {
        favBadge.style.display = 'none';
    }

    if (downloadedItems.length > 0) {
        dlBadge.style.display = 'flex';
        dlBadge.innerText = downloadedItems.length;
    } else {
        dlBadge.style.display = 'none';
    }
}

// --- UPLOAD VIDEO HANDLER ---
function handleUploadSubmit(e) {
    e.preventDefault();

    const title = document.getElementById('newVideoTitle').value.trim();
    const category = document.getElementById('newVideoCategory').value;
    const duration = document.getElementById('newVideoDuration').value.trim() || '05:00';
    let videoUrl = document.getElementById('newVideoUrl').value.trim();
    let thumb = document.getElementById('newVideoThumb').value.trim();
    const desc = document.getElementById('newVideoDesc').value.trim();
    const localFile = document.getElementById('localVideoFile').files[0];

    if (localFile) {
        videoUrl = URL.createObjectURL(localFile);
    }

    if (!thumb) {
        thumb = 'https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?auto=format&fit=crop&w=800&q=80';
    }

    const newVideo = {
        id: 'wkb-user-' + Date.now(),
        title: title,
        category: category,
        duration: duration,
        views: "1 View",
        viewsCount: 1,
        timeAgo: "Sasa hivi",
        creator: "Wewe (Studio)",
        creatorAvatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=120&q=80",
        subscribers: "1 Mfuatiliaji",
        thumb: thumb,
        videoUrl: videoUrl,
        description: desc || "Video mpya iliyopakiwa kwenye mtandao wa WakubwaTz.",
        tags: [`#${category}`, '#WakubwaTz', '#NewVideo'],
        isTrending: true,
        quality: "1080p HD",
        likes: "1"
    };

    // Save to custom videos list
    const existingCustom = JSON.parse(localStorage.getItem(STORAGE_KEYS.VIDEOS) || '[]');
    existingCustom.unshift(newVideo);
    localStorage.setItem(STORAGE_KEYS.VIDEOS, JSON.stringify(existingCustom));

    appVideos.unshift(newVideo);
    renderFeed();
    closeUploadModal();
    document.getElementById('uploadVideoForm').reset();
    showToast(`Video yako '${title.substring(0, 25)}...' imechapishwa kikamilifu!`, 'success');

    // Auto open uploaded video
    setTimeout(() => {
        openVideoPlayer(newVideo);
    }, 500);
}

function openUploadModal() {
    document.getElementById('uploadModal').classList.add('active');
}

function closeUploadModal() {
    document.getElementById('uploadModal').classList.remove('active');
}

// --- SHARE MODAL HANDLER ---
function openShareModal() {
    if (!activeVideo) return;
    const shareUrl = `${window.location.origin}${window.location.pathname}?v=${activeVideo.id}`;
    document.getElementById('shareUrlInput').value = shareUrl;

    const encodedText = encodeURIComponent(`Tazama video hii kali ya "${activeVideo.title}" kwenye WakubwaTz: `);
    const encodedUrl = encodeURIComponent(shareUrl);

    document.getElementById('shareWhatsapp').href = `https://api.whatsapp.com/send?text=${encodedText}${encodedUrl}`;
    document.getElementById('shareTelegram').href = `https://t.me/share/url?url=${encodedUrl}&text=${encodedText}`;
    document.getElementById('shareFacebook').href = `https://www.facebook.com/sharer/sharer.php?u=${encodedUrl}`;
    document.getElementById('shareTwitter').href = `https://twitter.com/intent/tweet?text=${encodedText}&url=${encodedUrl}`;

    document.getElementById('shareModal').classList.add('active');
}

function closeShareModal() {
    document.getElementById('shareModal').classList.remove('active');
}

function copyShareUrl() {
    const input = document.getElementById('shareUrlInput');
    input.select();
    input.setSelectionRange(0, 99999);
    navigator.clipboard.writeText(input.value);
    showToast('Link imenakiliwa kwenye clipboard!', 'success');
}

// --- TOAST NOTIFICATIONS ---
function showToast(message, type = 'info') {
    const container = document.getElementById('toastContainer');
    const toast = document.createElement('div');
    toast.className = `toast toast-${type}`;
    
    let icon = '<i class="fa-solid fa-circle-info"></i>';
    if (type === 'success') icon = '<i class="fa-solid fa-circle-check" style="color: #10b981;"></i>';
    if (type === 'error') icon = '<i class="fa-solid fa-circle-exclamation" style="color: #ef4444;"></i>';

    toast.innerHTML = `${icon} <span>${message}</span>`;
    container.appendChild(toast);

    setTimeout(() => {
        toast.style.opacity = '0';
        toast.style.transform = 'translateX(100%)';
        setTimeout(() => toast.remove(), 300);
    }, 3800);
}

// --- EVENT LISTENERS ---
function initEventListeners() {
    // Mobile Menu Toggle
    const menuToggle = document.getElementById('menuToggle');
    const sidebar = document.getElementById('sidebar');
    menuToggle.addEventListener('click', () => {
        sidebar.classList.toggle('open');
    });

    // Close sidebar on click outside on mobile
    document.addEventListener('click', (e) => {
        if (sidebar.classList.contains('open') && !sidebar.contains(e.target) && !menuToggle.contains(e.target)) {
            sidebar.classList.remove('open');
        }
    });

    // Logo Click -> Go to Home
    document.getElementById('logoBtn').addEventListener('click', () => {
        currentCategory = 'all';
        currentSearchTerm = '';
        document.getElementById('searchInput').value = '';
        document.getElementById('clearSearchBtn').style.display = 'none';
        updateActiveSidebar('home');
        updateActiveCategoryPills('all');
        renderFeed();
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });

    // Search Input
    const searchInput = document.getElementById('searchInput');
    const clearSearchBtn = document.getElementById('clearSearchBtn');
    searchInput.addEventListener('input', (e) => {
        currentSearchTerm = e.target.value;
        clearSearchBtn.style.display = currentSearchTerm ? 'block' : 'none';
        renderFeed();
    });

    clearSearchBtn.addEventListener('click', () => {
        searchInput.value = '';
        currentSearchTerm = '';
        clearSearchBtn.style.display = 'none';
        renderFeed();
    });

    document.getElementById('resetSearchBtn').addEventListener('click', () => {
        searchInput.value = '';
        currentSearchTerm = '';
        currentCategory = 'all';
        updateActiveCategoryPills('all');
        renderFeed();
    });

    // Sort Select
    document.getElementById('sortSelect').addEventListener('change', (e) => {
        currentSort = e.target.value;
        renderFeed();
    });

    // Sidebar Nav Views
    document.querySelectorAll('.nav-links li').forEach(item => {
        item.addEventListener('click', () => {
            const view = item.getAttribute('data-view');
            document.querySelectorAll('.nav-links li').forEach(l => l.classList.remove('active'));
            item.classList.add('active');

            if (view === 'home') {
                currentCategory = 'all';
                renderFeed();
            } else if (view === 'trending') {
                const trendingEl = document.getElementById('trendingSection');
                trendingEl.scrollIntoView({ behavior: 'smooth' });
            } else if (view === 'latest') {
                currentSort = 'newest';
                document.getElementById('sortSelect').value = 'newest';
                renderFeed();
            } else if (view === 'watchlist') {
                showWatchlistView();
            } else if (view === 'history') {
                showHistoryView();
            } else if (view === 'downloads') {
                renderDownloadsDrawer();
                document.getElementById('downloadsDrawerBackdrop').classList.add('active');
            }

            if (window.innerWidth <= 860) sidebar.classList.remove('open');
        });
    });

    // Sidebar Category Links
    document.querySelectorAll('.category-links li').forEach(item => {
        item.addEventListener('click', () => {
            const cat = item.getAttribute('data-category');
            currentCategory = cat;
            updateActiveCategoryPills(cat);
            updateCategoryTitle(cat);
            renderFeed();
            if (cat !== 'all') {
                const feedSec = document.getElementById('feedSection');
                if (feedSec) feedSec.scrollIntoView({ behavior: 'smooth' });
            }
            if (window.innerWidth <= 860) sidebar.classList.remove('open');
        });
    });

    // Quick Category Pills Bar (Horizontal Scroll & Smooth Wheel)
    const quickCategoriesBar = document.getElementById('quickCategoriesBar');
    if (quickCategoriesBar) {
        quickCategoriesBar.addEventListener('wheel', (e) => {
            if (e.deltaY !== 0) {
                e.preventDefault();
                quickCategoriesBar.scrollLeft += e.deltaY;
            }
        });
    }

    document.querySelectorAll('.quick-pill').forEach(pill => {
        pill.addEventListener('click', () => {
            const cat = pill.getAttribute('data-cat');
            currentCategory = cat;
            updateActiveCategoryPills(cat);
            updateCategoryTitle(cat);
            renderFeed();
            if (cat !== 'all') {
                const feedSec = document.getElementById('feedSection');
                if (feedSec) feedSec.scrollIntoView({ behavior: 'smooth' });
            }
        });
    });

    // View All Trending Button
    document.querySelectorAll('.view-all-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            const filter = btn.getAttribute('data-filter');
            if (filter === 'trending') {
                currentCategory = 'all';
                currentSort = 'popular';
                document.getElementById('sortSelect').value = 'popular';
                updateActiveSidebar('trending');
                document.getElementById('currentCategoryTitle').innerText = "🔥 Video Zinazovuma Zaidi (Trending)";
                const trendingList = appVideos.filter(v => v.isTrending);
                const mainGrid = document.getElementById('mainVideoGrid');
                document.getElementById('feedCount').innerText = `${trendingList.length} Video`;
                mainGrid.innerHTML = trendingList.map(v => createVideoCardHTML(v)).join('');
                attachCardListeners();
                document.getElementById('feedSection').scrollIntoView({ behavior: 'smooth' });
            }
        });
    });

    // Hero Play Button
    document.getElementById('heroPlayBtn').addEventListener('click', () => {
        const topVideo = appVideos.find(v => v.isTrending) || appVideos[0];
        if (topVideo) {
            openVideoPlayer(topVideo);
        } else {
            showToast('Hakuna video inayopatikana bado. Bofya "Weka Video" kuongeza video yako.', 'info');
        }
    });

    document.getElementById('heroDownloadBtn').addEventListener('click', () => {
        const topVideo = appVideos.find(v => v.isTrending) || appVideos[0];
        if (topVideo) {
            openDownloadModal(topVideo.id);
        } else {
            showToast('Hakuna video ya kupakua kwa sasa.', 'info');
        }
    });

    document.getElementById('heroFavBtn').addEventListener('click', (e) => {
        const topVideo = appVideos.find(v => v.isTrending) || appVideos[0];
        if (topVideo) {
            toggleWatchlist(topVideo.id, e);
        } else {
            showToast('Hakuna video iliyochaguliwa.', 'info');
        }
    });

    // Video Player Modal & Mode Switch
    const toggleModeBtn = document.getElementById('togglePlayerModeBtn');
    if (toggleModeBtn) {
        toggleModeBtn.addEventListener('click', togglePlayerMode);
    }
    document.getElementById('closePlayerModalBtn').addEventListener('click', closeVideoPlayerModal);
    document.getElementById('modalDownloadBtn').addEventListener('click', () => {
        if (activeVideo) openDownloadModal(activeVideo.id);
    });
    document.getElementById('modalShareBtn').addEventListener('click', openShareModal);
    document.getElementById('actionDownloadBtn').addEventListener('click', () => {
        if (activeVideo) openDownloadModal(activeVideo.id);
    });
    document.getElementById('actionFavBtn').addEventListener('click', (e) => {
        if (activeVideo) toggleWatchlist(activeVideo.id, e);
    });

    // Like / Dislike
    const likeBtn = document.getElementById('likeBtn');
    likeBtn.addEventListener('click', () => {
        likeBtn.classList.toggle('active');
        const likeCountEl = document.getElementById('likeCount');
        if (likeBtn.classList.contains('active')) {
            showToast('Umependa video hii!', 'success');
            likeBtn.innerHTML = '<i class="fa-solid fa-thumbs-up"></i> <span>Umeipenda</span>';
        } else {
            likeBtn.innerHTML = '<i class="fa-regular fa-thumbs-up"></i> <span id="likeCount">14.2K</span>';
        }
    });

    document.getElementById('dislikeBtn').addEventListener('click', () => {
        showToast('Asante kwa maoni yako', 'info');
    });

    // Subscribe Button
    const subBtn = document.getElementById('subBtn');
    subBtn.addEventListener('click', () => {
        subBtn.classList.toggle('subscribed');
        if (subBtn.classList.contains('subscribed')) {
            subBtn.innerHTML = '<i class="fa-solid fa-check"></i> <span>Umejiunga</span>';
            showToast('Umejiunga kufuatilia channel hii!', 'success');
        } else {
            subBtn.innerHTML = '<i class="fa-solid fa-bell"></i> <span>Fuatilia</span>';
        }
    });

    // Comments Form
    document.getElementById('postCommentBtn').addEventListener('click', postNewComment);
    document.getElementById('newCommentInput').addEventListener('keydown', (e) => {
        if (e.key === 'Enter') postNewComment();
    });

    // Download Modal Listeners
    document.getElementById('closeDownloadModalBtn').addEventListener('click', closeDownloadModal);
    document.querySelectorAll('.format-card').forEach(card => {
        card.querySelector('.btn-download-start').addEventListener('click', () => {
            const quality = card.getAttribute('data-quality');
            const size = card.getAttribute('data-size');
            executeDownload(quality, size);
        });
    });

    // Download Manager Drawer Trigger
    const openDlDrawerBtn = document.getElementById('openDownloadsManagerBtn');
    const dlDrawerBackdrop = document.getElementById('downloadsDrawerBackdrop');
    const closeDlDrawerBtn = document.getElementById('closeDownloadsDrawer');

    openDlDrawerBtn.addEventListener('click', () => {
        renderDownloadsDrawer();
        dlDrawerBackdrop.classList.add('active');
    });

    closeDlDrawerBtn.addEventListener('click', () => {
        dlDrawerBackdrop.classList.remove('active');
    });

    dlDrawerBackdrop.addEventListener('click', (e) => {
        if (e.target === dlDrawerBackdrop) dlDrawerBackdrop.classList.remove('active');
    });

    // Watchlist trigger button on top bar
    document.getElementById('openWatchlistBtn').addEventListener('click', showWatchlistView);

    // Upload Video Modal Triggers
    document.getElementById('openUploadBtn').addEventListener('click', openUploadModal);
    document.getElementById('closeUploadModalBtn').addEventListener('click', closeUploadModal);
    document.getElementById('cancelUploadBtn').addEventListener('click', closeUploadModal);
    document.getElementById('uploadVideoForm').addEventListener('submit', handleUploadSubmit);

    // Share Modal Listeners
    document.getElementById('closeShareModalBtn').addEventListener('click', closeShareModal);
    document.getElementById('copyLinkBtn').addEventListener('click', copyShareUrl);

    // Sync ChimboTamu Button
    const syncBtn = document.getElementById('syncChimbotamuBtn');
    if (syncBtn) {
        syncBtn.addEventListener('click', () => {
            syncFromChimboTamu(true);
        });
    }

    // Clear Downloads Button
    const clearDlBtn = document.getElementById('clearDownloadsBtn');
    if (clearDlBtn) {
        clearDlBtn.addEventListener('click', (e) => {
            e.stopPropagation();
            if (downloadedItems.length === 0) {
                showToast('Huna faili lolote lililopakuliwa kwa sasa.', 'info');
                return;
            }
            downloadedItems = [];
            localStorage.removeItem(STORAGE_KEYS.DOWNLOADS);
            renderDownloadsDrawer();
            updateBadges();
            showToast('Faili zote zilizopakuliwa zimefutwa kwenye orodha.', 'success');
        });
    }

    // User Profile Dropdown & Actions
    const userProfileBtn = document.getElementById('userProfileBtn');
    const profileDropdown = document.getElementById('profileDropdown');
    if (userProfileBtn && profileDropdown) {
        userProfileBtn.addEventListener('click', (e) => {
            e.stopPropagation();
            const isHidden = profileDropdown.style.display === 'none' || !profileDropdown.style.display;
            profileDropdown.style.display = isHidden ? 'block' : 'none';
            if (isHidden) {
                const favCountEl = document.getElementById('profFavCount');
                const histCountEl = document.getElementById('profHistCount');
                const dlCountEl = document.getElementById('profDlCount');
                if (favCountEl) favCountEl.innerText = watchlist.length;
                if (histCountEl) histCountEl.innerText = watchHistory.length;
                if (dlCountEl) dlCountEl.innerText = downloadedItems.length;
            }
        });

        document.addEventListener('click', (e) => {
            if (profileDropdown && !userProfileBtn.contains(e.target)) {
                profileDropdown.style.display = 'none';
            }
        });

        const profSyncBtn = document.getElementById('profSyncBtn');
        if (profSyncBtn) {
            profSyncBtn.addEventListener('click', (e) => {
                e.stopPropagation();
                profileDropdown.style.display = 'none';
                syncFromChimboTamu(true);
            });
        }

        const profClearCacheBtn = document.getElementById('profClearCacheBtn');
        if (profClearCacheBtn) {
            profClearCacheBtn.addEventListener('click', (e) => {
                e.stopPropagation();
                localStorage.removeItem('wakubwatz_chimbotamu_cache');
                profileDropdown.style.display = 'none';
                showToast('Kumbukumbu ya muda imefutwa! Inajisawazisha...', 'info');
                syncFromChimboTamu(true);
            });
        }
    }

    // VIP Button
    document.getElementById('vipBtn').addEventListener('click', () => {
        showToast('Hongera! Akaunti yako ya WakubwaTz imepandishwa kuwa PRO ya Bure!', 'success');
    });
}

function updateActiveSidebar(view) {
    document.querySelectorAll('.nav-links li').forEach(item => {
        if (item.getAttribute('data-view') === view) {
            item.classList.add('active');
        } else {
            item.classList.remove('active');
        }
    });
}

function updateActiveCategoryPills(cat) {
    document.querySelectorAll('.quick-pill').forEach(pill => {
        if (pill.getAttribute('data-cat') === cat) {
            pill.classList.add('active');
        } else {
            pill.classList.remove('active');
        }
    });

    document.querySelectorAll('.category-links li').forEach(li => {
        if (li.getAttribute('data-category') === cat) {
            li.classList.add('active');
        } else {
            li.classList.remove('active');
        }
    });
}

function updateCategoryTitle(cat) {
    const titles = {
        all: "Video Zote Zinazopatikana (ChimboTamu & WakubwaTz)",
        bongo: "Bongo Videos (ChimboTamu)",
        connection: "Connection & Matukio Maalum",
        filamu: "Filamu & Series Za Kibabe",
        muziki: "Muziki Mpya & Bongo Flava Hits",
        vichekesho: "Vichekesho & Comedy Za Vunja Mbavu",
        michezo: "Michezo, Soka & Highlights",
        habari: "Habari & Matukio Ya Moja Kwa Moja",
        podcasts: "Podcasts & Mahojiano Ya Kipekee"
    };
    document.getElementById('currentCategoryTitle').innerText = titles[cat] || "Video Zilizochaguliwa";
}

function showWatchlistView() {
    const savedVideos = appVideos.filter(v => watchlist.includes(v.id));
    const mainGrid = document.getElementById('mainVideoGrid');
    const emptyState = document.getElementById('emptyState');
    document.getElementById('currentCategoryTitle').innerText = "Orodha Yangu (Vipendwa / Watchlist)";
    document.getElementById('feedCount').innerText = `${savedVideos.length} Video`;

    if (savedVideos.length === 0) {
        mainGrid.innerHTML = '';
        emptyState.style.display = 'block';
        emptyState.querySelector('h3').innerText = "Orodha Yako Haina Video Bado";
        emptyState.querySelector('p').innerText = "Bofya alama ya 'Hifadhi' kwenye video yoyote kuiongeza hapa.";
    } else {
        emptyState.style.display = 'none';
        mainGrid.innerHTML = savedVideos.map(v => createVideoCardHTML(v)).join('');
        attachCardListeners();
    }
}

function showHistoryView() {
    const historyVideos = watchHistory.map(id => appVideos.find(v => v.id === id)).filter(Boolean);
    const mainGrid = document.getElementById('mainVideoGrid');
    const emptyState = document.getElementById('emptyState');
    document.getElementById('currentCategoryTitle').innerText = "Historia Ya Video Ulizotazama";
    document.getElementById('feedCount').innerText = `${historyVideos.length} Video`;

    if (historyVideos.length === 0) {
        mainGrid.innerHTML = '';
        emptyState.style.display = 'block';
        emptyState.querySelector('h3').innerText = "Bado Haujatazama Video Yoyote";
        emptyState.querySelector('p').innerText = "Video unazotazama zitaonekana hapa kiotomatiki.";
    } else {
        emptyState.style.display = 'none';
        mainGrid.innerHTML = historyVideos.map(v => createVideoCardHTML(v)).join('');
        attachCardListeners();
    }
}

// --- DYNAMIC HERO SPOTLIGHT ---
function updateHeroBanner() {
    const topVideo = appVideos.find(v => v.isTrending) || appVideos[0];
    if (!topVideo) return;

    const heroTitle = document.getElementById('heroTitle');
    const heroDesc = document.getElementById('heroDesc');
    const heroDuration = document.getElementById('heroDuration');
    const heroBackdrop = document.getElementById('heroBackdrop');

    if (heroTitle) heroTitle.innerText = topVideo.title;
    if (heroDesc) heroDesc.innerText = topVideo.description || ("Tazama " + topVideo.title + " katika ubora wa hali ya juu na kasi kubwa ya kupakua.");
    if (heroDuration) heroDuration.innerText = (topVideo.duration || "12:00") + " Min";
    if (heroBackdrop && topVideo.thumb) {
        heroBackdrop.style.backgroundImage = "url('" + topVideo.thumb + "')";
        heroBackdrop.style.backgroundSize = "cover";
        heroBackdrop.style.backgroundPosition = "center";
    }
}

// --- CHIMBIOTAMU.COM REAL-TIME SYNC ENGINE ---
async function syncFromChimboTamu(showToastAlert = true) {
    const syncBtn = document.getElementById('syncChimbotamuBtn');
    const syncIcon = document.getElementById('syncIcon');
    if (syncIcon) syncIcon.classList.add('fa-spin');

    try {
        let syncedItems = [];

        // 1. Jaribu kupata kutoka server ya ndani /api/videos
        try {
            const localApiRes = await fetch('/api/videos');
            if (localApiRes.ok) {
                syncedItems = await localApiRes.json();
            }
        } catch (e) {
            console.log('Local API haikupatikana, inajaribu moja kwa moja chimbotamu.com...');
        }

        // 2. Fetch moja kwa moja kutoka chimbiotamu.com / chimbotamu.com API
        try {
            const remoteRes = await fetch('https://chimbotamu.com/api/content/videos');
            if (remoteRes.ok) {
                const remoteVideos = await remoteRes.json();
                const guidRegex = /[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}/i;

                const convertedRemote = remoteVideos.map((v, index) => {
                    const str = (v.downloadUrl || '') + ' ' + (v.embedCode || '') + ' ' + (v.videoUrl || '');
                    const guidMatch = str.match(guidRegex);
                    const guid = guidMatch ? guidMatch[0] : null;

                    const videoUrl = v.downloadUrl || (guid ? ('https://vz-6aac71b9-360.b-cdn.net/' + guid + '/play_480p.mp4') : '');
                    let thumb = v.thumbnailUrl || (guid ? ('https://vz-6aac71b9-360.b-cdn.net/' + guid + '/thumbnail.jpg') : '');
                    if (!thumb) thumb = 'https://images.unsplash.com/photo-1536440136628-849c177e76a1?w=800&fit=crop';

                    let category = 'bongo';
                    const catLower = (v.category || '').toLowerCase();
                    if (catLower.includes('connection')) category = 'connection';
                    else if (catLower.includes('bongo')) category = 'bongo';
                    else if (catLower.includes('film') || catLower.includes('movi')) category = 'filamu';
                    else if (catLower.includes('music') || catLower.includes('muzik')) category = 'muziki';

                    return {
                        id: 'chimbotamu-v-' + v.id,
                        originId: v.id,
                        source: 'chimbiotamu.com',
                        title: v.title || 'Video Tamu',
                        category: category,
                        categoryName: v.category || 'Bongo Videos',
                        duration: v.duration || '04:30',
                        views: (v.views && v.views !== '0') ? (v.views + ' Views') : (Math.floor(Math.random() * 45 + 12) + '.4K'),
                        viewsCount: parseInt(v.views, 10) || (50000 - index * 800),
                        timeAgo: v.uploadDate || 'Hivi karibuni',
                        creator: v.channel || 'ChimboTamu',
                        creatorAvatar: v.channelAvatarUrl || 'https://SwahiliPlay.b-cdn.net/chimbotamu.png',
                        subscribers: '85.4K Wafuatiliaji',
                        thumb: thumb,
                        videoUrl: videoUrl,
                        downloadUrl: v.downloadUrl || videoUrl,
                        embedCode: v.embedCode || '',
                        description: v.description || v.title,
                        tags: (v.tags && v.tags.length) ? v.tags.map(t => '#' + t.replace(/\s+/g, '')) : ['#ChimboTamu', '#WakubwaTz'],
                        isTrending: index < 8,
                        quality: '720p HD',
                        likes: (v.likes && v.likes !== '0') ? v.likes : (Math.floor(Math.random() * 8 + 2) + '.' + Math.floor(Math.random() * 9) + 'K')
                    };
                });

                // Merge with syncedItems
                const mergedMap = new Map();
                syncedItems.forEach(item => mergedMap.set(item.id, item));
                convertedRemote.forEach(item => mergedMap.set(item.id, item));
                syncedItems = Array.from(mergedMap.values());
            }
        } catch (e) {
            console.log('Remote chimbiotamu fetch:', e);
        }

        if (syncedItems && syncedItems.length > 0) {
            const customVideos = JSON.parse(localStorage.getItem(STORAGE_KEYS.VIDEOS) || '[]');
            const uniqueMap = new Map();
            DEFAULT_VIDEOS.forEach(v => uniqueMap.set(v.id, v));
            syncedItems.forEach(v => uniqueMap.set(v.id, v));
            customVideos.forEach(v => uniqueMap.set(v.id, v));
            appVideos = Array.from(uniqueMap.values());

            localStorage.setItem('wakubwatz_chimbotamu_cache', JSON.stringify(syncedItems));
            renderFeed();
            updateHeroBanner();

            if (showToastAlert) {
                showToast('Ufanisi! Video zote ' + appVideos.length + ' zimesawazishwa na chimbiotamu.com!', 'success');
            }
        } else {
            if (showToastAlert) {
                showToast('Video tayari ziko kwenye toleo jipya zaidi.', 'info');
            }
        }
    } catch (err) {
        console.error('Hitilafu:', err);
        if (showToastAlert) {
            showToast('Hitilafu ya muunganisho wa mtandao.', 'info');
        }
    } finally {
        if (syncIcon) syncIcon.classList.remove('fa-spin');
    }
}
