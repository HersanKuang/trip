import { getCityAll } from '@/service'
import { defineStore } from 'pinia'

interface ICityName {
  cityName?: string
}
interface State {
  allCities: object | null
  currentCity: ICityName
}

const useCityStore = defineStore('city', {
  state: (): State => ({
    allCities: {},
    currentCity: {
      cityName: '广州'
    }
  }),
  actions: {
    async fetchAllCitiesData() {
      const res = await getCityAll()
      this.allCities = res.data
    }
  }
})

export default useCityStore
