const raffle = document.querySelector(".raffle");

raffle.addEventListener("click", (event) => {
  event.preventDefault();
  alert("You have been entered into the raffle!");
});