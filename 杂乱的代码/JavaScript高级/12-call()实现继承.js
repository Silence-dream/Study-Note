function Father(uname, age) {
  this.uname = uname;
  this.age = age;
}

function Son(uname, age, score) {
  Father.call(this, uname, age);
  this.score = score;
}

let result = new Son("李四", 19, 100);
console.log(result);
