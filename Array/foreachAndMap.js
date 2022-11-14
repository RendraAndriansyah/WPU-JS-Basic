// forEach adalah method untuk looping pada array
arr = [1,9,2,8,3,7,4,6,5]

// looping seperti menggunakan loop
arr.forEach (function(i){ 
    console.log(i);
})

// looping dengan mengambil index 
// NOTE !!! parameter mengacu pada element terlebih dahulu 
// di ikuti dengan index 
arr.forEach(function(values,index){
    console.log(`index ke-${index} dan nilainya ${values}`);
})
console.log('=========================\n');



// method map mengembalikan nilai pada array
arr1 = [1,9,2,8,3,7,4,6,5]
arr2 = arr1.map(function(a){ // menyimpan kembali nilai dari arr1 
    return a * 2 // nilai dimanipulasi pada function (arr1 * 2)
})
console.log('arr1 di *2');
console.log(arr2.join(',')+'\n');

// method short untuk mengurutkan karakter pada element
console.log('mengurutkan element pada array');
console.log(arr1.sort().join(',')+'\n'); // dari 1,9,2,8,3,7,4,6,5 jadi 1,2,3,4,5,6,7,8,9
// sort pada javascript mengacu pada urutan karakter
console.log('urutan karakter');
console.log(arr2.sort().join(',')+'\n'); // urutan karakter

// untuk mengurutkan urutan angka dengan sesuai sort memiliki function default
arr2.sort(function(a,b){
    return a-b // ascending
})
console.log('urutan sesuai (ascending)');
console.log(arr2.join(',')+'\n');

arr2.sort(function(a,b){
    return b-a // descending
})
console.log('urutan menurun (descending)');
console.log(arr2.join(','));