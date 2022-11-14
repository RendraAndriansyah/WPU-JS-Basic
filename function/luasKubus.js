function luasKubus(a,b){
    rumusKubusPertama = a*a*a
    rumusKubusKedua = b*b*b
    hasilHitung = rumusKubusKedua + rumusKubusPertama
    return hasilHitung 
}

let k1 = parseInt( prompt ('Masukan luas sisi Volume kubus pertama'))
let k2 = parseInt(prompt ('Masukan luas sisi Volume kubus kedua'))
let hasilLuasKubus = luasKubus(k1,k2) 

alert (`hasilnya adalah ${hasilLuasKubus}`)