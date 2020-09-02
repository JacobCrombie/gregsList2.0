import { ProxyState } from "../AppState.js";
import housesService from "../Services/HousesService.js";

function _drawHouses() {
  let houses = ProxyState.houses
  let templates = ''
  houses.forEach(h => templates += h.houseTemplate)
  document.getElementById('housedata').innerHTML = templates
}
function _drawForm() {
  document.getElementById('form').innerHTML = `
                  <form onsubmit="app.housesController.createHouse()" class="form-inline">
                    <div class="form-group p-1">
                        <label class="mr-1" for="levels">Levels</label>
                        <input type="number" name="levels" id="levels" class="form-control"
                            placeholder="1-10" required min="1" max="10">
                    </div>
                    <div class="form-group p-1">
                        <label class="mr-1" for="bedrooms">Bedrooms</label>
                        <input type="number" name="bedrooms" id="bedrooms" class="form-control"
                            placeholder="1-50" required min="1" max="50">
                    </div>
                    <div class="form-group p-1">
                        <label class="mr-1" for="bathrooms">Bathrooms</label>
                        <input type="number" name="bathrooms" id="bathrooms" class="form-control"
                            placeholder="1-50" required min="1" max="50">
                    </div>
                    <div class="form-group p-1">
                        <label class="mr-1" for="year">Year Built</label>
                        <input type="number" name="year" id="year" class="form-control" placeholder="500-2021"
                            required min="500" max="2021">
                    </div>
                    <div class="form-group p-1">
                        <label class="mr-1" for="price">Price</label>
                        <input type="number" name="price" id="price" class="form-control" placeholder="$USD Amount..."
                            required>
                    </div>
                    <div class="form-group p-1">
                        <label class="mr-1" for="description">Description</label>
                        <input type="text" name="description" id="description" class="form-control"
                            placeholder="Description...">
                    </div>
                    <div class="form-group p-1">
                        <label class="mr-1" for="img">Image Url</label>
                        <input type="url" name="img" id="img" class="form-control" placeholder="Image Url...">
                    </div>
                    <button type="submit" class="btn btn-outline-success">Add Home</button>
                </form>
  `
}
export default class HousesController {

  constructor() {
    ProxyState.on('houses', _drawHouses)
    this.getHouses()
  }
  drawHousesPage() {
    _drawForm()
    _drawHouses()
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