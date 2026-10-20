function selectionSort(nums) {
    for (let i = 0; i <= nums.length - 2; i++) {
        let min = i
        for (let j = i; j <= nums.length - 1; j++) {
            if (nums[j] < nums[min]) {
                min = j
            }
        }
        let temp = nums[i]
        nums[i] = nums[min]
        nums[min] = temp
    }
    return nums
}

const result = selectionSort([2, 1, 5, 3, 4])
console.log(result) 
