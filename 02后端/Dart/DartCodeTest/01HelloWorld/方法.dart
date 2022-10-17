main(List<String> args) {
  print(args);
  print(getInfo("李四", 18));
}

String getInfo(
  String name,
  int age,
) {
  return "name=$name,age=${age}";
}
