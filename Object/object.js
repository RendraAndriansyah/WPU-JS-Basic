// quotes : if you understand object, absolutely you understand javascript

// isi object dengan tanda {}
let booter ={
    //  index : value
    nama : 'Muhammad Rendra Andriansyah', // jangan lupa koma setelah mengisi index object(,)
    usia : 24,
    sudahMenikah : false,
    // bisa memasukan type array
    lamaBootcamp : [1,2,3,4,5,6,7,8,9,10],
    // bisa nested object
    alamat :{
        jalan : 'Kp. babakan Sirna RT 03/11 No.8',
        desa : 'Cilebut timur',
        kec : 'Sukaraja',
        kota : 'Kabupaten Bogor',
        provinsi : 'Jawa Barat'
    }
}
console.log(booter.nama); // menampilkan nama
console.log(booter.nama.length); // total karakter pada nama
console.log(booter.alamat.jalan,booter.alamat.desa); // menampilkan jalan & Desa 



