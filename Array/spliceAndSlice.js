// splice menambahkan dan menghapus element ditengah-tengah
//              0          1          2         3       4       5       6        7
let arr5 = ['Muhammad','Rendra','Andriansyah','Evita','Sari','tuyeng','nopal','gemoy']
// 5 = dimulai dari index, 2 =element yang akan dihapus (dihitung dari index 5)
// jadi yang dihapus adalah index 5 dan 6, 'abang' adalah element yang ditambahkan
arr5.splice(5,2,'abang') // splice

console.table(arr5);
console.log('==========================\n');

// slice adalah memotong element pada array dan menjadikannya array baru
let arrSlice = arr5.slice(3,5) // mengambil array ke 3 dan ke 4 
// 5 adalah penanda akhir agar tidak terslice
console.table(arrSlice);

//jika ingin mengambil element terakhir pada array tinggal dilebihkan 1
// dik : arr5 punya 7 array index 5 : abang & index 6 : gemoy
let arrSliceAkhir = arr5.slice(5,7)
console.table(arrSliceAkhir);

// element dari array induk tidak akan hilang meski sudah terslice
console.table(arr5);
console.log('==========================\n');




