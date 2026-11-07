
// /**
//  * @param {number[]} nums
//  * @param {number} target
//  * @return {number}
//  */
// var search = function (nums, target) {
//     return recursive(nums, 0, nums.length - 1, target)
// };

// var recursive = function (nums, low, high, target) {

//     if (low > high) {
//         return -1;
//     }
//     let mid = Math.floor((low + high) / 2)
//     if (nums[mid] === target) {
//         return mid
//     }
//     else if (target > nums[mid]) {
//         return recursive(nums, mid + 1, high, target)
//     }
//     else {
//         return recursive(nums, low, mid - 1, target)
//     }

// }

// console.log(search([-1, 0, 3, 5, 9, 12], 9))


// class Solution {
//     lowerBound(nums, x) {
//         return this.recursive(nums, 0, nums.length - 1, x, nums.length)
//     }
//     recursive(nums, low, high, x, ans) {
//         if (low > high) return ans
//         let mid = Math.floor((low + high) / 2)
//         if (nums[mid] >= x) {
//             ans = mid
//             return this.recursive(nums, low, mid - 1, x, ans)
//         }
//         else {
//             return this.recursive(nums, mid + 1, high, x, ans)
//         }
//     }
// }

// const sol = new Solution()
// console.log(sol.lowerBound([1, 2, 3, 3, 3, 4, 5, 6], 3))

// class Solution {
//     upperBound(nums, x) {
//         return this.recursive(nums, x, 0, nums.length - 1, nums.length)
//     }
//     recursive(nums, x, low, high, ans) {
//         if (low > high) return ans
//         let mid = Math.floor((low + high) / 2)
//         if (nums[mid] > x) {
//             ans = mid
//             return this.recursive(nums, x, low, mid - 1, ans);
//         }
//         else {
//             return this.recursive(nums, x, mid + 1, high, ans);
//         }
//     }
// }

// const sol = new Solution()
// console.log(sol.upperBound([1, 2, 3, 3, 3, 4, 5, 6], 3))


class Solution {
    getFloorAndCeil(nums, x) {
        return this.recursive(nums, x, 0, nums.length - 1, -1, -1)
    }
    recursive(nums, x, low, high, floor, ceil) {
        if (low > high) return [floor, ceil]
        let mid = Math.floor((low + high) / 2)
        if (nums[mid] === x) {
            return [x, x];
        }
        if (nums[mid] >= x) {
            ceil = nums[mid]
            return this.recursive(nums, x, low, mid - 1, floor, ceil)
        }
        else {
            floor = nums[mid]
            return this.recursive(nums, x, mid + 1, high, floor, ceil)
        }
    }
}

const sol = new Solution()
console.log(sol.getFloorAndCeil([3, 4, 4, 7, 8, 10], 5))