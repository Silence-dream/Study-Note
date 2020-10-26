// 14.给下面的对象添加一个属性color,值是一个数组['red','black','white'], 在添加一个属性bark,值是一个方法
// var myDog = {
//   "name": "Happy Coder",
//   "legs": 4,
//   "tails": 1,
// }

var myDog = {
  "name": "Happy Coder",
  "legs": 4,
  "tails": 1,
  bark: function () {
    console.log("这是一个方法");
  }
}
myDog.color = ['red', 'black', 'white'];
myDog.bark();
console.log(myDog)