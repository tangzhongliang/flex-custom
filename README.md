# flex-custom
实现类似css3中的Flex特性（水平居中、垂直居中、居于两侧，居于一侧），兼容各种浏览器。
在Flex之前，开发者要实现水平居中、垂直居中、居于两侧，居于一侧，实现过程复杂，但是css3中的Flex属性在旧版本的浏览器出现不兼容的问题。Flex-custom是基于JavaScript开发，所以能够兼容各种旧版本浏览器
## 效果图
![alt text](https://github.com/tangzhongliang/flex-custom/blob/master/project-image/Untitled.png?raw=true)
### 引入
```
<link rel="stylesheet" type="text/css" href="css/flex-custom.css">

<script
  src="https://code.jquery.com/jquery-3.3.1.min.js"
  integrity="sha256-FgpCb/KJQlLNfOu91ta32o/NMZxltwRo8QtmkMRdAu8="
  crossorigin="anonymous"></script>
<script type="text/javascript" src="js/flex-custom.js"></script>
<script type="text/javascript">
initFlex();
</script>
```
### 水平居中
```
<div direction='row'>
  <div weight='1'></div>
  <div style="display:inline-block;background-color:lightgreen;">
  	<text>带有更多内容的绿色</text>
  </div>
  <div weight='1'></div>
</div>
```
### 垂直居中
```
<div direction='column' style="height:200px">
  <div weight=1></div>
  <div style="background-color:lightgreen;">
  	<text>带有更多内容的绿色</text>
  </div>
  <div weight=1></div>
</div>
```
