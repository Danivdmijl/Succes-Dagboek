const body = document.querySelector('body');

const logo = document.createElement('img');
logo.setAttribute('src', 'img/site-logo.png');
logo.setAttribute('alt', 'Logo Website');
body.appendChild(logo);

const nameFieldWrapper = document.createElement('figure');
nameFieldWrapper.classList.add('nameField__wrapper');

const nameField = document.createElement('input');
nameField.classList.add('nameField');
nameField.setAttribute('type', 'text');
nameField.setAttribute('placeholder', 'Vul hier je naam in');
nameFieldWrapper.appendChild(nameField);

const titleWrapper = document.createElement('div');
titleWrapper.classList.add('title__wrapper');

const title = document.createElement('h3');
title.classList.add('h3__dagboek');
title.textContent = 'Succes Dagboek';
titleWrapper.appendChild(title);

nameFieldWrapper.appendChild(titleWrapper);
body.appendChild(nameFieldWrapper);

const table = document.createElement('table');
table.classList.add('table');
table.setAttribute('id', 'printTable');

const tr1 = document.createElement('tr');
tr1.classList.add('table__tr--1');

const thDate = document.createElement('th');
thDate.classList.add('table__th--date');
thDate.textContent = 'Succes/Datum';
tr1.appendChild(thDate);

const th1 = document.createElement('th');
th1.classList.add('table__th');
th1.textContent = 'Succes 1';
tr1.appendChild(th1);

const th2 = document.createElement('th');
th2.classList.add('table__th');
th2.textContent = 'Succes 2';
tr1.appendChild(th2);

const th3 = document.createElement('th');
th3.classList.add('table__th');
th3.textContent = 'Succes 3';
tr1.appendChild(th3);

table.appendChild(tr1);

for (let i = 1; i <= 7; i++) {
  const tr = document.createElement('tr');
  tr.classList.add('table__tr--' + i);

  const tdDate = document.createElement('td');
  tdDate.classList.add('table__td--date');

  const inputDate = document.createElement('input');
  inputDate.setAttribute('type', 'date');
  inputDate.setAttribute('id', 'succesdatum' + i);
  inputDate.setAttribute('name', 'succesdatum');
  inputDate.classList.add('table__date');

  tdDate.appendChild(inputDate);
  tr.appendChild(tdDate);

  for (let j = 1; j <= 3; j++) {
    const tdText = document.createElement('td');
    tdText.classList.add('table__td--text');

    const textarea = document.createElement('textarea');
    textarea.classList.add('table__textField');
    textarea.setAttribute('id', 'freeform' + (i - 1) * 3 + j);
    textarea.setAttribute('name', 'freeform');

    tdText.appendChild(textarea);
    tr.appendChild(tdText);
  }

  table.appendChild(tr);
}

body.appendChild(table);



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