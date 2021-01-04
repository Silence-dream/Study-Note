



## rpx转换

```css
/* 
 * 设计图750px
 * 1px = 1rpx
 * 设计图 375px
 * 1px = 2rpx
 * 设 设计图大小为page 求100px在page里面该用多少rpx表示
 * 750rpx 乘上 (设计稿px与设计稿宽度px)的比值
 */
.box-rpx{
    width: calc(750rpx * 100 / 375);
    height: calc(750rpx * 100 / 375);
    background-color:pink;
}
```

## 代码提示

-  使用npm在根目录安装miniprogram-api-typings和npm install miniprogram-api-typings@2.4.1



```cmd
npm install miniprogram-api-typings
npm install miniprogram-api-typings@2.4.1
```





[vscode 上安装量最大的小程序开发插件](https://developers.weixin.qq.com/community/develop/doc/000c641345c9f8d220b70d94e5b006)

[微信官方文档](https://developers.weixin.qq.com/miniprogram/dev/framework/)

