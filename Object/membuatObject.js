// ada 4 cara dalam membuat object
// 1. Object literal
let student1 = {
    name : 'Muhammad Rendra Andriansyah',
    age : 24,
    Address : 'Bogor',
    class : 'Front-end Developer',
}

let student2 ={
    name : 'Evita Sari',
    age : 24,
    Address : 'Jakarta',
    class : 'Business Management',
}

console.log(student1,student2);


// 2. Function Declaration

//
function objectStudent(name,age,adress,kelas){
        let student = {}
            student.name = name
            student.age = age
            student.adress =adress
            student.kelas = kelas
    return student // mengembalikan nilai variable student (penampung)

}

// dengan menggunakan teknik function declaration pengisian element pada
// variable lebih ringkas.
let student3 = objectStudent('Abang',6,'condet','SDN Specialist Kedokteran')
let student4 = objectStudent('Gemoy',4,'Cikampek','PAUD Petarung Handal')
console.log(student3,student4);

// 3. Constructor Function (keyword new)
function Student (nama,usia,jurusan){
    // anggap deklarasi otomatis
    this.nama = nama
    this.usia = usia
    this.jurusan = jurusan
    // anggap return otomatis
}
//     keyword new
let student5 = new Student('Rendra',24,'Multimedia')
console.log(student5);

// 4. Object.Create