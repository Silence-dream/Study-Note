#include <stdio.h>

int main()
{
    int hang, lie, max, i, j;

    int a[3][4] = {
        {1, 2, 3, 4},
        {5, 6, 7, 8},
        {9, 10, 11, 12}};
    max = a[0][0];
    for (i = 0; i < 3; i++)
        for (j = 0; j < 4; j++)
            if (max < a[i][j])
            {
                max = a[3][4];
                hang = i;
                lie = j;
            }
    printf("行号为%d，列号为%d，最大值为%d\n", hang, lie, max);
    return 0;
}

// #include<stdio.h>
int main()
{
    int i, j, row = 0, colum = 0, max, t[3][4];
    printf("输入数组");
    for (i = 0; i < 3; i++)
    {
        for (j = 0; j < 4; j++)
        {
            scanf_s("%d", &t[i][j]);
            //printf("111");
        }
    }
    max = t[0][0];
    for (i = 0; i < 3; i++)
    {
        for (j = 0; j < 4; j++)
        {
            if (t[i][j] > max)
            {
                max = t[i][j];
                row = i;
                colum = j;
            }
        }
    }
    for (i = 0; i < 3; i++)
    {
        for (j = 0; j < 4; j++)
            printf("%d\t", t[i][j]);
        printf("\n");
    }
    printf("t[%d][%d]=%d\n", row, colum, max);
    return 0;
}