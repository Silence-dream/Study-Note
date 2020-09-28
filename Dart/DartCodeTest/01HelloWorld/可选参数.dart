main(List<String> args) {
  print(getInfo("李四"));
  print(getInfo("李四", age: 17));
  print(getInfo(
    "李四",
    gd: "哈哈",
    age: 100,
  ));
  // 基于位置的可选参数 必须按着顺序来
  print(getInfo2("李四", 18, "晚点名"));
}

//基于名字的可选参数
String getInfo(String name, {int age, String gd}) {
  return "name=$name,age=${age}";
}

//基于位置的可选参数
String getInfo2(String name, [int age, String gd]) {
  return "name=$name,age=${age}";
}
