const confirmed = [
  { country: 'America', value: 1000 },
  { country: 'China', value: 100 },
]
const recovered = [
  { country: 'America', value: 300 },
  { country: 'China', value: 30 },
]
const deaths = [
  { country: 'America', value: 100 },
  { country: 'China', value: 10 },
]
/*
const output = {
  'America': {
    confirmed: 1000,
    recovered: 300,
    deaths: 100
  },
  'China': {
    confirmed: 100,
    recovered: 30,
    deaths: 10
  }
}
*/

const confirmedCase = confirmed.map(row => {
  return { country: row.country, confirmed: row.value }
})
const recoveredCase = recovered.map(row => {
  return { country: row.country, recovered: row.value }
})
const deathsCase = deaths.map(row => {
  return { country: row.country, deaths: row.value }
})

const results = confirmedCase.map(item => ({
  ...item,
  ...recoveredCase.find(({ country }) => country === item.country),
  ...deathsCase.find(({ country }) => country === item.country),
}))

const output = []
results.map(row => {
  output.push({
    [row.country]: {
      confirmed: row.confirmed,
      recovered: row.recovered,
      deaths: row.deaths,
    },
  })
})
// console.log(output)

// Method 1: Straight Forward
const method1 = confirmed.reduce((prev, cur) => {
  return {
    ...prev,
    [cur.country]: {
      confirmed: confirmed.find(item => item.country === cur.country)?.value,
      recovered: recovered.find(item => item.country === cur.country)?.value,
      deaths: deaths.find(item => item.country === cur.country)?.value,
    },
  }
}, {})

// Method 2: Prepare data before reduce
const rawData = { confirmed, recovered, deaths }
// console.log('rawData', rawData)

const preparedData = Object.keys(rawData).map(key => {
  return rawData[key].reduce((prev, cur) => {
    return {
      ...prev,
      [cur.country]: cur.value,
    }
  }, {})
})

const method2 = Object.keys(preparedData[0]).reduce((prev, cur) => {
  const [preparedConfirmed, preparedRecovered, preparedDeaths] = preparedData
  // console.log('preparedData', cur)
  return {
    ...prev,
    [cur]: {
      confirmed: preparedConfirmed[cur],
      recovered: preparedRecovered[cur],
      deaths: preparedDeaths[cur],
    },
  }
}, {})

console.log('method1', method1)
console.log('method2', method2)

export default function miniquiz(req, res) {
  res.status(200).json(JSON.stringify(method2, null, 2))
}
