let string = "nolemonnomelon";
let reversedString = string.split('').reverse().join('');
//i.e takes string then splits into individual character in array 
//then reverses it and then join characters together
if(string===reversedString){
  console.log("TRUE, IT IS A PALANDROME")
}else{
  console.log("FALSE.IT IS NOT A PALANDROME")
}