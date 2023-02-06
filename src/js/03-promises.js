import { Notify } from 'notiflix/build/notiflix-notify-aio';

const refs = {
  form: document.querySelector('.form'),
  firstDelay: document.querySelector('[name="delay"]'),
  step: document.querySelector('[name="step"]'),
  amount: document.querySelector('[name="amount"]'),
  btnSubmit: document.querySelector('button'),
};

refs.btnSubmit.addEventListener('click', onBtnSubmitClick);

function createPromise(position, delay) {
  const obj = {
    position,
    delay,
  };

  return new Promise((resolve, reject) => {
    const shouldResolve = Math.random() > 0.3;
    setTimeout(() => {
      if (shouldResolve) {
        resolve(obj);
      } else {
        reject(obj);
      }
    }, delay);
  });
}

function onBtnSubmitClick(e) {
  e.preventDefault();

  setTimeout(() => {
    for (let i = 1; i <= refs.amount.value; i += 1) {
      createPromise(i, refs.step.value * i)
        .then(({ position, delay }) => {
          Notify.success(`✅ Fulfilled promise ${position} in ${delay}ms`);
        })
        .catch(({ position, delay }) => {
          Notify.failure(`❌ Rejected promise ${position} in ${delay}ms`);
        });
    }
  }, refs.firstDelay.value);
}
