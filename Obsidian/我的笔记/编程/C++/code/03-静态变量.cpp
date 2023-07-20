#include <iostream>
using namespace std;
void testStaticVar() {
	static int a=1;
	cout << a << endl;
	a = a + 1;
}
int main() {
	testStaticVar(); //输出：1
	testStaticVar(); //输出：2
	testStaticVar(); //输出：3
	char c = getchar();
	return 0;
}
