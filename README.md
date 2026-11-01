# 🔥 WakubwaTz - Video Streaming & Download Platform

Karibu kwenye **WakubwaTz**, website ya kisasa na ya kuvutia iliyoundwa maalum kwa ajili ya kutazama (streaming) na kupakua (download) video za aina mbalimbali kwa kasi ya juu na ubora wa hali ya juu (4K, 1080p Full HD, 720p HD, 480p, na MP3 Audio).

---

## 🌟 Vipengele Vikuu vya WakubwaTz:

1. **Streaming ya Kisasa na ya Kasi (Smooth Streaming Player):**
   - Kicheza video maalum chenye udhibiti kamili (Play/Pause, Rewind 10s, Fast Forward 10s).
   - Upau wa muda (Scrub bar) wenye kuonyesha kiasi cha video kilichopakuliwa (Buffer indicator) na muda kamili wa preview.
   - Marekebisho ya sauti (Volume slider & Mute).
   - Kubadilisha kasi ya video (0.5x, 0.75x, 1.0x, 1.25x, 1.5x, 2.0x).
   - Kubadilisha ubora (Quality Selector: 4K, 1080p, 720p, 480p, 360p).
   - Mfumo wa dirisha dogo (Picture-in-Picture).
   - Mfumo wa sinema (Theater Mode) na Skrini Nzima (Fullscreen).
   - Ufupisho wa vitufe vya keyboard (Space/K = Play/Pause, M = Mute, F = Fullscreen, Arrow keys = 10s Seek).

2. **Upakuaji wa Video (Video Download Engine):**
   - Kitufe cha **Pakua (Download)** kwenye kila video card na ndani ya video player.
   - Dirisha la uchaguzi wa ubora wa kupakua:
     - **1080p Full HD** (Ubora wa juu zaidi)
     - **720p HD** (Inayopendekezwa kwa simu na PC)
     - **480p SD** (Inayobana bando)
     - **MP3 Audio** (Sauti pekee kwa nyimbo za muziki)
   - Maendeleo ya upakuaji (Download progress bar) na arifa ya kukamilika (Success toast).
   - **Download Manager Drawer**: Orodha ya video zote zilizopakuliwa na uwezo wa kuzifungua au kuzipakua tena.

3. **Ubunifu na Muonekano wa Kisasa (Modern Dark UI/UX):**
   - Rangi za kisasa za giza (Onyx, Midnight Slate) zikiambatana na lafudhi ya Crimson Red na Dhahabu (Gold).
   - Muonekano unaobadilika vizuri kwenye simu (Smartphone), tablets, na kompyuta (Fully Responsive).
   - Glassmorphism na athari za kisasa za kuteleza (animations & smooth transitions).

4. **Kuweka Video Mpya (Upload Video Modal):**
   - Unaweza kuongeza video yako mwenyewe kwa kuweka link ya video (MP4/WebM) au kuchagua faili kutoka kwenye kompyuta yako moja kwa moja.
   - Video mpya inahifadhiwa mara moja na kuanza kuonekana kwenye orodha kuu.

5. **Kutafuta na Kuchuja (Search & Categories):**
   - Sanduku la kutafuta mara moja (Real-time live search).
   - Makundi ya video:
     - Filamu & Series
     - Muziki & Bongo Flava Hits
     - Vichekesho (Comedy)
     - Michezo & Soka
     - Habari & Matukio
     - Podcasts & Mahojiano
   - Kupanga (Sort by: Zilizopendwa, Mpya Zaidi, Zilizotazamwa).

6. **Maoni, Kupenda na Kusambaza (Social Interactions):**
   - Sehemu ya maoni (Comments) yenye uwezo wa kuandika na kuonekana mara moja.
   - Kitufe cha Kupenda (Like) na Kufuatilia (Subscribe).
   - Dirisha la kusambaza video moja kwa moja kwenda WhatsApp, Telegram, Facebook, na X (Twitter) pamoja na kunakili link.
   - Orodha Yangu (Watchlist / Saved videos).

---

## 🚀 Jinsi ya Kufungua na Kutumia Website Hii:

### Njia ya 1: Kufungua Moja kwa Moja (Bila Kufunga Chochote)
Unaweza kufungua faili la `index.html` moja kwa moja kwenye kivinjari chochote (Google Chrome, Microsoft Edge, Brave, Firefox):
1. Fungua folda: `C:\Users\DOKTA VITUKO\WakubwaTz`
2. Bonyeza mara mbili (Double-click) kwenye faili linaloitwa `index.html`.

### Njia ya 2: Kutumia Node.js Server (Inayopendekezwa kwa Streaming Bora)
1. Fungua PowerShell au Command Prompt (CMD).
2. Nenda kwenye folda ya mradi:
   ```powershell
   cd "C:\Users\DOKTA VITUKO\WakubwaTz"
   ```
3. Anzisha server kwa kuandika:
   ```powershell
   npm start
   # au
   node server.js
   ```
4. Fungua kivinjari chako na uende: **http://localhost:3000**

---

## 📁 Muundo wa Mafaili:
```
WakubwaTz/
│
├── index.html       # Muundo mkuu wa website na madirisha yote (modals)
├── styles.css       # Mtindo na muonekano wote wa kisasa (CSS)
├── app.js           # Injini ya streaming, download, video upload, search & storage
├── server.js        # Server ya haraka ya Node.js (Zero external dependencies)
├── package.json     # Taarifa na script ya 'npm start'
└── README.md        # Mwongozo huu wa matumizi
```
