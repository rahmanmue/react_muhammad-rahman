# React Fundamental

## Apa itu JSX
JSX singkatan dari Javascript XML, Merupakan ekstensi pada javascript. dibuat berdasarkan logika rendering sangat terikat dengan logic bagaimana logic UI lainnya seperti event ditangani state berubah seiring waktu, bagaimana data disiapkan dan ditampilkan. Bagian penanda JSX menetukan jenis elemen dari react jenis yang dikapitalisai menandakan penanda JSX merujuk pada sebuah komponen react. ketika sebuah tipe elemen dimulai dengan huruf kecil menunjukan sebuah komponen bawaan

## React Lifecycle
 1. render
 2. ComponentDidMount()
    * Dipanggil ketika component sudah dirender untuk pertama kali
    * Tempat yang tepat untuk pemanggilan API
    * Boleh ada setState()
 3. ComponentDidUpdate()
    * Dipanggil ketika terjadi update (props atau state berubah) 
 4. ComponentWillUnmount()
    * Dipanggil ketika komponen dihancurkan

## Komponen, Render Bersyarat, dan Key 
Komponen adalah bagian kode yang dapat digunakan kembali yang digunakan untuk menentukan tampilan, behaviour, dan state sebagai UI beberapa UI dapat dipecah untuk menjadi bagian tersendiri. Kita dapat merender beberapa bagian dengan menggunakan if else, if else dengan kondisi ternary operator, pada JSX setiap logika yang terjadi disimpan dalam tanda kurung kurawal {} agar program dapat dijalankan. Key membantu react untuk mengidentifikasi item mana yang telah diubah, ditambahkan, atau dihilangkan.  

# Tugas
Link Tugas [code program](praktikum/my-task)
![screenshots](screenshots/screenshots.png)