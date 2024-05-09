function add(num1, num2, cb) {
  let result = num1 + num2;

  cb(result);
}

const printResult = (result) => {
  console.log("print result", result);
};

add(1, 2, printResult);
