// class Solution {
//     longestSubarray(nums, k) {
//         let maxLength = 0
//         const n = nums.length
//         for (let i = 0; i < nums.length; i++) {
//             let j = i + 1
//             let count = 0
//             let sum = nums[i]
//             while (j < n && sum < k) {
//                 if (sum === k) {
//                     break
//                 }
//                 sum += nums[j]
//                 j++
//             }
//             if (sum === k) {
//                 count = (j - i)
//             }
//             maxLength = Math.max(maxLength, count)
//         }
//         return maxLength
//     }
// }

// const sol = new Solution()

// console.log(sol.longestSubarray([-1, 1, 1], 1))


class Solution {
    longestSubarray(nums, k) {
        let maxLength = 0
        let left = 0
        let right = 0
        let sum = nums[0]
        let n = nums.length
        while (right < n) {
            while (left <= right && sum > k) {
                sum -= nums[left]
                left++
            }
            if (sum === k) {
                maxLength = Math.max(maxLength, right - left + 1)
            }
            right++
            if (right < n) sum += nums[right]

        }
        return maxLength
    }
}

const sol = new Solution()
console.log(sol.longestSubarray([10, 5, 2, 7, 1, 9], 15))
console.log(sol.longestSubarray([-3, 2, 1], 6))