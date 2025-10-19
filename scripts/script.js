
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
const VALID_CARDNAME= 'Ivanov  Ivan'
const VALID_CARDNUMBER= '5545676789091111'
const VALID_CCV="675"
function paymentsuccess(cardname,cardnumber,ccv){
    if(cardname===VALID_CARDNAME && cardnumber ===VALID_CARDNUMBER && ccv===VALID_CCV){
        console.log('Payment successful,thank you for your order')
        return true;
    }
if(cardname!==VALID_CARDNAME ){
    console.log("Sorry, there is an error, try again")
    return false;
}
if(cardnumber !==VALID_CARDNUMBER){
    console.log("Sorry, there is an error in your payment, try again !")
    return false;
}
if(ccv !==VALID_CCV){
    console.log("Sorry, there is an error in your payment, try again !")
    return false;
}
} 
 

let result= paymentsuccess('Ivanov  Ivan','5545676789091111',"675") //'Payment successful,thank you for your order'


/*let cosdecumparaturi= ['mere']
console.log(cosdecumparaturi)

//FUNCTIA ADAUGARE IN COS ALTE FRUCTE
//'banane','capsune','piersici' ceea ce vreau sa adaug  
function addtocart(fructul)
cosdecumparaturi.push(fructul)
console.log(`${fructul} adaugat cu succes`)
}

addtocart('banane')
console.log(cosdecumparaturi)
addtocart('capsune')
console.log(cosdecumparaturi)
addtocart('piersici')
console.log(cosdecumparaturi)

//FUNCTIA PREZINTA COSUL
function showCart() {
    if (cosdecumparaturi.length === 0){
        console.log('Cosul este gol!')
    return}
    console.log('Ati adaugat urmatoarele fructe in cos:')
    for(let fructul of cosdecumparaturi){
        console.log(`${fructul}`)
    }
}

showCart(cosdecumparaturi)

//FUNCTIA care elimina dIN  FRUCTE
function removeLastFromcart(){
if (cosdecumparaturi.length === 0){
        console.log('Cosul este gol!')
    return}
    let removed = cosdecumparaturi.pop()
console.log(`${removed} este inlaturat din cos`)
}

removeLastFromcart()
showCart(cosdecumparaturi)
removeLastFromcart()
showCart(cosdecumparaturi)

addtocart('ananas')

console.log(cosdecumparaturi)


let pret = {
  mere: 10,
  pere: 12,
  ananas: 8,
  banane: 9,
  capsune: 15,
  piersici:290
}


function calculateTotal() {
  if (cosdecumparaturi.length === 0) {
    console.log('Coșul este gol!');
    return;
  }

  let total = 0;

  for (let fructul of cosdecumparaturi) {
    total += pret[fructul]; // берем цену по имени фрукта
  }

  console.log(`💰 Spre achitare: ${total} lei`);
}
calculateTotal()
console.log(cosdecumparaturi)
removeLastFromcart()
calculateTotal()
addtocart('piersici')



//functia checkuire la cos de cumparaturi щи голире кош

function checkcos(){
    calculateTotal()
    console.log('Plata efectuata cu succes')
    cosdecumparaturi = []
}
checkcos()
console.log(cosdecumparaturi)*/


let cosdelegume=[]
let legume= ['morcov','cartofi','castraveti','rosii','ciuperci','vanata','dovlecel','ceapa']
console.log(legume)
let pret = {morcov:33,
cartofi:18,
castraveti:25,
rosii:76,
ciuperci:64,
vanata:45,
dovlecel:98,
ceapa:13
}
console.log(pret)

function adaugalegumeincos(legume){
   cosdelegume.push(legume)
    console.log(`Ati adaugat cu succes ${legume}`)
}

adaugalegumeincos('morcov')
adaugalegumeincos('rosii')

function aratamicelegumeamincos(){
    console.log('ati adaugat urmatoarele legume in cos:')
    for (let legume of cosdelegume){
        console.log(`${legume}`)
    }
}
aratamicelegumeamincos(cosdelegume)
adaugalegumeincos('ciuperci')
aratamicelegumeamincos(cosdelegume)

function calculeazamisumatotata(){
    let sum=0
    if (cosdelegume.length===0){console.log('nu ati adaugat nimic in cos')}
    for(let legume of cosdelegume){
        sum+=pret[legume]
    }
    console.log(`suma toatala este: ${sum} lei`)}

calculeazamisumatotata(cosdelegume)
adaugalegumeincos('vanata')
calculeazamisumatotata(cosdelegume)
aratamicelegumeamincos(cosdelegume)



function stergeultimaleguma(){
    let legumastearsa = cosdelegume.pop()
    console.log(`${legumastearsa} este inlaturata din cos`)
}
stergeultimaleguma(cosdelegume)
stergeultimaleguma(cosdelegume)
stergeultimaleguma(cosdelegume)
stergeultimaleguma(cosdelegume)
console.log(cosdelegume)

adaugalegumeincos('dovlecel')
adaugalegumeincos('vanata')
adaugalegumeincos('cartofi')
adaugalegumeincos('castraveti')
adaugalegumeincos('morcov')
adaugalegumeincos('ceapa')
calculeazamisumatotata(cosdelegume)
aratamicelegumeamincos(cosdelegume)
stergeultimaleguma(cosdelegume)
calculeazamisumatotata(cosdelegume)


function golestecosul(){
    if (cosdelegume.length===0){
        console.log('cosul este gol')}
    else {

    (cosdelegume=[])
    console.log('ati efectuat plata cu succes')
  console.log(cosdelegume)}
    }
    document.getElementById('achitare').addEventListener('click', golestecosul)

golestecosul(cosdelegume)
golestecosul(cosdelegume)
adaugalegumeincos('dovlecel')
adaugalegumeincos('vanata')
adaugalegumeincos('cartofi')
adaugalegumeincos('castraveti')
adaugalegumeincos('morcov')
adaugalegumeincos('ceapa')
aratamicelegumeamincos(cosdelegume)
calculeazamisumatotata(cosdelegume)
golestecosul(cosdelegume)
calculeazamisumatotata(cosdelegume)
adaugalegumeincos('dovlecel')
adaugalegumeincos('vanata')
adaugalegumeincos('cartofi')
adaugalegumeincos('castraveti')
adaugalegumeincos('morcov')
adaugalegumeincos('ceapa')
aratamicelegumeamincos(cosdelegume)
calculeazamisumatotata(cosdelegume)
