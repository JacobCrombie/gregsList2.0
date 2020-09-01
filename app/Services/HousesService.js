import { ProxyState } from "../AppState.js";
import House from "../Models/House.js";
import { api } from "./AxiosService.js";


class HousesService {

  constructor() {

  }
  async getHouses() {
    let res = await api.get('houses')
    ProxyState.houses = res.data.data.map(h=> new House(h))
  }
}

const HOUSESSERVICE = new HousesService()

export default HOUSESSERVICE