const array1 = [1, 2, 4, 8];

console.log(array1);

let map1 = [];

for (let i = 0; i < array1.length; i++) {
  let temp = array1[i] * array1[i];

  map1.push(temp);
}

console.log(map1);
