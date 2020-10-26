let obj = {
  a: 3,
  b: 4,
  c: 9,
};

with (obj) {
  a = 1;
  b = 2;
  c = 3;
}

console.log(obj);
