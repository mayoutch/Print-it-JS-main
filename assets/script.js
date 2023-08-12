//tableau en syntaxe "objet" et non "tableau" [avec la syntaxe littérale pour initialiser les objets : on fournit une liste, délimitée par des virgules, qui contient des paires de noms et de valeurs décrivant les propriétés et où le tout est encadré d'accolades ({}) :]
// Slides : le nom de l'objet / image et tagLine : des identifiants / et le reste : des valeurs

const slides = [
  {
    image: "./assets/images/slideshow/slide1.jpg",
    tagLine: "Impressions tous formats <span>en boutique et en ligne</span>",
  },
  {
    image: "./assets/images/slideshow/slide2.jpg",
    tagLine:
      "Tirages haute définition grand format <span>pour vos bureaux et events</span>",
  },
  {
    image: "./assets/images/slideshow/slide3.jpg",
    tagLine: "Grand choix de couleurs <span>de CMJN aux pantones</span>",
  },
  {
    image: "./assets/images/slideshow/slide4.png",
    tagLine: "Autocollants <span>avec découpe laser sur mesure</span>",
  },
];

//Ajout du Eventlistener (ajoute un événement au clique de la souris sur chaque flèche)
const flecheGauche = document.querySelector(".arrow_left");
flecheGauche.addEventListener("click", function () {
  console.log(flecheGauche);
  changeSlide(-1);
});

const flecheDroite = document.querySelector(".arrow_right");
flecheDroite.addEventListener("click", function () {
  console.log(flecheDroite);
  changeSlide(1);
});

let numero = 0; // le compteur commence à 0

function changeSlide(sens) {
  numero = numero + sens;
  if (numero < 0) numero = slides.length - 1;
  if (numero > slides.length - 1) numero = 0;
  document.getElementById("slide").src = slides[numero].image; // .image fait appel à "image" de mon tableau
  document.getElementById("tagline").innerHTML = slides[numero].tagLine;
}
