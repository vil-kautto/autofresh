
let delayElement = document.getElementById('delay');
let errorElement = document.getElementById('error');

let refreshElement = document.getElementById('refresh');
refreshElement.addEventListener('click', () => console.log('click refresh') );

let saveElement = document.getElementById('save');
saveElement.addEventListener('click', () => {
  console.log('click save');
  setDelay(delayElement.value);
});


async function setDelay(delay) {
  console.log("set delay");
  try {
    if(delay != 0) {
      delay = Number(delay);
      delay = delay*1000;
      console.log("Delay set to " + delay + "ms");
      await browser.storage.local.set({ delay });
    } else {
      throw TypeError;
    }
  } catch(e) {
    console.log("Invalid input type")
    errorElement.textContent = "Please insert only numbers";
    errorElement.style.color = 'red';
  }
}

async function init () {
  console.log("get delay");
  let { delay } = await browser.storage.local.get('delay');
  if(!delay) {
    console.log("init delay");
    delay = 600;
    delay = delay * 1000;
    setDelay(delay);
  }
  delayElement.value = (delay / 1000);
}

init().catch(e => console.error(e));

