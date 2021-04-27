const brazilianStates = ['Selecione um Estado', 'Acre', 'Alagoas', 'Amapá', 'Amazonas', 'Bahia', 'Ceará', 'Distrito Federal', 'Espírito Santo', 'Goiás', 'Maranhão', 'Mato Grosso', 'Mato Grosso do Sul', 'Minas Gerais', 'Pará', 'Paraíba', 'Paraná', 'Pernambuco', 'Piauí', 'Rio de Janeiro', 'Rio Grande do Norte', 'Rio Grande do Sul', 'Rondônia', 'Roraima', 'Santa Catarina', 'São Paulo', 'Sergipe', 'Tocantins'];

const elementStates = document.getElementById('estado');

function addStates() {
  for (let index in brazilianStates) {
    const optionState = document.createElement('option');
    optionState.innerText = brazilianStates[index];
    elementStates.appendChild(optionState);
  }
}
addStates();

document.getElementById("cpf-input").onkeypress = function(e) {
  var chr = String.fromCharCode(e.which);
  if ("></\",.'".indexOf(chr) >= 0)
      return false;
};

function dataVerify(data) {
  if (data.indexOf('/') === 2 || data.indexOf('/') === 5) {
    const day = data.substr(0, 2);
    const month = data.substr(3, 2);
    const year = data.substr(6, 4);
      if ((day > 0 && day <= 31) && (month > 0 && month <= 12) && (year >= 0 && year.length === 4)) {
        return true;
      }   
    }
  return false;
}
  
function checkData() {
  const inputData = document.querySelector('.input-data');
  let data = inputData.value;
  const userData = dataVerify(data);
  if (!userData && data.length) {
    inputData.value = '';
    alert('data invalida');
    return false;
    }
  return userData;
}
checkData();

function checkEmail() {
  const email = document.querySelector('.email-input');
  let insertedEmail = email.value;
  const emailFormat = /^[a-z0-9.]+@[a-z0-9]+\.[a-z]+$/.test(insertedEmail);
  if (!emailFormat && insertedEmail.length) {
    email.value = '';
    alert('email inválido');
    return false;
  }
  return emailFormat
}
checkEmail();

function renderCurriculum(event) {
  event.preventDefault();
  const formElements = document.querySelectorAll('input');
  const jobsElements = document.querySelectorAll('.insert-text')
  for (let index = 0; index < formElements.length && jobsElements.length; index += 1) {
    if (formElements[index].type === 'radio' && !formElements[index].checked) {
      continue;
    }
    const userInput = formElements[index].value;
    const jobText = jobsElements[index].value;
    const dataUser = document.querySelector('.form-data');
    if (checkEmail() && checkData()) {
      const newDiv = document.createElement('div');
      newDiv.className = 'div-curriculum';
      newDiv.innerHTML = userInput;
      newDiv.innerHTML += jobText;
      dataUser.appendChild(newDiv);
    }
  }
}

const clearButton = document.querySelector('.clear-button');
function clearFields() {
  const formElements = document.querySelectorAll('input');
  const textField = document.querySelectorAll('.insert-text');
  const div = document.querySelectorAll('.div-curriculum');
  for (let index = 0; index < div.length; index += 1) { 
      div[index].innerText = '';   
  }
}

const submitButton = document.querySelector('.submit-button');
submitButton.addEventListener('click', renderCurriculum);
clearButton.addEventListener('click', clearFields);
