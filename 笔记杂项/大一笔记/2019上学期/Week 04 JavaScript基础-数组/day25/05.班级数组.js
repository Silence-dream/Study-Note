// 5. 分析以下需求并实现
//    1.定义一个用于存放班级分数的数组var score = [80,90,85,90,78,88,89,93,98,75];
//    2.求出班级不及格人数(分数低于60分的就是不及格) ?? 
//    3.求出班级的平均分
//    4.求出班级的总分数


var score = [80,90,85,90,78,88,89,93,98,75];
// var score = [80,90,85,90,78,88,89,93,98,75,56,56,56,56];  //测试不及格的人数用的
var long=score.length;
var less_than_60=0;//不及格人数计数
var class_average=0;
var class_sum=0;
for(var i=0;i<long;i++)
{
    if(score[i]<60)//我寻思着没有人不及格啊？？？
    {
        less_than_60++;
    }
    class_sum+=score[i];
}
class_average=class_sum/long;
console.log(`不及格的人数:${less_than_60}`);
console.log(`班级平均分:${class_average}`);
console.log(`班级总分:${class_sum}`);