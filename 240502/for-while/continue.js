for (let i = 0; i < 10; i++) {
  if (i % 3 === 0) {
    // i가 3, 6, 9
    continue;
  }

  console.log(`${i + 1}번째 실행입니다.`);
}
