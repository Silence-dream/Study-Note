main(List<String> args) {
  print(getInfo("李四"));
  print(getInfo("李四", age: 17));
  print(getInfo(
    "李四",
    filide: "哈哈",
    age: 100,
  ));
}

String getInfo(String name, {int age = 10, String filide = "asd"}) {
  return "name=$name,age=${age},filide=$filide";
}
