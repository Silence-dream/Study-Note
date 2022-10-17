fn();
function fn(params) {
  console.log("fn");
}

let fn2 = function () {
  console.log("fn2");
};
fn2();

let fn3 = new Function("x", "y", "return x+y");
console.log(fn3(1, 2));
