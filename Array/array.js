// ARRAY
// * array adalah variable jamak, yang mempunyai banyak element dan diacu dengan nama yang sama
// * array adalah kumpulan pasangan key and value
// * key pada array adalah index yang bertipe integer yang dimulai dari 0
// * array pada javascript bertipe object
// * array pada javascript memiliki fungsi / method, method yang paling umum digunakan adalah
// .length (untuk menghitung jumlah element di dalamnya)
// * array pada javascript boleh memiliki type berbeda


// contoh
let array = ['rendra','andriansyah',25,true]
console.table(array);
//               output
//          key         value
//      ┌─────────┬───────────────┐
//      │ (index) │    Values     │
//      ├─────────┼───────────────┤
//      │    0    │   'rendra'    │ index pertama 0 dan value bertype string
//      │    1    │ 'andriansyah' │ index ke dua 1 dan value bertype string
//      │    2    │      25       │ index ke tiga 2 dan value bertype integer
//      │    3    │     true      │ index ke empat 3 an value bertype boolean
//      └─────────┴───────────────┘

//                      0       1       2      3       4
let namaBinatang = ['kucing','anjing','sapi','kuda','zebra']
console.log(namaBinatang[2]); // mengakses index ke 2 yaitu sapi
console.log(namaBinatang[4]); // mengakses index ke 4 yaitu zebra
console.log(typeof(namaBinatang)); // bukti array pada javascript bertype object
console.log(namaBinatang.length); // memiliki 5 array atau 5 element atau 5 object,
//                               !!! yang 4 adalah INDEX karena dimulai dari 0

// function hello wolrd
let funcHello= function(){
    console.log('Hello World');
}
// aray multi dimensi/bersarang (nested array)
let arr = ['rendra','Andriansyah',24,funcHello,[31,08,1997]]

console.table(arr); // bentuk table array nested
console.log(arr[4][0]);// mengakses array ke 4 terluar lalu mengakses
//                        array ke 0 didalam didapati adalah 31

let arr2 =['Rendra',[24],'andriansyah',[31,8,1997]]

console.table(arr2); // bentuk table pada arr2
console.log('Nama '+ arr2[0],arr2[2]); // mengakses index ke 0  dan ke 1 yaitu rendra & andrianysah
console.log(arr2[1][0]+' tahun'); // mengakses angka 24 pada nested pertama
console.log('Lahir pada tahun ' + arr2[3][2]); // mengakses angka 1997 pada nested kedua