<template>
	<Header class="flex bg-blue-700 justify-between items-center p-1 pr-5">
		<!--  -->
		<p class="text-red-50 text-[25px] p-4">30 Widgets Marathon</p>
		<div 
      id="search-box" 
      class="relative rounded-md"
    >
			<button
				class="
					btn-search
					absolute top-0 left-0
					cursor-pointer
					text-lg
					h-[40] w-[50]
					outline-none
				"
			>
				<Icon
					icon="bx:bx-search-alt"
					class="
            icon-search 
            text-white outline-none 
            absolute right-0 top-1
            "
					height="36"
				/>
			</button>
			<input
        type="text"
				class="
					input-search
					bg-transparent
					text-sm
					h-[40px] w-[0px]
					rounded-md
					outline-none
				"
				placeholder="type to search..."
			/>
		</div>
	</Header>
</template>

<script>
import { Icon } from '@iconify/vue'

export default {
	components: {
		Icon,
	},
}
</script>

<style lang="scss" scoped>
#search-box {
	.btn-search:focus ~ .icon-search {
		color: black;
	}
	.btn-search:focus ~ .input-search {
		width: 180px;
		background-color: #fff;
    border-left-width: 8px;
    border-color: transparent;
		transition: all 400ms cubic-bezier(0,-0.23,.35,2);
	}
  .input-search {
    transition: all .3s ease-in-out;
  }
	.input-search::placeholder {
		margin-left: 0.5rem;
		color: black;
		font-weight: 200;
	}
  .input-search:focus {
    width: 180px;
    background-color: #fff;
    border-left-width: 8px;
    border-color: transparent;
  }
}
</style>
