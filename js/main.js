function PrintClicked() {
window.jsPDF = window.jspdf.jsPDF;
var docPDF = new jsPDF();
function print(){
var elementHTML = document.querySelector("#printTable");
docPDF.html(elementHTML, {
 callback: function(docPDF) {
  docPDF.save('SuccesDagboek.pdf');
 },
 x: 15,
 y: 100,
 width:1500,
 windowWidth: 1300
});
}
}

function OpschonenClicked() {
  confirm("Weet je zeker dat je je dagboek wilt Opschonen? Zodra je op OK drukt zullen je gegevens verwijderd worden en niet meer terug te vinden zijn op de site.");
  localStorage.clear();
  window.location.reload(true); 
}

// Opslaan Naam invulveld

const nameInput = document.querySelector('.nameField');

// Haal de naam op uit de localStorage
if (localStorage.getItem('name')) {
  nameInput.value = localStorage.getItem('name');
}

nameInput.addEventListener('change', () => {
  localStorage.setItem('name', nameInput.value);
});

// opslaan Succes Datums

const successDateInputs = [
  document.querySelector('#succesdatum'),
  document.querySelector('#succesdatum2'),
  document.querySelector('#succesdatum3'),
  document.querySelector('#succesdatum4'),
  document.querySelector('#succesdatum5'),
  document.querySelector('#succesdatum6'),
  document.querySelector('#succesdatum7')
];

successDateInputs.forEach((input, index) => {
  const localStorageKey = `successDate${index + 1}`;
  if (localStorage.getItem(localStorageKey)) {
    input.value = localStorage.getItem(localStorageKey);
  }
  
  input.addEventListener('change', () => {
    localStorage.setItem(localStorageKey, input.value);
  });
});

const freeformInputs = [
  document.querySelector('#freeform'),
  document.querySelector('#freeform2'),
  document.querySelector('#freeform3'),
  document.querySelector('#freeform4'),
  document.querySelector('#freeform5'),
  document.querySelector('#freeform6'),
  document.querySelector('#freeform7'),
  document.querySelector('#freeform8'),
  document.querySelector('#freeform9'),
  document.querySelector('#freeform10'),
  document.querySelector('#freeform11'),
  document.querySelector('#freeform12'),
  document.querySelector('#freeform13'),
  document.querySelector('#freeform14'),
  document.querySelector('#freeform15'),
  document.querySelector('#freeform16'),
  document.querySelector('#freeform17'),
  document.querySelector('#freeform18'),
  document.querySelector('#freeform19'),
  document.querySelector('#freeform20'),
  document.querySelector('#freeform21')
];

freeformInputs.forEach((input, index) => {
  const localStorageKey = `freeform${index + 1}`;
  if (localStorage.getItem(localStorageKey)) {
    input.value = localStorage.getItem(localStorageKey);
  }
  
  input.addEventListener('change', () => {
    localStorage.setItem(localStorageKey, input.value);
  });
});
