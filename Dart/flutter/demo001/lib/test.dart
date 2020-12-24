import 'package:dio/dio.dart';

main(List<String> args) {
  print(getData());
}

getData() async {
  Dio dio = new Dio();
  var response = await dio.get(
    "http://localhost:3000",
  );
  var result = response.data;
  print(result);
}
