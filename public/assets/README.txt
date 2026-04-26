============================================================
  PANDUAN FOTO — Folder public/assets/
============================================================

Taruh semua foto kamu di folder ini dengan nama file yang sesuai.

------------------------------------------------------------
  DAFTAR FILE YANG DIBUTUHKAN
------------------------------------------------------------

  foto-1.jpg   →  Birthday treat 2025 kita
  foto-2.jpg   →  Pekan Raya Jakarta
  foto-3.jpg   →  Pertama kali ke Taman Air Mancur Sri Baduga Purwakarta
  foto-4.jpg   →  Treatment date
  foto-5.jpg   →  Ice skating bareng
  foto-6.jpg   →  Pulau Pari!
  foto-7.jpg   →  Otw snorkeling
  foto-8.jpg   →  Nonton film pertama kita
  foto-9.jpg   →  First date!
  foto-10.jpg  →  Pertama kali kamu nyender wkwk
  foto-11.jpg  →  Dufan date!
  foto-12.jpg  →  Museum sore
  foto-13.jpg  →  Ke dufan bareng Aan & Atung
  foto-14.jpg  →  Main fun world
  foto-15.jpg  →  Hutan kota GBK

------------------------------------------------------------
  TIPS FOTO
------------------------------------------------------------

  - Format: .jpg atau .webp (lebih kecil ukurannya)
  - Ukuran ideal: max 1600px lebar
  - Compress dulu di squoosh.app biar loading cepat
  - Aspect ratio bebas — foto akan otomatis crop mengisi grid

------------------------------------------------------------
  CARA GANTI CAPTION FOTO
------------------------------------------------------------

  Buka file: lib/config.js
  Cari bagian: gallery: [ ... ]
  Edit caption sesuai yang kamu mau.

------------------------------------------------------------
  CARA TAMBAH / KURANGI FOTO
------------------------------------------------------------

  Tambah file baru (misal foto-16.jpg) lalu tambahkan entry
  baru di lib/config.js bagian gallery:

    { src: "/assets/foto-16.jpg", caption: "Caption kamu" }

  Untuk mengurangi, hapus entry dari config.js saja —
  tidak perlu hapus file fotonya.

============================================================
