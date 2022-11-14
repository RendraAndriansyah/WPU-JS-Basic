// refactoring adalah mensederhanakan code yang sudah dibuat
// contohnya seperti luasKubus.js terdapat 4 baris code
// sedangkan pada refactoring hanya membutuhkan 1 baris code
// yang berarti menghemat penggunaan memory process dan readibility
function luasKubus(a,b){
    return a*a*a + b*b*b 
}


let k1 = parseInt( prompt ('Masukan luas sisi Volume kubus pertama'))
let k2 = parseInt(prompt ('Masukan luas sisi Volume kubus kedua'))
let hasilLuasKubus = luasKubus(k1,k2) 

alert (`hasilnya adalah ${hasilLuasKubus}`)