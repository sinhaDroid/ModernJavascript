function reverse(s) {
  function rev(s, len, res) {
    return len === 0 ? res : rev(s, --len, (res += s[len]));
  }
  return rev(s, s.length, "");
}
