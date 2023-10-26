import 'package:flutter/material.dart';
import 'package:demo001/GridView.dart';


void main() => runApp(MyApp());

class MyApp extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
      // TODO: implement build
      return MaterialApp(
      title: "电影海报实例",
      home: Scaffold(
        appBar: AppBar(//这就是 app的标题头
          title: Text("电影海报实例"),
        ),
        body: GridView.count(
          //GridViem网格列表的使用
          padding: const EdgeInsets.all(10.0),
          crossAxisSpacing: 2.0,
          mainAxisSpacing: 2.0,
          crossAxisCount: 3,
          childAspectRatio: 0.7,
          children: <Widget>[
            Image.network("https://dss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=3922290090,3177876335&fm=26&gp=0.jpg",fit: BoxFit.cover,),
            Image.network("https://dss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=3922290090,3177876335&fm=26&gp=0.jpg",fit: BoxFit.cover,),
            Image.network("https://dss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=3922290090,3177876335&fm=26&gp=0.jpg",fit: BoxFit.cover,),
            Image.network("https://dss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=3922290090,3177876335&fm=26&gp=0.jpg",fit: BoxFit.cover,),
            Image.network("https://dss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=3922290090,3177876335&fm=26&gp=0.jpg",fit: BoxFit.cover,),
            Image.network("https://dss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=3922290090,3177876335&fm=26&gp=0.jpg",fit: BoxFit.cover,),
          ],
        ),
      ),
    );
  }
}
