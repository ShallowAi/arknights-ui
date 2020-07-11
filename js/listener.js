/*!
 * Author: ShallowAi
 * License: MIT
 */
 
/*!
 * 设置页面相关
*/
document.getElementById("opensettings").addEventListener("click", blurpage);

/*!
 * 背景高斯模糊
*/
function blurpage() {
	document.getElementById("view-box").style.filter="blur(5px)";
	document.getElementById("option").style.filter="blur(5px)";
	document.getElementById("level-box-container").style.filter="blur(5px)";
	document.getElementsByClassName("settings-page")[0].style.display="block";

	document.getElementById("back").addEventListener("click", unblurpage);
	// 移除
	document.getElementById("opensettings").removeEventListener("click", blurpage);
}

/*!
 * 取消背景高斯模糊
*/
function unblurpage() {
	document.getElementById("view-box").style.filter="";
	document.getElementById("option").style.filter="";
	document.getElementById("level-box-container").style.filter="";
	document.getElementsByClassName("settings-page")[0].style.display="none";

	document.getElementById("opensettings").addEventListener("click", blurpage);
	document.getElementById("back").removeEventListener("click", unblurpage);
}

/*!
 * 设置存储
*/
if (typeof (localStorage.level) == "undefined"){
	localStorage.setItem("level", 1);
	levelinit();
}
else {
	levelinit();
}

if (typeof localStorage.username == "undefined"){
	localStorage.setItem("username", "Doctor");
	usernameinit();
}
else {
	usernameinit();
}

if (typeof localStorage.uid == "undefined"){
	localStorage.setItem("uid", 1);
	uidinit();
}
else {
	uidinit();
}

/*
监听数值修改事件
 */
document.getElementById("level").addEventListener("input",
	function () {
		localStorage.setItem("level", document.getElementById("level").value);
		levelinit();
	}
);
document.getElementById("username").addEventListener("input",
	function () {
		localStorage.setItem("username", document.getElementById("username").value);
		usernameinit();
	}
);
document.getElementById("uid").addEventListener("input",
	function () {
		localStorage.setItem("uid", document.getElementById("uid").value);
		uidinit();
	}
);

/*
通过已存储数据更改页面元素
*/

// 等级数据初始化
async function levelinit(){
	if (localStorage.getItem("level") < 10){
		document.getElementById("level-num").style.margin="-60px 99px";
	}
	else if (localStorage.getItem("level") >= 10 && localStorage.getItem("level") < 100){
		document.getElementById("level-num").style.margin="-60px 80px";
	}
	else if (localStorage.getItem("level") >= 100){
		document.getElementById("level-num").style.margin="-60px 63px";
	}
	document.getElementById("level").value=localStorage.getItem("level");
	document.getElementById("level-num").innerText=localStorage.getItem("level");
	document.getElementById("level-text").innerText=localStorage.getItem("level");
}
// 用户名 初始化
async function usernameinit(){
	document.getElementsByClassName("name")[0].innerText=localStorage.getItem("username");
	document.getElementById("username").value=localStorage.getItem("username");
}

// UID 初始化
async function uidinit(){
	document.getElementsByClassName("id")[0].innerText="ID: " + localStorage.getItem("uid");
	document.getElementById("uid").value=localStorage.getItem("uid");
}

/*!
 * 电源信息管理
*/
navigator.getBattery().then(function(battery) {
  updateLevelInfo();
  battery.addEventListener('levelchange', function(){
    updateLevelInfo();
  });
  function updateLevelInfo(){
	if (battery.level <= 1 && battery.level >= 0.7){
		document.getElementById("battery").style.backgroundPosition="-356px -479px";
	}
	else if (battery.level < 0.7 && battery.level >= 0.5 ){
		document.getElementById("battery").style.backgroundPosition="0px -34px";
	}
	else if (battery.level < 0.5 && battery.level >= 0.2 ){
		document.getElementById("battery").style.backgroundPosition="549px 502px";
	}
	else if (battery.level < 0.2){
		document.getElementById("battery").style.backgroundPosition="-384px -479px";
	}
  }
});