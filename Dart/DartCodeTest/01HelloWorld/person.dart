class Person {
  String name;
  int age;
  final String address = "";

  void work() {
    print("Name is $name,Age is $age,He is working...");
    //私有的  _  就是私有的 下划线无法访问
    // print("Name is $_name,Age is $_age,He is working...");
  }
}
