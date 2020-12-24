function fn(x, y) {
  console.log(this);
  console.log("loki天下第一");
  console.log(x, y);
}
let a = {
  name: "罗志祥",
};
fn.call();
fn.call(a, 1, 2);
fn.call();
