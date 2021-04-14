export default class {
  #a = 123;
  b = 2;
  add(a) {
    return a + this.b + this.#a;
  }
}
