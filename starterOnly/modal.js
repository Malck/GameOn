function editNav() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}

// DOM Elements
const modalbg = document.querySelector(".bground");
const modalBtn = document.querySelectorAll(".modal-btn");
const formData = document.querySelectorAll(".formData");
const closeModalBtn = document.querySelector("#close");

// launch modal event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));

// close modal event 
closeModalBtn.addEventListener("click", closeModal);

// launch modal form
function launchModal() {
  modalbg.style.display = "block";
}

// close modal form 
function closeModal() {
  modalbg.style.display = "none";
}

// partie 2 les messages d'erreurs et conditions 

const form = document.getElementById("form");
const first = document.getElementById("first");
const last = document.getElementById("last");
const email = document.getElementById("email");
const birthdate = document.getElementById("birthdate");
const quantity = document.getElementById("quantity");
const formConfirm = document.querySelector(".formconfirm");

//booleen pour valider l envois du form 
let isFormValid = false;

// empecher l'envoit du form si les conditions ne sont pas respectées
form.addEventListener('submit', (e) => {
  e.preventDefault();
  
  checkInputs();

  if(isFormValid){
    form.remove();
    formConfirm.classList.remove("hidden");
  }



});

function checkInputs() {
  const firstValue = first.value.trim();
  const lastValue = last.value.trim();
  const emailValue = email.value.trim(); 
  const birthdateValue = birthdate.value.trim(); 
  const quantityValue = quantity.value.trim(); 
  
// Prenom checking 
  if(firstValue === '' || first.value.length < 2) {
    
    setErrorFor(first, 'Le prenom doit etre renseigné');
  } else {
    
    setSuccessFor(first);
  }

// Nom de famille checking 
  if(lastValue === '' || last.value.length < 2 ){
    setErrorFor(last, "Le nom doit faire plus de 2 caracteres");
  } else {
    setSuccessFor(last);
  }

//Email checking   
  if(emailValue === ""){
    setErrorFor(email, "Email a remplir ");
  } else if (!isEmail(emailValue)) {
    setErrorFor(email, "Email invalid");
  } else { 
    setSuccessFor(email);
  }

// Birthdate checking 
  if(birthdateValue === ""){
    setErrorFor(birthdate, "Vous devez entrer votre date de naissance.");
  } else {
    setSuccessFor(birthdate);
  }

// quantity of tournaments played checking
  if(quantityValue === ""){
    setErrorFor(quantity, "Vous devez choisir un nombre");
  } else {
    setSuccessFor(quantity);
  }

// locations must be picked  
  
} 

function setErrorFor(input, message) {
  const formControl = input.parentElement; // div .formData
  const small = formControl.querySelector('small');
  // add error message in small 
  small.innerText = message;
  // add error class 
  formControl.className = 'formData error';
}

function setSuccessFor(input) {
  const formControl = input.parentElement;
  const small = formControl.querySelector('small');
  formControl.className = "formData success";
}

function isEmail(email){
  return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
}




//if (document.querySelectorAll('.form-control')[0].classList.contains('success') && document.querySelectorAll('.form-control')[1].classList.contains('success') && document.querySelectorAll('.form-control')[2].classList.contains('success') && document.querySelectorAll('.form-control')[3].classList.contains('success')) {
//  form.submit()
//}

//if(style) {
  //$('.formconfirm').show();
//}