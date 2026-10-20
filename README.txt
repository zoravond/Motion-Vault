MOTION VAULT — Website Ekskul Debat Ideatest
=============================================

CARA PAKAI:
Buka index.html lewat browser (Chrome/Edge). Untuk hasil maksimal,
jalankan lewat server lokal sederhana, misalnya:
  - VS Code + extension "Live Server", atau
  - perintah: python -m http.server 8000
lalu buka http://localhost:8000

STRUKTUR FOLDER:
  index.html          -> Beranda
  tentang.html        -> Apa itu debat & Ideatest
  kepengurusan.html   -> Struktur kepengurusan
  pembicara.html      -> Peran P1-P2-P3 Asian Parliamentary
  arel.html           -> Metode A.R.E.L
  bank-mosi.html      -> Bank mosi (ada filter kategori)
  bedah-mosi.html     -> Artikel bedah mosi (accordion)
  dokumentasi.html    -> Galeri foto/video
  kontak.html         -> Sosmed, WhatsApp & form pesan WA
  css/style.css       -> Semua gaya. Tema GELAP (mahogany-crimson) & TERANG (palet biru Deep Blue)
  js/data.js          -> << EDIT DI SINI: semua konten >>
  js/script.js        -> Jangan perlu diubah (logika website)

CARA EDIT KONTEN (semua tanpa sentuh HTML):
1. Kepengurusan, nama & foto  -> bagian "kepengurusan" di js/data.js
2. Bank mosi                  -> bagian "bankMosi" (ganti link Drive juga di sini)
3. Bedah mosi                 -> bagian "bedahMosi"
4. Dokumentasi foto/video     -> bagian "dokumentasi"
5. Statistik angka beranda    -> bagian "stats"
6. Link Instagram/YouTube/WA  -> bagian "kontak"

Semua teks yang masih placeholder ditandai dengan tanda kurung siku,
misalnya [ Nama Ketua ], agar mudah dicari (Ctrl+F di data.js).

Link Google Drive:
- Pastikan izin file Drive di-set "Siapa saja yang memiliki link".
- Bank mosi & dokumentasi: tinggal ganti teks "#ganti-link-drive-..." 
  di js/data.js dengan link asli.

TEMA TERANG / GELAP:
- Ada tombol matahari/bulan di navbar. Pilihan pengunjung tersimpan otomatis,
  dan default mengikuti pengaturan HP/laptop mereka.
- Warna kedua tema ada di bagian atas css/style.css (cari: TEMA: dark & light).
  Light: Deep Blue #2A4D88, Concerto #D9D9D8, Glacial Salt #B1BBC8, Ocean City #7C94B8.
