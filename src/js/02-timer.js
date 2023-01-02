import Notiflix from 'notiflix';
import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';

const refs ={
    timer: document.querySelector(`#datetime-picker`),
    start: document.querySelector(`[data-start]`),
    time: document.querySelectorAll('.value'),
};

const today = new Date();
let differenceOfTime = null;

const options = {
    enableTime: true,
    time_24hr: true,
    defaultDate: new Date(),
    minuteIncrement: 1,
    onClose(selectedDates) {
      if (today - selectedDates[0] > 0) {
        refs.start.disabled = true;
        Notiflix.Notify.failure('Please choose a date in the future');
      } else {
        refs.start.disabled = false;
        differenceOfTime = selectedDates[0].getTime() - today.getTime();
      }
    },
  };
  
const deadline = flatpickr(refs.timer, options);

refs.start.addEventListener('click', onStartClick);

function onStartClick() {
    timer();
    refs.start.disabled = true;
    refs.timer.disabled = true;
};

function timer() {
    let intervalId = null;

    intervalId = setInterval(() => {
      const dateNow = new Date();
  
      differenceOfTime = deadline.selectedDates[0].getTime() - dateNow.getTime();
  
      if (differenceOfTime > 0) {
        convertMs(differenceOfTime);
      } else {
        clearInterval(intervalId);
      }
    }, 1000);
  }
  
  function pad(value) {
    return String(value).padStart(2, 0);
  }

function convertMs(ms) {
    // Number of milliseconds per unit of time
    const second = 1000;
    const minute = second * 60;
    const hour = minute * 60;
    const day = hour * 24;
  
    const timerDays = refs.time[0];
    const timerHours = refs.time[1];
    const timerMinutes = refs.time[2];
    const timerSeconds = refs.time[3];
  
    // Remaining days
    const days = Math.floor(ms / day);
    // Remaining hours
    const hours = Math.floor((ms % day) / hour);
    // Remaining minutes
    const minutes = Math.floor(((ms % day) % hour) / minute);
    // Remaining seconds
    const seconds = Math.floor((((ms % day) % hour) % minute) / second);
  
    timerDays.textContent = pad(days);
    timerHours.textContent = pad(hours);
    timerMinutes.textContent = pad(days);
    timerSeconds.textContent = pad(seconds);
  
    return { days, hours, minutes, seconds };
  };

