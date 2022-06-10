import flatpickr from "flatpickr";
import "flatpickr/dist/flatpickr.min.css";
import Notiflix from 'notiflix';

const startBtn = document.querySelector('button[data-start]');

const timerDays = document.querySelector('span[data-days]');
const datetimePicker = document.querySelector('#datetime-picker');
const timerHours = document.querySelector('span[data-hours]');
const timerMinutes = document.querySelector('span[data-minutes]');
const timerSeconds = document.querySelector('span[data-seconds]');

let ctartTime = null;
startBtn.setAttribute("disabled", "disabled"); 

const flatpicr = flatpickr("#datetime-picker",
    {enableTime: true,
    time_24hr: true,
    defaultDate: new Date(),
    minuteIncrement: 1,
        onClose(selectedDates) {
            ctartTime = selectedDates[0];
            if (ctartTime < Date.now()) {
                Notiflix.Notify.failure("Please choose a date in the future", { timeout: 4000 });
                return;
            }
            startBtn.removeAttribute("disabled");
            return ctartTime;
        }
    });

function onStartBtnClick() {
    datetimePicker.setAttribute("disabled", "disabled");
    const intervalId = setInterval(() => {
        const currentTime = Date.now();
        const deltaTime = ctartTime - currentTime;
        const time = convertMs(deltaTime);
        updateClockface(time);

        if (deltaTime < 999) {
        clearInterval(intervalId);
        Notiflix.Notify.info(`The sale has begun!!! Hurry up to buy goods at a discount`, {timeout: 7000})
        }
    }, 1000);
};

function updateClockface(time) {
    timerDays.textContent = `${time.days}`;
    timerHours.textContent = `${time.hours}`;
    timerMinutes.textContent = `${time.minutes}`;
    timerSeconds.textContent = `${time.seconds}`;
};

function pad(value) {
    return String(value).padStart(2, '0');
};
    
function convertMs(ms) {
  // Number of milliseconds per unit of time
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  // Remaining days
  const days = pad(Math.floor(ms / day));
  // Remaining hours
  const hours = pad(Math.floor((ms % day) / hour));
  // Remaining minutes
  const minutes = pad(Math.floor(((ms % day) % hour) / minute));
  // Remaining seconds
  const seconds = pad(Math.floor((((ms % day) % hour) % minute) / second));

  return { days, hours, minutes, seconds };
};

startBtn.addEventListener('click', onStartBtnClick);
