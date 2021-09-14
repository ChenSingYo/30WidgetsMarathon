<template>
	<home-btn />
	<div
		class="
			flex flex-col
			items-center
			justify-center
			font-sans
			w-[100vw]
			h-[100vh]
			m-0
			bg-[#261c33]
		"
	>
		<h2 class="text-[#8d81f3] text-center m-5 mt-0 text-5xl">
			CSS Perspective Playground
		</h2>
		<main
			class="
				flex
				justify-around
				items-center
				h-[420px]
				w-[600px]
				font-serif
				text-[22px] text-white
			"
		>
			<section class="settings w-[50%] z-20">
				<div class="settings-container">
					<label>perspective: {{ perspective }}px;</label>
					<input type="range" min="0" max="999" v-model="perspective" />

					<label>rotateX: {{ rotateX }}deg; </label>
					<input type="range" min="-180" max="180" v-model="rotateX" />

					<label>rotateY: {{ rotateY }}deg; </label>
					<input type="range" min="-180" max="180" v-model="rotateY" />

					<label>rotateZ: {{ rotateZ }}deg; </label>
					<input type="range" min="-180" max="180" v-model="rotateZ" />

					<button type="button" @click.prevent="reset">Reset</button>
					<button type="button" @click.prevent="copy">Copy</button>
				</div>
			</section>
			<section class="output w-[50%] z-20">
				<div class="box-container p-[50px] border-2 border-[#8d81f3]">
					<div class="box" :style="box"></div>
				</div>
			</section>
		</main>
	</div>
</template>

<script>
import homeBtn from '../components/HomeBtn.vue'
import { computed, ref } from 'vue'

export default {
	name: '#15. CSS Perspective Playground',
	components: {
		homeBtn,
	},
	setup() {
		const perspective = ref(100)
		const rotateX = ref(0)
		const rotateY = ref(0)
		const rotateZ = ref(0)

		const box = computed(() => {
			return {
				transform: `
          perspective(${perspective.value}px)
          rotateX(${rotateX.value}deg)
          rotateY(${rotateY.value}deg)
          rotateZ(${rotateZ.value}deg)
        `,
			}
		})

		const reset = () => {
			perspective.value = 100
			rotateX.value = 0
			rotateY.value = 0
			rotateZ.value = 0
		}

		const copy = () => {
			const el = document.createElement('textarea')
			el.setAttribute('readonly', '')
			el.value = `transform: ${box.value.transform}`
			document.body.appendChild(el)
			el.select()
			document.execCommand('copy')
			document.body.removeChild(el)
		}

		return {
			perspective,
			rotateX,
			rotateY,
			rotateZ,
			box,
			reset,
      copy
		}
	},
}
</script>

<style lang="scss" scoped>
main {
	label {
		color: white;
		display: block;
	}
	input[type='range'] {
		display: block;
		margin-bottom: 10px;
		width: 200px;
	}
	.settings-container {
		button {
			background-color: #8d81f3;
			color: #fff;
			display: inline-block;
			font-size: 20px;
			padding: 10px;
			outline: none;
			border: none;
			margin-right: 10px;
		}
	}
	.output {
		.box-container {
			.box {
				margin: auto;
				width: 150px;
				height: 150px;
				background: #8d81f3;
			}
		}
	}
}
</style>
