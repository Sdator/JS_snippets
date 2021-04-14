function add() {
  return new (class {
    a = 12;
    add(a, b) {
      return a + b;
    }
  })();
}

console.log(typeof add());
