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
const checkBoxConditions = document.getElementById("checkbox1");

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

//booleen pour valider l envois du form 
let isFormValid = false;

// empecher l'envoit du form si les conditions ne sont pas respectées
form.addEventListener('submit', (e) => {
  e.preventDefault();
  
  checkInputs();
  console.log("probleme");

  if(isFormValid){
    form.remove();
    formConfirm.classList.remove("hidden");
  }
  console.log("here");

});

function checkInputs() {
  const firstValue = first.value.trim();
  const lastValue = last.value.trim();
  const emailValue = email.value.trim(); 
  const birthdateValue = birthdate.value.trim(); 
  const quantityValue = quantity.value.trim(); 

  let fields = {
    firstName: false,
    lastName: false,
    email: false,
    birthDate: false,
    quantity: false,
    checkBoxConditions: false,
  };
  
  if(firstValue === '' || first.value.length < 2) {             // Prenom checking  
    setErrorFor(first, 'Le prenom doit etre renseigné');
  } else {
    setSuccessFor(first);
    fields.firstName = true;
  }

  if(lastValue === '' || last.value.length < 2 ){                 // Nom de famille checking 
    setErrorFor(last, "Le nom doit faire plus de 2 caracteres");
  } else {
    setSuccessFor(last);
    fields.lastName = true;
  }
 
  if(emailValue === ""){                         //Email checking  
    setErrorFor(email, "Email a remplir ");                              
  } else if (!isEmail(emailValue)) {
    setErrorFor(email, "Email invalid");
  } else { 
    setSuccessFor(email);
    fields.email = true;
  }

  if(birthdateValue === ""){                                                // Birthdate checking  
    setErrorFor(birthdate, "Vous devez entrer votre date de naissance.");
  } else {
    setSuccessFor(birthdate);
    fields.birthDate = true;
  }

  if(quantityValue === ""){                                   // quantity of tournaments played checking
    setErrorFor(quantity, "Vous devez choisir un nombre");
  } else {
    setSuccessFor(quantity);
    fields.quantity = true;
  }

  if(checkBoxConditions.checked == false){                                 // Conditions checking 
    setErrorFor(checkBoxConditions, "Vous devez accepter les conditions");
  } else {
    setSuccessFor(checkBoxConditions);
    fields.checkBoxConditions = true;
  }


// locations must be picked  


let fieldsValues = Object.values(fields);
  console.log('fieldsValues', fieldsValues);
  if (fieldsValues.includes(false) == true) {
    console.log("Le formulaire n'est pas valide.");
    return false;
  }
  if (fieldsValues.includes(false) == false) {
    console.log("Le formulaire est valide.");
    isFormValid = true;
    return true;
  }
} 





//if (document.querySelectorAll('.form-control')[0].classList.contains('success') && document.querySelectorAll('.form-control')[1].classList.contains('success') && document.querySelectorAll('.form-control')[2].classList.contains('success') && document.querySelectorAll('.form-control')[3].classList.contains('success')) {
//  form.submit()
//}

//if(style) {
  //$('.formconfirm').show();
//}