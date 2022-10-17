当 video 标签添加上 controls 属性时，页面上会显示出所有的控制组件。若有些组件不需要只需要在css中设置相关属性把它隐藏掉即可。



```html
<video controls> </video>
```

```css
	//全屏按钮
    video::-webkit-media-controls-fullscreen-button {
        display: none;
    }
    //播放按钮
    video::-webkit-media-controls-play-button {
        display: none;
    }
    //进度条
    video::-webkit-media-controls-timeline {
        display: none;
    }
    //观看的当前时间
    video::-webkit-media-controls-current-time-display{
        display: none;            
    }
    //剩余时间
    video::-webkit-media-controls-time-remaining-display {
        display: none;            
    }
    //音量按钮
    video::-webkit-media-controls-mute-button {
        display: none;            
    }
    video::-webkit-media-controls-toggle-closed-captions-button {
        display: none;            
    }
    //音量的控制条
    video::-webkit-media-controls-volume-slider {
        display: none;            
    }
    //所有控件
    video::-webkit-media-controls-enclosure{ 
        display: none;
    }
```

