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

// function exchangeSort(nums) {
//     let temp;
//     for (let i = 0; i < nums.length; i++) {
//         for (let j = i; j <= nums.length; j++) {
//             if (nums[j] < nums[i]) {
//                 temp = nums[i]
//                 nums[i] = nums[j]
//                 nums[j] = temp
//             }
//         }
//     }
//     return nums
// }

// const result = exchangeSort([4, 2, 1, 5, 6, 9, 7])
// console.log(result)

// function bubbleSort(nums) {
//     let swapped = false
//     for (let i = nums.length - 1; i > 0; i--) {
//         for (let j = 0; j <= i - 1; j++) {
//             let temp;
//             if (nums[j] > nums[j + 1]) {
//                 temp = nums[j]
//                 nums[j] = nums[j + 1]
//                 nums[j + 1] = temp
//                 swapped = true
//             }
//         }
//         if (!swapped) {
//             break
//         }
//     }
//     return nums
// }

// const result = bubbleSort([4, 2, 1, 5, 6, 9, 7])
// console.log(result)

function insertionSort(nums) {
    for (let i = 0; i <= nums.length - 1; i++) {
        let j = i
        let temp;
        while (j > 0 && nums[j - 1] > nums[j]) {
            temp = nums[j - 1]
            nums[j - 1] = nums[j]
            nums[j] = temp
            j--
        }
    }
    return nums
}

const result = insertionSort([3, 1, 6, 21, 7])
console.log(result)