class Kendaraan{
    constructor( totalRoda = 0, kecepatanPerJam = 0 ){
        this.totalRoda = totalRoda;
        this.kecepatanPerJam = kecepatanPerJam;
    }
}

class Mobil extends Kendaraan{
    constructor(totalRoda, kecepatanPerJam){
        super(totalRoda, kecepatanPerJam);
    }

    berjalan(val){
        return this.tambahKecepatan(val);
    }

    tambahKecepatan(kecepatanBaru){
        return this.kecepatanPerJam += kecepatanBaru;
    }

}

function main(Kecepatan, tambahKecepatan){
        let mobil = new Mobil(4,Kecepatan);        
        let mobilBerjalan = mobil.berjalan(tambahKecepatan); 

        return mobilBerjalan;
}

console.log(main(10,15));