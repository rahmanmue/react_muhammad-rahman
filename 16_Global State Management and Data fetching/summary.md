# State Management Global dan Fetching data

Pada materi ini mempelajari

## Redux

Redux adalah library untuk manajemen state global. Untuk penggunaanya digunakan ketika mempunyai state yang banyak terhubung ke beberapa atau banyak komponen child yang memerlukan state tersebut dengan redux kita bisa menyimpannya di store tanpa harus mengoper dari parent hingga ke child nya. Terdapat beberapa komponen penting pada redux

1. Actions : Memberikan informasi kepada Store
2. Reducers : JavaScript functions yang mengambil state aplikasi saat ini dan object action lalu mengembalikan state aplikasi terbaru
3. Store : Objek sentral yang menyimpan state pada aplikasi

## Redux Thunk

Thunk Middleware untuk redux yang memungkinkan kita untuk membuat action creator yang mengembalikan function bukan action. Redux thunk diperlukan Untuk menghandle side effect logic seperti logic synchronous kompleks yang perlu mengakses store dan juga logic async seperti request data.

## Persist State dan Data Fetching

Persist state adalah menyimpan state ke localstorage yang ada dibrowser dalam react js untuk menggunakan persist state kita perlu menginstall modul redux-persist terlebih dahulu. Data Fetching adalah meminta atau request data ke server sehingga server mengembalikan data atau merespon tersebut. terdapat cara fetching data pada react

1. Fetch API
2. Axios
3. React Query Library

# Tugas

[Link Tugas](praktikum/my-task/) <br>

![ss](screenshots/screenshots1.png) <br>
![ss](screenshots/screenshots2.png)
