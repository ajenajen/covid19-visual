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
    const countries = Object.keys(response)
    const aCountry = response[countries[0]]
    const { date } = aCountry[aCountry.length - 1]
    const rows = countries.map(country => {
      const { confirmed, hospitalized, deaths, recovered } = response[
        country
      ].find(item => item.date === date)
      return { country, confirmed, hospitalized, deaths, recovered }
    })

    return { date, rows }
  })
}

export function getTotalCaseByCountry({ country }) {
  return API.getCaseData({ country }).then(function(response) {
    const data = [country] // Ex. ["Thailand"]
    const aCountry = response[country]
    const { date } = aCountry[aCountry.length - 1]

    const rows = data.map(country => {
      const { confirmed, hospitalized, deaths, recovered } = response[
        country
      ].find(item => item.date === date)
      return { country, confirmed, hospitalized, deaths, recovered }
    })

    return { date, rows }
  })
}

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
          newhospitalized: today.hospitalized - yesterday.hospitalized,
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

    return rows
  })
}

export function getUpdateCaseByCountry({ country }) {
  return API.getCaseData({ country }).then(function(response) {
    const myCountry = country

    const today = response[myCountry][response[myCountry].length - 1]
    const yesterday = response[myCountry][response[myCountry].length - 2]

    const data = {
      ...today,
      newconfirmed: today.confirmed - yesterday.confirmed,
      newhospitalized: today.hospitalized - yesterday.hospitalized,
      newrecovered: today.recovered - yesterday.recovered,
      newdeaths: today.deaths - yesterday.deaths,
    }
    return data
  })
}
