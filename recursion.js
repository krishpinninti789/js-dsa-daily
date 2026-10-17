// function printUptoN(n) {
//     if (n == 0) return
//     printUptoN(n - 1)
//     console.log(n)
// }

// printUptoN(10)/

function printSum(n) {
    if (n == 0) return 0
    return n + printSum(n - 1)
}

const res = printSum(5)
console.log(res)