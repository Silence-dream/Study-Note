import 'package:flutter/material.dart';

import './movie/list.dart';

void main() => runApp(MyApp());

// 无状态控件 StatelessWidget  无私有数据纯展示的控件

// 有状态控件  StatefulWidget  有私有数据

class MyApp extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    // TODO: implement build
    // 每个项目最外层 必须有 MaterialApp
    return MaterialApp(
      title: "电影案例",
      theme: ThemeData(
        // 头部颜色设置
        primarySwatch: Colors.purple,
      ),
      home: Myhome(),
    );
  }
}

class Myhome extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    // TODO: implement build
    return DefaultTabController(
      length: 3,
      child: Scaffold(
        appBar: AppBar(
          title: Text(
            "电影列表",
            style: TextStyle(color: Colors.red),
          ),
          centerTitle: true, // 标题头居中
          // 右侧行为按钮
          actions: [
            IconButton(icon: Icon(Icons.search), onPressed: () {}),
          ],
        ),
        // 侧边栏
        drawer: Drawer(
          child: ListView(
            // ListView自带内padding
            padding: EdgeInsets.all(0),
            children: <Widget>[
              // 用户头
              UserAccountsDrawerHeader(
                //用户名字
                accountName: Text("张三"),
                //用户邮箱
                accountEmail: Text("123@qq.com"),
                //用户头像
                currentAccountPicture: CircleAvatar(
                  backgroundImage: NetworkImage(
                      "https://images.gitee.com/uploads/91/465191_vsdeveloper.png?1530762316"),
                ),
                decoration: BoxDecoration(
                  //背景图片
                  image: DecorationImage(
                    fit: BoxFit.cover,
                    image: NetworkImage(
                        "http://www.liulongbin.top:3005/images/bg1.jpg"),
                  ),
                ),
              ),
              //下面的列表
              ListTile(
                title: Text("用户反馈"),
                trailing: Icon(Icons.feedback),
              ),
              ListTile(
                title: Text("系统设置"),
                trailing: Icon(Icons.settings),
              ),
              ListTile(
                title: Text("我要发布"),
                trailing: Icon(Icons.send),
              ),
              // 分割线控件
              Divider(),
              ListTile(
                title: Text("注销"),
                trailing: Icon(Icons.exit_to_app),
              ),
            ],
          ),
        ),
        // 下面内容
        body: TabBarView(children: [
          MovieList(mt: "in_theaters"),
          MovieList(mt: "coming_soon"),
          MovieList(mt: "top250"),
        ]),

        bottomNavigationBar: Container(
          //梅花Container
          decoration: BoxDecoration(color: Colors.black),
          // 一般高度是50
          height: 50,
          child: TabBar(
            labelStyle: TextStyle(
              height: 0,
              fontSize: 10,
            ),
            tabs: <Widget>[
              Tab(
                icon: Icon(Icons.movie_filter),
                text: "正在热映",
              ),
              Tab(
                icon: Icon(Icons.create),
                text: "即将上映",
              ),
              Tab(
                icon: Icon(Icons.local_movies),
                text: "top250",
              ),
            ],
          ),
        ),
      ),
    );
  }
}
