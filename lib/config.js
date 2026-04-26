// ============================================================
//  EDIT FILE INI UNTUK CUSTOMIZE WEBSITE KAMU
//  Semua konten website ada di sini — ganti sesuai cerita kalian
// ============================================================

export const config = {
  // —— Identitas ——
  names: {
    one: "Naufal",
    two: "Zahra",
  },

  // Tanggal jadian (format: YYYY-MM-DD). Counter akan menghitung dari tanggal ini.
  startDate: "2024-04-26",

  // Tanggal anniversary yang dirayakan
  anniversaryLabel: "26 April 2024 — 26 April 2026",

  // Tagline di bawah nama
  tagline: "Dua tahun berlalu, dan aku masih jatuh cinta setiap harinya",

  // —— Password Gate ——
  // Set enabled: false untuk menonaktifkan password gate
  // Hint: pakai sesuatu yang hanya kalian berdua tahu
  password: {
    enabled: true,
    answer: "sapakasapa", // case-insensitive
    question: "Apa tagline Naufal?",
    hint: "Kata-kata ngasal yang sering aku ucapin",
  },

  // —— Cerita / Timeline ——
  // Tambah atau kurangi item sesuai momen kalian
  story: [
    {
      date: "9 Maret 2024",
      title: "Pertama Kali Kita Chatan",
      desc: "Di farewell party aku di KIP, kamu dapat nomorku dari grup WA dan tiba-tiba chat 'fal mau foto yang berdua' — dari pesan sesederhana itu, semuanya bermula.",
    },
    {
      date: "17 April 2024",
      title: "First Date",
      desc: "Kita jalan berdua di Pondok Indah Mall — main Timezone, makan KFC, dan nonton film bareng. Seru banget dan nggak mau pulang.",
    },
    {
      date: "26 April 2024",
      title: "Kita Jadian!",
      desc: "Aku nembak kamu dengan bantuan website buatanku sendiri biar terkesan unik. Awalnya kamu sempat bilang nggak, tapi akhirnya bilang iya — dan itu jadi hari yang paling aku ingat.",
    },
    {
      date: "27 April 2024",
      title: "Pertama Kali Kamu Ketemu Keluarga Aku",
      desc: "Aku ajak kamu olahraga di Persada Halim, tapi ternyata di sana ada Ayah, Aan, dan Atung. Setelah itu kamu aku ajak makan di rumah dan ketemu semua keluarga — penuh kejutan!",
    },
    {
      date: "23 Mei 2024",
      title: "Konser dan Hutan Kota GBK",
      desc: "Siang kita piknik di hutan kota GBK dengan bekel masing-masing, sharing makanan, dan nasi tim kamu favoritku banget. Malamnya kita nonton konser bareng — hari yang sempurna.",
    },
    {
      date: "7 Juli 2024",
      title: "Pekan Raya Jakarta 2024",
      desc: "Seharian dari pagi sampai malam di PRJ — makan mie gaga sepuasnya, beauty counseling gratis, jajan ciki, hunting promo dan gratisan. Pokoknya seru banget nggak ada habisnya!",
    },
    {
      date: "8 Oktober 2024",
      title: "Pertama Kali Aku ke Purwakarta",
      desc: "Aku disambut hangat banget sama keluarga kamu. Aku suka banget momen main game bareng Amara & Adzra, dan diajak jalan ke Alun-alun Purwakarta — Taman Air Mancur Sri Baduga.",
    },
    {
      date: "28 Februari 2025",
      title: "Treatment Date",
      desc: "Pertama kali aku treatment — dan kaget sama biayanya yang sampai jutaan wkwk. Tapi pengalaman yang seru dan berbeda, terima kasih sudah ngajak aku dan mau aku glowing.",
    },
    {
      date: "19–20 April 2025",
      title: "Pulau Pari",
      desc: "Pengalaman tak terlupakan! Kita ke Pulau Seribu bareng — mengunjungi pantai, snorkeling, berenang, bakar ikan di malam hari. Besoknya ke Pantai Bintang dan makan Richeese saat pulang. Pokoknya terbaik!",
    },
    {
      date: "5 Agustus 2025",
      title: "Birthday Treat",
      desc: "Kita ke Kokas hunting birthday treat di banyak resto — Sushi Tei, Ta Wan, Holycow Steak, Boost, dan yang paling berkesan Nanny's Pavillon karena berasa beneran dirayain. Kenyang dan bahagia!",
    },
  ],

  // —— Galeri Foto ——
  // Taruh file foto di folder public/assets/
  // Gunakan path: "/assets/nama-file.jpg"
  gallery: [
    {
      src: "/assets/1.jpg",
      caption: "Birthday treat 2025 kita",
    },
    {
      src: "/assets/2.jpg",
      caption: "Pekan Raya Jakarta",
    },
    {
      src: "/assets/3.jpg",
      caption: "Pertama kali ke Taman Air Mancur Sri Baduga Purwakarta",
    },
    {
      src: "/assets/4.jpg",
      caption: "Treatment date",
    },
    {
      src: "/assets/5.jpg",
      caption: "Ice skating bareng",
    },
    {
      src: "/assets/6.jpg",
      caption: "Pulau Pari!",
    },
    {
      src: "/assets/7.jpg",
      caption: "Otw snorkeling",
    },
    {
      src: "/assets/8.jpg",
      caption: "Nonton film pertama kita",
    },
    {
      src: "/assets/9.jpg",
      caption: "First date!",
    },
    {
      src: "/assets/10.jpg",
      caption: "Pertama kali kamu nyender wkwk",
    },
    {
      src: "/assets/11.jpg",
      caption: "Dufan date!",
    },
    {
      src: "/assets/12.jpg",
      caption: "Museum sore",
    },
    {
      src: "/assets/13.jpg",
      caption: "Ke dufan bareng Aan & Atung",
    },
    {
      src: "/assets/14.jpg",
      caption: "Main fun world",
    },
    {
      src: "/assets/15.jpg",
      caption: "Hutan kota GBK",
    },
  ],

  // —— Surat Cinta ——
  letter: {
    salutation: "Untukmu, Zahra",
    paragraphs: [
      "Aku masih ingat betul waktu kamu kirim pesan pertama itu — 'fal mau foto yang berdua'. Sederhana sekali, tapi dari sana semuanya bermula. Siapa sangka satu pesan bisa membawa kita sampai di sini, dua tahun yang penuh dengan cerita yang nggak pernah aku bayangkan sebelumnya.",
      "Dua tahun kita lalui bareng — dari first date di Pondok Indah yang nggak mau pulang, sampai basah-basahan snorkeling di Pulau Pari. Dari makan bekel di hutan kota GBK sambil sharing makanan (nasi tim kamu emang selalu jadi favoritku), sampai seharian penuh di PRJ yang berasa nggak ada habisnya. Dari kamu ketemu keluargaku secara tak terduga di Persada Halim, sampai aku pertama kali disambut hangat oleh keluargamu di Purwakarta. Setiap momen itu, sekecil apapun, sudah jadi bagian dari cerita kita yang paling aku sayangi.",
      "Terima kasih sudah mau jalan bareng aku dalam segala bentuknya, Zahra — dari konser sampai museum, dari mall sampai pulau. Terima kasih sudah jadi orang yang bikin hari-hariku lebih berwarna. Dan terima kasih sudah bilang iya. Aku nggak sabar untuk terus menulis lebih banyak cerita bersamamu — karena ini masih baru permulaan.",
    ],
    closing: "Selamat dua tahun, sayang.",
    signature: "— Naufal",
  },

  // —— Playlist ——
  // Buat playlist Spotify, klik Share → Embed playlist, copy URL src
  // Format: https://open.spotify.com/embed/playlist/PLAYLIST_ID
  // Set ke null untuk menonaktifkan Spotify embed
  spotifyEmbed: null,

  // Daftar lagu favorit kalian
  // Untuk mengaktifkan pemutar musik, isi field url dengan:
  // - Link YouTube:       https://www.youtube.com/watch?v=VIDEO_ID
  // - Link YouTube Music: https://music.youtube.com/watch?v=VIDEO_ID
  // - Link Spotify track: https://open.spotify.com/track/TRACK_ID
  // Kosongkan ("") jika belum ada link
  songs: [
    {
      title: "Locked Out of Heaven",
      artist: "Bruno Mars",
      url: "https://open.spotify.com/track/3w3y8KPTfNeOKPiqUTakBh",
    },
    {
      title: "Die With a Smile",
      artist: "Lady Gaga & Bruno Mars",
      url: "https://open.spotify.com/track/2plbrEY59IikOBgBGLjaoe",
    },
    {
      title: "Risk It All",
      artist: "Bruno Mars",
      url: "https://open.spotify.com/track/5y2ijHECwFYWqcAHKTZgzD",
    },
  ],

  // —— Footer ——
  footerNote: "Dibuat dengan cinta, untuk Zahra.",
};
