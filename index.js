const colors = [
  '#FFFFFF',
  '#2196F3',
  '#4CAF50',
  '#FF9800',
  '#009688',
  '#795548',
];

const start = document.querySelector('button[data-action="start"]');
const stop = document.querySelector('button[data-action="stop"]');


const randomIntegerFromInterval = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

let intervalId = null;

const switchColor = function () {
  start.disabled = true;
  if (intervalId === null) {
    intervalId = setInterval(() => {
      let index = randomIntegerFromInterval(0, colors.length - 1);
      document.querySelector("body").style.backgroundColor = colors[index];
    }, 1000);
  }
};

const stopSwitch = function () {
  start.disabled = false;
  clearInterval(intervalId);
  intervalId = null;
};

start.addEventListener("click", switchColor);
stop.addEventListener("click", stopSwitch);
