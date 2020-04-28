const confirmed = [
  {
    country: 'America',
    value: 1000,
  },
  {
    country: 'China',
    value: 100,
  },
]

const recovered = [
  {
    country: 'America',
    value: 300,
  },
  {
    country: 'China',
    value: 30,
  },
]

const deaths = [
  {
    country: 'America',
    value: 100,
  },
  {
    country: 'China',
    value: 10,
  },
]

const confirmedCase = confirmed.map(row => {
  return { country: row.country, confirmed: row.value }
})
const recoveredCase = recovered.map(row => {
  return { country: row.country, recovered: row.value }
})
const deathsCase = deaths.map(row => {
  return { country: row.country, deaths: row.value }
})

// const output = confirmedCase.map((item, i) =>
//   Object.assign({}, item, recoveredCase[i], deathsCase[i]),
// )

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

export default function miniquiz(req, res) {
  res.status(200).json(JSON.stringify(output, null, 2))
}
