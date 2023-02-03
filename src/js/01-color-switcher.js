const refs = {
  startBtnEl: document.querySelector('[data-start]'),
  stopBtnEl: document.querySelector('[data-stop]'),
  body: document.querySelector('body'),
};

let colorIntervalId = null;

refs.startBtnEl.addEventListener('click', onClickStartBtn);
refs.stopBtnEl.addEventListener('click', onClickStopBtn);

function onClickStartBtn() {
  colorIntervalId = setInterval(generateColor, 1000);

  refs.stopBtnEl.removeAttribute('disabled');
  refs.startBtnEl.setAttribute('disabled', 'disabled');
}

function onClickStopBtn() {
  clearInterval(colorIntervalId);

  refs.startBtnEl.removeAttribute('disabled');
  refs.stopBtnEl.setAttribute('disabled', 'disabled');
}

function generateColor() {
  refs.body.style.backgroundColor = getRandomHexColor();
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
