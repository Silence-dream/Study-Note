import 'package:dianying/movie/detail.dart';
import 'package:dio/dio.dart';
import 'package:flutter/material.dart';

Dio dio = new Dio();

//有状态控件
class MovieList extends StatefulWidget {
  //固定写法
  // MovieList({Key key}) : super(key: key);
  MovieList({Key key, @required this.mt}) : super(key: key);

  // 电影类型
  final String mt;

  @override
  _MovieListState createState() {
    return new _MovieListState();
  }
}

// 有状态控件,必须结合一个状态管理类,来进行实现
// 管理哪个控件就把控件名称放<>里面
class _MovieListState extends State<MovieList>
    with AutomaticKeepAliveClientMixin {
  // 保存翻动的状态
  //默认显示第一页数据
  int page = 1;

  // 显示多少条数据
  int pageSize = 10;

  //电影列表数据
  var mlist = [];

  // 总数据条数
  var total = 0;

  // 控件被创建的时候会执行initState
  @override
  // TODO: implement wantKeepAlive
  // 保存翻动的状态
  bool get wantKeepAlive => true;

  void initState() {
    // TODO: implement initState
    super.initState();
    getMoveList();
  }

  // 渲染当前 MovieList 控件的UI结构
  @override
  Widget build(BuildContext context) {
    // widget.mt  可以拿到上面定义的数据
    return ListView.builder(
      itemBuilder: (BuildContext ctx, int i) {
        //每次循环都拿到电影item项
        var mitem = mlist[i];
        return GestureDetector(
          onTap: () {
            Navigator.push(
              context,
              MaterialPageRoute(
                builder: (BuildContext ctx) {
                  return new MovieDetail(
                    id: mitem['id'],
                    title: mitem['title'],
                  );
                },
              ),
            );
          },
          child: Container(
            height: 200,
            // color: Colors.red,
            decoration: BoxDecoration(
                color: Colors.white,
                border: Border(top: BorderSide(color: Colors.black12))),
            child: Row(
              children: [
                Image.network(
                  mitem["images"]["small"],
                  width: 130,
                  height: 180,
                  fit: BoxFit.cover,
                ),
                Container(
                  height: 200,
                  padding: EdgeInsets.only(left: 10),
                  child: Column(
                    crossAxisAlignment: CrossAxisAlignment.start,
                    mainAxisAlignment: MainAxisAlignment.spaceAround,
                    children: [
                      Text("电影名称:${mitem["title"]}"),
                      Text("上映年份:${mitem["year"]}"),
                      Text("电影类型:${mitem["genres"].join(",")}"),
                      Text("豆瓣评分:${mitem["rating"]["average"]}分"),
                      Text("主要演员:${mitem["title"]}"),
                    ],
                  ),
                )
              ],
            ),
          ),
        );
      },
      itemCount: mlist.length,
    );
  }

  //得到数据
  getMoveList() async {
    //偏移量公式 (page-1)*pageSize
    int offset = (page - 1) * pageSize;
    var response = await dio.get(
        "http://www.liulongbin.top:3005/api/v2/movie/${widget.mt}?start=$offset&count=$pageSize");
    var result = response.data;
    print(result);

    //  今天只要为私有数据赋值,都需要把赋值的操作,放到setState函数中,否则页面不会刷新
    setState(() {
      mlist = result["subjects"];
      total = result["total"];
    });
  }
}
