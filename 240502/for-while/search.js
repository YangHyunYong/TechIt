let bcs = "lbockchain school";
let searchChar = "0";

for (let i = 0; i < bcs.length; i++) {
  if (bcs[i] === searchChar) {
    console.log(`${i + 1}번째 글자에 ${searchChar}가 있습니다.`);
  }
}
