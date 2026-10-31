PANDUAN FOTO DOKUMENTASI PORTOFOLIO
===================================

Cukup salin foto ke folder yang sesuai dengan nama berikut — website akan
menampilkannya otomatis (tidak perlu mengedit index.html).

  foto-1.jpg, foto-2.jpg, foto-3.jpg, ...   -> galeri dokumentasi
  cover.jpg                                 -> gambar sampul kartu proyek (opsional)

Format yang didukung: .jpg / .jpeg / .png / .webp
Saran: lebar 1200-1600 px, ukuran < 500 KB per foto agar website tetap cepat.

FOLDER                          | BAGIAN DI WEBSITE                           | SLOT
--------------------------------|---------------------------------------------|-----
magang-bankaltimtara            | Pengalaman Kerja - Magang Bankaltimtara      | 4
pendidikan-polnes               | Pendidikan - D3 Akuntansi POLNES (wisuda dll)| 3
proyek-hki-polnes-loa-lepu      | Proyek HKI - Aplikasi PO-lne-S Mikro Loa Lepu| 3
proyek-sia-vba-sosis-azizah     | Proyek - SIA Excel VBA (Tugas Akhir)         | 3
proyek-pos-android              | Proyek - Aplikasi POS Android                | 3
proyek-sia-yayasan-pkm          | Proyek - SI Akademik Yayasan (PKM-PM)        | 3
proyek-sistem-informasi-logistik | Proyek - Sistem Informasi Logistik          | 3

Menambah jumlah slot / keterangan foto:
  Di index.html, cari data-folder="assets/dokumentasi/<folder>" lalu ubah
    data-count="5"
    data-captions="Keterangan foto 1|Keterangan foto 2|..."

Menyembunyikan slot kosong (setelah semua foto lengkap):
  Di index.html ubah  const SHOW_EMPTY_SLOTS = true;  menjadi  false;

