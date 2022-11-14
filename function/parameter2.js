// function 1
function tambah(a,b){
    return a+b
}
// function 2
function tambahKali (a,b,c){
    return (a+b)*c
}
//          kali (a,(2+3=5) + b,(5+5=10) * c(2+2=4) ) / (5+10)*4 = 60 
let hasil = tambahKali (tambah(2,3),tambah(5,5),tambah(2,2))
console.log(hasil);