// function selectionSort(nums) {
//     for (let i = 0; i <= nums.length - 2; i++) {
//         let min = i
//         for (let j = i; j <= nums.length - 1; j++) {
//             if (nums[j] < nums[min]) {
//                 min = j
//             }
//         }
//         let temp = nums[i]
//         nums[i] = nums[min]
//         nums[min] = temp
//     }
//     return nums
// }

// const result = selectionSort([2, 1, 5, 3, 4])
// console.log(result) 

function exchangeSort(nums) {
    let temp;
    for (let i = 0; i < nums.length; i++) {
        for (let j = i; j <= nums.length; j++) {
            if (nums[j] < nums[i]) {
                temp = nums[i]
                nums[i] = nums[j]
                nums[j] = temp
            }
        }
    }
    return nums
}

const result = exchangeSort([4, 2, 1, 5, 6, 9, 7])
console.log(result)
