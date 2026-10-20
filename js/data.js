
/* ============================================================
   MOTION VAULT — PUSAT DATA (data.js)
   ------------------------------------------------------------
   ✏️ CARA EDIT: Cukup ubah teks di dalam tanda kutip "...",
   tambah item baru dengan menyalin blok { ... } lalu tempel
   di bawahnya (jangan lupa koma antar item).
   Tidak perlu mengubah file HTML sama sekali.
   ============================================================ */

window.MV_DATA = {

  /* ---------- STATISTIK BERANDA ---------- */
  stats: {
    anggota : 24,      // jumlah anggota aktif
    prestasi: 12,      // jumlah prestasi/juara
    mosi    : 100,     // jumlah mosi di bank mosi
    tahun   : 5,       // tahun ekskul berdiri
  },

  /* ---------- STRUKTUR KEPENGURUSAN ----------
     Ganti "nama" dan "foto" (link foto dari Google Drive/dll).
     Jika foto dikosongkan "", inisial nama akan otomatis tampil. */
  /* Tambah foto: isi "foto": "link" di dalam blok orang yang bersangkutan. Kosong = inisial otomatis. */
  kepengurusan: {
    "inti": [
      {
        "nama": "Mohamad Azriel Hermawansyah",
        "kelas": "XI-B",
        "peran": "Ketua"
      },
      {
        "nama": "Laysa Ilarobani",
        "kelas": "XI-C",
        "peran": "Sekretaris"
      },
      {
        "nama": "Resi Aryani",
        "kelas": "XI-D",
        "peran": "Bendahara"
      }
    ],
    "divisi": [
      {
        "nama": "Divisi Diklat (Pendidikan & Pelatihan)",
        "sub": [
          {
            "nama": "Sub-Divisi LDBI",
            "anggota": [
              {
                "nama": "Raya Zahida",
                "kelas": "XI-A",
                "peran": "Koordinator"
              },
              {
                "nama": "Farsya Nirvana",
                "kelas": "XI-E",
                "peran": "Anggota"
              },
              {
                "nama": "Maira Alma Syahira",
                "kelas": "XI-A",
                "peran": "Anggota"
              },
              {
                "nama": "Refan Natansyah Ramadan",
                "kelas": "XI-E",
                "peran": "Anggota"
              },
              {
                "nama": "Ryanwar Khaizan",
                "kelas": "XI-F",
                "peran": "Anggota"
              }
            ]
          },
          {
            "nama": "Sub-Divisi NSDC",
            "anggota": [
              {
                "nama": "Diva Carissa Zahira",
                "kelas": "XI-C",
                "peran": "Koordinator"
              },
              {
                "nama": "Aegea Galena Yudoyono",
                "kelas": "XI-E",
                "peran": "Anggota"
              }
            ]
          }
        ]
      },
      {
        "nama": "Divisi Perlombaan",
        "sub": [
          {
            "nama": "",
            "anggota": [
              {
                "nama": "Nabila Armita Rusdi",
                "kelas": "XI-C",
                "peran": "Koordinator"
              },
              {
                "nama": "Naufal Rizki Angkasa",
                "kelas": "XI-D",
                "peran": "Anggota"
              },
              {
                "nama": "Gerald Mora Chrisfan Doli",
                "kelas": "XI-D",
                "peran": "Anggota"
              },
              {
                "nama": "Karina Dwi Aulia",
                "kelas": "XI-D",
                "peran": "Anggota"
              }
            ]
          }
        ]
      },
      {
        "nama": "Divisi PDD (Publikasi, Dekorasi & Dokumentasi)",
        "sub": [
          {
            "nama": "",
            "anggota": [
              {
                "nama": "Tsamara Ufairah Azka",
                "kelas": "XI-F",
                "peran": "Koordinator"
              },
              {
                "nama": "Nadia Humaira Alatas",
                "kelas": "XI-B",
                "peran": "Anggota"
              },
              {
                "nama": "Rasyid Surya Pratama Ramadhan",
                "kelas": "XI-F",
                "peran": "Anggota"
              },
              {
                "nama": "Farras Abiyyu Hanif",
                "kelas": "XI-E",
                "peran": "Anggota"
              }
            ]
          }
        ]
      }
    ]
  },

  /* ---------- BANK MOSI ----------
     Salin satu blok { ... } untuk menambah mosi baru.
     - link: ganti dengan link Google Drive file mosi/folder mosi. */
  bankMosi: [
    { mosi: "Pemerintah sebaiknya menghapus ujian tertulis di sekolah", kategori: "Sosial-Budaya", tingkat: "Sekolah", link: "#ganti-link-drive-1" },
    { mosi: "Media sosial memberikan dampak lebih buruk daripada baik bagi remaja", kategori: "Sosial-Budaya", tingkat: "Umum", link: "#ganti-link-drive-2" },
    { mosi: "AI sebaiknya dilarang digunakan dalam tugas sekolah", kategori: "Teknologi/Lingkungan", tingkat: "Sekolah", link: "#ganti-link-drive-3" },
    { mosi: "Pemerintah sebaiknya memberlakukan wajib belanja produk lokal", kategori: "Ekonomi", tingkat: "Nasional", link: "#ganti-link-drive-4" },
    { mosi: "Pemilu serentak sebaiknya dihapuskan", kategori: "Politik/HI", tingkat: "Nasional", link: "#ganti-link-drive-5" },
    { mosi: "Sekolah sebaiknya menghapuskan tugas kelompok", kategori: "Sosial-Budaya", tingkat: "Sekolah", link: "#ganti-link-drive-6" },
    { mosi: "Konten kreator seharusnya mendapatkan perlindungan hukum khusus", kategori: "Hukum/HAM", tingkat: "Umum", link: "#ganti-link-drive-7" },
    { mosi: "Tradisi sebaiknya dilestarikan walaupun dianggap tidak relevan", kategori: "Sosial-Budaya", tingkat: "Umum", link: "#ganti-link-drive-8" },
    /* ===== Mosi tambahan (kategori: Ekonomi | Politik/HI | Sosial-Budaya | Hukum/HAM | Teknologi/Lingkungan) ===== */
    {"mosi": "Dewan ini akan melarang penggunaan media sosial bagi anak di bawah 16 tahun", "kategori": "Teknologi/Lingkungan", "tingkat": "Menengah", "link": "#ganti-link-drive-9"},
    {"mosi": "Dewan ini percaya bahwa pemerintah harus menerapkan Universal Basic Income", "kategori": "Ekonomi", "tingkat": "Lanjut", "link": "#ganti-link-drive-10"},
    {"mosi": "Dewan ini akan menghapus hukuman mati", "kategori": "Hukum/HAM", "tingkat": "Menengah", "link": "#ganti-link-drive-11"},
    {"mosi": "Dewan ini akan memprioritaskan energi terbarukan di atas pertumbuhan ekonomi jangka pendek", "kategori": "Teknologi/Lingkungan", "tingkat": "Menengah", "link": "#ganti-link-drive-12"},
    {"mosi": "Dewan ini percaya bahwa sanksi ekonomi adalah alat diplomasi yang efektif", "kategori": "Politik/HI", "tingkat": "Lanjut", "link": "#ganti-link-drive-13"},
    {"mosi": "Dewan ini akan mewajibkan pendidikan karakter berbasis budaya lokal di sekolah", "kategori": "Sosial-Budaya", "tingkat": "Pemula", "link": "#ganti-link-drive-14"},
    {"mosi": "Dewan ini akan mengizinkan pemilihan umum dengan usia pemilih 16 tahun", "kategori": "Politik/HI", "tingkat": "Pemula", "link": "#ganti-link-drive-15"},
    {"mosi": "Dewan ini percaya bahwa kecerdasan buatan harus diatur ketat oleh negara", "kategori": "Teknologi/Lingkungan", "tingkat": "Lanjut", "link": "#ganti-link-drive-16"},
  ],

  /* ---------- BEDAH MOSI ----------
     Setiap item = satu artikel bedah mosi. Bagian "isi" berisi
     sub-bab; salin blok { sub, teks } untuk menambah sub-bab. */
  bedahMosi: [
    {
      judul : "Pemerintah Sebaiknya Menghapus Ujian Tertulis di Sekolah",
      tanggal: "[ Tanggal bedah ]",
      ringkas: "Contoh artikel bedah mosi — ganti seluruh isi ini lewat file data.js.",
      isi: [
        { sub: "Latar Belakang Mosi",
          teks: "[ Jelaskan konteks dan alasan mosi ini muncul. Misal: polemik beban belajar, kritik terhadap penilaian satu dimensi, dst. ]" },
        { sub: "Definisi & Batasan Kunci",
          teks: "[ Definisikan kata kunci: apa yang dimaksud 'ujian tertulis', apa yang dimaksud 'menghapus' — apakah total atau diganti bentuk penilaian lain. Batasan ini menentukan arah perdebatan. ]" },
        { sub: "Argumen Pro", poin: [
          "Ujian tertulis menilai kemampuan hafalan, bukan pemahaman konsep.",
          "Menghapus ujian mengurangi stres dan kecemasan akademik siswa.",
          "Penilaian proyek/portofolio lebih mencerminkan keterampilan nyata.",
        ]},
        { sub: "Argumen Kontra", poin: [
          "Ujian tertulis adalah metode penilaian paling objektif dan murah.",
          "Tanpa ujian, siswa kehilangan motivasi belajar mendalam.",
          "Sistem alternatif (portofolio) rawan subjektivitas dan beban guru.",
        ]},
        { sub: "Evidence yang Bisa Dipakai", poin: [
          "[ Data/studi: sistem penilaian di negara Finlandia ]",
          "[ Data: survei kecemasan siswa terkait ujian ]",
        ]},
        { sub: "Strategi di Arena Debat", teks: "[ Kapan mosi ini aman diambil pro/kontra, framing apa yang kuat, dan jebakan apa yang harus dihindari. ]" },
      ],
    },
    /* ===== Bedah mosi tambahan ===== */
    {
      "judul": "Dewan ini akan melarang penggunaan media sosial bagi anak di bawah 16 tahun",
      "tanggal": "[ Tanggal bedah ]",
      "ringkas": "Pemerintah wajib melindungi anak dari dampak psikologis dan eksploitasi data lewat pelarangan resmi.",
      "isi": [
        {
          "sub": "Status Quo & Latar Belakang",
          "teks": "Anak usia remaja menghabiskan rata-rata beberapa jam sehari di media sosial. Status quo: batas usia 13 tahun di platform, dengan penegakan lemah."
        },
        {
          "sub": "Stance Afirmasi",
          "teks": "Pemerintah wajib melindungi anak dari dampak psikologis dan eksploitasi data lewat pelarangan resmi."
        },
        {
          "sub": "Stance Oposisi",
          "teks": "Larangan tidak efektif, mudah dihindari, dan memutus akses anak ke informasi dan komunitas."
        },
        {
          "sub": "Key Clash Points",
          "poin": [
            "Efektivitas penegakan larangan",
            "Perlindungan kesehatan mental vs hak akses informasi",
            "Peran orang tua vs negara"
          ]
        },
        {
          "sub": "Core Arguments Afirmasi",
          "poin": [
            "Algoritma dirancang membuat kecanduan",
            "Anak belum matang menimbang risiko privasi"
          ]
        },
        {
          "sub": "Core Arguments Oposisi",
          "poin": [
            "Anak berpindah ke platform gelap yang tak diawasi",
            "Literasi digital lebih efektif daripada larangan"
          ]
        }
      ]
    },
    {
      "judul": "Dewan ini percaya bahwa pemerintah harus menerapkan Universal Basic Income",
      "tanggal": "[ Tanggal bedah ]",
      "ringkas": "UBI menjamin kebutuhan dasar dan memberi kebebasan memilih pekerjaan.",
      "isi": [
        {
          "sub": "Status Quo & Latar Belakang",
          "teks": "Otomatisasi dan ketimpangan membuat sebagian orang rentan kehilangan penghasilan. UBI memberi transfer tunai rutin tanpa syarat kepada seluruh warga."
        },
        {
          "sub": "Stance Afirmasi",
          "teks": "UBI menjamin kebutuhan dasar dan memberi kebebasan memilih pekerjaan."
        },
        {
          "sub": "Stance Oposisi",
          "teks": "UBI membebani anggaran, memicu inflasi, dan dapat menurunkan insentif bekerja."
        },
        {
          "sub": "Key Clash Points",
          "poin": [
            "Kemampuan fiskal negara",
            "Dampak pada insentif kerja",
            "Universal vs bantuan tepat sasaran"
          ]
        },
        {
          "sub": "Core Arguments Afirmasi",
          "poin": [
            "Memutus kemiskinan ekstrem secara langsung",
            "Mengurangi birokrasi bansos"
          ]
        },
        {
          "sub": "Core Arguments Oposisi",
          "poin": [
            "Dana lebih efektif untuk layanan publik",
            "Risiko inflasi menggerus nilai transfer"
          ]
        }
      ]
    },
    {
      "judul": "Dewan ini akan menghapus hukuman mati",
      "tanggal": "[ Tanggal bedah ]",
      "ringkas": "Hak hidup tidak boleh dicabut negara, dan risiko salah vonis tidak bisa dipulihkan.",
      "isi": [
        {
          "sub": "Status Quo & Latar Belakang",
          "teks": "Indonesia masih mengenal pidana mati untuk kejahatan tertentu seperti narkotika dan terorisme. Pembahasan ulang muncul bersama KUHP baru."
        },
        {
          "sub": "Stance Afirmasi",
          "teks": "Hak hidup tidak boleh dicabut negara, dan risiko salah vonis tidak bisa dipulihkan."
        },
        {
          "sub": "Stance Oposisi",
          "teks": "Hukuman mati menjadi efek jera dan keadilan bagi korban kejahatan paling berat."
        },
        {
          "sub": "Key Clash Points",
          "poin": [
            "Efek jera: terbukti atau tidak",
            "Risiko kesalahan peradilan",
            "Keadilan bagi korban vs hak terpidana"
          ]
        },
        {
          "sub": "Core Arguments Afirmasi",
          "poin": [
            "Putusan salah tidak bisa dikoreksi",
            "Hak hidup bersifat non-derogable"
          ]
        },
        {
          "sub": "Core Arguments Oposisi",
          "poin": [
            "Kejahatan luar biasa butuh sanksi maksimal",
            "Menjaga rasa keadilan masyarakat"
          ]
        }
      ]
    },
    {
      "judul": "Dewan ini akan memprioritaskan energi terbarukan di atas pertumbuhan ekonomi jangka pendek",
      "tanggal": "[ Tanggal bedah ]",
      "ringkas": "Kerusakan iklim merugikan ekonomi jauh lebih besar dalam jangka panjang.",
      "isi": [
        {
          "sub": "Status Quo & Latar Belakang",
          "teks": "Transisi energi menuntut investasi besar, sementara banyak negara berkembang masih bergantung pada batu bara untuk pertumbuhan."
        },
        {
          "sub": "Stance Afirmasi",
          "teks": "Kerusakan iklim merugikan ekonomi jauh lebih besar dalam jangka panjang."
        },
        {
          "sub": "Stance Oposisi",
          "teks": "Menekan pertumbuhan jangka pendek merugikan rakyat miskin yang butuh lapangan kerja."
        },
        {
          "sub": "Key Clash Points",
          "poin": [
            "Biaya jangka pendek vs jangka panjang",
            "Keadilan bagi negara berkembang",
            "Kesiapan teknologi dan infrastruktur"
          ]
        },
        {
          "sub": "Core Arguments Afirmasi",
          "poin": [
            "Energi terbarukan membuka industri dan kerja baru",
            "Menghindari kerugian bencana iklim"
          ]
        },
        {
          "sub": "Core Arguments Oposisi",
          "poin": [
            "Listrik murah menopang industri",
            "Transisi bertahap lebih realistis"
          ]
        }
      ]
    },
    {
      "judul": "Dewan ini percaya bahwa sanksi ekonomi adalah alat diplomasi yang efektif",
      "tanggal": "[ Tanggal bedah ]",
      "ringkas": "Sanksi menekan elit pengambil keputusan tanpa kekerasan militer.",
      "isi": [
        {
          "sub": "Status Quo & Latar Belakang",
          "teks": "Sanksi ekonomi dipakai negara dan lembaga internasional untuk menekan perilaku negara lain tanpa perang."
        },
        {
          "sub": "Stance Afirmasi",
          "teks": "Sanksi menekan elit pengambil keputusan tanpa kekerasan militer."
        },
        {
          "sub": "Stance Oposisi",
          "teks": "Sanksi lebih sering menyengsarakan warga sipil dan memperkuat rezim yang dituju."
        },
        {
          "sub": "Key Clash Points",
          "poin": [
            "Efektivitas mengubah perilaku",
            "Dampak kemanusiaan",
            "Alternatif diplomasi lain"
          ]
        },
        {
          "sub": "Core Arguments Afirmasi",
          "poin": [
            "Alternatif lebih murah dari konflik bersenjata",
            "Memberi sinyal norma internasional"
          ]
        },
        {
          "sub": "Core Arguments Oposisi",
          "poin": [
            "Rezim mencari mitra dagang baru",
            "Rakyat biasa paling terdampak"
          ]
        }
      ]
    },
    {
      "judul": "Dewan ini akan mewajibkan pendidikan karakter berbasis budaya lokal di sekolah",
      "tanggal": "[ Tanggal bedah ]",
      "ringkas": "Pendidikan karakter berbasis budaya lokal menguatkan identitas dan kohesi sosial.",
      "isi": [
        {
          "sub": "Status Quo & Latar Belakang",
          "teks": "Kurikulum sering dinilai terlalu akademis, sementara nilai budaya lokal kurang mendapat ruang di sekolah."
        },
        {
          "sub": "Stance Afirmasi",
          "teks": "Pendidikan karakter berbasis budaya lokal menguatkan identitas dan kohesi sosial."
        },
        {
          "sub": "Stance Oposisi",
          "teks": "Kewajiban seragam berisiko menyeragamkan budaya dan menambah beban kurikulum."
        },
        {
          "sub": "Key Clash Points",
          "poin": [
            "Identitas vs keberagaman",
            "Beban kurikulum",
            "Kualitas pelaksanaan oleh guru"
          ]
        },
        {
          "sub": "Core Arguments Afirmasi",
          "poin": [
            "Melestarikan budaya yang terancam punah",
            "Membangun rasa memiliki"
          ]
        },
        {
          "sub": "Core Arguments Oposisi",
          "poin": [
            "Budaya setiap daerah berbeda, sulit diseragamkan",
            "Guru belum siap dari sisi pelatihan"
          ]
        }
      ]
    },
    {
      "judul": "Dewan ini akan mengizinkan pemilihan umum dengan usia pemilih 16 tahun",
      "tanggal": "[ Tanggal bedah ]",
      "ringkas": "Remaja 16 tahun terdampak kebijakan dan sudah mampu berpartisipasi politik.",
      "isi": [
        {
          "sub": "Status Quo & Latar Belakang",
          "teks": "Usia pemilih di Indonesia saat ini 17 tahun atau sudah menikah. Beberapa negara menurunkan batas menjadi 16 tahun."
        },
        {
          "sub": "Stance Afirmasi",
          "teks": "Remaja 16 tahun terdampak kebijakan dan sudah mampu berpartisipasi politik."
        },
        {
          "sub": "Stance Oposisi",
          "teks": "Kematangan politik belum cukup dan rentan dimobilisasi pihak tertentu."
        },
        {
          "sub": "Key Clash Points",
          "poin": [
            "Kematangan politik remaja",
            "Hak partisipasi vs perlindungan",
            "Konsistensi batas usia hukum lain"
          ]
        },
        {
          "sub": "Core Arguments Afirmasi",
          "poin": [
            "Membangun kebiasaan memilih sejak dini",
            "Remaja membayar pajak dan terdampak keputusan"
          ]
        },
        {
          "sub": "Core Arguments Oposisi",
          "poin": [
            "Risiko manipulasi lewat media sosial",
            "Usia dewasa hukum yang tidak sinkron"
          ]
        }
      ]
    },
    {
      "judul": "Dewan ini percaya bahwa kecerdasan buatan harus diatur ketat oleh negara",
      "tanggal": "[ Tanggal bedah ]",
      "ringkas": "Regulasi ketat mencegah kerugian sebelum terjadi dan melindungi hak warga.",
      "isi": [
        {
          "sub": "Status Quo & Latar Belakang",
          "teks": "AI generatif berkembang cepat dan memunculkan isu deepfake, bias algoritma, hak cipta, dan hilangnya pekerjaan."
        },
        {
          "sub": "Stance Afirmasi",
          "teks": "Regulasi ketat mencegah kerugian sebelum terjadi dan melindungi hak warga."
        },
        {
          "sub": "Stance Oposisi",
          "teks": "Regulasi ketat menghambat inovasi dan tertinggal dari perkembangan teknologi."
        },
        {
          "sub": "Key Clash Points",
          "poin": [
            "Inovasi vs perlindungan",
            "Kemampuan negara mengawasi",
            "Regulasi nasional di tengah teknologi global"
          ]
        },
        {
          "sub": "Core Arguments Afirmasi",
          "poin": [
            "Deepfake mengancam demokrasi dan privasi",
            "Akuntabilitas jelas saat terjadi kerugian"
          ]
        },
        {
          "sub": "Core Arguments Oposisi",
          "poin": [
            "Perusahaan pindah ke negara longgar",
            "Regulasi cepat usang"
          ]
        }
      ]
    },
    /* Salin blok mulai dari { sampai }, di bawah baris ini untuk artikel baru */
  ],

  /* ---------- DOKUMENTASI ----------
     jenis: "Foto" atau "Video". link: ganti dengan link Google Drive. */
  dokumentasi: [
    { judul: "Latihan Rutin IDEATEST",    jenis: "Foto",  tahun: "2025", link: "#ganti-link-drive-foto-1" },
    { judul: "Kompetisi Debat antar Sekolah", jenis: "Foto", tahun: "2025", link: "#ganti-link-drive-foto-2" },
    { judul: "Highlight Grand Final",     jenis: "Video", tahun: "2025", link: "#ganti-link-drive-video-1" },
    { judul: "Gathering & Pembekalan",    jenis: "Foto",  tahun: "2024", link: "#ganti-link-drive-foto-3" },
    { judul: "Dokumentasi Pelatihan AREL", jenis: "Video", tahun: "2024", link: "#ganti-link-drive-video-2" },
    { judul: "Piala & Prestasi",          jenis: "Foto",  tahun: "2024", link: "#ganti-link-drive-foto-4" },
  ],

  /* ---------- LINK SOSIAL MEDIA & KONTAK ---------- */
  kontak: {
    instagram: "https://www.instagram.com/ideatest62?exln=MWd2bDFucTEzenFkdw==",
    instagramUser: "@ideatest62",
    youtube: "#",                 // ✏️ ganti dengan link kanal YouTube
    youtubeUser: "[ Link YouTube ]",
    whatsapp1: { nomor: "6283894248075", tampil: "+62 838-9424-8075", label: "Kontak Person 1" },
    whatsapp2: { nomor: "6281210054796", tampil: "+62 812-1005-4796", label: "Kontak Person 2" },
  },
};
