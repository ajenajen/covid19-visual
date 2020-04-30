const axios = require('axios')
const parse = require('csv-parse/lib/sync')

const urlConfirmed =
  'https://raw.githubusercontent.com/CSSEGISandData/COVID-19/master/csse_covid_19_data/csse_covid_19_time_series/time_series_covid19_confirmed_global.csv'
const urlRecovered =
  'https://raw.githubusercontent.com/CSSEGISandData/COVID-19/master/csse_covid_19_data/csse_covid_19_time_series/time_series_covid19_recovered_global.csv'
const urlDeaths =
  'https://raw.githubusercontent.com/CSSEGISandData/COVID-19/master/csse_covid_19_data/csse_covid_19_time_series/time_series_covid19_deaths_global.csv'

async function extract(urlpath) {
  const getData = await axios.get(urlpath)
  const [headers, ...rows] = await parse(getData.data) // แยก key : [rows] กับ value : rows
  const [province, country, lat, long, ...dates] = headers // เอา key มาแยก ,เปลี่ยน key name 4 ตัวแรก ที่เหลือต่อด้วย dates
  const countList = {}

  // Fixed date formats เปลี่ยน / เป็น -
  const normalDates = dates.map(date => {
    const [month, day] = date.split('/')
    return `2020-${month}-${day}`
  })

  rows.forEach(([province, country, lat, long, ...dates]) => {
    // console.log('country', country) // ได้ forEach country ทั้งหมด , เอามาใช้แค่ country แต่แตกออกมาทั้งหมดเพื่อเอาตำแหน่ง
    // console.log('value set', [province, country, lat, long, ...dates]) // ได้ country ซ้ำมาด้วย

    countList[country] = countList[country] || {} // ทุกๆการ วนทีละ country  จับยัดใส่ เป็น key ของ array countList
    // country ไม่ซ้ำ เพราะที่ซ้ำจะโดนรวม
    // console.log('countList', countList) // ได้ countList ที่มี key เป็น ประเทศทั้งหมด

    normalDates.forEach((date, val) => {
      // loop array normalDates แยก key, value ของ date นั้นๆ
      countList[country][date] = countList[country][date] || 0 // สร้าง key[date] ใน countList[ประเทศนั้นๆ]
      countList[country][date] += +dates[val] // จับยัดใส่ array countList[ประเทศนั้นๆ] ทุกเมืองของประเทศนั้นๆ
    })
  })

  // console.log('countList', countList)
  return [countList, normalDates]
}

export default async function covid19(req, res) {
  const [confirmed, dates] = await extract(urlConfirmed)
  const [recovered] = await extract(urlRecovered)
  const [deaths] = await extract(urlDeaths)

  const countries = Object.keys(confirmed) // ex: [confirmed['Thailand']]
  const results = {}

  countries.forEach(country => {
    // console.log(country)
    results[country] = dates.map(date => {
      // console.log(date)
      return {
        date,
        confirmed: confirmed[country][date],
        deaths: deaths[country][date],
        recovered: recovered[country][date],
      }
    })
  })

  res.status(200).json(JSON.stringify(results, null, 2))
}
