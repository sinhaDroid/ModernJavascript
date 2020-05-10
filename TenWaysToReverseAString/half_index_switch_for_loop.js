function reverse(s) {
  s = s.split("");
  let len = s.length,
    halfIndex = Math.floor(len / 2) - 1,
    tmp;
  for (let i = 0; i <= halfIndex; i++) {
    tmp = s[len - i - 1];
    s[len - i - 1] = s[i];
    s[i] = tmp;
  }
  return s.join("");
}
