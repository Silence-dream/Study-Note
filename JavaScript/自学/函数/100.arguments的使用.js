// arguments是一个对象像数组可以遍历


// 例子：
        // 求两个数
        function add()
        {
            var sum=0;
            for(var i=0;i<arguments.length;i++)
            {
                sum+=arguments[i];
            }
            return sum;
        }
        var result=add(1,2)
        console.log(result);