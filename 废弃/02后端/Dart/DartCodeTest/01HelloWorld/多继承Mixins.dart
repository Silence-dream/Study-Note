main(List<String> args) {
  var d = new D();
  d.a();
  d.b();
  d.c();
}

class A {
  void a() {
    print("A.a()...");
  }
}

class B {
  void a() {
    print("B.a()...");
  }

  void b() {
    print("B.b()...");
  }
}

class Test {}

class C {
  void a() {
    print("C.a()...");
  }

  void b() {
    print("C.b()...");
  }

  void c() {
    print("C.c()...");
  }
}

class D extends A with B, C {}
