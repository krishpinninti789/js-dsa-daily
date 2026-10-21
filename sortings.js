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

// function insertionSort(nums) {
//     for (let i = 0; i <= nums.length - 1; i++) {
//         let j = i
//         let temp;
//         while (j > 0 && nums[j - 1] > nums[j]) {
//             temp = nums[j - 1]
//             nums[j - 1] = nums[j]
//             nums[j] = temp
//             j--
//         }
//     }
//     return nums
// }

// const result = insertionSort([3, 1, 6, 21, 7])
// console.log(result)


// function mergeSort(nums) {
//     let low = 0
//     let high = nums.length - 1
//     mergeSortRecursive(nums, low, high)
//     return nums
// }
// function mergeSortRecursive(nums, low, high) {
//     if (low >= high) return nums
//     let mid = Math.floor((low + high) / 2)
//     mergeSortRecursive(nums, low, mid)
//     mergeSortRecursive(nums, mid + 1, high)
//     merge(nums, low, mid, high)
// }
// function merge(nums, low, mid, high) {
//     let left = low
//     let right = mid + 1
//     let temp = []
//     while (left <= mid && right <= high) {
//         if (nums[left] <= nums[right]) {
//             temp.push(nums[left])
//             left++
//         }
//         else {
//             temp.push(nums[right])
//             right++
//         }
//     }
//     while (left <= mid) {
//         temp.push(nums[left])
//         left++
//     }
//     while (right <= high) {
//         temp.push(nums[right])
//         right++
//     }
//     for (let i = low; i <= high; i++) {
//         nums[i] = temp[i - low]
//     }
// }

// const result = mergeSort([2, 1, 8, 4, 5])
// console.log(result)


class Solution {
    quickSort(nums) {
        this.qs(nums, 0, nums.length - 1)
        return nums
    }
    qs(nums, low, high) {
        if (low >= high) return
        let pivot = this.sort(nums, low, high)
        this.qs(nums, low, pivot - 1)
        this.qs(nums, pivot + 1, high)
    }
    sort(nums, low, high) {
        let i = low + 1
        let j = high
        let pivot = nums[low]
        if (low > high) return
        while (i <= j) {
            while (i <= high && nums[i] <= pivot) {
                i++
            }
            while (j > low && nums[j] > pivot) {
                j--
            }
            if (i < j) {
                let temp;
                temp = nums[i]
                nums[i] = nums[j]
                nums[j] = temp
            }
        }
        nums[low] = nums[j]
        nums[j] = pivot
        return j
    }
}

const s = new Solution()
const result = s.quickSort([7, 3, 6, 1, 2])
console.log(result)