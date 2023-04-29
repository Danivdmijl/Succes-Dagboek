class SuccessTable {
  constructor() {
    const body = document.querySelector('body');

    const logoImg = document.createElement('img');
    logoImg.setAttribute('src', 'img/site-logo.webp');
    logoImg.setAttribute('alt', 'Logo Website ');
    body.appendChild(logoImg);

    const nameFieldWrapper = document.createElement('figure');
    nameFieldWrapper.classList.add('nameField__wrapper');

    const nameInput = document.createElement('input');
    nameInput.classList.add('nameField');
    nameInput.setAttribute('type', 'text');
    nameInput.setAttribute('placeholder', 'Vul hier je naam in');
    nameFieldWrapper.appendChild(nameInput);

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

    const tableHeaderRow = document.createElement('tr');
    tableHeaderRow.classList.add('table__tr--1');

    const dateHeader = document.createElement('th');
    dateHeader.classList.add('table__th--date');
    dateHeader.textContent = 'Succes/Datum';
    tableHeaderRow.appendChild(dateHeader);

    for (let i = 1; i <= 3; i++) {
      const successHeader = document.createElement('th');
      successHeader.classList.add('table__th');
      successHeader.textContent = `Succes ${i}`;
      tableHeaderRow.appendChild(successHeader);
    }

    table.appendChild(tableHeaderRow);

    for (let i = 1; i <= 7; i++) {
      const tableRow = document.createElement('tr');

      const dateInput = document.createElement('td');
      dateInput.classList.add('table__td--date');
      const dateInputField = document.createElement('input');
      dateInputField.setAttribute('type', 'date');
      dateInputField.setAttribute('id', `succesdatum`);
      dateInputField.setAttribute('name', 'succesdatum');
      dateInputField.classList.add('table__date', `table__date${i}`);
      dateInput.appendChild(dateInputField);
      tableRow.appendChild(dateInput);

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
  confirm("Dagboek word opgeschoond je gegevens zullen verwijderd worden en niet meer terug te vinden zijn op de site.");
  localStorage.clear();
  window.location.reload(true);
}


const nameInput = document.querySelector('.nameField');

if (localStorage.getItem('name')) {
  nameInput.value = localStorage.getItem('name');
}

nameInput.addEventListener('change', () => {
  localStorage.setItem('name', nameInput.value);
});


const datumInputs = document.querySelectorAll('.table__date');
const successInputs = document.querySelectorAll('[id^="freeform"]');

datumInputs.forEach((input, index) => {
  const datumKey = `datum${index + 1}`;
  if (localStorage.getItem(datumKey)) {
    input.value = localStorage.getItem(datumKey);
  }
  input.addEventListener('change', () => {
    localStorage.setItem(datumKey, input.value);
  });
});

successInputs.forEach((input, index) => {
  const successKey = `success${index + 1}`;
  if (localStorage.getItem(successKey)) {
    input.value = localStorage.getItem(successKey);
  }
  input.addEventListener('change', () => {
    localStorage.setItem(successKey, input.value);
  });
});
