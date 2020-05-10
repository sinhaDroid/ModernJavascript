function reverse(s) {
  for (let i = s.length - 1, res = ""; i >= 0; res += s[i--]) {}
  return res;
}
