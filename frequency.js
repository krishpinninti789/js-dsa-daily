function getFrequency(num, arr) {
  let count = 0;
  arr.forEach((ele) => {
    if (ele == num) {
      count++;
    }
  });
  return count;
}

const freqny = getFrequency(2, [1, 2, 3, 4, 5, 1]);
console.log(freqny);
