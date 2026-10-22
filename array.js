// var moveZeroes = function (nums) {
//     let i = 0
//     for (let j = 0; j < nums.length; j++) {
//         if (nums[j] !== 0) {
//             let temp = nums[i]
//             nums[i] = nums[j]
//             nums[j] = temp
//             i++
//         }
//     }
//     return nums
// };

// console.log(moveZeroes([0, 2, 3, 0, 0, 4]))


var removeDuplicates = function (nums) {
    const set = [...new Set(nums)]
    for (let i = 0; i < set.length; i++) {
        nums[i] = set[i]
    }
    return set.length
};

console.log(removeDuplicates([1, 1, 2, 2, 3, 4]))