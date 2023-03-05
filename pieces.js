// Récupération des pièces depuis le fichier JSON
const reponse = await fetch('pieces-autos.json');
const pieces = await reponse.json();

let affichageAbordable = 0;

for (let i = 0; i < pieces.length; i++)
{
    const sectionFiches = document.querySelector(".fiches");
    const pieceElement = document.createElement("article");

    const imageElement = document.createElement("img");
    imageElement.src = pieces[i].image;

    const nomElement = document.createElement("h2");
    pieceElement.innerText = pieces[i].nom;

    const prixElement = document.createElement("p");
    prixElement.innerText = `Prix : ${pieces[i].prix.toFixed(2).replace(".",",") ?? "Non renseigné"} €` ;

    const categorieElement = document.createElement("p");
    categorieElement.innerText = pieces[i].categorie ?? "Catégorie non définie.";

    pieceElement.appendChild(imageElement);
    pieceElement.appendChild(nomElement);
    pieceElement.appendChild(prixElement);
    pieceElement.appendChild(categorieElement);
    sectionFiches.appendChild(pieceElement);

}

const boutonTrier = document.querySelector(".btn-trier");
boutonTrier.addEventListener("click", function () {
    const piecesOrdonnees = Array.from(pieces);
    piecesOrdonnees.sort(function (a, b) {
        return a.prix - b.prix;
     });
     console.log(piecesOrdonnees);
 });

const boutonDecroissant = document.querySelector(".btn-decroissant");
boutonDecroissant.addEventListener("click", function () {
    const piecesDecroissant = Array.from(pieces);
    piecesDecroissant.sort(function (a, b) {
        return b.prix - a.prix;
     });
     console.log(piecesDecroissant);
 });

console.log(boutonTrier);

const boutonFiltrer = document.querySelector(".btn-filtrer");

boutonFiltrer.addEventListener("click", function () {
   const piecesFiltrees = pieces.filter(function (piece) {
       return piece.prix <= 35;
   });
   console.log(piecesFiltrees);
});

const boutonDescription = document.querySelector(".btn-description");
boutonDescription.addEventListener("click", function () {
    const piecesDescription = pieces.filter(function (piece) {
        return piece.description;
    });
    console.log(piecesDescription);
    console.log("all good");
});

const nomPiecesAbordables = pieces.map(pieces => pieces.nom);
const prixPiecesAbordables = pieces.map(pieces => pieces.prix);

for(let i = pieces.length - 1 ; i >= 0 ; i--)
{
    if(pieces[i].prix >= 30)
    {
        nomPiecesAbordables.splice(i,1);
        prixPiecesAbordables.splice(i,1);
    }
}
console.log(prixPiecesAbordables);

const abordablesElements = document.createElement('ul');

for(let i = 0; i<nomPiecesAbordables.length ; i++)
{
    const nomElement = document.createElement('li');
    nomElement.innerText=nomPiecesAbordables[i] + " - " + prixPiecesAbordables[i].toFixed(2).replace(".",",") + "€";
    abordablesElements.appendChild(nomElement);
}

// btn-abordables

// document.querySelector('.fiches')
//.appendChild(abordablesElements);

const boutonAbordables = document.querySelector(".btn-abordables");

boutonAbordables.addEventListener("click", function () {
    affichageAbordable++;
    if (affichageAbordable%2 == 1)
    {
        document.querySelector('.fiches')
        .appendChild(abordablesElements);
    }
    else
    {
        document.querySelector('.fiches')
        .removeChild(abordablesElements);
    }
})