export default function covid19(req, res) {
  const fs = require('fs')
  const axios = require('axios')
  const csv = require('csv-parser')

  async function convertData() {
    const url =
      'https://raw.githubusercontent.com/CSSEGISandData/COVID-19/master/csse_covid_19_data/csse_covid_19_time_series/time_series_covid19_confirmed_global.csv'
    const apiPath = 'api/covid19.js'
    const writer = fs.createWriteStream(apiPath)

    const getData = await axios({
      method: 'get',
      url: url,
      responseType: 'stream',
    }).then(function(response) {
      response.data.pipe(writer)
    })

    let results = []
    fs.createReadStream(apiPath)
      .pipe(
        csv({
          headers: false,
        }),
      )
      .on('data', data => results.push(data))
      .on('end', () => {
        // console.log('results => ', results)

        // let response = { name: 'John Doe' }
        // let status = 200

        res.status(200).json(results)
      })
  }
  convertData()
}
