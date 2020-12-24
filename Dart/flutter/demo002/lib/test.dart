import 'package:dio/dio.dart';

main(List<String> args) {
  getData();
}

void getData() async {
  Dio dio = new Dio();
  // print(dio);
  var response = await dio.get(
    "http://127.0.0.1:3000",
  );
  var result = response.data;
  print(result);
}
