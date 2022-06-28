<template>
	<!-- RWD Grid Layout -->
	<div
		class="
			grid
			gap-4
			max-w-12xl
			mx-auto
			p-2
			xs:grid-cols-2 xs:gap-2
			sm:grid-cols-3 sm:gap-4
			md:grid-cols-4 md:gap-4
			lg:grid-cols-5 lg:gap-4
		"
	>
		<header class="h-auto mt-10 flex flex-col xs:col-span-2 mb-3">
			<h2 class="text-4xl text-black font-extrabold p-4 pt-1">UI Widgets</h2>
			<h5 class="pl-4 text-[1rem] text-gray-700 font-normal">
				自主練習的Widgets小作品
			</h5>
		</header>

		<div
			class="relative xs:col-span-2 mt-10 flex xs:justify-start md:justify-end"
		>
			<div
				class="
					absolute
					top-[-22%]
					md:top-[-15%] md:right-0
					font-bold
					text-shadow-sm
				"
			>
				#1
			</div>
			<search-box />
		</div>

		<router-link to="/2">
			<div class="card bg-yellow-500 hover:bg-yellow-400 xs:h-auto xs:square">
				<div class="font-bold text-shadow">#2</div>
				<div class="font-bold text-shadow">Img Loading</div>
			</div>
		</router-link>

		<router-link to="/3">
			<div class="card bg-green-600 hover:bg-green-500 xs:h-auto xs:square">
				<div class="font-bold text-shadow">#3</div>
				<p class="font-bold text-shadow">Cards Expanding</p>
			</div>
		</router-link>

		<router-link to="/4">
			<div class="card bg-green-600 hover:bg-green-500 xs:h-auto xs:square">
				<div class="font-bold text-shadow">#4</div>
				<p class="font-bold text-shadow">Covid 19 Tracker</p>
				<div class="font-bold text-shadow"></div>
			</div>
		</router-link>

		<router-link to="/5">
			<div class="card bg-yellow-500 hover:bg-yellow-400 xs:h-auto xs:square">
				<div class="font-bold text-shadow-sm">#5</div>
				<p class="font-bold text-shadow-sm">Q&A Section</p>
			</div>
		</router-link>

		<a href="https://codepen.io/zyrxdkoz/pen/dyROrLB" target="_blank">
			<div class="card bg-green-600 hover:bg-green-500 xs:h-auto xs:square">
				<div class="font-bold text-shadow-sm">#6</div>
				<span class="font-bold text-shadow-sm">Scroll Animation</span>
				<small>( codepen )</small>
			</div>
		</a>

		<a href="https://codepen.io/zyrxdkoz/pen/rNwWgrM" target="_blank">
			<div class="card bg-yellow-500 hover:bg-yellow-400 xs:h-auto xs:square">
				<div class="font-bold text-shadow-sm">#7</div>
				<span class="font-bold text-shadow-sm">Progress Steps</span>
				<small>( codepen )</small>
			</div>
		</a>

		<a href="https://codepen.io/zyrxdkoz/pen/yLXgxOp" target="_blank">
			<div class="card bg-yellow-500 hover:bg-yellow-400 xs:h-auto xs:square">
				<div class="font-bold text-shadow-sm">#8</div>
				<span class="font-bold text-shadow-sm">Button Ripple Effect</span>
				<small>( codepen )</small>
			</div>
		</a>

		<a href="https://codepen.io/zyrxdkoz/pen/rNwywyj" target="_blank">
			<div class="card bg-green-600 hover:bg-green-500 xs:h-auto xs:square">
				<div class="font-bold text-shadow-sm">#9</div>
				<span class="font-bold text-shadow-sm">Netfilx Navigation</span>
				<small>( codepen )</small>
			</div>
		</a>

		<a href="https://codepen.io/zyrxdkoz/pen/MWomYzG" target="_blank">
			<div class="card bg-yellow-500 hover:bg-yellow-400 xs:h-auto xs:square">
				<div class="font-bold text-shadow-sm">#10</div>
				<span class="font-bold text-shadow-sm">Drag & Drop</span>
				<small>( codepen )</small>
			</div>
		</a>

		<a href="https://codepen.io/zyrxdkoz/pen/dyRWKZM" target="_blank">
			<div class="card bg-green-600 hover:bg-green-500 xs:h-auto xs:square">
				<div class="font-bold text-shadow-sm">#11</div>
				<span class="font-bold text-shadow-sm">Theme Clock</span>
				<small>( codepen )</small>
			</div>
		</a>

		<a href="https://codepen.io/zyrxdkoz/pen/oNwwXvr" target="_blank">
			<div class="card bg-green-600 hover:bg-green-500 xs:h-auto xs:square">
				<div class="font-bold text-shadow-sm">#12</div>
				<span class="font-bold text-shadow-sm">Drawing Canvas</span>
				<small>( codepen )</small>
			</div>
		</a>

		<a href="https://codepen.io/zyrxdkoz/pen/yLXXjga" target="_blank">
			<div class="card bg-yellow-500 hover:bg-yellow-400 xs:h-auto xs:square">
				<div class="font-bold text-shadow-sm">#13</div>
				<span class="font-bold text-shadow-sm">Split Lading Page</span>
				<small>( codepen )</small>
			</div>
		</a>

		<a href="https://codepen.io/zyrxdkoz/pen/rNLjpPr" target="_blank">
			<div class="card bg-green-600 hover:bg-green-500 xs:h-auto xs:square">
				<div class="font-bold text-shadow-sm">#14</div>
				<span class="font-bold text-shadow-sm">RGB/HEX Converter</span>
				<small>( codepen )</small>
			</div>
		</a>

		<router-link to="/15">
			<div class="card bg-green-600 hover:bg-green-500 xs:h-auto xs:square">
				<div class="font-bold text-shadow-sm">#15</div>
				<p class="font-bold text-shadow-sm">CSS Perspective</p>
			</div>
		</router-link>

		<router-link to="/16">
			<div class="card bg-yellow-500 hover:bg-yellow-400 xs:h-auto xs:square">
				<div class="font-bold text-shadow-sm">#16</div>
				<p class="font-bold text-shadow-sm">Quiz App</p>
			</div>
		</router-link>
		<a href="https://book-order-demo.vercel.app/" target="_blank">
			<div class="card bg-green-600 hover:bg-green-500 xs:h-auto xs:square">
				<span class="font-bold text-shadow-sm">#17</span>
				<span>Order UI</span>
				<small>( build by element ui )</small>
			</div>
		</a>
		<router-link to="/18">
			<div class="card bg-yellow-500 hover:bg-yellow-400 xs:h-auto xs:square">
				<p class="font-bold text-shadow-sm">#18</p>
				<span>ㄅㄆㄇㄈ</span>
				<small>( use Hanzi.js)</small>
			</div>
		</router-link>

		<div class="card disabled">
			<p class="font-bold text-shadow-sm m-auto">Preparing...</p>
		</div>
		<div class="card disabled">
			<p class="font-bold text-shadow-sm">Preparing...</p>
		</div>
		<div class="card disabled">
			<p class="font-bold text-shadow-sm">Preparing...</p>
		</div>
		<div class="card disabled">
			<p class="font-bold text-shadow-sm">Preparing...</p>
		</div>
		<div class="card disabled">
			<p class="font-bold text-shadow-sm">Preparing...</p>
		</div>
		<div class="card disabled">
			<p class="font-bold text-shadow-sm">Preparing...</p>
		</div>
		<div class="card disabled">
			<p class="font-bold text-shadow-sm">Preparing...</p>
		</div>
	</div>
</template>

<style lang="scss" scoped>
.card {
	height: 180px;
	border-radius: 8px;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	color: white;
	font-size: 15px;
	text-align: center;
}

.text-shadow {
	text-shadow: grey 2px 2px 4px;
}

.card.disabled {
	@apply bg-gray-600 hover:bg-gray-800 xs:h-auto xs:square flex;
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
