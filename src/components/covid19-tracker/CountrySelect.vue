<template>
  <select @change="onChange"
    v-model="selected"
    class="form-select mt-10 block w-full border p-3 rounded outline-none cursor-pointer"
  >
    <!-- selected最初的value是0，因此最初會先顯示Select Country -->
    <option value="0">Select Country</option>
    <!-- 用v-for迴圈將countries陣列渲染出來 -->
    <option v-for="country in countries" :value="country.ID" :key="country.ID">
      {{ country.Country}}
    </option>
  </select>
</template>

<script>
import { ref } from 'vue'

export default {
  name: 'CountrySelect',
  props: ['countries'],
  setup (props, { emit }) {
    const selected = ref(0)
    return {
      selected,
      onChange () {
        // 透過array.find比對出ID與selected.value相符的資料
        const country = props.countries.find((item) => item.ID === selected.value)
        // 使用從父組件送來的屬性get-country，該屬性會呼叫父組件的函式getCountryData，然後將country作為參數引用之。
        emit('get-country', country)
      }
    }
  }
}
</script>

<style>

</style>
