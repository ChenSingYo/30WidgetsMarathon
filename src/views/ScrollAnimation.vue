<template>
	<home-btn />
	<section
		class="
			flex flex-col
			items-center
			w-full
			min-h-screen
			bg-[#efedd6]
			font-roboto
		"
	>
		<h1 class="font-bold text-3xl mt-10 mb-10">Scroll to see the animation（測試中）</h1>
		<div :ref="setBox" class="box show">
			<h2>triggerBottom: {{ triggerBottom }}</h2>
		</div>
		<div :ref="setBox" class="box show">
			<h2></h2>
		</div>
		<div :ref="setBox" class="box"><h2>Content</h2></div>
		<div class="box"><h2>Content</h2></div>
		<div class="box"><h2>Content</h2></div>
	</section>
</template>

<style lang="scss" scoped>
.box {
	background-color: steelblue;
	color: #fff;
	display: flex;
	align-items: center;
	justify-content: center;
	width: 300px;
	height: 150px;
	margin: 10px;
	border-radius: 10px;
	box-shadow: 2px 4px 5px rgba(0, 0, 0, 0.3);
	transform: translateX(400%);
	transition: transform 0.4s ease;
	&:nth-of-type(even) {
		transform: translateX(-400%);
	}
	h2 {
		font-size: 30px;
	}
	&.show {
		transform: translateX(0);
	}
}
</style>

<script>
import homeBtn from '../components/HomeBtn.vue'
import { computed, ref, onMounted } from 'vue'

export default {
	components: {
		homeBtn,
	},
	setup() {
		const triggerBottom = ref((window.innerHeight / 5) * 4)
		const boxes = ref([])
		const setBox = (el) => { boxes.value.push(el) }
		console.log(boxes.value)

		let boxTop = ref(0)

		onMounted(() => {
			[...boxes.value].forEach((box) => {
        console.log(box)
			})
		})

		return {
			triggerBottom,
			setBox,
		}
	},
}
</script>
