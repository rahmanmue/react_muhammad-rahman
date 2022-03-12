class Kendaraan{
    constructor( kecepatanPerJam = 0, totalRoda = 0){
        this.kecepatanPerJam = kecepatanPerJam;
        this.totalRoda = totalRoda;
    }
}

class Mobil extends Kendaraan{

    // berjalan(nilai){
    //     return this.tambahKecepatan(nilai);
    // }

    berjalan(){
        return this.tambahKecepatan(10);
    }

    tambahKecepatan(kecepatanBaru){
        return this.kecepatanPerJam += kecepatanBaru;
    }

}

function main(){
        let mobilCepat = new Mobil(4,20);
        mobilCepat.berjalan(); 
     
        let mobilLamban = new Mobil(4,10);
        mobilLamban.berjalan(); 
}

console.log(main());