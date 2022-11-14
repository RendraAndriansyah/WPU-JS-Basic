// while tanya untuk mengulang permainan
// tanya = true
let tanya = true
// ketika (tanya == true) maka ulangi
while (tanya == true){

  // inputan pilihan player
  let player = prompt('pilih: gunting,batu, atau kertas')


  // menangkap pilihan komputer dengan math.random
  // membangkitkan pilihan random
  let comp = Math.random();
    if (comp < 0.34) {
      comp = 'gunting '
    }else if(comp >=0.34 && comp<=0.67){
      comp ='batu'
    }else{
      comp ='kertas'
    }


  // aturan atau rules
  let hasil =''
  if (player == comp){
    hasil ='SERI !!!'
  }else if (player == 'gunting'){
  //   if(comp == 'batu'){
  //     hasil ='LOSE'
  //   }else{
  //     hasil == 'WIN'
  // }

                       // shorthand ternarry option (2 pilihan)
    hasil = (comp == 'kertas') ? 'MENANG !!!' : 'KALAH !!!'
  }else if (player == 'kertas'){
    hasil = (comp == 'batu') ? 'MENANG !!!' : 'KALAH !!!'
  }else if(player == 'batu'){
    hasil = (comp == 'gunting') ? 'MENANG !!!' : 'KALAH !!!'
  } else{
    hasil ='inputan anda salah!!!'
  }


  //tampilkan hasil
  alert (`anda memilih ${player} dan komputer memilih ${comp}\nHasilnya adalah anda ${hasil}`)


  // confirm untuk memunculkan dialog box
  // confirm ini adalah dialog box yang berisi yes(true) no(false)
  // jika memilih yes maka while akan tetap looping
  // jika memilih no maka while akan keluar dan menuju alert terimaskasih
  tanya = confirm('main lagi?')
}

alert ('Terimakasih sudah bermain')