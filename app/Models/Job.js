export default class Job{

  constructor({ _id, company, jobTitle, rate, hours, description}){
    this.id = _id
    this.company = company
    this.jobTitle = jobTitle
    this.rate = rate
    this.hours = hours
    this.description = description || "no description"
  }

  get jobTemplate(){
    return `            
    <div class="col-4 my-2">
      <div class="card">
          <div class="card-body">
              <h1 class="card-title">${this.company} - ${this.jobTitle}</h1>
              <h3 class="card-title">$${this.rate}/hr - ${this.hours} hrs/week</h3>
              <p class="card-text">${this.description}</p>
              <div class="d-flex justify-content-between">
                  <button class="btn btn-outline-danger" onclick="app.jobsController.removeHouse('${this.id}')">Delete</button>
                  <button class="btn btn-outline-info" onclick="app.jobsController.apply('${this.id}')">Apply</button>
              </div>
          </div>
      </div>
    </div>`
  }
}