function reverse(s) {
  var res = [];
  for (let i = 0, len = s.length; i <= len; i++) {
    res.push(s.charAt(len - i));
  }
  return res.join("");
}
