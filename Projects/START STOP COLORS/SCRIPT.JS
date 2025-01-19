const startBtn = document.querySelector("#start");
const stopBtn = document.querySelector("#stop");

const randomNumber = function () {
  const hexValues = "0123456789ABCDEF";
  let color = "#";
  for (let i = 0; i < 6; i++) {
    color += hexValues[Math.floor(Math.random() * 16)];
  }
  console.log(color);
  return color;
};

let intervalId;
const startChangingColor = function () {
  if (!intervalId) {
    intervalId = setInterval(changeBG, 1000);
  }
  function changeBG() {
    document.body.style.backgroundColor = randomNumber();
  }
};

const stopChangingColor = function () {
  clearInterval(intervalId);
  intervalId = null;
};

startBtn.addEventListener("click", startChangingColor);
stopBtn.addEventListener("click", stopChangingColor);
