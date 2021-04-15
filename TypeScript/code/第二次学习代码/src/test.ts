class Person {
  protected name: string;
  private age: number = 1;
  constructor(name: string) {
    this.name = name;
  }
  fn() {
    console.log(this.age);
  }
  set setage(value: number) {
    this.age = value;
  }

  set setname(value: string) {
    this.name = value;
  }
}

class Son extends Person {
  constructor() {
    super("李四");
  }
  fn() {
    console.log(this.name);
  }
}

let person = new Person("李四");
person.setage = 123;
person.setname = "刘德华";
console.log(person);
export {};
