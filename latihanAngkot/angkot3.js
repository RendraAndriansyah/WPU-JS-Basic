var noAngkot = 1
var jumlahAngkot = 10
var angkotBeroperasi = 6
for (noAngkot; noAngkot<=jumlahAngkot;noAngkot++){
   if(noAngkot<=angkotBeroperasi){
      console.log('angkot No. ' + noAngkot +' beroperasi dengan baik');
   }else{
      console.log('angkot No. ' + noAngkot +' sedang tidak beroperasi');
   }
}