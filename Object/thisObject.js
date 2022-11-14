// penggunaan this pada berbagai function

// this pada function declaration
function functionDeclaration(){
    console.log('Function Declaration ==========');
    console.log(this); // mengembalikan object global (window)
}
functionDeclaration()



//this pada function literal
let obj1 ={ 
    nama :'Rendra',
    usia : 24
}
obj1.functionLiteral = function(){
    console.log('Function literal ===========');
    console.log(this); // mengembalikan element pada object yang bersangkutan (obj1)
}
obj1.functionLiteral()



//this pada constructor
function Obj2 (){
    console.log('Constructor ===========');
    console.log(this);
}

new Obj2(); 
// !!! new !!! mengembalikan object yang baru
let test1 = new Obj2('rendra')
let test2 = new Obj2('andriansyah')

console.log(test1,test2);