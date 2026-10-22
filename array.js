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

// class Solution {
//     unionArray(nums1, nums2) {
//         let i = 0
//         let j = 0
//         let result = []
//         while (i < nums1.length && j < nums2.length) {
//             if (nums1[i] < nums2[j]) {
//                 if (result[result.length - 1] !== nums1[i]) {
//                     result.push(nums1[i])
//                 }
//                 i++

//             }
//             else {
//                 if (result[result.length - 1] !== nums2[j]) {
//                     result.push(nums2[j])
//                 }
//                 j++

//             }
//         }
//         while (i < nums1.length) {
//             if (result[result.length - 1] !== nums1[i]) {
//                 result.push(nums1[i])
//             }
//             i++
//         }
//         while (j < nums2.length) {
//             if (result[result.length - 1] !== nums2[j]) {
//                 result.push(nums2[j])
//             }
//             j++
//         }
//         return result
//     }
// }

// const sol = new Solution()
// console.log(sol.unionArray([1, 2, 3, 4], [2, 3, 3, 6, 7]))


class Solution {
    intersectionArray(nums1, nums2) {
        let i = 0
        let j = 0
        let result = []
        while (i < nums1.length && j < nums2.length) {
            if (nums1[i] == nums2[j]) {
                result.push(nums1[i])
                i++
                j++
            }
            else {
                if (nums1[i] > nums2[j]) {
                    j++
                }
                else {
                    i++
                }

            }
        }
        return result
    }
}

const sol = new Solution()
console.log(sol.intersectionArray([1, 1, 2, 2, 3, 4, 5], [1, 2, 2, 2, 3, 4, 4]))