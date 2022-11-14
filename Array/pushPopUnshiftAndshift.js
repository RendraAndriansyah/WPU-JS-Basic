// manipulasi array dengan method (arr.xxxxx)
let arr4 = ['maret']

// menambah element pada index terakhir dengan push
arr4.push('april') // menambahkan index terakhir dengan push
arr4.push('mei','juni') // push bisa langsung ditambahkan lebih dari 1
arr4.pop() // menghapus element pada index terakhir (menghilangkan juni)
//            pop tidak dapat menghilangkan element lebih dari 1 sekaligus. 
arr4.unshift('desember','januari','februari') // menambahkan element pada index pertama
arr4.shift() // menghapus element pada index pertama (desember)

console.table(arr4);
console.log('==========================\n');