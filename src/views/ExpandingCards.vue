<template>
	<home-btn />
	<div
		class="
			container
			flex
			w-[100vw]
			h-[100vh]
			justify-center
			items-center
			overflow-hidden
      mt-5
      md:m-10
		"
	>
		<div
			v-for="(panel) in panels"
			class="panel"
			:class="{ active: panel.isActive }"
			@click="toggleValid(panel.id)"
			:key="panel.id"
		>
			<img :src="panel.url" class="h-[70vh] rounded-3xl object-cover" />
			<h3 class="text-gray-800">{{ panel.title }}</h3>
		</div>
	</div>
</template>

<script>
import homeBtn from '../components/HomeBtn.vue'
import { computed, ref } from 'vue'

export default {
	name: '#2. ExpandingCards',
	components: {
		homeBtn,
	},
	setup() {
		const panelArray = [
			{
				url: 'https://unsplash.com/photos/J4yQp1lIJsQ/download?force=true&w=1920',
				title: '2020 Tokyo Olympic',
        isActive: false,
        id:1
			},
			{
				url: 'https://unsplash.com/photos/3R4vPrSB1c4/download?force=true&w=1920',
				title: 'Running',
        isActive: false,
        id:2
			},
			{
				url: 'https://unsplash.com/photos/hawN8XnaJuY/download?force=true&w=1920',
				title: 'Swimming',
        isActive: false,
        id:3
			},
			{
				url: 'https://unsplash.com/photos/NCwfsHQvhy0/download?force=true&w=1920',
				title: 'Baseball',
        isActive: false,
        id:4
			},
			{
				url: 'https://unsplash.com/photos/Yf1SegAI84o/download?force=true&w=1920',
				title: 'Martial Art',
        isActive: false,
        id:5
			},
		]

		const panels = ref(panelArray)
		const toggleValid = (id) => {
      panels.value.forEach(function(panel){
        if (id === panel.id) {
          panel.isActive = !panel.isActive
        } else {
          panel.isActive = false
        }
      })
		}
		return {
			panels,
			toggleValid,
		}
	},
}
</script>

<style lang="scss" scoped>
@import url('https://fonts.googleapis.com/css?family=Roboto&display=swap');

div {
	font-family: 'Roboto', sans-serif;
}

.container {
	.panel {
		height: 80vh;
		color: white;
		cursor: pointer;
		// 無單位數字：flex-grow，分配剩餘空間
		flex: 0.5;
		margin: 10px;
		position: relative;
		transition: flex 0.5s ease-in;
		h3 {
			font-size: 24px;
			position: absolute;
			bottom: 7%;
			left: 1%;
			opacity: 0;
		}
	}
	.active {
		flex: 5;
    img {
      width: 100%;
      object-fit: cover;
    }
		h3 {
			opacity: 1;
			transition: opacity 0.3s ease-in 0.4s;
		}
	}
}

@media screen and (max-width: 560px) {
	.container :nth-child(4) {
		display: none;
	}
}
</style>
