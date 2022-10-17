## 创建 flutter 项目

- 命令 flutter create demo001

## HelloWorld

```dart
import 'package:flutter/material.dart';

void main() => runApp(MyApp());

class MyApp extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      title: "helloWorld",
      home: Scaffold(
        appBar: AppBar(title: Text("home hello")),
        body: Center(
          child: Text("child hello rrrr"),
        ),
      ),
    );
  }
}

```

## 快捷键

- R 键：点击后热加载，直接查看预览效果
  - 在终端里面使用
- P 键：在虚拟机中显示网格，工作中经常使用
- O 键：切换 Android 和 IOS 的预览模式
- Q 键：退出调试预览模式

-   flutter format 格式化代码

## 无状态控件和有状态控件

```dart
// 无状态控件 StatelessWidget  无私有数据纯展示的控件

// 有状态控件  StatefulWidget  有私有数据
```





## Appbar手机应用的标题

```dart
appBar: AppBar(//这就是 app的标题头
          title: Text("电影海报实例"),
        ),
```



## TextWidget 组件的常用属性

- TextAlign：文本对齐属性

  - ```dart
     textAlign: TextAlign.left, //对齐属性
    ```

- maxLines：文本显示的最大行数

  - ```dart
    maxLines: 1, //最多显示多少行
    ```

- overflow：控制文本的溢出效果

  - ```dart
    overflow: TextOverflow.ellipsis, // 溢出显示
    ```

- Style 属性的用法，让文本漂亮起来

  - ```dart
    style: TextStyle(
                  fontSize: 25.0, //字体大小,必须是浮点数,带.0
                  color: Color.fromARGB(255, 255, 150, 150), // 颜色设置
                  decoration: TextDecoration.underline, //装饰线 下划线
                  decorationStyle: TextDecorationStyle.solid, // 装饰线样式
                ),
    ```

- 综合

```dart
import 'package:flutter/material.dart';

void main() => runApp(MyApp());

class MyApp extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      title: "TextWidget",
      home: Scaffold(
        appBar: AppBar(title: Text("TextWidget")),
        body: Center(
          child: Text(
            "TextWidget Hello" * 10,
            textAlign: TextAlign.left, //对齐属性
            maxLines: 1, //最多显示多少行
            overflow: TextOverflow.ellipsis, // 溢出显示
            style: TextStyle(
              fontSize: 25.0, //字体大小,必须是浮点数,带.0
              color: Color.fromARGB(255, 255, 150, 150), // 颜色设置
              decoration: TextDecoration.underline, //装饰线 下划线
              decorationStyle: TextDecorationStyle.solid, // 装饰线样式
            ),
          ),
        ),
      ),
    );
  }
}

```

## ContainerWidget 容器组件

- alignment 容器对齐方式

  - ```dart
    alignment: Alignment.center, // 容器上下左右对齐
    ```

- width,height

  - ```dart
    width: 500.0,
    height: 400.0,
    // 配合color设置查看大小
    ```

- color

  - ```dart
    color: Colors.lightBlue,
    ```

- padding,margin

  - ```dart
    // padding: const EdgeInsets.all(20.0), // 全边20padding
                  padding: const EdgeInsets.fromLTRB(
                      10.0, 30.0, 0.0, 0.0), // 分别单独设置left right top bottom
                  margin: const EdgeInsets.all(50.0), // 同理
    ```

- decoration 渐变

  - ```dart
                decoration: new BoxDecoration(
                	gradient: const LinearGradient(
                		// 渐变 记得不关闭color
                		colors: [
                			//颜色设置 数组形式
                      Colors.lightBlue,
                      Colors.greenAccent,
                      Colors.purple,
            ],
        ),
    )),
    ```

-   综合

```dart
import 'package:flutter/material.dart';

void main() => runApp(MyApp());

class MyApp extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      title: "TextWidget",
      home: Scaffold(
        appBar: AppBar(title: Text("TextWidget")),
        body: Center(
          child: Container(
              child: new Text(
                "helloWorld",
                style: TextStyle(
                  fontSize: 40.0,
                ),
              ),
              alignment: Alignment.topLeft,
              width: 500.0,
              height: 400.0,
              // color: Colors.lightBlue,  // 设置渐变关闭color
              // padding: const EdgeInsets.all(20.0), // 全边20padding
              padding: const EdgeInsets.fromLTRB(
                  10.0, 30.0, 0.0, 0.0), // 分别单独设置left right top bottom
              margin: const EdgeInsets.all(50.0), // 同理
              decoration: new BoxDecoration(
                gradient: const LinearGradient(
                  // 渐变 记得不关闭color
                  colors: [
                    //颜色设置 数组形式
                    Colors.lightBlue,
                    Colors.greenAccent,
                    Colors.purple,
                  ],
                ),
              )),
        ),
      ),
    );
  }
}

```





## Image图片组件的使用

-   lmage Widget的几种加入形式

    -   lmage.asset：加载资源图片，会使打包时包体过大

    -   lmage.network：网络资源图片，经常换的或者动态的图片

    -   lmage.file：本地图片，比如相机照相后的图片预览

    -   lmage.memory：加载到内存中的图片，Uint8List

    -   ```dart
        child: new Image.network(
                    '图片地址',
                    scale: 1.5, //缩放 数值越大图片越小....
                    fit: BoxFit.contain, //拉伸图片
                    color: Colors.greenAccent,
                    colorBlendMode: BlendMode.modulate, // 图片混合模式
                    repeat: ImageRepeat.repeat, // 图片重复
                  ),
        ```

-   Fit属性的详细讲解

    -   ```dart
        fit: BoxFit.contain, //拉伸图片
        ```

-   图片的混合模式

    -   ```dart
        color: Colors.greenAccent,
        colorBlendMode: BlendMode.modulate, // 图片混合模式
        ```

-   Repeat属性让图片重复

    -   ```dart
        repeat: ImageRepeat.repeat, // 图片重复
        ```

-   综合

```dart
import 'package:flutter/material.dart';

void main() => runApp(MyApp());

class MyApp extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      title: "TextWidget",
      home: Scaffold(
        appBar: AppBar(
          title: Text("曾鹏是傻逼"),
          backgroundColor: Colors.red,
        ),
        body: Center(
            child: Container(
          child: new Image.network(
            'https://i0.hdslb.com/bfs/archive/61eee561be76d23b544ca914a8d1f562f118944e.jpg@320w_184h_1c_100q.jpg',
            scale: 1.5, //缩放 数值越大图片越小....
            fit: BoxFit.contain, //拉伸图片
            color: Colors.greenAccent,
            colorBlendMode: BlendMode.modulate, // 图片混合模式
            repeat: ImageRepeat.repeat, // 图片重复
          ),
          width: 500.0,
          height: 300.0,
          color: Colors.lightBlue,
        )),
      ),
    );
  }
}

```

## ListView横向列表组件的使用

-   ListTile的使用
-   自带内padding

```dart
import 'package:flutter/material.dart';

void main() => runApp(MyApp());

class MyApp extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      title: "TextWidget",
      home: Scaffold(
        appBar: AppBar(
          title: Text("这里是开头"),
          backgroundColor: Colors.red,
        ),
        // 关键代码
        body: new ListView(
          children: <Widget>[
            new ListTile(
              leading: new Icon(Icons.backspace),
              title: new Text("backspace"),
            ),
            new ListTile(
              leading: new Icon(Icons.archive),
              title: new Text("archive"),
            ),
            new ListTile(
              leading: new Icon(Icons.art_track),
              title: new Text("art_track"),
            ),
          ],
        ),
      ),
    );
  }
}

```

## ListView横向列表的使用

-   制作横向列表，小例子
-   scrollDirection属性的讲解
    -   Axis.horizontal:横向滚动或者 叫水平方向滚动
    -   Axis.vertical:纵向滚动或者叫垂直方向滚动
-   代码优化，自定义组件

```dart
import 'package:flutter/material.dart';

void main() => runApp(MyApp());

class MyApp extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      title: "TextWidget",
      home: Scaffold(
        appBar: AppBar(
          title: Text("这里是开头"),
          backgroundColor: Colors.red,
        ),
        // 关键代码
        body: Center(
          child: Container(
            height: 200.0,
            child: new Mylist(),
          ),
        ),
      ),
    );
  }
}

// 自定义组件
class Mylist extends StatelessWidget {
  @override
  Widget bulid(BuildContext context) {
    return ListView(
      scrollDirection: Axis.horizontal,
      children: [
        new Container(
          width: 250.0,
          color: Colors.lightBlue,
        ),
        new Container(
          width: 250.0,
          color: Colors.redAccent,
        ),
        new Container(
          width: 250.0,
          color: Colors.yellowAccent,
        ),
      ],
    );
  }
}
```

## ListView动态列表的使用

-   Dart中List类型的使用
    -   List类型简介，可以简单理解为js中的数组
    -   声明List的4种方式
-   传递和接受参数，实现动态列表的基础
    -   如何传递参数
    -   如何接受参数
-   动态列表案例制作

```dart
import 'package:flutter/material.dart';

void main() => runApp(
    //传入参数
    MyApp(items: new List<String>.generate(1000, (index) => "Item $index")));

class MyApp extends StatelessWidget {
  final List<String> items;
  MyApp({Key key, @required this.items}) : super(key: key);
  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      title: "TextWidget",
      home: Scaffold(
        appBar: AppBar(
          title: Text("这里是开头"),
          backgroundColor: Colors.red,
        ),
        // 关键代码
        body: new ListView.builder(
          // 获取参数
          itemBuilder: (context, index) {
            return new ListTile(
              title: new Text("${items[index]}"),
            );
          },
          itemCount: items.length,
        ),
      ),
    );
  }
}

// 自定义组件
class Mylist extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return ListView(
      scrollDirection: Axis.horizontal,
      children: [
        new Container(
          width: 250.0,
          color: Colors.lightBlue,
        ),
        new Container(
          width: 250.0,
          color: Colors.redAccent,
        ),
        new Container(
          width: 250.0,
          color: Colors.yellowAccent,
        ),
      ],
    );
  }
}

```

## GridViem网格列表的使用

-   GridView网格列表的使用
-   图片网格列表的使用
-   手把手实例的编写和讲解

## GridViem Widget

```dart
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

```



## 数据获取与操作

```dart
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
class _MovieListState extends State<MovieList> {
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
  void initState() {
    // TODO: implement initState
    super.initState();
    getMoveList();
  }

  // 渲染当前 MovieList 控件的UI结构
  @override
  Widget build(BuildContext context) {
    // widget.mt  可以拿到上面定义的数据
    return Text(widget.mt + "${mlist.length}");
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

```



