<template>
  <home-button/>
  <div class="mt-20 bg-gray-200 h-full w-[80vw] shadow-md rounded-md">
    <!-- Header -->
    <header class="w-full text-center bg-green-800 text-white p-4 mb-10 rounded-t-md">
      <div class="relative flex flex-row justify-center text-3xl md:text-5xl font-bold mb-3">
        <Icon icon="fa-solid:viruses" class="mr-2 pb-1" height="36"/>
        <p>Covid-19 Tracker</p>
      </div>
      <p>API By <a class="text-blue-300" href="https://covid19api.com" target="_blank">covid10api.com</a></p>
    </header>

    <!-- Main -->
    <main class="p-10 pt-1" v-if="!loading">
      <DataTitle :dataDate="dataDate" :text="title" />

      <DataBoxes :stats="status" />

      <CountrySelect :countries="countries" @get-country="getCountryData" />

      <button
        v-if="status.Country"
        class="bg-blue-700 text-white rounded p-3 mt-10 focus:outline-none hover:bg-blue-500"
        @click="clearCountryData"
      >
        Clear Country
      </button>
    </main>

    <main v-else class="flex flex-col align-center justify-center text-center pb-10">
      <div class="text-gray-600 text-3xl m-10">
        Fetching Data...
      </div>
    </main>

  </div>
</template>

<script>
import { Icon } from '@iconify/vue'
import HomeButton from '../components/HomeButton.vue'
import CountrySelect from '../components/covid19-tracker/CountrySelect.vue'
import DataBoxes from '../components/covid19-tracker/DataBoxes.vue'
import DataTitle from '../components/covid19-tracker/DataTitle.vue'
import { ref } from 'vue'

export default {
  name: 'Covid 19 Tracker',
  components: {
    Icon,
    HomeButton,
    DataTitle,
    DataBoxes,
    CountrySelect
  },
  setup () {
    const loading = ref(true)
    const title = ref('Global')
    const dataDate = ref('')
    const status = ref({})
    const countries = ref([])
    const fetchCovidData = async () => {
      const res = await fetch('https://api.covid19api.com/summary')
      return await res.json()
    }
    const getCountryData = country => {
      status.value = country
      title.value = country.Country
    }
    const clearCountryData = async () => {
      loading.value = true
      const data = await fetchCovidData()
      title.value = 'Global'
      status.value = data.Global
      loading.value = false
    }
    const baseSetup = async () => {
      const data = await fetchCovidData()
      dataDate.value = data.Date
      status.value = data.Global
      countries.value = data.Countries
      loading.value = false
    }
    baseSetup()
    return {
      loading,
      title,
      dataDate,
      status,
      countries,
      getCountryData,
      clearCountryData
    }
  }
}
</script>
