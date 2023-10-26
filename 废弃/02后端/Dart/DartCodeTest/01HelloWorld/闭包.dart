main(List<String> args) {
  var func = a();
  func();
  func();
  func();
  func();
}

a() {
  int count = 0;

//  printCount(){
//    print(count++);
//  }

  return () {
    print(count++);
  };
}
