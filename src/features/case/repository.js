import { fetchAPI } from '@lib/api'

export function getCaseData() {
  return fetchAPI({
    path: '/api/covid19',
    // params: { countries: countries },
  })
}
// export function getCaseDataByCountry(country) {
//   return fetchAPI({
//     path: `/api/covid19/${country}`,
//   })
// }
