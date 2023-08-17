//tableau en syntaxe "objet" et non "tableau" [avec la syntaxe littérale pour initialiser les objets : on fournit une liste, délimitée par des virgules, qui contient des paires de noms et de valeurs décrivant les propriétés et où le tout est encadré d'accolades ({}) :]
// Slides : le nom de l'objet / image et tagLine : des identifiants / et le reste : des valeurs

const slides = [
  // création d'une variable constante intitulée "slides" de type tableau, comprenant des objets
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

let numero = 0; // création de la variable "numéro", qui va changer tout au long du programme Et je l'initialise à 0

//Ajout du Eventlistener (ajoute un événement au clique de la souris sur chaque flèche)
const flecheGauche = document.querySelector(".arrow_left");
flecheGauche.addEventListener("click", function () {
  console.log(flecheGauche);
  ChangeSlide(-1);
});

const flecheDroite = document.querySelector(".arrow_right");
flecheDroite.addEventListener("click", function () {
  console.log(flecheDroite);
  ChangeSlide(1);
});

//creation du point avec la classe "dot_selected"
let selectedBullet = document.createElement("div");
selectedBullet.classList.add("dot", "dot_selected");
document.getElementById("points").appendChild(selectedBullet);
// Ajout des 4 bullet points : création d'éléments enfants (du parent "dots")
for (let i = [0]; i < slides.length - 1; i++) {
  //boucle, avec l'instruction suivante :
  let bulletPoint = document.createElement("div"); //creation d'une Div
  bulletPoint.classList.add("dot"); //à laquelle j'attribue la class "dot"
  document.getElementById("points").appendChild(bulletPoint); //puis récupération de l'élément parent pour y ajouter l'élément enfant ainsi créé
}

function ChangeSlide(sens) {
  // création de la fonction ChangeSlide, avec le paramètre "sens"
  numero = numero + sens;
  if (numero < 0) numero = slides.length - 1;
  if (numero > slides.length - 1) numero = 0;
  document.getElementById("slide").src = slides[numero].image; // .image fait appel à l'identifiant "image" de mon objet
  document.getElementById("tagline").innerHTML = slides[numero].tagLine; // .tagLine fait appel à l'identifiant "tagLine" de mon objet

  // mise en place du point actif au changement de la slide
  const dots_array = document.querySelectorAll(".dot");
  dots_array.forEach((dot, index) => {
    if (index === numero) {
      dot.classList.add("dot_selected");
    } else {
      dot.classList.remove("dot_selected");
    }
  });
}
