import 'package:flutter/material.dart';

class MovieDetail extends StatefulWidget {
  MovieDetail({Key key, @required this.id, @required this.title})
      : super(key: key);

  final String id;
  final String title;

  @override
  _MovieDetail createState() {
    return _MovieDetail();
  }
}

class _MovieDetail extends State<MovieDetail> {
  @override
  Widget build(BuildContext context) {
    // TODO: implement build
    return Scaffold(
      appBar: AppBar(
        title: Text(widget.title),
        centerTitle: true,
      ),
      body: Text("电影的id为 ${widget.id}"),
    );
  }
}
