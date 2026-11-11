
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


// class Solution {
//     getFloorAndCeil(nums, x) {
//         return this.recursive(nums, x, 0, nums.length - 1, -1, -1)
//     }
//     recursive(nums, x, low, high, floor, ceil) {
//         if (low > high) return [floor, ceil]
//         let mid = Math.floor((low + high) / 2)
//         if (nums[mid] === x) {
//             return [x, x];
//         }
//         if (nums[mid] >= x) {
//             ceil = nums[mid]
//             return this.recursive(nums, x, low, mid - 1, floor, ceil)
//         }
//         else {
//             floor = nums[mid]
//             return this.recursive(nums, x, mid + 1, high, floor, ceil)
//         }
//     }
// }

// const sol = new Solution()
// console.log(sol.getFloorAndCeil([3, 4, 4, 7, 8, 10], 5))


// class Solution {
//     searchRange(nums, target) {
//         let first = this.recursiveGiveFirst(
//             nums, target, 0, nums.length - 1, -1
//         );

//         let last = this.recursiveGiveLast(
//             nums, target, 0, nums.length - 1, -1
//         );

//         return [first, last];
//     }

//     recursiveGiveFirst(nums, target, low, high, start) {
//         if (low > high) return start;

//         let mid = Math.floor((low + high) / 2);

//         if (nums[mid] === target) {
//             start = mid;
//             return this.recursiveGiveFirst(
//                 nums, target, low, mid - 1, start
//             );
//         }
//         else if (nums[mid] > target) {
//             return this.recursiveGiveFirst(
//                 nums, target, low, mid - 1, start
//             );
//         }
//         else {
//             return this.recursiveGiveFirst(
//                 nums, target, mid + 1, high, start
//             );
//         }
//     }

//     recursiveGiveLast(nums, target, low, high, end) {
//         if (low > high) return end;

//         let mid = Math.floor((low + high) / 2);

//         if (nums[mid] === target) {
//             end = mid;
//             return this.recursiveGiveLast(
//                 nums, target, mid + 1, high, end
//             );
//         }
//         else if (nums[mid] > target) {
//             return this.recursiveGiveLast(
//                 nums, target, low, mid - 1, end
//             );
//         }
//         else {
//             return this.recursiveGiveLast(
//                 nums, target, mid + 1, high, end
//             );
//         }
//     }
// }

// const sol = new Solution()
// console.log(sol.searchRange([5, 7, 7, 8, 8, 10], 8))


// class Solution {
//     search(nums, k) {
//         let low = 0
//         let high = nums.length - 1
//         while (low <= high) {
//             let mid = Math.floor((low + high) / 2)
//             if (nums[mid] === k) return mid
//             if (nums[low] <= nums[mid]) {
//                 if (k >= nums[low] && k <= nums[mid]) {
//                     high = mid - 1
//                 }
//                 else {
//                     low = mid + 1
//                 }
//             }
//             else {
//                 if (k >= nums[mid] && k <= nums[high]) {
//                     low = mid + 1
//                 }
//                 else {
//                     high = mid - 1
//                 }
//             }
//         }
//         return -1
//     }
// }

// const sol = new Solution()
// console.log(sol.search([1, 4, 2, 5, 6, 2, 2], 1))


// class Solution {
//     searchInARotatedSortedArrayII(nums, k) {
//         let low = 0
//         let target = k
//         let high = nums.length - 1
//         while (low <= high) {
//             let mid = Math.floor((low + high) / 2)
//             if (nums[mid] === target) return true
//             if (nums[low] === nums[mid] && nums[mid] === nums[high]) {
//                 low++;
//                 high--;
//                 continue;
//             }
//             if (nums[low] <= nums[mid]) {
//                 if (target >= nums[low] && target <= nums[mid]) {
//                     high = mid - 1
//                 }
//                 else {
//                     low = mid + 1
//                 }
//             }
//             else {
//                 if (target >= nums[mid] && target <= nums[high]) {
//                     low = mid + 1
//                 }
//                 else {
//                     high = mid - 1
//                 }
//             }
//         }
//         return false
//     }

// }

// const sol = new Solution()
// console.log(sol.searchInARotatedSortedArrayII([7, 8, 1, 2, 3, 3, 3, 4, 5, 6], 3))


/**
 * @param {number[]} nums
 * @return {number}
 */
var findMin = function (nums) {
    let low = 0
    let high = nums.length - 1
    let min = Infinity
    while (low <= high) {
        let mid = Math.floor((low + high) / 2)
        if (nums[low] <= nums[mid]) {
            min = Math.min(min, nums[low])
            low = mid + 1
        }
        else {
            min = Math.min(min, nums[mid])
            high = mid - 1
        }
    }
    return min
};

console.log(findMin([5, 6, 7, 0, 1, 2, 3, 4]))