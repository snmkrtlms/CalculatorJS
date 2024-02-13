// Initialiser equal_pressed pour suivre si le bouton égal a été pressé
let equal_pressed = 0;

// Sélectionner les éléments du DOM
let button_input = document.querySelectorAll(".input-button");
let input = document.getElementById("input");
let equal = document.getElementById("equal");
let clear = document.getElementById("clear");
let erase = document.getElementById("erase");

// Fonction à exécuter lorsque la fenêtre est chargée
window.onload = () => {
  input.value = ""; // Définir la valeur de l'entrée sur une chaîne vide
};

// Boucle à travers chaque bouton et ajouter des écouteurs d'événements de clic
button_input.forEach((button_class) => {
  button_class.addEventListener("click", () => {
    // Vérifier si le bouton égal a été pressé
    if (equal_pressed == 1) {
      input.value = ""; // Effacer la valeur de l'entrée
      equal_pressed = 0; // Réinitialiser le drapeau equal_pressed
    }
    input.value += button_class.value; // Ajouter la valeur du bouton cliqué à l'entrée
  });
});

// Fonction pour gérer l'entrée au clavier
document.addEventListener("keydown", (event) => {
  const key = event.key;
  // Vérifier si la touche pressée est un chiffre ou l'un des opérateurs
  if (/[\d\+\-\*\/\.]/.test(key)) {
    // Vérifier si le bouton égal a été pressé
    if (equal_pressed == 1) {
      input.value = ""; // Effacer la valeur de l'entrée
      equal_pressed = 0; // Réinitialiser le drapeau equal_pressed
    }
    input.value += key; // Ajouter la touche pressée à l'entrée
  } else if (key === "Enter") {
    // Si la touche pressée est Enter, déclencher le clic du bouton égal
    equal.click();
  } else if (key === "Backspace") {
    // Si la touche pressée est Backspace, déclencher le clic du bouton erase
    erase.click();
  } else if (key === "Delete") {
    // Si la touche pressée est Delete, déclencher le clic du bouton clear
    clear.click();
  }
});

// Fonction pour gérer le clic sur le bouton égal
equal.addEventListener("click", () => {
  equal_pressed = 1; // Définir le drapeau equal_pressed pour indiquer que le bouton égal a été pressé
  let inp_val = input.value; // Récupérer la valeur de l'entrée
  try {
    let solution = eval(inp_val); // Évaluer l'expression
    if (Number.isInteger(solution)) {
      input.value = solution; // Afficher la solution dans l'entrée
    } else {
      input.value = solution.toFixed(2); // Afficher la solution arrondie à 2 décimales
    }
  } catch (err) {
    alert("Saisie invalide"); // Afficher une alerte s'il y a une erreur dans l'entrée
  }
});

// Fonction pour gérer le clic sur le bouton de suppression
clear.addEventListener("click", () => {
  input.value = ""; // Effacer la valeur de l'entrée
});

// Fonction pour gérer le clic sur le bouton d'effacement
erase.addEventListener("click", () => {
  input.value = input.value.substr(0, input.value.length - 1); // Supprimer le dernier caractère de l'entrée
});
