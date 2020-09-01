export default class House{

  constructor({ _id, levels, bedrooms, bathrooms, year, price, imgUrl, description}){
    this.id = _id
    this.levels = levels
    this.bedrooms = bedrooms
    this.bathrooms = bathrooms
    this.year = year
    this.price = price
    this.imgUrl = imgUrl || '//placehold.it/200x200'
    this.description = description || "no description"
  }

  get houseTemplate(){
    return `            
    <div class="col-4">
      <div class="card">
          <img class="card-img-top" src="${this.imgUrl}" alt="">
          <div class="card-body">
              <h4 class="card-title">${this.levels} Story - ${this.bedrooms} Bed - ${this.bathrooms} Bath</h4>
              <p class="card-text">${this.description}</p>
              <div class="d-flex justify-content-between">
                  <button class="btn btn-outline-danger" onclick="app.housesController.removeHouse('${this.id}')">Delete</button>
                  <button class="btn btn-outline-info" onclick="app.housesController.bid('${this.id}')">+ $10,000</button>
                  <p>$${this.price.toFixed(2)}</p>
              </div>
          </div>
      </div>
    </div>`
  }
}