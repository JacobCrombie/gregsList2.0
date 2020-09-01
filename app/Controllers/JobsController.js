import { ProxyState } from "../AppState.js";
import jobsService from "../Services/JobsService.js";

function _drawJobs(){
let jobs = ProxyState.jobs
let templates =''
jobs.forEach(j=> templates += j.jobTemplate)
document.getElementById('jobdata').innerHTML = templates
}

export default class JobsController{


  constructor(){
    ProxyState.on('jobs', _drawJobs)
    this.getJobs()
  }
  getJobs(){
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
}