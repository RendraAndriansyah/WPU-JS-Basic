// SCOPE
// scope dalam bahasa pemrograman yaitu penggunaan variable pada code
// scope pada pemrogramman umumnya menggunakan block scope yaitu jika
// terdapat variable pada block {...} ini tidak dapat digunakan di area
// luar block tersebut.

// sedangkan javascript menganut function scope yaitu variable hanya bisa 
// diblock dengan function, contohnya sebagai berikut.

// variable a & b adalah window variable atau global variable
let a = 1
let b = 2
function functionScope(){
    // variable c & d adalah function scope
    let c = 3 
    let d = 4

    // memanggil variable didalam function (scope)
    console.log(a); // bisa diakses karena global variable
    console.log(b); // bisa diakses ----------""----------
    console.log(c); // bisa diakses  karena terdapat didalam  function
    console.log(d); // bisa diakses  karena terdapat didalam  function
}

functionScope();
// // memanggil diluar function / global
console.log(a); // bisa diakses karena global variable
console.log(b); // bisa diakses ----------""----------
console.log(c); // tidak bisa diakses  karena terdapat didalam  function (error)
console.log(d); // tidak bisa diakses  karena terdapat didalam  function (error)

