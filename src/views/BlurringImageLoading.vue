<template>
<home-button/>

<section>
  <div 
    class="
      bg 
      absolute top-[-3%] left-[-3%] 
      min-h-[106%] min-w-[1024px]
      w-[106%] h-auto z-[-1]"
    :class="{'blur-content':true}"
  >
  </div>
  <div class="text-position text-5xl text-gray-600">{{loadNum}}%(testing...)</div>
</section>

</template>

<script>
import homeButton from '../components/HomeButton.vue'
import { ref } from 'vue'

export default {
  name: '#1. BlurringImageLoading',
  components: {
    homeButton,
  },
  setup () {
    let loadNum = ref(1)
    let blurNum = ref(30)
    const blurring = () => {
      loadNum++
    }
    return {
    loadNum,
    }
  },

}

</script>


<style lang="scss" scoped>

.bg {
  background: url('https://unsplash.com/photos/PsQgatSmoa8/download?force=true&w=2400') no-repeat center center/cover;
}

.blur-content{
  filter: blur(30px); 
}

.text-position {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%)
}

</style>