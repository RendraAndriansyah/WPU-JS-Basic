function tambah(){
    let hasil = 0
    for(let i = 0; i<arguments.length;i++) // isi dari arguments.length (baris 8)
        hasil += arguments[i]// [i] adalah index pada array (index array dimulai dari angka 0)
                             // untuk dicoba silahkan isi [i] diganti sampai panjang arguments
                             // 0/1/2/3/4 = 5 array (5/10/15/20/25) contoh arguments[1] maka hasilnya adalah
                             // let hasil akan melooping index ke 1(10) sebanyak 5 kali hasilnya adalah 50
    return hasil
}
let output = tambah(5,10,15,20,25)
console.log(output);