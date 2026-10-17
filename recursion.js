function printUptoN(n) {
    if (n == 0) return
    printUptoN(n - 1)
    console.log(n)
}

printUptoN(10)