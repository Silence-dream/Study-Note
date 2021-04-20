class GenericNumber<T> {
  zeroValue: T;
  add: (x: T, y: T) => T;
  constructor() {
    this.zeroValue = 0;
  }
}

let myGenericNumber = new GenericNumber<number>();
myGenericNumber.zeroValue = 0;
myGenericNumber.add = function (x, y) {
  return x + y;
};
