# Resume Materi Event Handling

## State

State adalah data private sebuah komponen yang tersedia dikomponen tersebut dan tidak dapat diakses oleh komponen lain. State ini dapat dimodifikasi dengan menggunakan setState setiap kali terjadi modifikasi maka akan terjadi render ulang state ini bersifat asynchronous dan dipakai dalam class. perbedaan state dengan props adalah props diakses pada function dan class, read only, kegunaan seperti variabel turunan dari komponen parent sedangkan state bisa diclass, dapat dimodifikasi, dan merupakan variabel pribadi dari komponen tersebut.

## Statefull dan Stateless

Perbedaan dari komponen Statefull dan Stateless

- Statefull : mengerti aplikasi, Stateless : tidak tahu aplikasi
- Statefull : melakukan data fetching , Stateless : tidak melakukan data fetching
- Statefull : berinteraksi dengan aplikasi, Stateless : bertujuan untuk visualisasi
- Statefull : tidak dapat digunakan kembali, Stateless : dapat digunakan kembali
- Statefull : meneruskan status dan data ke anak anaknya, Stateless : hanya berkomunikasi dengan induk langsungnya

## Event Handling

Event adalah suatu peristiwa yang dipicu oleh pengguna pada suatu komponen, misalnya tombol diklik. terdapat beberapa contoh list event

    1. Clipboard Events (promise terpenuhi)
    2. Form Events (onChange, onSubmit)
    3. Mouse Events (onClick, onDoubleClick, onMouseOver)
    4. Generic Events (onError, onLoad)

## Tugas

[Link Tugas](praktikum/my-task/)
![screenshots](screenshots/screenshots.png)
