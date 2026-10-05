function printPattern(n) {
  let patstring = "";
  for (let i = 0; i < n; i++) {
    patstring += "*";
    console.log(patstring);
  }
}

printPattern(5);
