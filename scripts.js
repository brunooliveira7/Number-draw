const raffle = document.querySelector(".raffle");
const quantity = document.getElementById("quantity");
const start = document.getElementById("start");
const end = document.getElementById("end");

const form = document.querySelector("form");
const result = document.querySelector(".result");

raffle.addEventListener("click", (event) => {
  event.preventDefault();

  const quantityValue = Number(quantity.value);
  const startValue = Number(start.value);
  const endValue = Number(end.value);

  //limpar o resultado anterior
  result.innerHTML = "";

  const title = document.createElement("h4");
  title.textContent = "Resultado do sorteio";
  result.appendChild(title);
  const subtitle = document.createElement("p");
  subtitle.textContent = "1º resultado";

  //gerar números sorteados
  for (let i = 0; i < quantityValue; i++) {
    const drawnNumber =
      Math.floor(Math.random() * (endValue - startValue + 1)) + startValue;

    const resultContainer = document.createElement("span");
    resultContainer.textContent = drawnNumber;

    result.appendChild(subtitle);
    result.appendChild(resultContainer);
  }

  const buttonAgain = document.createElement("button");
  const img = document.createElement("img");
  img.setAttribute("src", "./assets/again.svg");
  buttonAgain.classList.add("again");
  buttonAgain.textContent = "Sortear novamente";
  buttonAgain.appendChild(img);
  result.appendChild(buttonAgain);

  //voltar para a tela inicial
  toggleScreen();
  buttonAgain.addEventListener("click", () => {
    buttonAgain.classList.add("hidden");
    result.classList.add("hidden");
    form.classList.remove("hidden");
  });

  //limpar os inputs
  clearInput();
});

function toggleScreen() {
  form.classList.toggle("hidden");
  result.classList.toggle("hidden");
}

function clearInput() {
  quantity.value = "";
  start.value = "";
  end.value = "";
}
