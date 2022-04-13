# Resume Testing

Dalam Materi Ini Memepelajari

## Apa itu Testing

Testing adalah proses memverifikasi bahwa test assertion kita benar dan bahwa kode kita tetap benar sepanjang masa aplikasi. Test assertion ini berupa ekspresi boolean yang mengembalikan nilai true kecuali ada bug di kode kita

Manfaat Testing

- Mengurangi bug pada aplikasi
- ketika mempunyai coverage yang baik saat mengubah bagian pada aplikasi kita akan merasa percaya diri dan ada bagian yang broken kita akan segera mengetahuinya

## Kategori Testing

Terdapat dua kategori untuk cara mengetes di react

1. Rendering Components Trees, didalam enviroment tes yang sudah disederhanakan dan ditegaskan pada keluarannya.
2. Menjalankan Aplikasi Lengkap didalam browser dikenal sebagai tes "end-to-end"

## Pertimbangan Memilih Tools dan Rekomendasi Tools

Dalam memilih tools terdapat beberapa pertimbangan yang harus diperhatikan yaitu :

1. Kecepatan Iterasi VS Environmet yang realistis
2. Seberapa Banyak Mock

Terdapat beberpa tools yang direkomendasikan untuk pengetesan pada react yaitu :

1. Jest
   Test Runner pada JS yang memungkinkan mengaskses DOM melalui jsdom. Jest memberikan kecepatan iterasi yang bagus dikombinasikan dengan fitur yang powerful seperti mocking modules dan timers sehingga dapat memiliki kontrol lebih pada kode yang dijalankan

2. React testing Library
   Merupakan seperangkat helpers yang memungkinkan mengetes komponen pada react tanpa bergantung pada detail implementasinya.

Jika kita menginstal react dengan create-react-app Jest dan React Testing Library akan secara default sudah terinstal.
