const decrease = document.getElementById("decreaseBtn");
const reset = document.getElementById("resetBtn");
const increase = document.getElementById("increaseBtn");
const countLabel = document.getElementById("countLabel");
let count = 0;

decrease.onclick = () => {
  count--;
  countLabel.textContent = count;
};

reset.onclick = () => {
  count = 0;
  countLabel.textContent = count;
};

increase.onclick = () => {
  count++;
  countLabel.textContent = count;
};
