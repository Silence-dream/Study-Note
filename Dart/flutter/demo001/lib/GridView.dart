import 'package:demo001/main.dart';
import 'package:flutter/material.dart';

void main()=>runApp(MyApp());


class test extends StatelessWidget{
  @override
  Widget build(BuildContext context) {
    // TODO: implement build
    return GridView.count(
      padding: const EdgeInsets.all(10.0),
      crossAxisSpacing: 10.0,
      crossAxisCount: 3,
      children: <Widget>[
        const Text("i love you!",
          style: TextStyle(color: Colors.red),
        ),
        const Text("i love you"),
        const Text("i love you"),
        const Text("i love you"),
        const Text("i love you"),
        const Text("i love you"),
      ],
    );
  }
}