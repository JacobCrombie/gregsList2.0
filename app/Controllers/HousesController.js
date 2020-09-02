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
  createHouse() {
    event.preventDefault()
    let form = event.target
    // @ts-ignore
    let rawHouse = {
      // @ts-ignore
      levels: form.levels.value,
      // @ts-ignore
      bedrooms: form.bedrooms.value,
      // @ts-ignore
      bathrooms: form.bathrooms.value,
      // @ts-ignore
      year: form.year.value,
      // @ts-ignore
      price: form.price.value,
      // @ts-ignore
      description: form.description.value
    }
    housesService.createHouse(rawHouse)
  }
  removeHouse(id) {
    try {
      housesService.removeHouse(id)
    } catch (error) {
      console.error(error);
    }
  }
  bid(id) {
    try {
      housesService.bid(id)
    } catch (error) {
      console.error(error);
    }
  }
}