#include <iostream>
int main()
{

  std::string a{R"(allen '
" allen)"};
  std::cout << a << std::endl;
  // allen '
  //" allen

  return 0;
}
