const raffle = document.querySelector(".raffle");
const quantity = document.getElementById("quantity");
const start = document.getElementById("start");
const end = document.getElementById("end");
const form = document.querySelector("form");
const result = document.querySelector(".result");
const btnSwitch = document.querySelector(".btnSwitch");

raffle.addEventListener("click", handleRaffle);

function handleRaffle(event) {
  event.preventDefault();

  const quantityValue = Number(quantity.value);
  const startValue = Number(start.value);
  const endValue = Number(end.value);

  // Verificar se a quantidade solicitada é maior que o range disponível
  if (quantityValue > (endValue - startValue + 1)) {
    alert("A quantidade de números solicitada é maior que o intervalo disponível!");
    return;
  }

  resetResult();
  renderTitle();
  renderSubtitle(quantityValue);
  renderDrawnNumbers(quantityValue, startValue, endValue);
  renderRaffleAgainButton();
  toggleScreen();
  clearInput();
}

function resetResult() {
  result.innerHTML = "";
}

function renderTitle() {
  const title = document.createElement("h4");
  title.textContent = "Resultado do sorteio";
  result.appendChild(title);
}

function renderSubtitle() {
  const subtitle = document.createElement("p");
  subtitle.textContent = "1º resultado";
  result.appendChild(subtitle);
}

function renderDrawnNumbers(quantityValue, startValue, endValue) {
  const numberContainer = document.createElement("div");
  result.appendChild(numberContainer);
  
  // Criar um Set para armazenar números já sorteados
  const drawnNumbers = new Set();
  
  // Continuar sorteando até atingir a quantidade desejada
  while (drawnNumbers.size < quantityValue) {
    const newNumber = generateRandomNumber(startValue, endValue);
    // Só adiciona se o número ainda não foi sorteado
    if (!drawnNumbers.has(newNumber)) {
      drawnNumbers.add(newNumber);
      const resultContainer = createNumberSpan(newNumber);
      numberContainer.appendChild(resultContainer);
    }
  }
}

function generateRandomNumber(start, end) {
  return Math.floor(Math.random() * (end - start + 1)) + start;
}

function createNumberSpan(number) {
  const resultContainer = document.createElement("span");
  resultContainer.textContent = number;
  return resultContainer;
}

function renderRaffleAgainButton() {
  const buttonAgain = document.createElement("button");
  const img = document.createElement("img");
  img.setAttribute("src", "./assets/again.svg");
  buttonAgain.classList.add("again");
  buttonAgain.textContent = "Sortear novamente";
  buttonAgain.appendChild(img);
  result.appendChild(buttonAgain);

  buttonAgain.addEventListener("click", resetToInitialScreen);
}

function resetToInitialScreen() {
  result.innerHTML = "";
  form.classList.remove("hidden");
  result.classList.add("hidden");
}

function toggleScreen() {
  form.classList.toggle("hidden");
  result.classList.toggle("hidden");
}

function clearInput() {
  quantity.value = "";
  start.value = "";
  end.value = "";
}

function toggleSwitch(event) {
  event.preventDefault();
  const spanSwitch = document.querySelector(".spanSwitch");

  btnSwitch.classList.toggle("deactivated");
  spanSwitch.classList.toggle("deactivated");
}

btnSwitch.addEventListener("click", toggleSwitch);
