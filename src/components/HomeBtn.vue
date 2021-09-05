<template>
    <router-link to="/">
    <div 
      class="
        fixed top-6 left-6
        flex justify-center items-center
        w-[50px] h-[50px]
        border-2
        border-gray-500
        text-gray-600
        shadow
        hover:shadow-sm
        hover:text-gray-800
        rounded-full "
    >
    		<Icon
					icon="mi:home"
					class="outline-none"
					height="36"
				/>
    </div>
  </router-link>
</template>

<script>
import { Icon } from '@iconify/vue'

export default {
  name: 'homeButton',
  components: {
    Icon
  }
}
</script>

