// 5、求1!+2!+3!+...+20!的和

for(var i=1,sum=0;i<=20;i++){
        for(var j=1,str=1;j<=i;j++){
            str*=j;
        }
        //console.log(str);//测试用
        sum+=str;
    }
    console.log(sum);
