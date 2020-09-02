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
}

const HOUSESSERVICE = new HousesService()

export default HOUSESSERVICE