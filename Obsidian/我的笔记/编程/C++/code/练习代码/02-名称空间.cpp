#include <iostream>
using namespace std;

//DBClient.h
namespace DBClient {
    void save(){
        //
        cout << "DBClient" << endl;
      
    }
}
//DBCloud.h
namespace { //这是匿名名称空间
    int a = 2;
}
namespace DBCloud {
    void save(){
        a += 1; //可以访问匿名名称空间的变量
        //
    }
}

int main()
{
  DBClient::save();
	cout << "名称空间" << endl;
  return 0;
}


