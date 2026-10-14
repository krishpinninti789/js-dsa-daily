// function getFrequency(num, arr) {
//   let count = 0;
//   arr.forEach((ele) => {
//     if (ele == num) {
//       count++;
//     }
//   });
//   return count;
// }

// const freqny = getFrequency(2, [1, 2, 3, 4, 5, 1]);
// console.log(freqny);

// function getFrequency(array) {
//   const map = new Map();
//   array.forEach((element) => {
//     if (!map.has(element)) map.set(element, 1);
//     else {
//       const value = map.get(element);
//       map.set(element, value + 1);
//     }
//   });
//   return map;
// }

// const result = getFrequency([1, 2, 2, 3, 4, 4, 5, 6, 6]);
// console.log(result);

function getCharacterFreq(str) {
  const map = new Map();
  str.split("").forEach((element) => {
    if (!map.has(element)) map.set(element, 1);
    else {
      const value = map.get(element);
      map.set(element, value + 1);
    }
  });
  return map;
}

const result = getCharacterFreq("aabcccdadf");
console.log(result);
