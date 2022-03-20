<template>
	<div class="bg-[#f8f2df] flex flex-col">
		<header id="header">
			<div class="btn_wrapper">
				<div class="nav_btn">
					<a href="/">回首頁</a>
				</div>
				<div class="nav_btn">
					<a href="#">網站導覽</a>
				</div>
				<div class="nav_btn">
					<a href="#">意見回饋</a>
				</div>
			</div>
			<div class="btn_mobile_controller">
				<div class="icon_nav_mobile_ham active"></div>

				<div class="icon_nav_mobile_close"></div>
			</div>
			<div class="btn_wrapper_mobile">
				<div class="nav_btn_mobile">
					<a href="#">回首頁</a>
				</div>
				<div class="nav_btn_mobile">
					<a href="#">網站導覽</a>
				</div>
				<div class="nav_btn_mobile">
					<a href="#">意見回饋</a>
				</div>
			</div>
		</header>

		<section class="main_visual_wrapper">
			<div class="mv_title">
				<img src="../assets/NPM_kids/img/main_title.png" alt="" />
			</div>
			<div class="main_visual">
				<img src="../assets/NPM_kids/img/main_visual.png" alt="" />
			</div>
		</section>

		<section class="npm_activity_container">
			<div class="single_activity">
				<img src="../assets/NPM_kids/img/btn_bg1.png" alt="" />
				<div class="activity_title title_1">
					<ruby class="zhuyin">
						兒<rt>ㄦˊ</rt> 童<rt>ㄊㄨㄥˊ</rt> 學<rt>ㄒㄩㄝˊ</rt> 藝<rt>ㄧˋ</rt>
						中<rt>ㄓㄨㄥ</rt> 心<rt>ㄒㄧㄣ</rt>
					</ruby>
				</div>
			</div>
			<div class="single_activity">
				<img src="../assets/NPM_kids/img/btn_bg2.png" alt="" />
				<div class="activity_title">
					<ruby class="zhuyin">
						故<rt>ㄍㄨˋ</rt> 宮<rt>ㄍㄨㄥ</rt> 遊<rt>ㄧㄡˊ</rt> 藝<rt>ㄧˋ</rt>
						趣<rt>ㄑㄩˋ</rt>
					</ruby>
				</div>
			</div>
			<div class="single_activity">
				<img src="../assets/NPM_kids/img/btn_bg3.png" alt="" />
				<div class="activity_title">
					<ruby class="zhuyin">
						學<rt>ㄒㄩㄝˊ</rt> 習<rt>ㄒㄧˊ</rt> 百<rt>ㄅㄞˇ</rt> 寶<rt
							>ㄅㄠˇ</rt
						>
						箱<rt>ㄒㄧㄤ</rt>
					</ruby>
				</div>
			</div>
		</section>

		<section class="exhib_video_container">
			<iframe
				src="https://www.youtube.com/embed/4LRha4_trns"
				title="YouTube video player"
				frameborder="0"
				allow="accelerometer; autoplay=0; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
				allowfullscreen
			></iframe>
		</section>

		<section class="npm_info">
			<div class="npm_news_container">
				<div class="news_title">
					<ruby class="zhuyin">
						最<rt>ㄗㄨㄟˋ</rt> 新<rt>ㄒㄧㄣ</rt> 消<rt>ㄒㄧㄠ</rt> 息<rt
							>ㄒㄧˊ</rt
						>
					</ruby>
				</div>
				<div class="news_events">
					<div class="single_event">
						<div class="e_date">2021-08-20</div>
						兒童學藝中心防疫措施及活動停辦公告
					</div>
					<div class="single_event">
						<div class="e_date">2021-08-20</div>
						北部院區 2021兒童學藝中心
						4-6月兒童及親子系列活動（因應防疫，活動延期）
					</div>
					<div class="single_event">
						<div class="e_date">2021-08-20</div>
						故宮兒童學藝中心2.0版全面升級，打造世代共同的參與式學習空間
					</div>
				</div>
				<div class="btn_more_news_wrapper">
					<a href="#">
						<div class="btn_more_news">
							<ruby class="zhuyin">
								更<rt>ㄍㄥˋ</rt> 多<rt>ㄉㄨㄛ</rt> 消<rt>ㄒㄧㄠ</rt> 息<rt
									>ㄒㄧˊ</rt
								>
							</ruby>
						</div>
					</a>
				</div>
			</div>
			<div class="npm_open_time">
				<div class="open_time_title">
					<ruby class="zhuyin">
						開<rt>ㄎㄞ</rt> 館<rt>ㄍㄨㄢˇ</rt> 時<rt>ㄕˊ</rt> 間<rt>ㄐㄧㄢ</rt>
					</ruby>
				</div>
				<div class="open_time_info">
					<div>週二至週日</div>
					<div>9:00 ～ 17:00</div>
					<div>週一休館</div>
				</div>

				<div class="welcome_msg_wrapper">
					<div class="welcome_img"></div>
					<div class="welcome_msg">
						<ruby class="zhuyin">
							歡<rt>ㄏㄨㄢ</rt> 迎<rt>ㄧㄥˊ</rt> 來<rt>ㄌㄞˊ</rt> 參<rt
								>ㄘㄢ</rt
							>
							觀<rt>ㄍㄨㄢ</rt>
						</ruby>
					</div>
				</div>
			</div>
		</section>

		<div class="tap_to_top">
			<Icon icon="icon-park-outline:to-top-one" height="36" />
		</div>

		<footer class="footer_bg_img">
			<div class="bg_img">
				<img src="../assets/NPM_kids/img/footer_bg.png" alt="" />
			</div>
			<div class="footer_logos_container">
				<div class="footer_logo logo_npm"></div>
				<div class="footer_logo logo_CG"></div>
				<div class="footer_logo logo_acess_mark"></div>
			</div>
			<div class="footer_info_container">
				<div class="info_wrapper">
					<br />
					最佳瀏覽：Google Chrome最新版本、Microsoft
					Edge（螢幕最佳顯示：1920＊1080）
					<div class="info_sm_link_container">
						<div class="btn_sm_info_link">網路著作權聲明</div>
						<div class="btn_sm_info_link">隱私權保護政策</div>
						<div class="btn_sm_info_link">網站安全政策</div>
					</div>
				</div>
				<div class="info_link_container">
					<div class="btn_info_link"></div>
					<div class="btn_info_link"></div>
					<div class="btn_info_link"></div>
					<div class="btn_info_link"></div>
				</div>
			</div>
		</footer>
	</div>
</template>

<script>
import { Icon } from '@iconify/vue'

export default {
	name: 'ㄅㄆㄇㄈ',
	components: {
		Icon,
	},
	data() {
		return {}
	},
	mounted() {
		// scroll to top 回到頂部按鈕
		const toTop = document.querySelector('.tap_to_top')
		const header = document.getElementById('header')

		toTop.addEventListener('click', (e) => {
			e.preventDefault()
			header.scrollIntoView({ behavior: 'smooth', block: 'start' })
		})

		// 手機版彈出式選單＋按鈕
		const btnHamburger = document.querySelector('.icon_nav_mobile_ham')
		const btnClose = document.querySelector('.icon_nav_mobile_close')
		const mobileNav = document.querySelector('.btn_wrapper_mobile')

		btnHamburger.addEventListener('click', function (e) {
			e.preventDefault()
			btnHamburger.classList.remove('active')
			mobileNav.classList.add('show_mobile_nav')
			btnClose.classList.add('active')
		})

		btnClose.addEventListener('click', function (e) {
			e.preventDefault()
			btnHamburger.classList.add('active')
			mobileNav.classList.remove('show_mobile_nav')
			btnClose.classList.remove('active')
		})
	},
}
</script>

<style>
@import '../assets/NPM_kids/css/main.css';
@import '../assets/NPM_kids/css/rwd.css';
@import '../assets/NPM_kids/css/font.css';
</style>
