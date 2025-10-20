class leguma{
    constructor(name, gramaj, taradeorigine){
this.name=name
this.gramaj=gramaj
this.taradeorigine=taradeorigine
    }
}
let leguma1 = new leguma ("rosie",100,"Moldova")
let leguma2 = new leguma ("castravete",60,"Turcia")
let leguma3 = new leguma ("avocado",160,"Spania")
console.log(leguma)


function changecolor(color){
    document.getElementById("titlu").style.color=color;

}
function changebgcolor(color){
    document.body.style.backgroundColor = color;

}


document.getElementById("exemplu-buton").addEventListener("click", showAlert);
function showAlert(){
    alert('ati papasat btn exemplu')
}
document.getElementById("exemplu-buton-2").addEventListener("click", createList);
function createList(){
    const list = document.createElement("ul");
    list.id = "fruit-list";
    list.innerText = "lista de fructe";
    document.body.appendChild(list);
}
document.getElementById("exemplu-buton3").addEventListener("click", additemtolist);
function additemtolist(){
    const listItem = document.createElement("li");
    listItem.innerText = "portocaalllaaaa";
    document.getElementById("fruit-list").appendChild(listItem);

}
