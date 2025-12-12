const slides = [
	{
		"image":"slide1.jpg",
		"tagLine":"Impressions tous formats <span>en boutique et en ligne</span>"
	},
	{
		"image":"slide2.jpg",
		"tagLine":"Tirages haute définition grand format <span>pour vos bureaux et events</span>"
	},
	{
		"image":"slide3.jpg",
		"tagLine":"Grand choix de couleurs <span>de CMJN aux pantones</span>"
	},
	{
		"image":"slide4.png",
		"tagLine":"Autocollants <span>avec découpe laser sur mesure</span>"
	}
];

// On récupère les éléments HTML dont on a besoin
const images = document.querySelectorAll('.banner-img');
const bannerText = document.querySelector('#banner p');
const prevButton = document.querySelector('.arrow_left');
const nextButton = document.querySelector('.arrow_right');
const dotsContainer = document.querySelector('.dots');

// On commence à la première image
let currentIndex = 0;

// Création des petits points (dots)
slides.forEach((slide, index) => {
  
  // On crée un élément <span>
  const dot = document.createElement('span');
  dot.classList.add('dot');

  // Le premier dot est sélectionné au début
  if (index === 0) {
    dot.classList.add('dot_selected');
  }

  // Quand on clique sur un dot, on change de slide
  dot.addEventListener('click', () => {
    currentIndex = index;
    updateSlide();
  });

  // On ajoute le dot dans le conteneur
  dotsContainer.appendChild(dot);
});

// On récupère tous les dots créés
const dots = document.querySelectorAll('.dot');

//Fonction qui met à jour l'affichage du slider
function updateSlide() {

  // Afficher seulement l'image correspondant à currentIndex
  images.forEach((img, index) => {
    if (index === currentIndex) {
      img.style.display = 'block';
    } else {
      img.style.display = 'none';
    }
  });

  // Mettre à jour le texte
  bannerText.innerHTML = slides[currentIndex].tagLine;

  // Mettre à jour les dots
  dots.forEach((dot, index) => {
    if (index === currentIndex) {
      dot.classList.add('dot_selected');
    } else {
      dot.classList.remove('dot_selected');
    }
  });
}

// On affiche la première slide au chargement
updateSlide();

//Bouton gauche : image précédente
prevButton.addEventListener('click', () => {
  currentIndex--;

  // Si on dépasse à gauche, on revient à la dernière image
  if (currentIndex < 0) {
    currentIndex = slides.length - 1;
  }

  updateSlide();
});

//Bouton droite 
nextButton.addEventListener('click', () => {
  currentIndex++;

  // Si on dépasse à droite, on revient à la première image
  if (currentIndex >= slides.length) {
    currentIndex = 0;
  }

  updateSlide();
});
