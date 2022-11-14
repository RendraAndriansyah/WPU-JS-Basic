// manipulasi array

// Menambahkan array
let arr1 = []
arr1[0]= 'Muhammad' // menambahkan Muhammad pada index ke 0
arr1[1]= 'Rendra'// menambahkan Rendra pada index ke 1
arr1[2]= 'Andriansyah'// menambahkan Andriansyah pada index ke 2

console.log(arr1); // memanggil array dengan type data object (not recommended)
console.log('==========================\n');


// Menghapus Array 
let arr2 =['Muhammad','Rendra','Andriansyah']
arr2[0] = undefined // mengosongkan index 0 menjadi undefined
arr2[2]= undefined // mengosongkan index 0 menjadi undefined

console.log(arr2); // memanggil array dengan type data object (not recommended)
console.log('==========================\n');


//memanggil array dengan benar

let arr3 = ['Muhammad','Rendra','Andriansyah']

for (let looping=0;looping<arr3.length;looping++){
//  memanfaatkan index perulangan yaitu looping
    console.log(arr3[looping]);
}


