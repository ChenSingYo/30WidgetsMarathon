<template>
  		<div 
      id="search-box" 
      class="h-16 rounded-md flex items-center p-4"
    >
			<button
				class="
					btn-search
					cursor-pointer
					text-lg
					h-[40] w-[50]
				"
			>
				<Icon
					icon="bx:bx-search-alt"
					class="
            icon-search 
            outline-none 
            "
					height="36"
				/>
			</button>
			<input
        type="text"
				class="
          shadow-sm
					input-search
					text-sm
					h-[40px] w-[0px]
					rounded-md
          outline-none
				"
				placeholder="type to search..."
			/>
		</div>
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

	.btn-search:focus ~ .input-search {
		width: 180px;
		background-color: #fff;
    border: 3px solid gray;
    padding: 0.5rem;
		transition: all 300ms cubic-bezier(0,-0.23,.35,2);
	}
  .btn-search:focus ~ .input-search::placeholder {
    color: grey;
		font-weight:200;
  }
  .input-search {
    transition: all .2s;
  }
	.input-search::placeholder {
		color: grey;
		font-weight:200;
	}
  .input-search:focus {
    border: 3px solid black;
    width: 180px;
    padding: 0.5rem;
  }
}

/* smartphones, touchscreens */
@media (pointer: coarse) and (any-pointer: fine) {
		.btn-search:hover ~ .input-search,
		.btn-search:active ~ .input-search {
		width: 180px;
		background-color: #fff;
    border: 3px solid gray;
    padding: 0.5rem;
		transition: all 300ms cubic-bezier(0,-0.23,.35,2);
	}
		.btn-search:hover ~ .input-search::placeholder,
		.btn-search:active ~ .input-search::placeholder {
    color: grey;
		font-weight:200;
  }
		.input-search:hover,
		.input-search:active {
    border: 3px solid black;
    width: 180px;
    padding: 0.5rem;
  }
}

</style>