function reverse(s) {
  var res = "";
  for (var i = s.length - 1; i >= 0; i--) {
    res += s[i];
  }
  return res;
}
