# 动画

##　动画的基本使用

`动画常用属性` 

![image-20191206113115901](CSS3动画.assets/image-20191206113115901.png)

~~~html
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Document</title>
    <style>
        /* 定义动画 */
        /*  move是动画名字 */
        @keyframes move {

            /* 动画序列开始 */
            /* 开始状态 forme==0%*/
            0% {
                transform: translate(0px, 0px) rotate(0);
            }

            /* 结束状态 to==100%*/
            100% {
                transform: translate(1920px, 500px) rotate(360deg);
            }

            /* 动画序列结束 */
        }


        div {
            width: 500px;
            height: 500px;
            background-color: pink;
            /* 2.调用动画 */
            animation-name: move;
            /* 调用的时间 */
            animation-duration: 2s;
        }
    </style>
</head>

<body>
    <div></div>
</body>

</html>
~~~



### 制作动画分为两步:

#### 1.先定义动画

- 用keyframes定义动画(类似于定义类选择器)



#### 2.再使用(调用)动画

- animation-name:动画名称
  animation-duration:持续时间

##  动画简写属性

animation:动画名称 持续时间 运动曲线 何时开始 播放次数 是否反方向 动画起始或者结束的状态；

animation: animation-name animation-duration animation-timing-function animation-delay animation-iteration-count animation-direction animation-fill-mode

animation: animation-name(动画名称) `animation-duration(持续时间)` animation-timing-function(运动曲线) `animation-delay(何时开始)` animation-iteration-count(播放次数) `animation-direction(是否反方向)` animation-fill-mode(动画起始或者结束的状态)

