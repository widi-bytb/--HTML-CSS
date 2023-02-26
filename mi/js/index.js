 // 获取imgList
 var imgList = document.getElementById("imgList");
 // 获取页面中的所有img标签
 var imgArr = document.getElementsByTagName("img");
 // 设置imgList的宽度
 imgList.style.width = 1226 * imgArr.length + "px";
 var navDiv = document.getElementById("navDiv");
 //获取我们outer
 var outer = document.getElementById("outer");

 // 获取所有的a
 var allA = document.getElementsByTagName("a");

 // 为每一个超链接绑定单击响应函数
 for (var i = 0; i < allA.length; i++) {

     allA[i].onclick = function() {
         //  alert("点我干嘛");
     };
 }