alert("HEELLO I AM JS") //comentariu chemarea functiei
//HEELLO I AM JS-parametrul ftiei
console.log("si eu sunt in consola")
let a = "3"
let b = 4

console.log(a + b)            // ?
console.log(a - b)            // ?
console.log(Number(a) + b)    // ?
console.log(typeof (a + b))   // ?
console.log(typeof (a - b))   // ?



let m = 3;

console.log(m++);   // 
let ageAna=0;
const e=18;
if(ageAna>e){
    console.log("Ana e mai mare decit 18")
}
else if(ageAna===e){
    console.log("Ana ARE 18 ani")
}


let fruit='apple';
let message;
switch(fruit){
    case'orange':
 message="orange-price 2$";
    break;
    case'apple':
    message="apple price 33"
    console.log("apple price 1$")
    break
}
document.getElementById("price").textContent = message;

let times = 20;
let listaMea = document.getElementById("lista-mea")
for(let i=0; i<=times; i+=2){
    let item = document.createElement("li")
    item.textContent = "ciclu for ruleaza pentru "+i+"oara"
    listaMea.appendChild(item)
}