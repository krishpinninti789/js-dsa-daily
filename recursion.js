// function printUptoN(n) {
//     if (n == 0) return
//     printUptoN(n - 1)
//     console.log(n)
// }

// printUptoN(10)/

// function printSum(n) {
//     if (n == 0) return 0
//     return n + printSum(n - 1)
// }

// const res = printSum(5)
// console.log(res)/


// function isSorted(nums) {
//     //your code goes here
//     let i = 0
//     return checkRecursion(nums, i, i + 1)
// }
// function checkRecursion(nums, i, j) {
//     if (j >= nums.length) {
//         return true
//     }
//     if (nums[j] < nums[i]) {
//         return false
//     }
//     return checkRecursion(nums, i + 1, j + 1)
// }

// console.log(isSorted([1, 2, 3, 4, 5]))
// console.log(isSorted([1, 2, 5, 4, 3]))


// var check = function (nums) {
//     let drops = 0
//     let i = 0
//     let j = i + 1
//     function checkDrop(nums, drops, i, j) {
//         if (drops === 2) {
//             return false
//         }
//         if (j > nums.length && drops <= 1) {
//             return true
//         }
//         if (nums[i] > nums[(i + 1) % nums.length]) {
//             drops++
//         }
//         return checkDrop(nums, drops, i + 1, j + 1)
//     }
//     return checkDrop(nums, drops, i, j)
// };

// const result = check([2, 3, 1, 4, 5])
// console.log(result)

class Solution {
    addDigits(num) {
        //your code goes here
        return this.checkDigit(num)
    }
    checkDigit(num) {
        let sum = 0
        while (num > 0) {
            sum += num % 10
            num = Math.floor(num / 10)
        }
        if (sum < 10) {
            return sum
        }
        return this.checkDigit(sum)
    }
}

const sol = new Solution()
console.log(sol.addDigits(23455))


