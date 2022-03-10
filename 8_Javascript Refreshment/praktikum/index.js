var a = 5;
let b = "kampus merdeka";
const nama = "Budi";
// No 2 A ( ubah variabel terdaftar menjadi true)
// let terdaftar = false;
let terdaftar = true;

// No 1 A (menambahkan console.log dibawah variabel lengkap_arr)
let lengkap_arr = [a, b, nama, terdaftar];
console.log("jawaban no 1 A"); // Budi
console.log(lengkap_arr[2]); // Budi
console.log("\n")


function perkenalan() {
    let asal = "Indonesia";
    return console.log(
        "perkenalkan nama saya " +
        nama +
        " nomor urut " +
        a +
        " sekarang sedang mengikuti " +
        b +
        " berasal dari " +
        asal
    );
}




if (terdaftar === true){
    console.log("jawaban no 1 B");
    console.log(nama + " terdaftar sebagai kegiatan kampus merdeka");
    console.log("\n")
}

console.log("jawaban no 1 C");
perkenalan();
console.log("\n")

a = b;

// nama = b; // error karena nama dideklarasikan const
// console.log("asal diakses = " + asal); // error karena asal merupakan variabel lokal di function perkenalan

console.log("jawaban no 1 D");
console.log("a adalah = " + a);
console.log("b adalah = " + b);
console.log("array = "+ lengkap_arr[2]);
// No 3 A Menambahkan fungsi perkenalan
perkenalan();
console.log("\n")

// Jawaban No 2 

// a) karena varibel terdaftar sebelumnya dideklarasikan menjadi false
// b) karena deklarasinya const nama const tidak dapat diubah valuenya
// c) Tidak karena variabel asal berada didalam scope lokal di function perkenalan


console.log("Jawaban No 2");
console.log("a) karena varibel terdaftar sebelumnya dideklarasikan menjadi false");
console.log("b) karena deklarasinya const nama const tidak dapat diubah valuenya");
console.log("c) Tidak karena variabel asal berada didalam scope lokal di function perkenalan");
console.log("\n")

// No 3
console.log("Jawaban No 3");
const foo = ['Budi','Sita','Ayu'];
const [A,B,C] = foo;

console.log(A);
console.log(B);
console.log(C);
console.log("\n")

// No 4
console.log("Jawaban No 4");
let bdays = ['10-17','05-19','20-19'];
const bdaydash = bdays.map(x => x.replace('-','/')); 
console.log(bdaydash);
console.log("\n")

// No 5 
console.log("Jawaban No 5");
let value = [1,2,3,4,5];
const kali_2 = value.map(val => val*2);
console.log(kali_2);
console.log("\n")

// No 6
console.log("Jawaban No 6");
let arr = [1.5,2.56,5.1,12.33];
const pembulatan = arr.map(val=> Math.round(val));
console.log(pembulatan);