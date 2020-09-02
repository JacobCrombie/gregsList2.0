import { ProxyState } from "../AppState.js";
import House from "../Models/House.js";
import { api } from "./AxiosService.js";


class HousesService {

  async getHouses() {
    let res = await api.get('houses')
    ProxyState.houses = res.data.data.map(h => new House(h))
  }
  async createHouse(rawHouse) {
    let res = await api.post('houses', rawHouse)
    let house = new House(res.data.data)
    ProxyState.houses = [...ProxyState.houses, house]
  }
  async removeHouse(id) {
    await api.delete(`houses/${id}`)
    ProxyState.houses = ProxyState.houses.filter(h => h.id !== id)
  }
  async bid(id) {
    let house = ProxyState.houses.find(f => f.id === id)
    if (!house) {
      throw new Error('House not found')
    }
    house.price += 10000
    let res = await api.put(`houses/${id}`, { price: house.price })
    ProxyState.houses = ProxyState.houses
  }
}

const HOUSESSERVICE = new HousesService()

export default HOUSESSERVICE