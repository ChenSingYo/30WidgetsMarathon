<template>
	<home-btn />
	<main
		class="
			bg-gradient-to-tl
			from-blue-200
			via-yellow-100
			to-gray-300
			w-[100vw]
			flex
			justify-center
			items-center
			overflow-hidden
			mr-0
		"
	>
		<div
			class="bg-white rounded-lg w-[600px] drop-shadow-lg"
			id="quiz-container"
		>
			<div id="quiz-header" class="p-12 flex flex-col justify-around">
					<questions
						v-if="quizAnswered < quizData.length"
						:quizData="quizData"
						:quizAnswered="quizAnswered"
						@check-answer="checkAnswer"
					/>
					<result v-else :score="score" />
				<button
					id="Reset"
					class="
						bg-purple-600
						hover:bg-purple-800
						text-white
						tracking-wide
						font-normal
						w-[15%]
						cursor-pointer
						mt-3
						rounded-3xl
					"
					@click.prevent="reset"
					v-if="quizAnswered === quizData.length"
				>
					Reset
				</button>
			</div>
		</div>
	</main>
</template>

<script>
import homeBtn from '../components/HomeBtn.vue'
import Questions from '../components/quiz-app/Questions.vue'
import Result from '../components/quiz-app/Result.vue'
import { ref } from 'vue'

export default {
	name: '#15. Quiz App',
	components: {
		homeBtn,
		Questions,
		Result,
	},
	setup() {
		const quizData = ref([
			{
				q: 'Which language runs in a web browser?',
				answers: [
					{
						text: 'Java',
						is_correct: false,
					},
					{
						text: 'C',
						is_correct: false,
					},
					{
						text: 'Python',
						is_correct: false,
					},
					{
						text: 'Javascript',
						is_correct: true,
					},
				],
			},
			{
				q: 'What does CSS stand for?',
				answers: [
					{
						text: 'Central Style Sheets',
						is_correct: false,
					},
					{
						text: 'Cascading Simple Sheets',
						is_correct: false,
					},
					{
						text: 'Cascading Style Sheets',
						is_correct: true,
					},
					{
						text: 'Cars SUVs Sailboats',
						is_correct: false,
					},
				],
			},
			{
				q: 'What does HTML stand for?',
				answers: [
					{
						text: 'Hypertext Markdown Language',
						is_correct: false,
					},
					{
						text: 'Hypertext Markup Language',
						is_correct: true,
					},
					{
						text: 'Hyperloop Machine Language',
						is_correct: false,
					},
					{
						text: 'Helicopters Terminals Motorboats Lamborginis',
						is_correct: false,
					},
				],
			},
			{
				q: 'What year was JavaScript launched?',
				answers: [
					{
						text: '1996',
						is_correct: false,
					},
					{
						text: '1995',
						is_correct: true,
					},
					{
						text: '1994',
						is_correct: false,
					},
					{
						text: 'none of the above',
						is_correct: false,
					},
				],
			},
		])

		const quizAnswered = ref(0)
		const score = ref(0)

		const checkAnswer = (is_correct) => {
			if (is_correct) {
				score.value++
			}
			quizAnswered.value++
		}

		const reset = () => {
			score.value = 0
			quizAnswered.value = 0
		}

		return {
			quizData,
			quizAnswered,
			score,
			checkAnswer,
			reset,
		}
	},
}
</script>

<style lang="scss" scoped>
</style>
