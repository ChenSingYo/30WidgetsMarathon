<template>
	<div class="result">
		<div class="title">{{ results[resultIndex].title }}</div>
		<div class="desc">{{ results[resultIndex].desc }}</div>
	</div>
</template>

<script>
import { computed, ref } from 'vue'

export default {
	name: 'results',
	props: {
		score: {
			type: Number,
			required: true,
		}
	},
	setup(score) {
		const Results = ref([
			{
				min: 0,
				max: 3,
				title: 'Try again!',
				desc: 'Do a little more studying and you may succeed!',
			},
			{
				min: 4,
				max: 4,
				title: "Wow, you're a genius!",
				desc: 'Studying has definitely paid off for you!',
			},
		])
    const results = ref(Results)
		const resultIndex = computed(() => {
			let index = (0)
      results.value.forEach((el, i) => {
				if (el.min <= score.value && el.max >= score.value) {
					index = i
				}
			})
			console.log(index)
			return index
		})
		return {
			resultIndex,
      results
		}
	},
}
</script>

<style lang="scss" scoped></style>
