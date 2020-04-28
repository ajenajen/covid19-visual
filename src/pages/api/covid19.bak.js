export default function covid19(req, res) {
  const axios = require('axios')
  const fs = require('fs')
  const csvParser = require('csv-parser')

  async function convertData() {
    const url =
      'https://raw.githubusercontent.com/CSSEGISandData/COVID-19/master/csse_covid_19_data/csse_covid_19_time_series/time_series_covid19_confirmed_global.csv'
    const filePath = 'api/covid19.js'
    const writer = fs.createWriteStream(filePath)

    await axios({
      method: 'get',
      url: url,
      responseType: 'stream',
    }).then(
      response => {
        response.data.pipe(writer)

        let results = []
        fs.createReadStream(filePath)
          .pipe(csvParser())
          .on('data', row => {
            results.push(row)
          })
          .on('end', () => {
            res.status(200).json(results)
          })
      },
      error => {
        console.log('error =>', error)
      },
    )
  }
  convertData()
}
