<template>
	<transition-group name="fade">
		<div
			class="p-0 flex flex-col"
			id="single-question"
			v-for="(question, index) in quizData"
			:key="question.q"
			v-show="quizAnswered === index"
		>
			<h2 class="text-center mb-3 text-3xl font-semibold">
				{{ question.q }}
			</h2>
			<div
				class="
					text-xl
					font-thin
					text-center
					my-2
					hover:bg-gray-100 hover:font-normal
					rounded-sm
				"
				v-for="answer in question.answers"
				:key="answer.text"
				@click.prevent="selectAnswer(answer.is_correct)"
			>
				<div class="cursor-pointer py-3 border-2 rounded-lg">
					{{ answer.text }}
				</div>
			</div>
		</div>
	</transition-group>
	<div class="progress mt-2 h-[40px] relative bg-pink-50">
		<div
			class="bar bg-pink-300 h-[40px] transition-all duration-300"
			:style="{ width: `${(quizAnswered / quizData.length) * 100}%` }"
		></div>
		<div class="status absolute top-[10px] w-full left-0 text-center">
			{{ quizAnswered }} out of {{ quizData.length }} quiz answered
		</div>
	</div>
</template>

<script>
export default {
	name: 'Questions',
	emits: ['check-answer'],
	props: {
		quizData: {
			type: Object,
			required: true,
		},
		quizAnswered: {
			type: Number,
			required: true,
		},
	},
	setup(props, { emit }) {
    const selectAnswer = (is_correct) => {
      emit('check-answer', is_correct)
    }
		return {
      selectAnswer
    }
	},
}
</script>

<style lang="scss" scoped></style>
