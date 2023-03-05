// Récupération des pièces depuis le fichier JSON
const reponse = await fetch('pieces-autos.json');
const pieces = await reponse.json();

for (let i = 0; i < pieces.length; i++)
{
    const sectionFiches = document.querySelector(".fiches");
    const pieceElement = document.createElement("article");

    const imageElement = document.createElement("img");
    imageElement.src = pieces[i].image;

    const nomElement = document.createElement("h2");
    pieceElement.innerText = pieces[i].nom;

    const prixElement = document.createElement("p");
    prixElement.innerText = `Prix : ${pieces[i].prix ?? "Non renseigné"} €` ;

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
});