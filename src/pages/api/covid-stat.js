const axios = require('axios')
const parse = require('csv-parse/lib/sync')

const urlconfirmed =
  'https://raw.githubusercontent.com/CSSEGISandData/COVID-19/master/csse_covid_19_data/csse_covid_19_time_series/time_series_covid19_confirmed_global.csv'
const urlrecovered =
  'https://raw.githubusercontent.com/CSSEGISandData/COVID-19/master/csse_covid_19_data/csse_covid_19_time_series/time_series_covid19_recovered_global.csv'
const urldeaths =
  'https://raw.githubusercontent.com/CSSEGISandData/COVID-19/master/csse_covid_19_data/csse_covid_19_time_series/time_series_covid19_deaths_global.csv'

async function extract(urlpath) {
  const getData = await axios.get(urlpath)
  return getData.data
}

async function prepareData(url, label) {
  const data = await extract(url)

  const [headers, ...rows] = await parse(data)
  const [province, country, lat, long, ...dates] = headers
  const countList = {}

  // Fixed date formats เปลี่ยน / เป็น -
  const normalDates = dates.map(date => {
    const [month, day] = date.split('/')
    return `2020-${month}-${day}`
  })

  const prepareData = rows.forEach(
    ([province, country, lat, long, ...dates]) => {
      countList[country] = countList[country] || {}

      normalDates.map((date, i) => {
        countList[country][date] = countList[country][date] || {}

        countList[country][date][label] = countList[country][date][label] || 0
        countList[country][date][label] += +dates[i]

        countList[country][date]['new' + label] =
          countList[country][date]['new' + label] || 0
        countList[country][date]['new' + label] +=
          +(dates[i] - dates[i - 1]) || 0
      })
    },
  )
  // console.log(countList['United Kingdom'])

  return [countList, normalDates]
}

// async function getUpdateData(dataLabel) {
//   // const result = dataLabel.map(label => {
//   //   console.log(label)
//     // const [label] = await prepareData(`url${label}`, label)
//     // const [preparedRecovered] = await prepareData(urlrecovered, 'recovered')
//     // const [preparedDeaths] = await prepareData(urldeaths, 'deaths')

//     // const preparedData = [preparedconfirmed, preparedrecovered, prepareddeaths]
//     // const countries = Object.keys(preparedConfirmed)
//   // })

//   return result
// }

export default async function covid19(req, res) {
  // const test = await getUpdateData(['confirmed', 'recovered', 'deaths'])
  // console.log('result', test)

  const [preparedConfirmed, dates] = await prepareData(
    urlconfirmed,
    'confirmed',
  )
  const [preparedRecovered] = await prepareData(urlrecovered, 'recovered')
  const [preparedDeaths] = await prepareData(urldeaths, 'deaths')

  const preparedData = [preparedConfirmed, preparedRecovered, preparedDeaths]
  const countries = Object.keys(preparedConfirmed)
  const results = {}

  // console.time('api')
  countries.map(country => {
    results[country] = dates.map((date, i) => {
      return {
        date,
        newconfirmed: preparedConfirmed[country][date]['newconfirmed'],
        newrecovered: preparedRecovered[country][date]['newrecovered'],
        newdeaths: preparedDeaths[country][date]['newdeaths'],
        confirmed: preparedConfirmed[country][date]['confirmed'],
        recovered: preparedRecovered[country][date]['recovered'],
        deaths: preparedDeaths[country][date]['deaths'],
        hospitalized:
          preparedConfirmed[country][date]['confirmed'] -
          preparedRecovered[country][date]['recovered'] -
          preparedDeaths[country][date]['deaths'],
      }
    })
  })
  // console.timeEnd('api')

  res.status(200).json(JSON.stringify(results, null, 2))
}
