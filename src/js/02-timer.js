import flatpickr from 'flatpickr';
// Додатковий імпорт стилів
import 'flatpickr/dist/flatpickr.min.css';

import { Notify } from 'notiflix/build/notiflix-notify-aio';

const btnStartEl = document.querySelector('[data-start]');
btnStartEl.setAttribute('disabled', '');

const clock = {
  days: document.querySelector('[data-days]'),
  hours: document.querySelector('[data-hours]'),
  minutes: document.querySelector('[data-minutes]'),
  seconds: document.querySelector('[data-seconds]'),
};

let choosenDate = null;

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    if (selectedDates[0] - new Date() < 0) {
      Notify.failure('Please choose a date in the future');
    } else {
      btnStartEl.removeAttribute('disabled');
      choosenDate = selectedDates[0];
    }
  },
};

flatpickr('#datetime-picker', options);

btnStartEl.addEventListener('click', onBtnStartClick);

function onBtnStartClick() {
  const timer = setInterval(() => {
    const currentTime = Date.now();
    const suTime = choosenDate - currentTime;
    const { days, hours, minutes, seconds } = convertMs(suTime);

    insertClockNumber(days, hours, minutes, seconds);

    if (seconds === '00') {
      clearInterval(timer);
    }
  }, 1000);
}

function insertClockNumber(days, hours, minutes, seconds) {
  clock.days.textContent = days;
  clock.hours.textContent = hours;
  clock.minutes.textContent = minutes;
  clock.seconds.textContent = seconds;
}

function addLeadingZero(value) {
  return String(value).padStart(2, '0');
}

function convertMs(ms) {
  // Number of milliseconds per unit of time
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  // Remaining days
  const days = addLeadingZero(Math.floor(ms / day));
  // Remaining hours
  const hours = addLeadingZero(Math.floor((ms % day) / hour));
  // Remaining minutes
  const minutes = addLeadingZero(Math.floor(((ms % day) % hour) / minute));
  // Remaining seconds
  const seconds = addLeadingZero(
    Math.floor((((ms % day) % hour) % minute) / second)
  );

  return { days, hours, minutes, seconds };
}
