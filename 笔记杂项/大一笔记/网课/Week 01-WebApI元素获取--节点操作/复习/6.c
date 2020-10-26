#include <stdio.h>
int main()
{
    int i, j;
    int a[3][4] = {
        {1, 2, 3, 4},
        {5, 6, 7, 80},
        {9, 10, 11, 12}};
    //定义一维数组
    int b[3 * 4];
    //定义下标
    int k = 0;
    for (i = 0; i < 3; i++)
    {
        for (j = 0; j < 4; j++)
        {
            b[k] = a[i][j];
            k++;
        }
    }

    //  验证是否转换为一维数组

    /*     for (int z = 0; z < 3 * 4; z++)
    {
        printf("%d\n", b[z]);
    }
    */

    // 定义临时交换数据用
    int flag;
    //冒泡排序
    for (int n = 0; n < 12 - 1; n++)
    {
        for (int m = 0; m < 12 - 1 - n; m++)
        {
            // 如果第一个数小于第二个数就交换他们的位置，这样获得的结果中下标为0的就是最大值
            if (b[m] < b[m + 1])
            {
                flag = b[m];
                b[m] = b[m + 1];
                b[m + 1] = flag;
            }
        }
    }

    // 定义一个数来存储最大值
    int max = b[0];

    printf("矩阵中的最大值是%d\n", max);
    for (i = 0; i < 3; i++)
    {
        for (j = 0; j < 4; j++)
        {
            if (a[i][j] == max)
            {
                printf("行是%d\n", i);
                printf("列是%d\n", j);
            }
        }
    }
    return 0;
}
