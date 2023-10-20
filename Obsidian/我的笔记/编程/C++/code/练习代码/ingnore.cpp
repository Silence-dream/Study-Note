#include <iostream>
#include <fstream>

int main() {
    std::ofstream outputFile(".gitignore");

    if (outputFile.is_open()) {
        // 写入 .gitignore 文件的内容
        outputFile << "# 编译产物\n";
        outputFile << "*.o\n";
        outputFile << "*.out\n\n";

        outputFile << "# 依赖目录\n";
        outputFile << "vendor/\n\n";

        outputFile << "# 忽略特定文件\n";
        outputFile << "secret.txt\n";

        outputFile.close();
        std::cout << ".gitignore 文件已成功生成！" << std::endl;
    } else {
        std::cerr << "无法创建 .gitignore 文件！" << std::endl;
    }

    return 0;
}
