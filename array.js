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


// var removeDuplicates = function (nums) {
//     const set = [...new Set(nums)]
//     for (let i = 0; i < set.length; i++) {
//         nums[i] = set[i]
//     }
//     return set.length
// };

// console.log(removeDuplicates([1, 1, 2, 2, 3, 4]))/

class Solution {
    unionArray(nums1, nums2) {
        const merged = [...nums1, ...nums2]
        const set1 = new Set(merged)
        const result = []
        for (const value of set1) {
            result.push(value)
        }
        return result.sort((a, b) => a - b)
    }
}

const sol = new Solution()
console.log(sol.unionArray([1, 2, 3, 4], [2, 3, 3, 6, 7]))