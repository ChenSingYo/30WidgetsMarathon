<template>
	<home-btn />
	<div
		class="
      relative
			flex flex-col
			items-center
			justify-start
      pt-14
      md:justify-center
      md:pt-0
			font-sans
			w-[100vw]
			h-[100vh]
			m-0
			bg-[#261c33]
      overflow-hidden
		"
	>
		<h2
			class="
				text-[#8d81f3] text-center
				font-extrabold
				m-5
				mt-0
				text-2xl
				md:text-5xl
			"
		>
			CSS Perspective Playground
		</h2>
		<main
			class="
				flex flex-col
				md:flex-row
				items-center
				h-[420px]
				w-[600px]
				font-serif
				text-[20px] text-white
			"
		>
			<section class="settings w-[50%] z-20">
				<div
					class="settings-container flex flex-col items-center md:items-start"
				>
					<label>perspective: {{ perspective }}px;</label>
					<input type="range" min="0" max="999" v-model="perspective" />

					<label>rotateX: {{ rotateX }}deg; </label>
					<input type="range" min="-180" max="180" v-model="rotateX" />

					<label>rotateY: {{ rotateY }}deg; </label>
					<input type="range" min="-180" max="180" v-model="rotateY" />

					<label>rotateZ: {{ rotateZ }}deg; </label>
					<input type="range" min="-180" max="180" v-model="rotateZ" />
				</div>
				<div class="btnContainer flex flex-row justify-center mb-2 md:justify-start">
					<button id="resetBtn" type="button" @click.prevent="reset">
						Reset
					</button>
					<button id="copyBtn" type="button" @click.prevent="copy">Copy</button>
				</div>
			</section>
			<section class="output w-[50%] z-20">
				<div class="box-container p-[50px] border-2 border-[#8d81f3]">
					<div class="box" :style="box"></div>
				</div>
			</section>
		</main>
    	<css-doodle>
		:doodle { @grid: 1x3 / 100vmax; position: absolute; top: 0; left: 0;
		z-index: 0; } @size: 100% 150%; position: absolute; background: @m(100, (
		linear-gradient(transparent, @p( #FFFDE1@repeat(2, @p([0-9a-f])),
		#FB3569@repeat(2, @p([0-9a-f])) )) @r(0%, 100%) @r(0%, 100%) / @r(1px)
		@r(23vmin) no-repeat )); will-change: transform; animation: f 50s linear
		calc(-50s / @size() * @i()) infinite; @keyframes f { from { transform:
		translateY(-100%) } to { transform: translateY(100%) } }
	</css-doodle>
	</div>
</template>

<script>
import 'css-doodle'
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
			const resetBtn = document.getElementById('resetBtn')
			resetBtn.innerText = 'Done!'
			perspective.value = 100
			rotateX.value = 0
			rotateY.value = 0
			rotateZ.value = 0
			setTimeout(() => (resetBtn.innerText = 'Reset'), 800)
		}

		const copy = () => {
			const copyBtn = document.getElementById('copyBtn')
			copyBtn.innerText = 'Copied!'
			const el = document.createElement('textarea')
			el.setAttribute('readonly', '')
			el.value = `transform: ${box.value.transform}`
			document.body.appendChild(el)
			el.select()
			document.execCommand('copy')
			document.body.removeChild(el)
			setTimeout(() => (copyBtn.innerText = 'Copy'), 800)
		}

		return {
			perspective,
			rotateX,
			rotateY,
			rotateZ,
			box,
			reset,
			copy,
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
	button {
		margin-bottom: 2px;
		width: 30%;
		background-color: #8d81f3;
		color: #fff;
		font-size: 20px;
		padding: 10px;
		outline: none;
		border: none;
		margin-right: 10px;
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
