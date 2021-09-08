<template>
	<home-btn />

	<div
		class="
			faq-container
			w-full
			h-[vh100]
			bg-gray-100
			p-5
			flex flex-col
			justify-start
			items-center
		"
	>
		<h1
			class="
				text-md text-gray-900
				font-extrabold
				mt-10
				mb-10
				md:text-2xl
				lg:text-3xl
			"
		>
			Frequently Asked Questions
		</h1>
		<div v-for="qa in qaArray" :key="qa.id" @click="toggleActive(qa.id)">
			<div
				class="
					faq
					w-[50vw]
					relative
					overflow-hidden
					bg-transparent
					border-2 border-gray-500
					rounded-xl
					mb-8
					p-7
					duration-150
					ease-in-out
				"
				:class="{ active: qa.isActive }"
			>
				<h3 class="faq-title font-semibold mr-[50px]">
					{{ qa.question }}
				</h3>
				<p class="faq-answer text-red-800 mt-5">{{ qa.answer }}</p>
				<button
					class="
						faq-toggle
						flex
						group
						justify-center
						items-center
						absolute
						p-0
						top-3
						right-3
						rounded-full
						h-[30px]
						w-[30px]
						border-gray-500
					"
				>
					<Icon
						icon="bx:bxs-chevron-down"
						class="icon-arrow-down text-gray-800 pointer-events-none"
						height="36"
					/>
					<Icon
						icon="pepicons:times"
						class="icon-times text-[#111] pointer-events-none"
						height="28"
					/>
				</button>
			</div>
		</div>
	</div>
</template>
<script>
import { Icon } from '@iconify/vue'
import HomeBtn from '../components/HomeBtn.vue'
import { ref } from 'vue'

export default {
	components: { HomeBtn, Icon },
	setup() {
		const data = [
			{
				question: "Why shouldn't we trust atoms?",
				answer: 'They make up everything',
				isActive: true,
				id: 1,
			},
			{
				question: 'What do you call someone with no body and no nose?',
				answer: 'Nobody Knows',
				isActive: false,
				id: 2,
			},
			{
				question: "What's the object-oriented way to become wealthy?",
				answer: 'Inheritance',
				isActive: false,
				id: 3,
			},
			{
				question: 'How many tickles does it take to tickle an octopus?',
				answer: 'Ten-tickles!',
				isActive: false,
				id: 4,
			},
			{
				question: 'What is: 1 + 1?',
				answer: 'Depends on who are you asking.',
				isActive: false,
				id: 5,
			},
		]
		const qaArray = ref(data)
		const toggleActive = (id) => {
			qaArray.value.forEach(function (qa) {
				if (id === qa.id) {
					qa.isActive = !qa.isActive
				} else {
					qa.isActive
				}
			})
		}
		return {
			qaArray,
			toggleActive,
		}
	},
}
</script>

<style lang="scss" scoped>
.faq {
	transition: 0.3s ease;
	&.active {
		background-color: white;
		.faq-answer {
			display: block;
		}
		.faq-toggle {
			background-color: #9fa4a8;
			.icon-arrow-down {
				display: none;
			}
			.icon-times {
				display: block;
				color: white;
			}
			&:focus {
				outline: none;
			}
		}
	}
	.faq-title {
		margin: 0 35px 0 0;
	}
	.faq-answer {
		display: none;
	}
	.icon-times {
		display: none;
	}
}
</style>
