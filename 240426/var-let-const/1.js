let x = "Global X";

// 함수 선언
function a() {
  let x = "Local X";

  console.log(x);
}

function b() {
  console.log(x);
}

// 함수 실행
a();
b();
