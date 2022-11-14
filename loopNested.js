// latihan segitiga pascal
var segitigaUtuh =10
var pola = 5

// pascal kiri turun
var a1 = ''
      for(i1 = 0; i1< pola; i1++){
            for (j1 = 0; j1<=i1; j1++){
                  a1 += "*"
            }
            
            a1 += "\n"
}
console.log(a1 + "setengah pascal kiri turun\n")


//pascal kiri naik
var a2 = ''
      for(i2 = 0; i2 <pola; i2++){
            for(j2=pola; j2>i2;j2--){
                  a2 += '*'
            }
            
            a2 += '\n'
      }
      console.log(a2 + "setengah pascal kiri naik\n");

//pascal kiri utuh
var a3 = ''
      for(i3=0; i3<segitigaUtuh;i3++){
            if (i3 < pola) {
                  
                  for(j3=0; j3<i3;j3++){
                        a3 += "*"
                  }
            }else{
                  for(k3=segitigaUtuh; k3>i3;k3--){
                        a3 += "*"
                  }
            }
            a3 += "\n"
      }
      console.log(a3 + "pascal kiri utuh \n");


// pascal kanan turun
var a4 = ''
for(i4 = 0; i4<pola;i4++){
      for(j4=pola; j4>i4;j4--){
            a4 += " "
      }
      for (k4= 0; k4<=i4;k4++){
            a4 += "*"
      }
      a4 += '\n'
}
console.log(a4 + "setengah pascal kanan turun\n");

// setengah pascal kanan naik
var a5 = ''
for(i5 = 0; i5<pola;i5++){
      for(j5=0; j5<=i5;j5++){
            a5 += " "
      }
      for (k5= pola; k5>i5;k5--){
            a5 += "*"
      }
      a5 += '\n'
}
console.log(a5 + "setengah pascal kanan naik\n");

//setengah pascal kanan
var a6 = ''
for (i6 = 0; i6<segitigaUtuh; i6++){
      if (i6 <pola){
            for(j6= pola; j6 >i6; j6--){
                  a6 += " "
            }
            for(k6=0; k6<i6;k6++){
                  a6 += "*"
            }
      }else{
            for(l6=pola;l6<i6;l6++){
                  a6 += " "
            }
            for (m6=segitigaUtuh; m6>i6;m6--){
                  a6 += "*"
            }
      }
      a6 += '\n'
}
console.log(a6 + 'segitiga pascal kanan utuh \n');

// segitiga pascal normal
var a7 =''
      for(i7=0;i7<segitigaUtuh;i7++){
            for(j7=segitigaUtuh;j7>i7;j7--){
                  a7 += " "
            }
            for(k7=0;k7<i7;k7++){
                  a7 += '*'
            }
            for(l7=0;l7<=i7;l7++){
                  a7 += '*'
            }
            a7 += '\n'
      }

      console.log(a7 + 'segitiga pascal normal \n');


// segitiga pascal terbalik
var a8 = ''
      for(i8=0;i8<segitigaUtuh;i8++){
            for(j8=0;j8<=i8;j8++){
                  a8 += " "
            }
            for(k8=segitigaUtuh;k8>i8; k8--){
                  a8 += "*"
            }
            for(l8=segitigaUtuh-1;~l8>i8;l8--){
                  a8 +='*'
            }
            a8 += "\n"
      }

console.log(a8 + 'segitiga pascal terbalik');