class Serviciu{
    constructor(nume, descriere,durata,pret){
        this.nume = nume;
        this.descriere = descriere; 
        this.durata = durata;
        this.pret = pret;
    }

}

let s1 = new Serviciu("Landing", "website tip landing", "1 saptamina", "3000",)
let s2 = new Serviciu("Corporate web site","fxtjgxfdrtj", "2 saptamini", "5879",)
let s3 = new Serviciu("Internet magazin","ftjuhuxdtj", "3 saptamini", "5634")

let servicii = [s1, s2, s3];

const container = document.getElementById("lista-servicii");
for(let s of servicii){
    const card = document.createElement('div');
    card.innerHTML = `<h1>${s.nume}</h1>
                       <p>${s.descriere}</p>
                       <h4>Durata: ${s.durata}</h4>
                       <h4>Pret: ${s.pret}</h4>`;
    card.style.background = "pink";

     card.style.marginBottom = "50px";
     container.appendChild(card);
}

