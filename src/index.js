import {prepareData, renderData} from './solution'

const filterParams = {
  year: 2018,
  customerName: 'NASA',
}

// example of run, you could leave it or modify however you want
fetch('https://api.spacexdata.com/v3/launches/past')
  .then(response => response.json())
  .then(prepareData(filterParams))
  .then(renderData)
