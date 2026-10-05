// function printPattern(n) {
//   let patstring = "";
//   for (let i = 0; i < n; i++) {
//     patstring += "*";
//     console.log(patstring);
//   }
// }

// printPattern(5);

function printPattern(n) {
  let patstring = "";
  for (let i = 1; i <= n; i++) {
    patstring += String(i) + " ";
    console.log(patstring);
  }
}

printPattern(5);
