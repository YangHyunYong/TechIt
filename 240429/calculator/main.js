let result = 0;
let operator = "";

const resultEl = document.querySelector(".result");

resultEl.innerHTML = result;

function onClickNumber(number) {
  if (resultEl.innerHTML.length >= 13) return;

  if (resultEl.innerHTML === "0") {
    resultEl.innerHTML = number;
  } else {
    resultEl.innerHTML += number;
  }
}

function onClickOperator(inputOperator) {
  result = +resultEl.innerHTML;

  resultEl.innerHTML = 0;

  operator = inputOperator;
}

function onClickEnter() {
  switch (operator) {
    case "+":
      result += +resultEl.innerHTML;
      resultEl.innerHTML = result;
      break;
    case "-":
      result -= +resultEl.innerHTML;
      resultEl.innerHTML = result;
      break;
    case "*":
      result *= +resultEl.innerHTML;
      resultEl.innerHTML = result;
      break;
    case "/":
      result = parseInt(result / +resultEl.innerHTML, 10);
      resultEl.innerHTML = result;
      break;
    default:
      console.log("잘못된 연산자입니다.");
  }
}

function onClickDelete() {
  resultEl.innerHTML = resultEl.innerHTML.substring(
    0,
    resultEl.innerHTML.length - 1
  );

  if (resultEl.innerHTML.length === 0) {
    resultEl.innerHTML = 0;
  }
}
