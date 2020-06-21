/*!
 * Author: ShallowAi
 * License: MIT
 */

// 播放列表定义
function bgminit() {
	const bgmlist = new Array();
	bgmlist[0] = [{name: 'Beta_intro',url: './audio/beta/m_sys_void_intro.m4a'},{name: 'Beta_loop',url: './audio/beta/m_sys_void_loop.m4a'}];
	bgmlist[1] = [{name: 'LifeStream_intro',url: './audio/stable/m_sys_void_intro.m4a'},{name: 'LifeStream_loop',url: './audio/stable/m_sys_void_loop.m4a'}];
	bgmlist[2] = [{name: 'GraniAndTheTreasureOfKnights_intro',url: './audio/stable/m_bat_game02_intro.m4a'},{name: 'GraniAndTheTreasureOfKnights_loop',url: './audio/stable/m_bat_game02_loop.m4a'}];
	bgmlist[3] = [{name: 'NessarySolutions_intro',url: './audio/stable/m_bat_longmenbat_intro.m4a'},{name: 'SpeedOfLight_loop',url: './audio/stable/m_bat_longmenbat_loop.m4a'}];
	bgmlist[4] = [{name: 'Ready_intro',url: './audio/stable/m_sys_ddd_intro.m4a'},{name: 'Ready_loop',url: './audio/stable/m_sys_ddd_loop.m4a'}];
	bgmlist[5] = [{name: 'AflameAvenue_intro',url: './audio/stable/m_sys_alive_intro.m4a'},{name: 'AflameAvenue_loop',url: './audio/stable/m_sys_alive_loop.m4a'}];
	bgmlist[6] = [{name: 'NotYourBusiness_intro',url: './audio/stable/m_sys_emperor_intro.m4a'},{name: 'NotYourBusiness_loop',url: './audio/stable/m_sys_emperor_loop.m4a'}];
// Fix
	bgmlist[7] = [{name: 'OperationalIntelligence_intro',url: './audio/stable/'},{name: 'OperationalIntelligence_loop',url: './audio/stable/'}];
	bgmlist[8] = [{name: 'CodeOfBrawl_intro',url: './audio/stable/m_bat_chasing_intro.m4a'},{name: 'CodeOfBrawl_loop',url: './audio/stable/m_bat_chasing_loop.m4a'}];
	bgmlist[9] = [{name: 'SpeedOfLight_intro',url: './audio/stable/m_avg_speedoflight_intro.m4a'},{name: 'SpeedOfLight_loop',url: './audio/stable/m_avg_speedoflight_loop.m4a'}];
	bgmlist[10] = [{name: 'PartialNecrosis_intro',url: './audio/stable/m_bat_frostnovaevolution_intro.m4a'},{name: 'PartialNecrosis_loop',url: './audio/stable/m_bat_frostnovaevolution_loop.m4a'}];
// Fix
	bgmlist[11] = [{name: 'AncientForge_intro',url: './audio/stable/'},{name: 'AncientForge_loop',url: './audio/stable/'}];
	bgmlist[12] = [{name: 'StoriesOfAfternoon_intro',url: './audio/stable/m_sys_cerberus_intro.m4a'},{name: 'StoriesOfAfternoon_loop',url: './audio/stable/m_sys_cerberus_loop.m4a'}];
	bgmlist[13] = [{name: 'ContingencyContract_Barrenland_intro',url: './audio/stable/m_sys_ccs1_intro.m4a'},{name: 'ContingencyContract_Barrenland_loop',url: './audio/stable/m_sys_ccs1_loop.m4a'}];
	bgmlist[14] = [{name: 'DarknightsMemoir_intro',url: './audio/stable/m_avg_exciting02_intro.m4a'},{name: 'DarknightsMemoir_loop',url: './audio/stable/m_avg_exciting02_loop.m4a'}];
	bgmlist[15] = [{name: 'TheBirthOfTragedy_intro',url: './audio/stable/m_bat_kaltsitteam_intro.m4a'},{name: 'TheBirthOfTragedy_loop',url: './audio/stable/m_bat_kaltsitteam_loop.m4a'}];
	bgmlist[16] = [{name: 'ContingencyContract_Pyrite_intro',url: './audio/stable/m_sys_ccs1_intro.m4a'},{name: 'ContingencyContract_Pyrite_loop',url: './audio/stable/m_sys_ccs1_loop.m4a'}];
	if (typeof localStorage.currentbgm == "undefined"){
		localStorage.setItem("currentbgm", 1);
	}

// 音乐播放器主体定义
	const bgm = new APlayer({
		container: document.getElementById('bgmusic'),
		autoplay: true,
		preload: 'auto',
		loop: 'all',
		storageName: 'bgm-setting',
		audio: bgmlist[localStorage.currentbgm]
	});

// 特殊循环播放定义
	bgm.on('ended', looplay);

}

// 切换上一列表BGM
async function prevbgm(){
	localStorage.setItem("currentbgm", Number(localStorage.currentbgm) - 1);
	if (localStorage.currentbgm < 0){
		localStorage.setItem("currentbgm", bgmlist.length);
	}
	else {
		switch (localStorage.currentbgm) {

		}
	}
	let i_end = false;
	bgm.list.clear();
	bgm.list.add(bgmlist[localStorage.currentbgm]);
	bgm.play();
}

// 切换下一列表BGM
async function nextbgm(){
	localStorage.setItem("currentbgm", Number(localStorage.currentbgm) + 1);
	if (localStorage.currentbgm > bgmlist.length){
		localStorage.setItem("currentbgm", 0);
	}
	let i_end = false;
	bgm.list.clear();
	bgm.list.add(bgmlist[localStorage.currentbgm]);
	bgm.play();
}

// Intro to loop 类循环播放控制主体
async function looplay(){
	if (typeof i_end == "undefined" || i_end != true){
		bgm.list.remove(0);
		let i_end = true;
	}
}
