export default function covid19(req, res) {
  const request = require('request')
  const csv = require('csv-stream')
  const csvStream = csv.createStream()

  const url =
    'https://raw.githubusercontent.com/CSSEGISandData/COVID-19/master/csse_covid_19_data/csse_covid_19_time_series/time_series_covid19_confirmed_global.csv'

  let results = []
  request(url)
    .pipe(csvStream)
    .on('error', function(err) {
      console.error(err)
    })
    // .on('header', function(columns) {
    //   console.log(columns)
    // })
    .on('data', row => {
      results.push(row)
    })
    .on('end', () => {
      res.status(200).json(JSON.stringify(results, null, 2))
    })
  // .on('column', function(key, value) {
  //   console.log('#' + key + ' = ' + value)
  // })
}
