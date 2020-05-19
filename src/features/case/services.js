import * as API from './repository'

export function getCaseAll() {
  return API.getCaseData()
}

export function getCaseByCountry({ country }) {
  return API.getCaseData({ country }).then(function(response) {
    let data = {}
    for (let key in response) {
      if (key === country) {
        return response[country]
      }
    }
    return data
  })
}

export function getTotalCase() {
  return API.getCaseData().then(function(response) {
    // console.log('response', response)

    const countries = Object.keys(response)
    const aCountry = response[countries[0]]
    const { date } = aCountry[aCountry.length - 1] // ดึงออกมาเฉพาะ val ของ date
    // console.log('[aCountry.length', aCountry[aCountry.length - 1])
    // {date: "2020-5-12", confirmed: 4963, deaths: 127, recovered: 610}
    // console.log('todayDate', { date }) //todayDate {date: "2020-5-12"}

    const rows = countries.map(country => {
      const { confirmed, deaths, recovered } = response[country].find(
        item => item.date === date, // date ตัวหลัง มาจากด้านบน
        // console.log('item', item)
        // item {date: "2020-5-12", confirmed: 3017, deaths: 56, recovered: 2798}
      )
      return { country, confirmed, deaths, recovered }
      // return { country } จะมีค่าเท่ากับ return { country: country } ถ้าชื่อ property กะชื่อ variable ตรงกัน จะย่อได้
    })

    // console.log('rows', rows)
    // 0: {country: "Afghanistan", confirmed: 4963, deaths: 127, recovered: 610}

    return { date, rows }
  })
}

export function getTotalCaseByCountry({ country }) {
  return API.getCaseData({ country }).then(function(response) {
    const data = [country] // Ex. ["Thailand"]
    const aCountry = response[country] // array of this country [{date: "2020-1-22", confirmed: 2, deaths: 0, recovered: 0},]
    const { date } = aCountry[aCountry.length - 1]

    const rows = data.map(country => {
      const { confirmed, deaths, recovered } = response[country].find(
        item => item.date === date,
        // item {date: "2020-5-12", confirmed: 3017, deaths: 56, recovered: 2798}
      )
      return { country, confirmed, deaths, recovered }
    })
    // {country: "Thailand", confirmed: 3017, deaths: 56, recovered: 2798}

    return { date, rows }
  })
}

// export function getTotalCaseByCountry({ country }) {
//   return getTotalCase({ country }).then(function(response) {
//     const datas = response.rows
//     const { date } = response.date

//     const rows = datas.find(item => {
//       return item.country == country
//     })

//     return { date, rows }
//   })
// }

export function getUpdateCase() {
  return API.getCaseData().then(function(response) {
    const countries = Object.keys(response)

    const rows = countries
      .map(country => {
        const today = response[country][response[country].length - 1]
        const yesterday = response[country][response[country].length - 2]

        const data = {
          ...today,
          newconfirmed: today.confirmed - yesterday.confirmed,
          newrecovered: today.recovered - yesterday.recovered,
          newdeaths: today.deaths - yesterday.deaths,
        }
        return { country, data }
      })
      .reduce((prev, cur) => {
        return {
          ...prev,
          [cur.country]: cur.data,
        }
      }, {})

    // console.log('rows', rows)

    return rows
  })
}

export function getUpdateCaseByCountry({ country }) {
  return API.getCaseData({ country }).then(function(response) {
    const rows = [country].map(country => {
      // console.log('item', response[country])

      const today = response[country][response[country].length - 1]
      const yesterday = response[country][response[country].length - 2]

      const data = {
        ...today,
        newconfirmed: today.confirmed - yesterday.confirmed,
        newrecovered: today.recovered - yesterday.recovered,
        newdeaths: today.deaths - yesterday.deaths,
      }
      return data
    })

    return rows
  })
}
