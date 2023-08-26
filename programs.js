




function validate(age){
  var ans="not eigible";
  if(age>=18){
      ans="eligible";
  }
  return(ans);
}


let age=parseInt(prompt("Enter age"));
let status=validate(age);
document.write("You are <b>"+status+"</b> for Vote");