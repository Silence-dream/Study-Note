import 'package:flutter/material.dart';
import 'package:dio/dio.dart';
import './detall.dart';

Dio dio = new Dio();

class MoveList extends StatefulWidget {
  MoveList({Key key, @required this.mt}) : super(key: key);

  final String mt;

  @override
  _MoveListState createState() => _MoveListState();
}

class _MoveListState extends State<MoveList> with AutomaticKeepAliveClientMixin {
  int page = 1;
  int pagesize = 10;
  var mlist = [];
  var total = 0;



  @override
  bool get wantKeepAlive =>true;




  @override
  void initState() {
    super.initState();
    getMovieList();
  }

  @override
  Widget build(BuildContext context) {
    return ListView.builder(
      itemCount: mlist.length,
      itemBuilder: (BuildContext ctx, int i) {
        // 每次循环拿到的电影item项
        var mitem = mlist[i];
        return GestureDetector(
            onTap: () {
              Navigator.push(context,
                  MaterialPageRoute(builder: (BuildContext ctx) {
                return new MovieDetail(
                  id: mitem['id'],
                  title: mitem['title'],
                );
              }));
            },
            child: Container(
                decoration: BoxDecoration(
                    border: Border(top: BorderSide(color: Colors.black12))),
                child: Row(
                  children: [
                    Image.network(
                      mitem['images']['small'],
                      width: 130,
                      height: 180,
                      fit: BoxFit.cover,
                    ),
                    Container(
                        padding: EdgeInsets.only(left: 10),
                        height: 200,
                        child: Column(
                          crossAxisAlignment: CrossAxisAlignment.start,
                          mainAxisAlignment: MainAxisAlignment.spaceAround,
                          children: [
                            Text('电影名称:${mitem['title']}'),
                            Text('上映年份:${mitem['year']}年'),
                            Text('电影类型:${mitem['genres'].join(' ')}'),
                            Text('豆瓣评分:${mitem['rating']['average']}分'),
                            Text('主要演员:${mitem['title']}')
                          ],
                        ))
                  ],
                )));
      },
    );
  }

// The argument type 'int' can't be assigned to the parameter type 'String'.
  getMovieList() async {
    // 偏移量的计算公式  (page-1)*pagesize
    int offset = (page - 1) * pagesize;
    var response = await dio.get(
        'http://www.liulongbin.top:3005/api/v2/movie/${widget.mt}?start=$offset&count=$pagesize');

    var result = response.data;
    print(result);

    setState(() {
      mlist = result['subjects'];
      total = result['total'];
    });
  }
}
