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

// function getCharacterFreq(str) {
//   const map = new Map();
//   str.split("").forEach((element) => {
//     if (!map.has(element)) map.set(element, 1);
//     else {
//       const value = map.get(element);
//       map.set(element, value + 1);
//     }
//   });
//   return map;
// }

// const result = getCharacterFreq("aabcccdadf");
// console.log(result);

// function secondMostFrequentElement(nums) {
//     const map = new Map();

//     for (const num of nums) {
//         map.set(num, (map.get(num) || 0) + 1);
//     }
//     let maxFreq = 0;

//     for (const freq of map.values()) {
//         maxFreq = Math.max(maxFreq, freq);
//     }
//     let secondMaxFreq = 0
//     for (const freq of map.values()) {
//         if (freq < maxFreq && freq > secondMaxFreq) {
//             secondMaxFreq = freq;
//         }
//     }
//     if (secondMaxFreq === 0) {
//         return -1;
//     }
//     let secondMaxEle = Infinity;
//     for (const [num, freq] of map) {
//         if (
//             freq === secondMaxFreq &&
//             num < secondMaxEle
//         ) {
//             secondMaxEle = num;
//         }
//     }
//     return secondMaxEle
// }

function sumHighestAndLowestFrequency(nums) {
    const map = new Map()
    nums.forEach((num) => {
        map.set(num, (map.get(num) || 0) + 1)
    })
    let maxFreq = 0
    let minFreq = Infinity
    for (const [num, freq] of map) {
        if (freq > maxFreq) {
            maxFreq = Math.max(maxFreq, freq)
        }
        if (freq < minFreq) {
            minFreq = Math.min(minFreq, freq)
        }
    }
    return minFreq + maxFreq
}



const result = sumHighestAndLowestFrequency([2, 2, 2, 3, 3, 4, 4, 4, 1, 1, 1])
console.log("Result: ", result)


