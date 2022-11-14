
var fizz = 3
var buzz = 5
var fizzbuzz = 15
var batas = 100
for (i=1; i<=batas; i++){
   if(i%fizzbuzz == 0){
      console.log('fizzbuzz');
   }else if(i%buzz == 0){
      console.log('buzz'); 
   }else if(i%fizz == 0){
      console.log('fizz');
   }else{
      console.log(i);
   }
}