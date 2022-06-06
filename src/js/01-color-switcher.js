function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
};

const startBtn = document.querySelector("button[data-start]");
const stopBtn = document.querySelector("button[data-stop]");

stopBtn.setAttribute("disabled", "disabled");
let changeBodyColorInterval = null;

function startedToChangeBodyColor() {
    startBtn.setAttribute("disabled", "disabled");
    stopBtn.removeAttribute("disabled");
    changeBodyColorInterval = setInterval(() => {
    document.body.style.backgroundColor = `${getRandomHexColor()}`
  }, 1000);
};

function stoppedChangingBodyColor() {
    clearInterval(changeBodyColorInterval);
    stopBtn.setAttribute("disabled", "disabled");
    startBtn.removeAttribute("disabled");
}

stopBtn.addEventListener("click", stoppedChangingBodyColor);
startBtn.addEventListener("click", startedToChangeBodyColor);

