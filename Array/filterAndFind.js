// filter 
let array =[1,13,5,17,9,12,15,5,4,16,8,]
arrayFilter = array.filter(function(x){
    return x > 5 // filter tampilkan angka lebih dari 5
})

console.log(arrayFilter.join(',')); // 13,17,9,12,15,16,8 
// method filter menampilkan sesuai urutan index
console.log('==================');
console.log(arrayFilter.sort(function(a,b){
    return a - b
}).join(',')+'\n'); // mengkombinasikan method join dan sort untuk
//                mengurutkan angka ()

arrayFind = array.find(function(x){
    return x == 5 // mencari angka 5
})
console.log(arrayFind);

arrayFind2 = array.find(function(a){
    return a >= 5 // mencari angka lebih dari 5
})

console.log(arrayFind2); // memunculkan angka 13 karena menelusuri dari index

testArray =array.map(function(x) {
    array.sort(function(a,b) {
        return a -b
    })
    return x;
})

console.log(testArray.join());