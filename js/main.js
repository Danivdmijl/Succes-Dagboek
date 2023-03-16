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

const nameInput = document.querySelector('.nameField');

// Haal de naam op uit de localStorage
if (localStorage.getItem('name')) {
  nameInput.value = localStorage.getItem('name');
}

nameInput.addEventListener('change', () => {
  localStorage.setItem('name', nameInput.value);
});

const successDateInput = document.querySelector('#succesdatum');
const freeformInputs = document.querySelectorAll('.table__textField');

// Haal de opgeslagen waarden op en stel deze in als de standaardwaarden van de tekstvakken
if (localStorage.getItem('successDate')) {
  successDateInput.value = localStorage.getItem('successDate');
}

if (localStorage.getItem('freeform1')) {
  freeformInputs[0].value = localStorage.getItem('freeform1');
}

if (localStorage.getItem('freeform2')) {
  freeformInputs[1].value = localStorage.getItem('freeform2');
}

if (localStorage.getItem('freeform3')) {
  freeformInputs[2].value = localStorage.getItem('freeform3');
}

if (localStorage.getItem('freeform3')) {
    freeformInputs[3].value = localStorage.getItem('freeform3');
}
  
if (localStorage.getItem('freeform3')) {
    freeformInputs[4].value = localStorage.getItem('freeform3');
}
  
if (localStorage.getItem('freeform3')) {
    freeformInputs[5].value = localStorage.getItem('freeform3');
}
  
if (localStorage.getItem('freeform3')) {
    freeformInputs[6].value = localStorage.getItem('freeform3');
}
  
if (localStorage.getItem('freeform3')) {
    freeformInputs[7].value = localStorage.getItem('freeform3');
}

if (localStorage.getItem('freeform3')) {
    freeformInputs[8].value = localStorage.getItem('freeform3');
}

if (localStorage.getItem('freeform3')) {
    freeformInputs[9].value = localStorage.getItem('freeform3');
}

if (localStorage.getItem('freeform1')) {
    freeformInputs[10].value = localStorage.getItem('freeform1');
  }
  
  if (localStorage.getItem('freeform2')) {
    freeformInputs[11].value = localStorage.getItem('freeform2');
  }
  
  if (localStorage.getItem('freeform3')) {
    freeformInputs[12].value = localStorage.getItem('freeform3');
  }
  
  if (localStorage.getItem('freeform3')) {
      freeformInputs[13].value = localStorage.getItem('freeform3');
  }
    
  if (localStorage.getItem('freeform3')) {
      freeformInputs[14].value = localStorage.getItem('freeform3');
  }
    
  if (localStorage.getItem('freeform3')) {
      freeformInputs[15].value = localStorage.getItem('freeform3');
  }
    
  if (localStorage.getItem('freeform3')) {
      freeformInputs[16].value = localStorage.getItem('freeform3');
  }
    
  if (localStorage.getItem('freeform3')) {
      freeformInputs[17].value = localStorage.getItem('freeform3');
  }
  
  if (localStorage.getItem('freeform3')) {
      freeformInputs[18].value = localStorage.getItem('freeform3');
  }
  
  if (localStorage.getItem('freeform3')) {
      freeformInputs[19].value = localStorage.getItem('freeform3');
}
    
if (localStorage.getItem('freeform3')) {
    freeformInputs[19].value = localStorage.getItem('freeform3');
}



// Sla de inhoud van de tekstvakken op in de localStorage wanneer de gebruiker de inhoud wijzigt
successDateInput.addEventListener('change', () => {
  localStorage.setItem('successDate', successDateInput.value);
});

freeformInputs.forEach((input, index) => {
  input.addEventListener('change', () => {
    localStorage.setItem(`freeform${index+1}`, input.value);
  });
});

