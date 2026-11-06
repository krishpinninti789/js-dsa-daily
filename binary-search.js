
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function (nums, target) {
    return recursive(nums, 0, nums.length - 1, target)
};

var recursive = function (nums, low, high, target) {

    if (low > high) {
        return -1;
    }
    let mid = Math.floor((low + high) / 2)
    if (nums[mid] === target) {
        return mid
    }
    else if (target > nums[mid]) {
        return recursive(nums, mid + 1, high, target)
    }
    else {
        return recursive(nums, low, mid - 1, target)
    }

}

console.log(search([-1, 0, 3, 5, 9, 12], 9))