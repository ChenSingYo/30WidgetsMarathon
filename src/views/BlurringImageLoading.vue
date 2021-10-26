<template>
	<home-btn />
	<section>
		<div
			class="
				bg
				absolute
				top-[-3%]
				left-[-3%]
				min-h-[106%] min-w-[1024px]
				w-[106%]
				h-auto
				z-[-1]
			"
			:style="bgOpacity"
		></div>
		<div class="text-position text-5xl text-gray-500" :style="textOpacity">
			{{ loadNum }}%
		</div>
	</section>
</template>

<script>
import homeBtn from '../components/HomeBtn.vue'
import { computed, ref } from 'vue'

export default {
	name: '#1. BlurringImageLoading',
	components: {
		homeBtn,
	},
	setup() {
		let loadNum = ref(0)
		const scale = (num, in_min, in_max, out_min, out_max) => {
			return (
				((num - in_min) * (out_max - out_min)) / (in_max - in_min) + out_min
			)
		}

		const bgOpacity = computed(() => {
			return {
				filter: `blur(${scale(loadNum.value, 0, 100, 70, 0)}px)`,
			}
		})
		const textOpacity = computed(() => {
			return {
				opacity: scale(loadNum.value, 0, 100, 1, 0),
			}
		})

		const blurring = () => {
			loadNum.value++
			if (loadNum.value > 99) {
				clearInterval(timer)
			}
		}

		const timer = window.setTimeout(() => setInterval(blurring, 25), 500)

		return {
			timer,
			loadNum,
			blurring,
			scale,
			bgOpacity,
			textOpacity,
		}
	},
}
</script>

<style lang="scss" scoped>
.bg {
	background: url('https://source.unsplash.com/1600x900/?nature,mountain')
		no-repeat center center/cover;
}

.text-position {
	position: absolute;
	top: 50%;
	left: 50%;
	transform: translate(-50%, -50%);
}
</style>
