const refs = {
  start: document.querySelector('button[data-start]'),
  stop: document.querySelector('button[data-stop]'),
  body: document.body,
};

let timerId = null;

refs.start.addEventListener('click', onStartClick);
refs.stop.addEventListener('click', onStopClick);

function onStartClick() {
  timerId = setInterval(() => {
    refs.body.style.backgroundColor = getRandomHexColor();
    refs.start.disabled = true;
    refs.stop.disabled = false;
  }, 1000);
};

function onStopClick() {
    clearInterval(timerId);
    refs.stop.disabled = true;
    refs.start.disabled = false;
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
