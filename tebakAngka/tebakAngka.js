let main =true
while (main == true){
alert ('Ini adalah permainan tebak angka')
let comp = Math.floor (Math.random() *10)+1
let hasil = ''
let player = ''
let playerTry = 5
while (player != comp){
    player = prompt (`silahkan pilih angka 1-10 \nAnda memiliki ${playerTry} kesempatan`)    
    if (player == comp){
            hasil = 'Anda BENAR !!!'
        }else if(player <= comp){
            playerTry--
            hasil = 'Angka yang anda masukan masih lebih KECIl \n' + 'kesempatan anda tinggal ' +playerTry 
        }else if(player >= comp){
            playerTry--
            hasil = 'Angka yang anda masukan terlalu BESAR \n' + 'kesempatan anda tinggal ' +playerTry
        }else {
            playerTry--
            hasil = 'MASUKAN ANGKA !!! \n' + 'kesempatan anda tinggal ' +playerTry
        }
                if (playerTry <= 0){
                    player = comp
                    alert('anda kalah!!! \nAngka yang benar adalah '+ comp)
                }else{
                alert (hasil)    
                }
            }
            main = confirm ('main lagi?')
        }
    alert('Terimakasih telah bermain')
        

