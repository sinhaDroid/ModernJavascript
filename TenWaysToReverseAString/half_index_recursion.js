function reverse(s) {
  if (s.length < 2) return s;
  let halfIndex = Math.ceil(s.length / 2);
  return reverse(s.substr(halfIndex)) + reverse(s.substr(0, halfIndex));
}
