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


// class Solution {
//     intersectionArray(nums1, nums2) {
//         let i = 0
//         let j = 0
//         let result = []
//         while (i < nums1.length && j < nums2.length) {
//             if (nums1[i] == nums2[j]) {
//                 result.push(nums1[i])
//                 i++
//                 j++
//             }
//             else {
//                 if (nums1[i] > nums2[j]) {
//                     j++
//                 }
//                 else {
//                     i++
//                 }

//             }
//         }
//         return result
//     }
// }

// const sol = new Solution()
// console.log(sol.intersectionArray([1, 1, 2, 2, 3, 4, 5], [1, 2, 2, 2, 3, 4, 4]))


// class Solution {
//     majorityElement(nums) {
//         let count = 0
//         let ele = nums[0]
//         for (let i = 0; i < nums.length; i++) {
//             if (count === 0) {
//                 ele = nums[i]
//                 count++
//             }
//             else if (ele === nums[i]) {
//                 count++
//             }
//             else {
//                 count--
//             }
//         }
//         return ele
//     }
// }

// const result = new Solution()
// console.log(result.majorityElement([1, 1, 1, 2, 3, 3, 5, 5, 5, 5, 5, 5]))


// class Solution {
//     leaders(nums) {
//         let result = []
//         for (let i = 0; i < nums.length - 1; i++) {
//             let leader = true
//             for (let j = i + 1; j < nums.length; j++) {
//                 if (nums[i] < nums[j]) {
//                     leader = false
//                     break
//                 }
//             }
//             if (leader) {
//                 result.push(nums[i])
//             }
//         }
//         result.push(nums[nums.length - 1])
//         return result
//     }
// }

// const result = new Solution()
// console.log(result.leaders([-3, 4, 5, 1, -4, -5]))


//optimal solution
// class Solution {
//     leaders(nums) {
//         let result = []
//         let max = -Infinity
//         for (let i = nums.length - 1; i > 0; i--) {
//             if (max < nums[i]) {
//                 max = nums[i]
//                 result.push(nums[i])
//             }
//         }
//         return result.reverse()
//     }
// }

// const result = new Solution()
// console.log(result.leaders([-3, 4, 5, 1, -4, -5]))


// var spiralOrder = function (matrix) {
//     const result = [];

//     let left = 0;
//     let top = 0;
//     let right = matrix[0].length - 1;
//     let bottom = matrix.length - 1;

//     while (left <= right && top <= bottom) {

//         // 1. Traverse left to right
//         for (let i = left; i <= right; i++) {
//             result.push(matrix[top][i]);
//         }
//         top++;

//         // 2. Traverse top to bottom
//         for (let i = top; i <= bottom; i++) {
//             result.push(matrix[i][right]);
//         }
//         right--;

//         // 3. Traverse right to left
//         if (top <= bottom) {
//             for (let i = right; i >= left; i--) {
//                 result.push(matrix[bottom][i]);
//             }
//             bottom--;
//         }

//         // 4. Traverse bottom to top
//         if (left <= right) {
//             for (let i = bottom; i >= top; i--) {
//                 result.push(matrix[i][left]);
//             }
//             left++;
//         }
//     }

//     return result;
// };

// console.log(spiralOrder([[1, 2, 3], [4, 5, 6], [7, 8, 9]]))


class Solution {
    pascalTriangleI(r, c) {
        let n = r - 1;
        let k = c - 1;
        let result = 1;

        k = Math.min(k, n - k);

        for (let i = 0; i < k; i++) {
            result = result * (n - i) / (i + 1);
        }

        return Math.round(result);
    }
}

const sol = new Solution()
const result = console.log(sol.pascalTriangleI(5, 2))