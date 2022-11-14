let main =true
while (main == true){
alert ('mari tebak angka')
comp = Math.floor (Math.random() *5)
let hasil = ''
let player = ''
let playerTry = 3
for (playerTry; player != comp;playerTry--){
    player = prompt (`silahkan pilih angka 0-5 \nAnda memiliki ${playerTry} kesempatan`)    
    if (player == comp){
            hasil = 'Anda BENAR !!!'
        }else if(player <= comp){
            // playerTry--
            hasil = 'Angka yang anda masukan masih lebih KECIl \n' + 'kesempatan anda tinggal ' +playerTry 
        }else if(player >= comp){
            // playerTry--
            hasil = 'Angka yang anda masukan terlalu BESAR \n' + 'kesempatan anda tinggal ' +playerTry
        }else {
            // playerTry--
            hasil = 'MASUKAN ANGKA !!! \n' + 'kesempatan anda tinggal ' +playerTry
        }
                
                if (playerTry <= 0){
                    player = comp
                    alert('anda kalah!!! \nAngka yang benar adalah '+ comp)
                } else{
                    alert (hasil)
                }
            }
            main = confirm ('main lagi?')
        }
        

