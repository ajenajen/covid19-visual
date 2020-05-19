const inputData = {
  USA: [
    {
      date: '2020-5-13',
      confirmed: 100000,
      deaths: 1000,
      recovered: 87654,
    },
    {
      date: '2020-5-14',
      confirmed: 107000,
      deaths: 2000,
      recovered: 90200,
    },
    {
      date: '2020-5-15',
      confirmed: 112500,
      deaths: 2400,
      recovered: 95000,
    },
  ],
  Thailand: [
    {
      date: '2020-5-13',
      confirmed: 3017,
      deaths: 56,
      recovered: 2798,
    },
    {
      date: '2020-5-14',
      confirmed: 3018,
      deaths: 57,
      recovered: 2798,
    },
    {
      date: '2020-5-15',
      confirmed: 3020,
      deaths: 58,
      recovered: 2799,
    },
  ],
}

const result = Object.keys(inputData)
  .map(country => {
    const today = inputData[country][inputData[country].length - 1]
    const yesterday = inputData[country][inputData[country].length - 2]
    // console.log('today', today)
    //   today { date: '2020-5-15', confirmed: 112500, deaths: 2400, recovered: 95000 }
    //   today { date: '2020-5-15', confirmed: 3020, deaths: 58, recovered: 2799 }

    const data = {
      ...today,
      newConfirmed: today.confirmed - yesterday.confirmed,
      newRecovered: today.recovered - yesterday.recovered,
      newDeaths: today.deaths - yesterday.deaths,
    }
    return { country, data } // ตรงนี้จะออกมาเป็น array ที่มี property name ว่า country และ data
  })
  .reduce((prev, cur) => {
    return {
      ...prev,
      [cur.country]: cur.data,
    }
  }, {})
// console.log('result', result)

export default function miniquiz2(req, res) {
  res.status(200).json(JSON.stringify(result, null, 2))
}

//  output =
//   {
//     "USA":{
//       "date":"2020-5-15",
//       "confirmed":112500,
//       "recovered":2400,
//       "deaths":95000,
//       "newConfirmed":5500,
//       "newRecovered":4800,
//       "newDeaths":400
//     },
//     "Thailand":{
//       "date":"2020-5-15",
//       "confirmed":3020,
//       "recovered":2799,
//       "deaths":58,
//       "newConfirmed":2,
//       "newRecovered":2,
//       "newDeaths":1
//     }
//   }

// https://babeljs.io/repl#?browsers=defaults%2C%20not%20ie%2011%2C%20not%20ie_mob%2011&build=&builtIns=false&spec=false&loose=false&code_lz=MYewdgzgLgBAlmADgV1gXhgbwFAxgIgFUBlAQXwC4BtXPLWuggEwEMoBTS_AJgAY-AtAFYBARgDM-ADQM6-UGABmcAE4Bbdk0qjeu3TMZ58TdmwAWEbXoOH8K9qABu7e1ooAOAOwA2IQBZZAF8bPBxDZjZOCh5-XmExP2lZIwVldU0rT2tk5lMoC0o-fRy7BxBnV0oATljeIJD6cONIrj5BEVEhJKbU1Q03UVFuIWKmk3NLCm4_Udt7JxcMiiqR3SDaAF0bfAAVMxY4ABsWMDcaRjDbVg5W2PiJbtte9LdxXlFPBqNx_Mmhby-BHm5UWbm4niq7nqskujGaN2ibTiHUSgPk4DS_Uob1E7jRPwKFCEnxKwIqS3BkOhFxK1yiMXaYi6aOeWIobz4-LyhKEeNJZXJYIhVXWeA22EC2GwCmgMBAqBQ6BgAHkAEYAKwcUAAdABrdgATwgAAoEIqAJTatQsRDG42gZBgKAqA1SeCndgAD3NMDQAD5GjAZbAoCBWAbfe7FVQHU6XRsqGbUDH5XGDRttYd2GAAOb5GACGCicV4YMwA3saAucORpNQFOO53pxNIZOxpsZrO5_OF7glmC0MvXFiR2EwbUT0PhhpgdgAdwAwhi-poKDApywDdrWZoC-XKxwVOHt8uXjP5wAlAWgtcbrdk0F7itVo-b7UP1znucAEW5EFvYZvgSEBPge1ZAX-tCSngtD2FAyAqGAgalqmTYNMOUESparjIMA7B2og9iOG6wAIT6_qBnBCFIWOE7aoR7DEbIMYISejbxmupEqNqGF4JKwRYIE5pSjKIBZpmIA5sa8pQBaUoAPTyUG4CyjJiq-tgin0FpRgkOQFA4Dpch0rcjKdEkRkpKebKDMMxSWUC16VFMMy8DIDnGH-1SrG5mlKXCs6LtZSxCKs7n-XIgVXgszl-O49kRUYgW_hMlCuX5dDBBlRh7AcxynJQhmJRECIMsiTIWcV6JKCuryxOFcxORSwoNXCwGULyrWRfOS41S8hRdUll5NWCg0EMlXkUKI2UwJKWmStgQA&debug=false&forceAllTransforms=false&shippedProposals=false&circleciRepo=&evaluate=true&fileSize=false&timeTravel=false&sourceType=module&lineWrap=false&presets=es2015%2Cstage-0%2Cflow&prettier=false&targets=&version=7.9.6&externalPlugins=
