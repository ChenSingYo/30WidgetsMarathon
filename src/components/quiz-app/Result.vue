<template>
	<div class="result">
		<div class="title">Glad you finish this quiz! </div>
		<div class="desc">Your score is: {{ score }} / 4</div>
	</div>
</template>

<script>

export default {
	name: 'results',
	props: {
		score: {
			type: Number,
			required: true,
		}
	},
	setup() {
	},
}
</script>

<style lang="scss" scoped></style>
