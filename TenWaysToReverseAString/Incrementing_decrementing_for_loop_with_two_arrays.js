function reverse(s) {
  var res = [];
  for (let i = s.length - 1, j = 0; i >= 0; i--, j++) {
    res[j] = s[i];
  }
  return res.join("");
}
