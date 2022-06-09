const delayInput = document.querySelector('input[name=delay]');
const stepInput = document.querySelector('input[name=step]');
const amountInput = document.querySelector('input[name=amount]');
const form = document.querySelector(".form")


function createPromise(position, delay) {
  const promise = new Promise((resolve, reject) => {
    const shouldResolve = Math.random() > 0.3;
    setTimeout(() => {
      if (shouldResolve) {
        resolve({ position, delay });
      } else {
        reject({ position, delay });
      }
    }, delay)
  });
  return promise;
};

function promiseResult(position, delay) {
  createPromise(position, delay)
      .then(({ position, delay }) => {
    console.log(`✅ Fulfilled promise ${position} in ${delay}ms`);
    })
    .catch(({ position, delay }) => {
      console.log(`❌ Rejected promise ${position} in ${delay}ms`);
    });
}

function onFormSubmit(evt) {
  evt.preventDefault();
  let position = 1;
  let delay = Number(delayInput.value);
  let step = Number(stepInput.value);
  promiseResult(position, delay);

  for (let i = 1; i < amountInput.value; i++) {
    position += 1;
    delay += step;
    promiseResult(position, delay);
  };

  evt.currentTarget.reset();
};

form.addEventListener('submit', onFormSubmit);