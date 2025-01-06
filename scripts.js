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

 const drawnNumber =
 Math.floor(Math.random() * (endValue - startValue + 1)) + startValue;

 const title = document.createElement("h4");
 title.textContent = "Draw result";
 const subtitle = document.createElement("p");
 subtitle.textContent = "1st result";
 const resultContainer = document.createElement("span");
 resultContainer.textContent = drawnNumber;

 const buttonAgain = document.createElement("button");
 const img = document.createElement("img");
 img.setAttribute("src", "./assets/again.svg");
 buttonAgain.classList.add("again");
 buttonAgain.textContent = "Draw again";
 buttonAgain.appendChild(img);

 result.appendChild(title);
 result.appendChild(subtitle);
 result.appendChild(resultContainer);
 result.appendChild(buttonAgain);

 toggleScreen();
 buttonAgain.addEventListener("click", () => {
 buttonAgain.classList.add("hidden");
 result.classList.add("hidden");
 form.classList.remove("hidden");
 });
 clearInput();
});

function randomNumber() {}

function toggleScreen() {
 form.classList.toggle("hidden");
 result.classList.toggle("hidden");
}

function clearInput() {
 quantity.value = "";
 start.value = "";
 end.value = "";
}
