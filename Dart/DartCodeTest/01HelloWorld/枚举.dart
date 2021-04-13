void main() {
  var currentSeason = Season.autumn; //autumn 是第三个

  print(currentSeason.index); // so index==3

  switch (currentSeason) {
    case Season.spring:
      print("1-3月");
      break;
    case Season.summer:
      print("4-6月");
      break;
    case Season.autumn:
      print("7-9月");
      break;
    case Season.winter:
      print("10-12月");
      break;
  }
}

enum Season {
  spring, // 枚举index从0开始 spring 是 0
  summer,
  autumn,
  winter // index = 3
}
