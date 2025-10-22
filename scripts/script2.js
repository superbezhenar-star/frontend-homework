class leguma{
    constructor(name, gramaj, taradeorigine,bucatiInStok,pretPerKG){
this.name=name
this.gramaj=gramaj
this.taradeorigine=taradeorigine
this.bucatiInStok=bucatiInStok
this.pretPerKG=pretPerKG
    }
}
class fruct{
    constructor(name, gramaj, taradeorigine,bucatiInStok,pretPerKG){
        this.name=name
        this.gramaj=gramaj
        this.taradeorigine=taradeorigine
        this.bucatiInStok=bucatiInStok
        this.pretPerKG=pretPerKG    
    }
}
let fruct1 = new fruct("banana", "150","Africa", 1000, 200)
let fruct2 = new fruct("mar", "80","Ucraina", 349, 15)
let fruct3 = new fruct("poama", "380","Romania", 129, 99)



let leguma1 = new leguma ("rosie",100,"Moldova",2567,95)
let leguma2 = new leguma ("castravete",60,"Turcia",546,78)
let leguma3 = new leguma ("avocado",160,"Spania",1768,45)
let leguma4 = new leguma ("dovlecel",250,"Romania",345,89)
let leguma5 = new leguma ("cartof",300,"Italia",3291,56)

class piata{
    constructor(){
        this.leguma = [];
        this.fruct = [];
    }
   addleguma(l){
    this.leguma.push(l);
   }
   addfruct(f){
    this.fruct.push(f);
   }
 removeleguma(){
    this.leguma.pop();
 }
}
   const piata1 = new piata ();
   piata1.addleguma(leguma2)
   piata1.addleguma(leguma1)
   piata1.addleguma(leguma3)
   piata1.addleguma(leguma5)
   piata1.addleguma(leguma4)
console.log(piata1)
piata1.addfruct(fruct1)
piata1.addfruct(fruct2)
piata1.addfruct(fruct3)
piata1.removeleguma()
piata1.removeleguma()
piata1.removeleguma()






function schimbaculoarea(color){
    document.getElementById("textulAlCaruiCuloareOvomSchimba").style.color = color
}


function schimbaculoareabg(color){
document.body.style.backgroundColor = color
}









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


document.getElementById("creaazaOlista").addEventListener("click",creazalistadelegume)
function creazalistadelegume() {
    const listLegume = document.createElement("ul");
    listLegume.id = "legume-list"
    listLegume.innerText = "lista de legume"
    document.body.appendChild(listLegume)
}




document.getElementById("adaugaeleminlista").addEventListener("click",adaugaeleminlista)
function adaugaeleminlista(){
    const listLegume = document.createElement("li")
    listLegume.innerText = "morcov"
    document.getElementById("legume-list").appendChild(listLegume)
}

document.getElementById("exemplu-buton3").addEventListener("click", additemtolist);
function additemtolist(){
    const listItem = document.createElement("li");
    listItem.innerText = "portocaalllaaaa";
    document.getElementById("fruit-list").appendChild(listItem);

}

document.getElementById("stergelistadelegume").addEventListener("click",stergelista)

function stergelista(){
     const listLegume = document.getElementById("legume-list");
     if(listLegume){
        document.body.removeChild(listLegume)
     }
}

document.getElementById("stergeultimulelementdinlista").addEventListener("click",stergeultimulelemdinlistadelegume)
function stergeultimulelemdinlistadelegume(){
    const listLegume = document.getElementById("legume-list")
    if(listLegume && listLegume.lastElementChild){
listLegume.removeChild(listLegume.lastElementChild)
    }
}





document.getElementById("exemplu-buton4").addEventListener("click", deleteList);
function deleteList(){
    const list = document.getElementById("fruit-list");
    if(list){
        document.body.removeChild(list);
    }
}

