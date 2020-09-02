import { ProxyState } from "../AppState.js";
import jobsService from "../Services/JobsService.js";

function _drawJobs() {
  let jobs = ProxyState.jobs
  let templates = ''
  jobs.forEach(j => templates += j.jobTemplate)
  document.getElementById('data').innerHTML = templates
}
function _drawForm() {
  document.getElementById('form').innerHTML = `
                  <form onsubmit="app.jobsController.createJob()" class="form-inline">
                    <div class="form-group p-1">
                        <label class="mr-1" for="company">Company</label>
                        <input type="text" name="company" id="company" class="form-control" placeholder="Company..."
                            required>
                    </div>
                    <div class="form-group p-1">
                        <label class="mr-1" for="jobTitle">Job Title</label>
                        <input type="text" name="jobTitle" id="jobTitle" class="form-control" placeholder="Job Title..."
                            required>
                    </div>
                    <div class="form-group p-1">
                        <label class="mr-1" for="rate">Payrate</label>
                        <input type="number" name="rate" id="rate" class="form-control" placeholder="Payrate..."
                            required min="1" max="100">
                    </div>
                    <div class="form-group p-1">
                        <label class="mr-1" for="hours">Hours</label>
                        <input type="number" name="hours" id="hours" class="form-control" placeholder="Hours..."
                            required min="1" max="80">
                    </div>
                    <div class="form-group p-1">
                        <label class="mr-1" for="description">Description</label>
                        <input type="text" name="description" id="description" class="form-control"
                            placeholder="Description...">
                    </div>
                    <button type="submit" class="btn btn-outline-success">Add Job</button>
                </form>
  `
}

export default class JobsController {
  constructor() {
    ProxyState.off('jobs', _drawJobs)
    this.getJobs()
  }

  drawJobsPage() {
    ProxyState.on('jobs', _drawJobs)
    _drawForm()
    _drawJobs()
  }
  getJobs() {
    try {
      jobsService.getJobs()
    } catch (error) {
      console.error(error)
    }
  }
  createJob() {
    event.preventDefault();
    let form = event.target
    let rawJob = {
      // @ts-ignore
      company: form.company.value,
      // @ts-ignore
      jobTitle: form.jobTitle.value,
      // @ts-ignore
      rate: form.rate.value,
      // @ts-ignore
      hours: form.hours.value,
      // @ts-ignore
      description: form.description.value
    }
    try {
      jobsService.createJob(rawJob)
    } catch (error) {
      console.error(error)
    }
  }
  removeJob(id) {
    try {
      jobsService.removeJob(id)
    } catch (error) {
      console.error(error);
    }
  }
}