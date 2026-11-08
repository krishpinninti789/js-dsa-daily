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


// class Solution {
//     longestSubarray(nums, k) {
//         let maxLength = 0
//         let left = 0
//         let right = 0
//         let sum = nums[0]
//         let n = nums.length
//         while (right < n) {
//             while (left <= right && sum > k) {
//                 sum -= nums[left]
//                 left++
//             }
//             if (sum === k) {
//                 maxLength = Math.max(maxLength, right - left + 1)
//             }
//             right++
//             if (right < n) sum += nums[right]

//         }
//         return maxLength
//     }
// }

// const sol = new Solution()
// console.log(sol.longestSubarray([10, 5, 2, 7, 1, 9], 15))
// console.log(sol.longestSubarray([-3, 2, 1], 6))


// class Solution {
//     maxLen(arr) {
//         const map = new Map()
//         let sum = 0
//         let maxLength = 0
//         let n = arr.length
//         map.set(0, -1)
//         for (let i = 0; i < n; i++) {
//             sum += arr[i]
//             const required = sum
//             if (map.has(required)) {
//                 maxLength = Math.max(maxLength, i - map.get(required))
//             }
//             if (!map.has(sum)) {
//                 map.set(sum, i)
//             }
//         }
//         return maxLength
//     }
// }

// const sol = new Solution()
// console.log(sol.maxLen([1, 2, -3]))

// function numberOfSubArrays(nums, k) {
//     const map = new Map()
//     let sum = 0
//     let count = 0
//     map.set(0, 1)
//     let n = nums.length
//     for (let i = 0; i < n; i++) {
//         sum += nums[i]
//         let required = sum - k
//         if (map.has(required)) {
//             count += map.get(required)
//         }

//         map.set(sum, (map.get(sum) || 0) + 1)

//     }
//     return count
// }

// console.log(numberOfSubArrays([1, 1, 1], 2))

class Solution {
    subarraysWithXorK(nums, k) {
        let count = 0
        let xor = 0
        let n = nums.length
        const map = new Map()
        map.set(0, 1)
        for (let i = 0; i < n; i++) {
            xor ^= nums[i]
            let required = xor ^ k
            if (map.has(required)) {
                count += map.get(required)
            }

            map.set(xor, (map.get(xor) || 0) + 1)

        }
        return count
    }
}

const sol = new Solution()
console.log(sol.subarraysWithXorK([5, 6, 7, 8, 9], 5))