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


// class Solution {
//     pascalTriangleI(r, c) {
//         let n = r - 1;
//         let k = c - 1;
//         let result = 1;

//         k = Math.min(k, n - k);

//         for (let i = 0; i < k; i++) {
//             result = result * (n - i) / (i + 1);
//         }

//         return Math.round(result);
//     }
// }

// const sol = new Solution()
// const result = console.log(sol.pascalTriangleI(5, 2))


// var getRow = function (rowIndex) {
//     let ans = 1
//     let ansRow = []
//     ansRow.push(ans)
//     for (let i = 0; i < rowIndex; i++) {
//         ans = ans * (rowIndex - i)
//         ans = ans / (i + 1)
//         ansRow.push(ans)
//     }
//     return ansRow
// };

// console.log(getRow(4))


// class Solution {
//     pascalTriangleIII(n) {
//         let ans = []
//         for (let i = 1; i <= n; i++) {
//             ans.push(this.getRows(i))
//         }
//         return ans
//     }
//     getRows(rows) {
//         let ans = 1
//         let temp = []
//         temp.push(ans)
//         for (let i = 1; i < rows; i++) {
//             ans = ans * (rows - i)
//             ans = ans / i
//             temp.push(ans)
//         }
//         return temp
//     }
// }

// const sol = new Solution()
// console.log(sol.pascalTriangleIII(5))


// class Solution {
//     rotateMatrix(matrix) {
//         let rows = matrix.length - 1
//         let cols = matrix[0].length - 1
//         let temp = Array.from({ length: matrix.length }, () => Array(matrix[0].length).fill(0))
//         for (let i = 0; i <= rows; i++) {
//             for (let j = 0; j <= cols; j++) {
//                 temp[j][cols - i] = matrix[i][j]
//             }
//         }
//         for (let i = 0; i <= rows; i++) {
//             for (let j = 0; j <= cols; j++) {
//                 matrix[i][j] = temp[i][j]
//             }
//         }
//         return matrix

//     }
// }

// const sol = new Solution()
// console.log(sol.rotateMatrix([[1, 2, 3], [4, 5, 6], [7, 8, 9]]))


// var rotate = function (matrix) {
//     let n = matrix.length
//     for (let i = 0; i < n; i++) {
//         for (let j = i + 1; j < n; j++) {
//             [matrix[i][j], matrix[j][i]] = [matrix[j][i], matrix[i][j]]
//         }
//     }
//     for (let i = 0; i < n; i++) {
//         matrix[i].reverse()
//     }
//     return matrix
// };

// console.log(rotate([[1, 2, 3], [4, 5, 6], [7, 8, 9]]))


// class Solution {
//     setZeroes(matrix) {
//         // Your code goes here
//         let n = matrix.length
//         let m = matrix[0].length
//         let rowTrack = Array(n).fill(0)
//         let colTrack = Array(m).fill(0)
//         for (let i = 0; i < n; i++) {
//             for (let j = 0; j < m; j++) {
//                 if (matrix[i][j] === 0) {
//                     rowTrack[i] = 1
//                     colTrack[j] = 1
//                 }
//             }
//         }
//         for (let i = 0; i < n; i++) {
//             for (let j = 0; j < m; j++) {
//                 if (rowTrack[i] === 1 || colTrack[j] === 1) {
//                     matrix[i][j] = 0
//                 }
//             }
//         }
//         return matrix
//     }
// }

// const sol = new Solution()

// console.log(sol.setZeroes([[1, 1, 1], [1, 0, 1], [1, 1, 1]]))

// class Solution {
//     setZeroes(matrix) {
//         // Your code goes here
//         let n = matrix.length
//         let m = matrix[0].length
//         let firstColZero = matrix.some((row) => row[0] === 0)
//         let firstRowZero = matrix[0].some((i) => (i === 0))
//         for (let i = 1; i < n; i++) {
//             for (let j = 1; j < m; j++) {
//                 if (matrix[i][j] === 0) {
//                     matrix[i][0] = 0
//                     matrix[0][j] = 0
//                 }
//             }
//         }
//         for (let i = 1; i < n; i++) {
//             for (let j = 1; j < m; j++) {
//                 if (matrix[i][0] === 0 || matrix[0][j] === 0) {
//                     matrix[i][j] = 0
//                 }
//             }
//         }

//         if (firstColZero) {
//             for (let i = 0; i < n; i++) {
//                 matrix[i][0] = 0
//             }
//         }
//         if (firstRowZero) {
//             for (let j = 0; j < m; j++) {
//                 matrix[0][j] = 0
//             }
//         }

//         return matrix
//     }
// }

// const sol = new Solution()

// console.log(sol.setZeroes([[1, 1, 1], [0, 0, 1], [1, 1, 1]]))


// class Solution {
//     twoSum(nums, target) {
//         for (let i = 0; i < nums.length; i++) {
//             for (let j = i + 1; j < nums.length; j++) {
//                 if (nums[i] + nums[j] === target) {
//                     return [i, j]
//                 }
//             }
//         }
//     }
// }

// const sol = new Solution()
// console.log(sol.twoSum([1, 6, 2, 10, 3], 7))


// function twoSum(nums, target) {
//     const map = new Map()
//     for (let i = 0; i < nums.length; i++) {
//         let required = target - nums[i]
//         if (map.has(required)) {
//             return [map.get(required), i]
//         }
//         else {
//             map.set(nums[i], i)
//         }
//     }
// }

// console.log(twoSum([1, 2, 3, 4, 5], 5))



// class Solution {
//     threeSum(nums) {
//         const result = []
//         const seen = new Set()
//         let n = nums.length
//         for (let i = 0; i < n; i++) {
//             for (let j = i + 1; j < n; j++) {
//                 for (let k = j + 1; k < n; k++) {
//                     if (nums[i] + nums[j] + nums[k] === 0) {
//                         const triplet = [nums[i], nums[j], nums[k]].sort((a, b) => a - b)
//                         const key = triplet.join(",")
//                         if (!seen.has(key)) {
//                             seen.add(key)
//                             result.push([nums[i], nums[j], nums[k]])
//                         }

//                     }
//                 }
//             }
//         }
//         const finalResult = new Set(result)
//         return [...finalResult]
//     }
// }


// const sol = new Solution()
// console.log(sol.threeSum([2, -2, 0, 3, -3, 5]))


// var threeSum = function (nums) {
//     const n = nums.length
//     const result = []
//     nums = nums.sort((a, b) => a - b)
//     for (let i = 0; i < n; i++) {
//         if (i > 0 && nums[i - 1] === nums[i]) continue
//         let j = i + 1
//         let k = n - 1
//         while (j < k) {
//             const sum = nums[i] + nums[j] + nums[k]
//             if (sum < 0) {
//                 j++
//             }
//             else if (sum > 0) {
//                 k--
//             }
//             else {
//                 result.push([nums[i], nums[j], nums[k]])
//                 j++
//                 k--
//                 while (j < k && nums[j - 1] == nums[j]) j++
//                 while (j < k && nums[k + 1] == nums[k]) k--
//             }
//         }

//     }
//     return result

// };


// console.log(threeSum([-1, 0, 1, 2, -1, -4]))


//Dutch national flag algorithm
// class Solution {
//     sortZeroOneTwo(nums) {
//         let n = nums.length
//         let temp
//         let low = 0
//         let mid = 0
//         let high = n - 1
//         while (low < high && mid <= high) {
//             if (nums[mid] == 0) {
//                 temp = nums[low]
//                 nums[low] = nums[mid]
//                 nums[mid] = temp
//                 low++
//                 mid++
//             }
//             else if (nums[mid] == 1) {
//                 mid++
//             }
//             else {
//                 temp = nums[high]
//                 nums[high] = nums[mid]
//                 nums[mid] = temp
//                 high--
//             }
//         }
//         return nums
//     }
// }

// const sol = new Solution()
// console.log(sol.sortZeroOneTwo([1, 0, 2, 1, 0]))


// class Solution {
//     majorityElementTwo(nums) {
//         const map = new Map()
//         const result = []
//         const reqiuredTimes = Math.floor(nums.length / 3) + 1
//         for (let num of nums) {
//             map.set(num, (map.get(num) || 0) + 1)
//             if (map.get(num) === reqiuredTimes) {
//                 result.push(num)
//             }
//             if (result.length == 2) {
//                 break
//             }
//         }
//         return result

//     }
// }

// const sol = new Solution()
// console.log(sol.majorityElementTwo([1, 2, 1, 1, 3, 2, 2]))/


// class Solution {
//     majorityElementTwo(nums) {
//         let cnt1 = 0
//         let cnt2 = 0
//         let el1;
//         let el2;
//         for (let i = 0; i < nums.length; i++) {
//             if (cnt1 == 0 && el2 !== nums[i]) {
//                 cnt1++
//                 el1 = nums[i]
//             }
//             else if (cnt2 == 0 && el1 !== nums[i]) {
//                 cnt2++
//                 el2 = nums[i]
//             }
//             else if (el1 == nums[i]) cnt1++
//             else if (el2 == nums[i]) cnt2++
//             else {
//                 cnt1--
//                 cnt2--
//             }
//         }
//         let count1 = 0;
//         let count2 = 0;

//         for (let num of nums) {
//             if (num === el1) count1++;
//             else if (num === el2) count2++;
//         }

//         const result = [];

//         if (count1 > Math.floor(nums.length / 3)) {
//             result.push(el1);
//         }

//         if (count2 > Math.floor(nums.length / 3)) {
//             result.push(el2);
//         }
//         return result
//     }
// }

// const sol = new Solution()
// console.log(sol.majorityElementTwo([1, 2, 1, 1, 3, 2, 2]))

class Solution {
    findMissingRepeatingNumbers(nums) {
        let missingNumber;
        let repeated;
        let sum = 0
        const map = new Map()
        let n = nums.length
        for (let num of nums) {
            if (!map.has(num)) {
                sum += num
            }
            map.set(num, (map.get(num) || 0) + 1)

        }
        missingNumber = ((n * (n + 1)) / 2) - sum
        for (let [key, value] of map) {
            if (value == 2) {
                repeated = key
                break
            }
        }
        return [repeated, missingNumber]
    }
}

const sol = new Solution()
console.log(sol.findMissingRepeatingNumbers([1, 1, 3, 4, 5]))



