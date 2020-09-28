void main() {
  var person = new Person("Tom", 20, "Male");
  print(person.name);
  print(person.age);
  print(person.gender);
}

class Person {
  String name;
  int age;

  final String gender;

  Person(this.name, this.age, this.gender);

  // 冒号后面的就是初始化列表 一般用来给final赋值
  Person.withMap(Map map)
      : name = map["name"],
        gender = map["gender"] {
    age = map["age"];
  }

  void work() {
    print("Work...");
  }
}
