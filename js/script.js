const button = document.querySelector('#btn');
const inputWeight = document.querySelector('#input-weight');
const inputHeight = document.querySelector('#input-height');
const errorWeight = document.querySelector('.paragrafh-input-weight')
const errorHeight = document.querySelector('.paragrafh-input-height')
const result = document.querySelector('#result');
const paragrafhStatus = document.querySelector('#paragrafh-status');
const paragrafhWeight = document.querySelector('#paragrafh-Weight');
const select = document.querySelector('#genre');

/**************************************************************************************************************/

const handleButtonClick = () => {
  errorWeight.innerText = '';
  errorHeight.innerText = '';
  
  const valueWeight = Number(inputWeight.value.replace(',', '.'));
  const valueHeight = Number(inputHeight.value.replace(',', '.'));
  
  calculateImc(valueWeight, valueHeight);
};

button.addEventListener('click', handleButtonClick)
/**************************************************************************************************************/
const calculateImc = (weight, height) => {
  if (weight === 0) {
    errorWeight.innerText = 'Você precisa colocar o seu peso.';
    return;
  }

  if (height === 0) {
    errorHeight.innerText = 'Você precisa colocar a sua altura.';
    return;
  }
  
  const calculate = weight / (height * height)
  const imc = calculate.toFixed(2);
  

  clinicalResult(imc)
};

const clinicalResult = (imc) => {
  const formatting = imc.replace('.', ',');
  const phrase = 'Este valor considera que você está na faixa de';

  if (imc < 16) {
    result.innerHTML = formatting;
    paragrafhStatus.innerHTML = `${phrase} <strong>MAGREZA GRAU III</strong>.`;
  }
  if (imc >= 16 && imc <= 16.99) {
    result.innerHTML = formatting;
    paragrafhStatus.innerHTML = `${phrase} <strong> MAGREZA GRAU II</strong>.`;
  }
  if (imc >= 17 && imc <= 18.49) {
    result.innerHTML = formatting;
    paragrafhStatus.innerHTML = `${phrase} <strong> MAGREZA GRAU I</strong>.`;
  }
  if (imc >= 18.5 && imc <= 24.99) {
    result.innerHTML = formatting;
    paragrafhStatus.innerHTML = `${phrase} <strong>PESO NORMAL (ADEQUADO)</strong>.`;
  }
  if (imc >= 25 && imc <= 29.99) {
    result.innerHTML = formatting;
    paragrafhStatus.innerHTML = `${phrase} <strong>ACIMA DO PESO (PRÉ-OBESO)</strong>.`;
  }
  if (imc >= 30 && imc <= 34.99) {
    result.innerHTML = formatting;
    paragrafhStatus.innerHTML = `${phrase} <strong>OBESIDADE GRAU I</strong>.`;
  }
  if (imc >= 35 && imc <= 39.99) {
    result.innerHTML = formatting;
    paragrafhStatus.innerHTML = `${phrase} <strong>OBESIDADE GRAU II</strong>.`;
  }
  if (imc >= 40) {
    result.innerHTML = formatting;
    paragrafhStatus.innerHTML = `${phrase} <strong>OBESIDADE GRAU III</strong>.`;
  }   

  calculateWeight();
}

const updateSelect = () => select.value;

const calculateWeight = () => {
  const valueHeight = Number(inputHeight.value.replace('.', ''));
  const genre = select.value;
  
  if (genre === 'Masculine') {
    const idealWeight = (valueHeight - 100) * 0.90;
    
    paragrafhWeight.innerHTML = `Fórmula de Robinson - Seu peso ideal é: <strong>${idealWeight}kg</strong>`;

    inputHeight.value = '';
    inputWeight.value = '';
    select.value = 'Feminine'
  }

  if (genre === 'Feminine') {
    const idealWeight = (valueHeight - 100) * 0.85;
    paragrafhWeight.innerHTML = `Fórmula de Robinson - Seu peso ideal é: <strong>${idealWeight}kg</strong>`;
    inputHeight.value = '';
    inputWeight.value = '';
    select.value = 'Feminine'
  }
}

