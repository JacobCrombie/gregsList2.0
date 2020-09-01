import { ProxyState } from "../AppState.js";
import housesService from "../Services/HousesService.js";

function _drawHouses() {
  let houses = ProxyState.houses
  let templates = ''
  houses.forEach(h => templates += h.houseTemplate)
  document.getElementById('housedata').innerHTML = templates
}
export default class HousesController {

  constructor() {
    ProxyState.on('houses', _drawHouses)
    this.getHouses()
  }
  getHouses() {
    try {
      housesService.getHouses()
    } catch (error) {
      console.error(error)
    }
  }
}