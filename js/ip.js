﻿var node=document.createElement('div');
node.style.cssText='position:absolute;top:200px;width:729px;font-size:12px;left:50px;color:red;-webkit-marquee:left 2px infinite 20ms scroll;overflow:-webkit-marquee;';
node.innerHTML='新版发布，去掉默认参数handler，增加添加托盘图标的功能';
wrapper.appendChild(node);
var o=document.querySelector(".info");
var link=o.getElementsByTagName('a')[1];
link.href="http://alloyteam.github.com/Webtop/download/webtop.zip?t=20120829002";
//webtop.connect('183.12.163.253','melody');