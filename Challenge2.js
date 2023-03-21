const majority = (arr, n) => {
  let finalCount = 0;
  let index = -1;

  for (let i = 0; i < n; i++) {
    let count = 0;
    for (let j = 0; j < n; j++) {
      if (arr[i] === arr[j]) {
        count++;
      }
    }
    if (count > finalCount) {
      finalCount = count;
      index = i;
    }
  }
  if (finalCount > n / 2) {
    return arr[index];
  } else {
    console.log("no majority number ");
  }
};

const arr = [2, 2, 2, 2, 5, 5, 2, 3, 3];
let n = arr.length;

console.log(majority(arr, n));
