/*!
 * Author: ShallowAi
 * License: MIT
 */

// 播放列表定义
const bgmlist = new Array();
// 列表0 回声测试
bgmlist[0][0] = [{name: 'Beta_void_intro',url: './audio/beta/m_sys_void_intro.m4a'},{name: 'Beta_void_loop',url: './audio/beta/m_sys_void_loop.m4a'}];
bgmlist[0][1] = [{name: 'Beta_base_intro',url: './audio/beta/m_sys_base_intro.m4a'},{name: 'Beta_base_loop',url: './audio/beta/m_sys_base_loop.m4a'}];
bgmlist[0][2] = [{name: 'Beta_tech_intro',url: './audio/beta/m_sys_tech_intro.m4a'},{name: 'Beta_tech_loop',url: './audio/beta/m_sys_tech_loop.m4a'}];

// 列表1 当前版本
bgmlist[1][0] = [{name: 'LifeStream_intro',url: './audio/stable/m_sys_void_intro.m4a'},{name: 'LifeStream_loop',url: './audio/stable/m_sys_void_loop.m4a'}];
bgmlist[1][1] = [{name: 'GraniAndTheTreasureOfKnights_intro',url: './audio/stable/m_bat_game02_intro.m4a'},{name: 'GraniAndTheTreasureOfKnights_loop',url: './audio/stable/m_bat_game02_loop.m4a'}];
bgmlist[1][2] = [{name: 'NessarySolutions_intro',url: './audio/stable/m_bat_longmenbat_intro.m4a'},{name: 'SpeedOfLight_loop',url: './audio/stable/m_bat_longmenbat_loop.m4a'}];
bgmlist[1][3] = [{name: 'ObsidianFestival_Ready_intro',url: './audio/stable/m_sys_ddd_intro.m4a'},{name: 'ObsidianFestival_Ready_loop',url: './audio/stable/m_sys_ddd_loop.m4a'}];
bgmlist[1][4] = [{name: 'AflameAvenue_intro',url: './audio/stable/m_sys_alive_intro.m4a'},{name: 'AflameAvenue_loop',url: './audio/stable/m_sys_alive_loop.m4a'}];
bgmlist[1][5] = [{name: 'NotYourBusiness_intro',url: './audio/stable/m_sys_emperor_intro.m4a'},{name: 'NotYourBusiness_loop',url: './audio/stable/m_sys_emperor_loop.m4a'}];
bgmlist[1][6] = [{name: 'OperationalIntelligence_intro',url: './audio/stable/m_bat_indust_intro.m4a'},{name: 'OperationalIntelligence_loop',url: './audio/stable/m_bat_indust_loop.m4a'}];
bgmlist[1][7] = [{name: 'CodeOfBrawl_intro',url: './audio/stable/m_bat_chasing_intro.m4a'},{name: 'CodeOfBrawl_loop',url: './audio/stable/m_bat_chasing_loop.m4a'}];
bgmlist[1][8] = [{name: 'SpeedOfLight_intro',url: './audio/stable/m_avg_speedoflight_intro.m4a'},{name: 'SpeedOfLight_loop',url: './audio/stable/m_avg_speedoflight_loop.m4a'}];
bgmlist[1][9] = [{name: 'PartialNecrosis_intro',url: './audio/stable/m_bat_frostnovaevolution_intro.m4a'},{name: 'PartialNecrosis_loop',url: './audio/stable/m_bat_frostnovaevolution_loop.m4a'}];
// Fix
bgmlist[1][10] = [{name: 'AncientForge_intro',url: './audio/stable/'},{name: 'AncientForge_loop',url: './audio/stable/'}];
bgmlist[1][11] = [{name: 'StoriesOfAfternoon_intro',url: './audio/stable/m_sys_cerberus_intro.m4a'},{name: 'StoriesOfAfternoon_loop',url: './audio/stable/m_sys_cerberus_loop.m4a'}];
bgmlist[1][12] = [{name: 'ContingencyContract_Barrenland_intro',url: './audio/stable/m_sys_ccs1_intro.m4a'},{name: 'ContingencyContract_Barrenland_loop',url: './audio/stable/m_sys_ccs1_loop.m4a'}];
bgmlist[1][13] = [{name: 'DarknightsMemoir_intro',url: './audio/stable/m_avg_exciting02_intro.m4a'},{name: 'DarknightsMemoir_loop',url: './audio/stable/m_avg_exciting02_loop.m4a'}];
bgmlist[1][14] = [{name: 'TheBirthOfTragedy_intro',url: './audio/stable/m_bat_kaltsitteam_intro.m4a'},{name: 'TheBirthOfTragedy_loop',url: './audio/stable/m_bat_kaltsitteam_loop.m4a'}];
bgmlist[1][15] = [{name: 'ContingencyContract_Pyrite_intro',url: './audio/stable/m_sys_ccs1_intro.m4a'},{name: 'ContingencyContract_Pyrite_loop',url: './audio/stable/m_sys_ccs1_loop.m4a'}];

// 列表2 OST

// 初始化
	if (typeof localStorage.currentbgm == "undefined"){
		localStorage.setItem("currentbgm", 0);
	}
	if (typeof localStorage.currentbgm == "undefined"){
	localStorage.setItem("currentlist", 1);
	}

// 音乐播放器主体定义
const bgm = new APlayer({
	container: document.getElementById('bgmusic'),
	autoplay: true,
	preload: 'auto',
	loop: 'all',
	storageName: 'bgm-setting',
	audio: bgmlist[localStorage.list][localStorage.currentbgm]
});

// 特殊循环播放定义
bgm.on('ended', looplay);

// Intro to loop 类循环播放控制主体
async function looplay(){
	if (typeof i_end == "undefined" || i_end != true){
		bgm.list.remove(0);
		i_end = true;
	}
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
	bgm.list.add(bgmlist[localStorage.currentlist][localStorage.currentbgm]);
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
	bgm.list.add(bgmlist[localStorage.currentlist][localStorage.currentbgm]);
	bgm.play();
}