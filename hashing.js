class Solution {
    longestSubarray(nums, k) {
        let maxLength = 0
        const n = nums.length
        for (let i = 0; i < nums.length; i++) {
            let j = i + 1
            let count = 0
            let sum = nums[i]
            while (j < n && sum < k) {
                if (sum === k) {
                    break
                }
                sum += nums[j]
                j++
            }
            if (sum === k) {
                count = (j - i)
            }
            maxLength = Math.max(maxLength, count)
        }
        return maxLength
    }
}

const sol = new Solution()

console.log(sol.longestSubarray([-1, 1, 1], 1))