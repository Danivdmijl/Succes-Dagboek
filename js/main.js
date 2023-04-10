class SuccessTable {
  constructor() {
    const body = document.querySelector('body');

    // create logo image
    const logoImg = document.createElement('img');
    logoImg.setAttribute('src', 'img/site-logo.png');
    logoImg.setAttribute('alt', 'Logo Website ');
    body.appendChild(logoImg);

    // create name field wrapper
    const nameFieldWrapper = document.createElement('figure');
    nameFieldWrapper.classList.add('nameField__wrapper');

    // create name input
    const nameInput = document.createElement('input');
    nameInput.classList.add('nameField');
    nameInput.setAttribute('type', 'text');
    nameInput.setAttribute('placeholder', 'Vul hier je naam in');
    nameFieldWrapper.appendChild(nameInput);

    // create title wrapper
    const titleWrapper = document.createElement('div');
    titleWrapper.classList.add('title__wrapper');

    // create title
    const title = document.createElement('h3');
    title.classList.add('h3__dagboek');
    title.textContent = 'Succes Dagboek';
    titleWrapper.appendChild(title);

    nameFieldWrapper.appendChild(titleWrapper);
    body.appendChild(nameFieldWrapper);

    // create table
    const table = document.createElement('table');
    table.classList.add('table');
    table.setAttribute('id', 'printTable');

    // create table header row
    const tableHeaderRow = document.createElement('tr');
    tableHeaderRow.classList.add('table__tr--1');

    // create date header
    const dateHeader = document.createElement('th');
    dateHeader.classList.add('table__th--date');
    dateHeader.textContent = 'Succes/Datum';
    tableHeaderRow.appendChild(dateHeader);

    // create success headers
    for (let i = 1; i <= 3; i++) {
      const successHeader = document.createElement('th');
      successHeader.classList.add('table__th');
      successHeader.textContent = `Succes ${i}`;
      tableHeaderRow.appendChild(successHeader);
    }

    table.appendChild(tableHeaderRow);

    // create table rows
    for (let i = 1; i <= 6; i++) {
      const tableRow = document.createElement('tr');

      // create date input
      const dateInput = document.createElement('td');
      dateInput.classList.add('table__td--date');
      const dateInputField = document.createElement('input');
      dateInputField.setAttribute('type', 'date');
      dateInputField.setAttribute('id', `succesdatum`);
      dateInputField.setAttribute('name', 'succesdatum');
      dateInputField.classList.add('table__date', `table__date${i}`);
      dateInput.appendChild(dateInputField);
      tableRow.appendChild(dateInput);

      // create success inputs
      for (let j = 1; j <= 3; j++) {
        const successInput = document.createElement('td');
        successInput.classList.add('table__td--text');
        const successInputField = document.createElement('textarea');
        successInputField.setAttribute('id', `freeform${(i - 1) * 3 + j}`);
        successInputField.setAttribute('name', 'freeform');
        successInputField.classList.add('table__textField', `table__textField${i}`);
        successInput.appendChild(successInputField);
        tableRow.appendChild(successInput);
      }

      table.appendChild(tableRow);
    }

    body.appendChild(table);

    function ElementFromHtml(html){
      const template = document.createElement("template");
    
      template.innerHTML = html.trim();
    
      return template.content.firstElementChild;
    }

    const article = ElementFromHtml(`
    <article class="buttonWrapper"></article>
    `);

    const button1 = ElementFromHtml(`
    <button class="printButton" id="printButton" onclick="PrintClicked(), print()">Downloaden</button>
    `);

    const button2 = ElementFromHtml(`
    <button class="printButton" id="clearButton" onclick="OpschonenClicked()">Opschonen</button>
    `);

    body.appendChild(article);
    article.appendChild(button1);
    article.appendChild(button2);
  }
}

const successTable = new SuccessTable();

function PrintClicked() {
  window.jsPDF = window.jspdf.jsPDF;
  var docPDF = new jsPDF();
  function print() {
    var elementHTML = document.querySelector("#printTable");
    docPDF.html(elementHTML, {
      callback: function (docPDF) {
        docPDF.save('SuccesDagboek.pdf');
      },
      x: 15,
      y: 100,
      width: 1500,
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

if (localStorage.getItem('name')) {
  nameInput.value = localStorage.getItem('name');
}

nameInput.addEventListener('change', () => {
  localStorage.setItem('name', nameInput.value);
});

// opslaan Succes Datums

const datumInput1 = document.querySelector('.table__date1');
const datumInput2 = document.querySelector('.table__date2');
const datumInput3 = document.querySelector('.table__date3');
const datumInput4 = document.querySelector('.table__date4');
const datumInput5 = document.querySelector('.table__date5');
const datumInput6 = document.querySelector('.table__date6');

if (localStorage.getItem('datum1')) {
  datumInput1.value = localStorage.getItem('datum1');
}

datumInput1.addEventListener('change', () => {
  localStorage.setItem('datum1', datumInput1.value);
});

if (localStorage.getItem('datum2')) {
  datumInput2.value = localStorage.getItem('datum2');
}

datumInput2.addEventListener('change', () => {
  localStorage.setItem('datum2', datumInput2.value);
});

if (localStorage.getItem('datum3')) {
  datumInput3.value = localStorage.getItem('datum3');
}

datumInput3.addEventListener('change', () => {
  localStorage.setItem('datum3', datumInput3.value);
});

if (localStorage.getItem('datum4')) {
  datumInput4.value = localStorage.getItem('datum4');
}

datumInput4.addEventListener('change', () => {
  localStorage.setItem('datum4', datumInput4.value);
});

if (localStorage.getItem('datum5')) {
  datumInput5.value = localStorage.getItem('datum5');
}

datumInput5.addEventListener('change', () => {
  localStorage.setItem('datum5', datumInput5.value);
});

if (localStorage.getItem('datum6')) {
  datumInput6.value = localStorage.getItem('datum6');
}

datumInput6.addEventListener('change', () => {
  localStorage.setItem('datum6', datumInput6.value);
});

// Opslaan succes input

const inputsucces1 = document.querySelector('#freeform1');
const inputsucces2 = document.querySelector('#freeform2');
const inputsucces3 = document.querySelector('#freeform3');
const inputsucces4 = document.querySelector('#freeform4');
const inputsucces5 = document.querySelector('#freeform5');
const inputsucces6 = document.querySelector('#freeform6');
const inputsucces7 = document.querySelector('#freeform7');
const inputsucces8 = document.querySelector('#freeform8');
const inputsucces9 = document.querySelector('#freeform9');
const inputsucces10 = document.querySelector('#freeform10');
const inputsucces11 = document.querySelector('#freeform11');
const inputsucces12 = document.querySelector('#freeform12');
const inputsucces13 = document.querySelector('#freeform13');
const inputsucces14 = document.querySelector('#freeform14');
const inputsucces15 = document.querySelector('#freeform15');
const inputsucces16 = document.querySelector('#freeform16');
const inputsucces17 = document.querySelector('#freeform17');
const inputsucces18 = document.querySelector('#freeform18');

if (localStorage.getItem('succes1')) {
  inputsucces1.value = localStorage.getItem('succes1');
}

inputsucces1.addEventListener('change', () => {
  localStorage.setItem('succes1', inputsucces1.value);
});

if (localStorage.getItem('succes2')) {
  inputsucces2.value = localStorage.getItem('succes2');
}

inputsucces2.addEventListener('change', () => {
  localStorage.setItem('succes2', inputsucces2.value);
});

if (localStorage.getItem('succes3')) {
  inputsucces3.value = localStorage.getItem('succes3');
}

inputsucces3.addEventListener('change', () => {
  localStorage.setItem('succes3', inputsucces3.value);
});

if (localStorage.getItem('succes4')) {
  inputsucces4.value = localStorage.getItem('succes4');
}

inputsucces4.addEventListener('change', () => {
  localStorage.setItem('succes4', inputsucces4.value);
});

if (localStorage.getItem('succes5')) {
  inputsucces5.value = localStorage.getItem('succes5');
}

inputsucces5.addEventListener('change', () => {
  localStorage.setItem('succes5', inputsucces5.value);
});

if (localStorage.getItem('succes6')) {
  inputsucces6.value = localStorage.getItem('succes6');
}

inputsucces6.addEventListener('change', () => {
  localStorage.setItem('succes6', inputsucces6.value);
});

if (localStorage.getItem('succes7')) {
  inputsucces7.value = localStorage.getItem('succes7');
}

inputsucces7.addEventListener('change', () => {
  localStorage.setItem('succes7', inputsucces7.value);
});

if (localStorage.getItem('succes8')) {
  inputsucces8.value = localStorage.getItem('succes8');
}

inputsucces8.addEventListener('change', () => {
  localStorage.setItem('succes8', inputsucces8.value);
});

if (localStorage.getItem('succes9')) {
  inputsucces9.value = localStorage.getItem('succes9');
}

inputsucces9.addEventListener('change', () => {
  localStorage.setItem('succes9', inputsucces9.value);
});

if (localStorage.getItem('succes10')) {
  inputsucces10.value = localStorage.getItem('succes10');
}

inputsucces10.addEventListener('change', () => {
  localStorage.setItem('succes10', inputsucces10.value);
});

if (localStorage.getItem('succes11')) {
  inputsucces11.value = localStorage.getItem('succes11');
}

inputsucces11.addEventListener('change', () => {
  localStorage.setItem('succes11', inputsucces11.value);
});

if (localStorage.getItem('succes12')) {
  inputsucces12.value = localStorage.getItem('succes12');
}

inputsucces12.addEventListener('change', () => {
  localStorage.setItem('succes12', inputsucces12.value);
});

if (localStorage.getItem('succes13')) {
  inputsucces13.value = localStorage.getItem('succes13');
}

inputsucces13.addEventListener('change', () => {
  localStorage.setItem('succes13', inputsucces13.value);
});

if (localStorage.getItem('succes14')) {
  inputsucces14.value = localStorage.getItem('succes14');
}

inputsucces14.addEventListener('change', () => {
  localStorage.setItem('succes14', inputsucces14.value);
});

if (localStorage.getItem('succes15')) {
  inputsucces15.value = localStorage.getItem('succes15');
}

inputsucces15.addEventListener('change', () => {
  localStorage.setItem('succes15', inputsucces15.value);
});

if (localStorage.getItem('succes16')) {
  inputsucces16.value = localStorage.getItem('succes16');
}

inputsucces16.addEventListener('change', () => {
  localStorage.setItem('succes16', inputsucces16.value);
});

if (localStorage.getItem('succes17')) {
  inputsucces17.value = localStorage.getItem('succes17');
}

inputsucces17.addEventListener('change', () => {
  localStorage.setItem('succes17', inputsucces17.value);
});

if (localStorage.getItem('succes18')) {
  inputsucces18.value = localStorage.getItem('succes18');
}

inputsucces18.addEventListener('change', () => {
  localStorage.setItem('succes18', inputsucces18.value);
});