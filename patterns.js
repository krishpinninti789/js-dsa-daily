// function printPattern(n) {
//   let patstring = "";
//   for (let i = 0; i < n; i++) {
//     patstring += "*";
//     console.log(patstring);
//   }
// }

// printPattern(5);

// function printPattern(n) {
//   let patstring = "";
//   for (let i = 1; i <= n; i++) {
//     patstring += String(i) + " ";
//     console.log(patstring);
//   }
// }

// printPattern(5);


class Solution {
    pattern21(n) {
        for (let i = 0; i < n; i++) {
            let str = "";

            for (let j = 0; j < n; j++) {
                if (i === 0 || i === n - 1 ||
                    j === 0 || j === n - 1) {
                    str += "*";
                } else {
                    str += " ";
                }
            }

            console.log(str);
        }
    }
}

const sol = new Solution();
sol.pattern21(5);
