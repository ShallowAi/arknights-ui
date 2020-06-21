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
 * 电源信息管理
*/
navigator.getBattery().then(function(battery) {
  updateLevelInfo();
  battery.addEventListener('levelchange', function(){
    updateLevelInfo();
  });
  function updateLevelInfo(){
	if (battery.level <= 1 && battery.level >= 0.75){
		document.getElementById("battery").style.backgroundPosition="-356px -479px";
	}
	else if (battery.level < 0.75 && battery.level >= 0.5 ){
		document.getElementById("battery").style.backgroundPosition="0px -34px";
	}
	else if (battery.level < 0.5 && battery.level >= 0.25 ){
		document.getElementById("battery").style.backgroundPosition="549px 502px";
	}
	else if (battery.level < 0.25){
		document.getElementById("battery").style.backgroundPosition="-384px -479px";
	}
  }
});