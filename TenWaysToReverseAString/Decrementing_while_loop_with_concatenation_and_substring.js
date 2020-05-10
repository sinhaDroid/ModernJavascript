function reverse(s) {
  let len = s.length,
    res = "";
  while (len > 0) {
    res += s.substring(len - 1, len);
    len--;
  }
  return res;
}
