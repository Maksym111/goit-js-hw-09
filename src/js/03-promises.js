import { Notify } from 'notiflix/build/notiflix-notify-aio';

const refs = {
  form: document.querySelector('.form'),
  firstDelay: document.querySelector('[name="delay"]'),
  step: document.querySelector('[name="step"]'),
  amount: document.querySelector('[name="amount"]'),
  btnSubmit: document.querySelector('button'),
};

let asd = null;

refs.btnSubmit.addEventListener('click', onBtnSubmitClick);

function createPromise(position, firstDelay) {
  const obj = {
    position,
    firstDelay,
  };

  return new Promise((resolve, reject) => {
    const shouldResolve = Math.random() > 0.3;
    setTimeout(() => {
      if (shouldResolve) {
        resolve(obj);
      } else {
        reject(obj);
      }
    }, firstDelay);
  });
}

function onBtnSubmitClick(e) {
  e.preventDefault();

  for (let i = 0; i < refs.amount.value; i += 1) {
    let delay = Number(refs.firstDelay.value) + Number(refs.step.value * i);
    createPromise(i + 1, delay)
      .then(({ position, firstDelay }) => {
        Notify.success(`✅ Fulfilled promise ${position} in ${delay}ms`);
      })
      .catch(({ position, firstDelay }) => {
        Notify.failure(`❌ Rejected promise ${position} in ${firstDelay}ms`);
      });
  }
}
