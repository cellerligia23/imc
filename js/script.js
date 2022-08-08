const button = document.querySelector('#btn');
const inputWeight = document.querySelector('#input-weight');
const inputHeight = document.querySelector('#input-height');
const paragrafhResult = document.querySelector('#result');

const handleButtonClick = () => {
  const valueWeight = Number(inputWeight.value.replace(',', '.'));
  const valueHeight = Number(inputHeight.value.replace(',', '.'));
  
  calculateImc(valueWeight, valueHeight);
}

button.addEventListener('click', handleButtonClick)

const calculateImc = (weight, height) => {
  const calculate = weight / (height * height)
  const imc = calculate.toFixed(2);
  const formatting = imc.replace('.', ',')

  if (imc === 20 || imc <= 24) {
    inputWeight.value = '';
    inputHeight.value = '';

    return paragrafhResult.innerHTML = `O IMC desses dados é: <strong>${formatting}</strong></br></br>
    <strong>PESO NORMAL</strong>`
  }
  if (imc === 25 || imc <= 29) {
    inputWeight.value = '';
    inputHeight.value = '';

    return paragrafhResult.innerHTML = `O IMC desses dados é: <strong>${formatting}</strong></br></br>
    <strong>EXCESSO DE PESO</strong>`
  }
  if (imc === 30 || imc <= 35) {
    inputWeight.value = '';
    inputHeight.value = '';

    return paragrafhResult.innerHTML = `O IMC desses dados é: <strong>${formatting}</strong></br></br>
    <strong>OBESIDADE</strong>`
  }
  if (imc > 35) {
    inputWeight.value = '';
    inputHeight.value = '';

    return paragrafhResult.innerHTML = `O IMC desses dados é: <strong>${formatting}</strong></br></br>
    <strong>SUPER OBESIDADE</strong>`
  }
};
