<template>
	<!-- RWD Grid Layout -->
	<div
		class="
			grid
			gap-4
			max-w-7xl
			xs:grid-cols-2 xs:gap-6
			md:grid-cols-4 md:gap-4
			lg:gap-6
		"
	>
		<header class="h-auto mt-10 flex flex-col xs:col-span-2 mb-3">
			<h2 class="text-4xl text-black font-extrabold p-4 pt-1">
				30 Widgets Marathon
			</h2>
			<h5 class="pl-4 text-[1rem] text-gray-700 font-normal">
				2021 鐵人賽專案：30天30個widgets
			</h5>
		</header>

		<div
			class="relative xs:col-span-2 mt-10 flex xs:justify-start md:justify-end"
		>
			<div class="absolute top-[-22%] md:top-[-15%] md:right-0 font-bold text-shadow-sm">#1</div>
			<search-box />
		</div>

		<router-link to="/2">
			<div
				class="
					card
					h-[100px]
					bg-yellow-500
					hover:bg-yellow-400
					xs:h-auto xs:square
				"
			>
				<div class="font-bold text-shadow">#2</div>
				<div class="font-bold text-shadow">Blurring Image Loading</div>
			</div>
		</router-link>

		<router-link to="/3">
			<div
				class="
					card
					h-[100px]
					bg-green-600
					hover:bg-green-500
					xs:h-auto xs:square
				"
			>
				<div class="font-bold text-shadow">#3</div>
				<p class="font-bold text-shadow">Cards Expanding</p>
			</div>
		</router-link>

		<router-link to="/4">
			<div
				class="
					card
					h-[100px]
					bg-green-600
					hover:bg-green-500
					xs:h-auto xs:square
				"
			>
				<div class="font-bold text-shadow">#4</div>
				<p class="font-bold text-shadow">Covid 19 Tracker</p>
				<div class="font-bold text-shadow"></div>
			</div>
		</router-link>

		<router-link to="/5">
			<div
				class="
					card
					h-[100px]
					bg-yellow-500
					hover:bg-yellow-400
					xs:h-auto xs:square
				"
			>
				<div class="font-bold text-shadow-sm">#5</div>
				<p class="font-bold text-shadow-sm">Q&A Section</p>
			</div>
		</router-link>

		<router-link to="/6">
			<div
				class="
					card
					h-[100px]
					bg-green-600
					hover:bg-green-500
					xs:h-auto xs:square
				"
			>
				<div class="font-bold text-shadow-sm">#6</div>
				<p class="font-bold text-shadow-sm">Scroll Animation</p>
			</div>
		</router-link>

		<div
			class="card h-[100px] bg-gray-600 hover:bg-yellow-400 xs:h-auto xs:square"
		>
			<div class="font-bold text-shadow-sm">#7</div>
			<p class="font-bold text-shadow-sm">Progress Steps</p>
		</div>

		<div
			class="card h-[100px] bg-gray-600 hover:bg-yellow-400 xs:h-auto xs:square"
		>
			<div class="font-bold text-shadow-sm">#8</div>
			<p class="font-bold text-shadow-sm">Button Ripple Effect</p>
		</div>

		<div
			class="card h-[100px] bg-gray-600 hover:bg-green-500 xs:h-auto xs:square"
		>
			<div class="font-bold text-shadow-sm">#9</div>
			<p class="font-bold text-shadow-sm">Netfilx Navigation</p>
		</div>
		<div
			class="card h-[100px] bg-gray-600 hover:bg-yellow-400 xs:h-auto xs:square"
		>
			<div class="font-bold text-shadow-sm">#10</div>
			<p class="font-bold text-shadow-sm">Preparing...</p>
		</div>
		<div
			class="card h-[100px] bg-gray-600 hover:bg-green-500 xs:h-auto xs:square"
		>
			<p class="font-bold text-shadow-sm">Preparing...</p>
		</div>
		<div
			class="card h-[100px] bg-gray-600 hover:bg-green-500 xs:h-auto xs:square"
		>
			<p class="font-bold text-shadow-sm">Preparing...</p>
		</div>
		<div
			class="card h-[100px] bg-gray-600 hover:bg-yellow-400 xs:h-auto xs:square"
		>
			<p class="font-bold text-shadow-sm">Preparing...</p>
		</div>
		<div
			class="card h-[100px] bg-gray-600 hover:bg-green-500 xs:h-auto xs:square"
		>
			<p class="font-bold text-shadow-sm">Preparing...</p>
		</div>
		<div
			class="card h-[100px] bg-gray-600 hover:bg-green-500 xs:h-auto xs:square"
		>
			<p class="font-bold text-shadow-sm">Preparing...</p>
		</div>
		<div
			class="card h-[100px] bg-gray-600 hover:bg-yellow-400 xs:h-auto xs:square"
		>
			<p class="font-bold text-shadow-sm">Preparing...</p>
		</div>
		<div
			class="card h-[100px] bg-gray-600 hover:bg-green-500 xs:h-auto xs:square"
		>
			<p class="font-bold text-shadow-sm">Preparing...</p>
		</div>
		<div
			class="card h-[100px] bg-gray-600 hover:bg-green-500 xs:h-auto xs:square"
		>
			<p class="font-bold text-shadow-sm">Preparing...</p>
		</div>
		<div
			class="card h-[100px] bg-gray-600 hover:bg-yellow-400 xs:h-auto xs:square"
		>
			<p class="font-bold text-shadow-sm">Preparing...</p>
		</div>
		<div
			class="card h-[100px] bg-gray-600 hover:bg-green-500 xs:h-auto xs:square"
		>
			<p class="font-bold text-shadow-sm">Preparing...</p>
		</div>
		<div
			class="card h-[100px] bg-gray-600 hover:bg-yellow-400 xs:h-auto xs:square"
		>
			<p class="font-bold text-shadow-sm">Preparing...</p>
		</div>
		<div
			class="card h-[100px] bg-gray-600 hover:bg-green-500 xs:h-auto xs:square"
		>
			<p class="font-bold text-shadow-sm">Preparing...</p>
		</div>
		<div
			class="card h-[100px] bg-gray-600 hover:bg-yellow-400 xs:h-auto xs:square"
		>
			<p class="font-bold text-shadow-sm">Preparing...</p>
		</div>
		<div
			class="card h-[100px] bg-gray-600 hover:bg-yellow-400 xs:h-auto xs:square"
		>
			<p class="font-bold text-shadow-sm">Preparing...</p>
		</div>
		<div
			class="card h-[100px] bg-gray-600 hover:bg-green-500 xs:h-auto xs:square"
		>
			<p class="font-bold text-shadow-sm">Preparing...</p>
		</div>
	</div>
</template>

<style lang="scss" scoped>
.card {
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	color: white;
	font-size: 15px;
}

.text-shadow {
	text-shadow: grey 2px 2px 4px;
}
</style>

<script>
import SearchBox from '../components/home/SearchBox.vue'

export default {
	name: 'Home',
	components: {
		SearchBox,
	},
}
</script>
