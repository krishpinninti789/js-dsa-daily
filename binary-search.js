
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


// /**
//  * @param {number[]} nums
//  * @return {number}
//  */
// var findMin = function (nums) {
//     let low = 0
//     let high = nums.length - 1
//     let min = Infinity
//     while (low <= high) {
//         let mid = Math.floor((low + high) / 2)
//         if (nums[low] <= nums[mid]) {
//             min = Math.min(min, nums[low])
//             low = mid + 1
//         }
//         else {
//             min = Math.min(min, nums[mid])
//             high = mid - 1
//         }
//     }
//     return min
// };

// console.log(findMin([5, 6, 7, 0, 1, 2, 3, 4]))


// class Solution {
//     findKRotation(nums) {
//         let index = 0
//         for (let i = 0; i < nums.length; i++) {
//             if (nums[i] > nums[i + 1]) {
//                 index = i + 1
//                 break
//             }
//         }
//         return index
//     }
// }

// const sol = new Solution()
// console.log(sol.findKRotation([4, 5, 6, 7, 0, 1, 2, 3]))


// class Solution {
//     findKRotation(nums) {
//         let low = 0
//         let high = nums.length - 1
//         while (low < high) {
//             let mid = Math.floor((low + high) / 2)
//             if (nums[mid] > nums[high]) {
//                 low = mid + 1
//             }
//             else {
//                 high = mid
//             }
//         }
//         return low
//     }
// }

// const sol = new Solution()
// console.log(sol.findKRotation([4, 5, 6, 7, 0, 1, 2, 3]))


// class Solution {
//     singleNonDuplicate(nums) {
//         let low = 0;
//         let high = nums.length - 1;
//         while (low < high) {
//             let mid = Math.floor((low + high) / 2);
//             if (mid % 2 !== 0) {
//                 mid--;
//             }

//             if (nums[mid] === nums[mid + 1]) {
//                 // Pair is intact, single is on the right
//                 low = mid + 2;
//             } else {
//                 // Pair is broken, single is here or on the left
//                 high = mid;
//             }
//         }
//         return nums[low]
//     }
// }

// const sol = new Solution()
// console.log(sol.singleNonDuplicate([1, 1, 2, 2, 3, 3, 4, 5, 5, 6, 6]))


// class Solution {
//     countOccurrences(arr, target) {
//         let first = this.findFirst(arr, target);
//         if (first === -1) return 0;

//         let last = this.findLast(arr, target);

//         return last - first + 1;
//     }

//     findFirst(arr, target) {
//         let low = 0;
//         let high = arr.length - 1;
//         let ans = -1;

//         while (low <= high) {
//             let mid = Math.floor((low + high) / 2);

//             if (arr[mid] === target) {
//                 ans = mid;
//                 high = mid - 1;
//             } else if (arr[mid] < target) {
//                 low = mid + 1;
//             } else {
//                 high = mid - 1;
//             }
//         }

//         return ans;
//     }

//     findLast(arr, target) {
//         let low = 0;
//         let high = arr.length - 1;
//         let ans = -1;

//         while (low <= high) {
//             let mid = Math.floor((low + high) / 2);

//             if (arr[mid] === target) {
//                 ans = mid;
//                 low = mid + 1;
//             } else if (arr[mid] < target) {
//                 low = mid + 1;
//             } else {
//                 high = mid - 1;
//             }
//         }

//         return ans;
//     }
// }

// const sol = new Solution()
// console.log(sol.countOccurrences([0, 0, 1, 1, 1, 2, 3], 1))


// /**
//  * @param {number} x
//  * @return {number}
//  */
// var mySqrt = function (x) {
//     let low = 1
//     let high = x
//     while (low <= high) {
//         let mid = Math.floor((low + high) / 2)
//         if (mid * mid <= x) {
//             low = mid + 1
//         }
//         else {
//             high = mid - 1
//         }
//     }
//     return low - 1
// };

// console.log(mySqrt(36))


// class Solution {
//     NthRoot(n, m) {
//         let low = 1
//         let high = m
//         while (low <= high) {
//             let mid = Math.floor((low + high) / 2)
//             if ((mid ** n) === m) {
//                 return mid
//             }
//             else if ((mid ** n) > m) {
//                 high = mid - 1
//             }
//             else {
//                 low = mid + 1
//             }
//         }
//         return -1
//     }
// }

// const sol = new Solution()
// console.log(sol.NthRoot(4, 69))


// class Solution {
//     smallestDivisor(nums, limit) {
//         let ans = 0
//         for (let i = 1; i <= Math.max(...nums); i++) {
//             let sum = 0
//             for (let j = 0; j < nums.length; j++) {
//                 sum += Math.ceil(nums[j] / i)
//             }
//             if (sum <= limit) {
//                 ans = i;
//                 break;
//             }
//         }
//         return ans
//     }
// }

// const sol = new Solution()
// console.log(sol.smallestDivisor([1, 2, 3, 4, 5], 8))


// class Solution {
//     smallestDivisor(nums, limit) {
//         let low = 0
//         let high = Math.max(...nums);
//         let ans = high;
//         while (low <= high) {
//             let mid = Math.floor((low + high) / 2)
//             let sum = 0
//             for (let ele of nums) {
//                 sum += Math.ceil(ele / mid)
//             }
//             if (sum <= limit) {
//                 ans = mid;
//                 high = mid - 1;
//             } else {
//                 low = mid + 1;
//             }
//         }
//         return ans
//     }
// }

// const sol = new Solution()
// console.log(sol.smallestDivisor([1, 2, 3, 4, 5], 8))

// class Solution {
//     minimumRateToEatBananas(nums, h) {
//         let k = 1
//         let max = Math.max(...nums)
//         while (k <= max) {
//             let hrs = 0
//             for (let i = 0; i < nums.length; i++) {
//                 hrs += Math.ceil(nums[i] / k)
//             }
//             if (hrs <= h) {
//                 return k
//             }
//             k++
//         }
//     }
// }

// const sol = new Solution()
// console.log(sol.minimumRateToEatBananas([7, 15, 6, 3], 8))

// class Solution {
//     minimumRateToEatBananas(nums, h) {
//         let low = 1
//         let high = Math.max(...nums)
//         while (low <= high) {
//             let mid = Math.floor((low + high) / 2)
//             let sum = 0;
//             for (let i = 0; i < nums.length; i++) {
//                 sum += Math.ceil(nums[i] / mid)
//             }
//             if (sum <= h) {
//                 high = mid - 1
//             }
//             else {
//                 low = mid + 1
//             }
//         }
//         return high + 1
//     }
// }


// class Solution {
//     roseGarden(n, nums, k, m) {
//         if (m * k > n) return -1;

//         let low = Math.min(...nums);
//         let high = Math.max(...nums);
//         let ans = -1;

//         while (low <= high) {
//             let mid = Math.floor((low + high) / 2);

//             if (this.checkBouquets(mid, nums, k, m)) {
//                 ans = mid;
//                 high = mid - 1;
//             } else {
//                 low = mid + 1;
//             }
//         }

//         return ans;
//     }

//     checkBouquets(day, nums, k, m) {
//         let cnt = 0;
//         let nb = 0;

//         for (let i = 0; i < nums.length; i++) {
//             if (nums[i] <= day) {
//                 cnt++;
//             } else {
//                 nb += Math.floor(cnt / k);
//                 cnt = 0;
//             }
//         }

//         nb += Math.floor(cnt / k);

//         return nb >= m;
//     }
// }

// const sol = new Solution()
// console.log(sol.roseGarden(8, [7, 7, 7, 7, 13, 11, 12, 7], 2, 3))


// class Solution {
//     shipWithinDays(weights, days) {
//         // Your code goes here
//         let low = Math.max(...weights)
//         let high = weights.reduce((acc, inti) => acc + inti, 0)
//         while (low <= high) {
//             let mid = Math.floor((low + high) / 2)
//             if (this.daysReq(mid, weights) <= days) {
//                 high = mid - 1
//             }
//             else {
//                 low = mid + 1
//             }
//         }
//         return low
//     }
//     daysReq(cap, nums) {
//         let dr = 1
//         let load = 0
//         for (let i = 0; i < nums.length; i++) {
//             if (nums[i] + load > cap) {
//                 dr += 1
//                 load = nums[i]
//             }
//             else {
//                 load += nums[i]
//             }
//         }
//         return dr
//     }
// }

// const sol = new Solution()
// console.log(sol.shipWithinDays([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 5))


// function findKthPositive(arr, k) {
//     // Your code goes here
//     let missing = []
//     let max = Math.max(...arr)
//     for (let i = 1; i <= max + k; i++) {
//         if (!arr.includes(i)) {
//             missing.push(i)
//         }
//     }
//     return missing[k - 1]
// }


// function findKthPositive(arr, k) {
//     // Your code goes here
//     let max = Math.max(...arr)
//     let low = 0
//     let high = arr.length - 1
//     while (low <= high) {
//         let mid = Math.floor((low + high) / 2)
//         let missing = arr[mid] - (mid + 1)
//         if (missing < k) {
//             low = mid + 1
//         }
//         else {
//             high = mid - 1
//         }
//     }
//     return low + k
// }


// console.log(findKthPositive([2, 4, 5, 6, 12], k = 7))


class Solution {
    aggressiveCows(nums, k) {
        nums = nums.sort((a, b) => a - b)
        console.log(nums)
        let low = 1
        let high = nums[nums.length - 1] - nums[0]
        while (low <= high) {
            let mid = Math.floor((low + high) / 2)
            if (this.canPlace(nums, mid, k) === true) {
                low = mid + 1
            }
            else {
                high = mid - 1
            }
        }
        return high
    }
    canPlace(nums, mid, k) {
        let currCows = 1
        let last = nums[0]
        for (let i = 1; i < nums.length; i++) {
            if (nums[i] - last >= mid) {
                currCows++
                last = nums[i]
            }
            if (currCows >= k) {
                return true
            }
        }
        return false
    }
}
