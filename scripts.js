const raffle = document.querySelector(".raffle");
const quantity = document.getElementById("quantity");
const start = document.getElementById("start");
const end = document.getElementById("end");

raffle.addEventListener("click", (event) => {
  event.preventDefault();

  const quantityValue = Number(quantity.value);
  const startValue = Number(start.value);

  const endValue = Number(end.value);

  const randomNumber = Math.floor(Math.random() * (endValue - startValue + 1)) + startValue;
  console.log(randomNumber);
});

function computerSelectionOfNumber() {

 
}
