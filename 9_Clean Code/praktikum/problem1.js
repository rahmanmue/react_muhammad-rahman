// class user {
//    var id;
//    var username;
//    var password;

// }

// class userservice{
//     user[] users = [];

//     user[] getallusers(){
//         return users;
//     }

//     user[] getuserbyid(userId){
//         return users.filter(userId);
//     }
// }


// Analisis Kode 
// 1. penamaan kelas harus diawali dengan huruf kapital
// 2. Properti id, username, dan password dimasukan ke dalam constructor
// 3. Kelas UserService harus Extends ke kelas User
// 4. Penamaan method harus menggunakan camelCase
// 5. Karena UserServecis extends ke User ditambahkan constructor untuk merujuk data id, dan username dimasukan kedalam super()
// 6. penamaan properti username diubah menjadi name agar menghindari penambahan konteks yang tidak perlu
// 7. untuk array users mengambil data dari kelas user properti name
// 8. Untuk mengambil data properti atau method dalam kelas tersebut gunakan this.{nama properti / method}
// 9. dalam method getUserById terdapat parameter userId yang mana data yang difilter mengambil dari id dalam kelas User
// 10. didalam filter diisi sebuah arrow function untuk mencari id berdasarkan user id yang dimasukan



class User {
    constructor(id,name, password) { 
       this.id = [10,11,12,13,14];
       this.name = ['a','b','c','d','e'];
       this.password= password;
    }

}

class UserService extends User{
    constructor(id,name){
        super(id,name);
        this.users = [...this.name];
    }

    getAllUsers(){
        return this.users;
    }

    getUserById(userId){
        return this.id.filter( x => x == userId);
    }
}

// const siUser = new User(55);
// console.log(siUser.getId())

// let UserService = new UserService();
// console.log(UserService.getAllUsers());
// console.log(UserService.getUserById(2));
