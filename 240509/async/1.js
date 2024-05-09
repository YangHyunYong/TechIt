let a = 0;
function callB(delayTime) {
  let b = 10;

  const delay = Date.now() + delayTime;

  while (Date.now() < delay) {}

  console.log(b);
}

function callC() {
  let c = 20;
  console.log(c);
}

callB(5000);
callC();
