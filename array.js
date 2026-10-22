var moveZeroes = function (nums) {
    let i = 0
    for (let j = 0; j < nums.length; j++) {
        if (nums[j] !== 0) {
            let temp = nums[i]
            nums[i] = nums[j]
            nums[j] = temp
            i++
        }
    }
    return nums
};

console.log(moveZeroes([0, 2, 3, 0, 0, 4]))