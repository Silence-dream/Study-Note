import 'package:flutter/material.dart';
// 导入电影列表页面
import './movie/list.dart';

void main() => runApp(MyApp());

class MyApp extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      title: "女神专用",
      theme: ThemeData(
        primaryColor: Colors.purple,
      ),
      home: MyHome(),
    );
  }
}

class MyHome extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return DefaultTabController(
        length: 3,
        child: Scaffold(
          appBar: AppBar(
            title: Text("电影列表"),
            centerTitle: true,
            actions: <Widget>[
              IconButton(icon: Icon(Icons.search), onPressed: () {})
            ],
          ),
          drawer: Drawer(
            child: ListView(
              padding: EdgeInsets.all(0),
              children: <Widget>[
                UserAccountsDrawerHeader(
                  accountName: Text('张三'),
                  accountEmail: Text('abc@itcast.cn'),
                  currentAccountPicture: CircleAvatar(
                    backgroundImage: NetworkImage(
                        'https://images.gitee.com/uploads/91/465191_vsdeveloper.png?1530762316'),
                  ),
                  decoration: BoxDecoration(
                      image: DecorationImage(
                          fit: BoxFit.cover,
                          image: NetworkImage(
                              'http://www.liulongbin.top:3005/images/bg1.jpg'))),
                ),
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
          bottomNavigationBar: Container(
            decoration: BoxDecoration(color: Colors.black),
            height: 50,
            child:
                TabBar(labelStyle: TextStyle(height: 0, fontSize: 10), tabs: [
              Tab(
                icon: Icon(Icons.movie_filter),
                text: '正在热映',
              ),
              Tab(
                icon: Icon(Icons.movie_creation),
                text: '即将上映',
              ),
              Tab(
                icon: Icon(Icons.local_movies),
                text: 'Top250',
              )
            ]),
          ),
          body: TabBarView(children: [
            MoveList(mt: 'in_theaters'),
            MoveList(mt: 'coming_soon'),
            MoveList(mt: 'top250'),
          ]),
        ));
  }
}
