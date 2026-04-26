# Anniversary Website 💌

Website romantis untuk merayakan anniversary, dibuat dengan Next.js 14 + React + Tailwind CSS + Framer Motion.

Aesthetic: editorial-romantis dengan font Italiana + Cormorant Garamond, palet cream-burgundy-emas.

---

## 🎯 Fitur

- **Password gate** — pertanyaan rahasia di awal yang hanya kalian berdua tahu
- **Hero section** — nama berdua dengan animasi entrance yang elegan
- **Live counter** — hitungan real-time sudah bersama berapa hari/jam/menit/detik
- **Timeline cerita** — perjalanan kalian dengan layout zigzag
- **Galeri foto** — grid asymmetric gaya magazine, hover untuk caption
- **Surat cinta** — dengan drop cap dan ornament klasik
- **Playlist Spotify** — embed playlist + daftar lagu favorit
- **Footer** — tanda tangan kalian berdua
- Smooth scroll animations dengan Framer Motion
- Fully responsive (desktop & mobile)
- SEO-friendly metadata

---

## 🚀 Quick Start

### Persyaratan
- Node.js versi 18 atau lebih baru ([download](https://nodejs.org))
- Code editor (VS Code direkomendasikan)
- Akun GitHub (untuk deploy)
- Akun Vercel (gratis, login pakai GitHub)

### Setup Lokal (5 menit)

```bash
# 1. Install semua dependencies
npm install

# 2. Jalankan development server
npm run dev

# 3. Buka di browser
# http://localhost:3000
```

Selesai. Website sudah jalan di laptop kamu dengan konten default.

---

## ✏️ Customize Konten

**Semua konten website ada di satu file: `lib/config.js`**

Buka file itu dan edit sesuai cerita kalian. Berikut yang bisa diganti:

### 1. Nama & Tanggal
```js
names: {
  one: "Andi",      // Ganti dengan nama kamu
  two: "Maya",      // Ganti dengan nama pacar
},
startDate: "2024-02-14",  // Tanggal jadian (format YYYY-MM-DD)
anniversaryLabel: "14 Februari 2024 — 14 Februari 2026",
tagline: "Dua tahun, dan masih jatuh cinta setiap hari",
```

### 2. Password Gate
```js
password: {
  enabled: true,                                      // false untuk skip password
  answer: "14februari2024",                           // jawaban (case-insensitive)
  question: "Tanggal kita pertama kali jadian?",      // pertanyaan
  hint: "Format: ddmmmyyyy (contoh: 14februari2024)", // petunjuk
},
```

### 3. Timeline Cerita
Tambah/kurangi item, urutkan kronologis:
```js
story: [
  {
    date: "14 Februari 2024",
    title: "Pertama jadian",
    desc: "Cerita singkat tentang momen ini..."
  },
  // ... tambah lebih banyak
]
```

### 4. Foto Gallery
Tiga cara pasang foto:

**Opsi A: Foto lokal (paling reliable)**
1. Copy foto ke folder `public/images/`
2. Update config:
```js
gallery: [
  { src: "/images/foto1.jpg", caption: "Sunset bareng" },
  { src: "/images/foto2.jpg", caption: "Liburan Bali" },
]
```

**Opsi B: URL Unsplash (default, untuk testing)**
```js
{ src: "https://images.unsplash.com/photo-XXX?w=800", caption: "..." }
```

**Opsi C: Cloudinary / Imgur (untuk hosting gratis online)**
Upload foto ke Cloudinary, copy URL nya.

> Tip: Resize foto ke max 1600px lebar untuk loading cepat. Pakai [squoosh.app](https://squoosh.app) untuk compress.

### 5. Surat Cinta
```js
letter: {
  salutation: "Untukmu, sayangku",
  paragraphs: [
    "Paragraf pertama...",
    "Paragraf kedua...",
    // dst
  ],
  closing: "Selamat dua tahun, sayang.",
  signature: "— Andi",
}
```

### 6. Playlist Spotify
1. Buat playlist Spotify
2. Klik tombol Share → Embed playlist
3. Copy URL `src`-nya, paste ke config:
```js
spotifyEmbed: "https://open.spotify.com/embed/playlist/PLAYLIST_ID",
```

Set ke `null` untuk skip section playlist.

---

## 🎨 Customize Tampilan

### Ganti warna palette
Edit `tailwind.config.js`:
```js
colors: {
  cream: { 100: "#FAF6F1", ... },     // Background utama
  burgundy: { 600: "#722F37", ... },  // Warna text & accent gelap
  gold: { 500: "#C9A961", ... },      // Aksen emas
}
```

Beberapa palet alternatif:
- **Forest** — Hijau zaitun + cream + terracotta
- **Midnight** — Navy + cream + gold
- **Blush** — Pink dusty + cream + bronze
- **Lavender** — Ungu lembut + cream + silver

### Ganti font
Edit `app/layout.js`. Lihat [fonts.google.com](https://fonts.google.com) untuk pilihan. Contoh kombinasi cantik:
- **Playfair Display** + **Lora**
- **Cormorant** + **Quattrocento**
- **DM Serif Display** + **Crimson Text**

---

## 🌐 Deploy ke Vercel (Gratis, ~3 menit)

### Step 1: Push ke GitHub
```bash
# Initialize git
git init
git add .
git commit -m "Initial commit"

# Buat repo baru di github.com (jangan add README — kita sudah punya)
# Lalu connect:
git remote add origin https://github.com/USERNAME/REPO_NAME.git
git branch -M main
git push -u origin main
```

### Step 2: Deploy di Vercel

1. Buka [vercel.com/new](https://vercel.com/new)
2. Login pakai GitHub
3. Klik **Import** di repo anniversary-website kamu
4. Vercel akan auto-detect Next.js — tinggal klik **Deploy**
5. Tunggu ~1 menit, selesai 🎉

URL website kamu akan jadi seperti: `anniversary-website-xxxx.vercel.app`

### Step 3: Custom Domain (opsional)

Mau pakai `andidanmaya.com`? Beli domain di:
- **Niagahoster** atau **Domainesia** (dari Indonesia, ~Rp 150rb/tahun)
- **Namecheap** atau **Porkbun** (luar negeri, ~$10/tahun)

Lalu di Vercel: Project Settings → Domains → Add Domain → ikuti instruksi DNS.

### Update setelah deploy

Tiap kali edit config dan push ke GitHub, Vercel otomatis re-deploy:
```bash
git add .
git commit -m "Update foto dan cerita"
git push
```

---

## 🐛 Troubleshooting

**`npm install` error tentang Node version**
→ Update Node.js ke versi 18 atau lebih baru.

**Foto Unsplash tidak muncul**
→ Pastikan URL nya benar. Atau ganti ke foto lokal di `public/images/`.

**Spotify embed kosong**
→ Pastikan playlist-nya **public**, bukan private. Format URL harus:
`https://open.spotify.com/embed/playlist/[ID]`

**Build error di Vercel**
→ Cek Vercel deployment logs. Biasanya tinggal `npm install` lagi local lalu push ulang.

**Mau matikan password gate**
→ Di `lib/config.js`, set `password.enabled: false`.

---

## 📁 Struktur Project

```
anniversary-website/
├── app/
│   ├── layout.js          → Root layout, font, metadata
│   ├── page.js            → Compose semua section
│   └── globals.css        → Style global, drop cap, ornament
├── components/
│   ├── PasswordGate.jsx   → Pertanyaan rahasia di awal
│   ├── Hero.jsx           → Nama + tanggal + tagline
│   ├── Counter.jsx        → Real-time counter
│   ├── Story.jsx          → Timeline cerita
│   ├── Gallery.jsx        → Galeri foto
│   ├── Letter.jsx         → Surat cinta
│   ├── Playlist.jsx       → Spotify + daftar lagu
│   └── Footer.jsx         → Penutup
├── lib/
│   └── config.js          → ⭐ EDIT INI untuk semua konten
├── public/
│   └── images/            → Taruh foto kalian di sini
├── package.json
├── tailwind.config.js     → Custom warna & font
├── next.config.mjs
├── postcss.config.mjs
├── jsconfig.json
└── .gitignore
```

---

## 💡 Tips Tambahan

**Bikin lebih spesial:**
- Beli domain `[nama-pacar].surprise.com` atau `[nama-kalian].love`
- Share QR code dari URL pakai [qr-code-generator.com](https://qr-code-generator.com), print, kasih bareng bunga
- Atau kirim link via WhatsApp tepat tengah malam jam 00:00 anniversary
- Tambahin reaksi dia waktu buka website ke gallery (foto/video) sebagai kenangan

**Sebelum kasih ke pacar:**
- Test password di incognito window
- Cek di mobile (mayoritas akan buka dari HP)
- Pastikan semua foto load dengan baik
- Test Spotify embed-nya bisa play

---

Selamat anniversary! Semoga website ini jadi kado yang berkesan. 🤍
