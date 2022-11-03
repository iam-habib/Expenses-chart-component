import data from "./data.json" assert { type: "json" };

const bars = document.querySelectorAll(".bar");
const spend = document.querySelectorAll(".spend");
const days = document.querySelectorAll(".day");

for (let i = 0; days.length > i; i++) {
  const height = data[i].amount / 6;
  days[i].textContent = data[i].day;
  spend[i].textContent = `$${data[i].amount}`;
  bars[i].style.height = `${height}em`;

  bars[i].addEventListener("click", function () {
    spend[i].classList.toggle("active");
    bars[i].classList.toggle("active_bar");
  });
}
