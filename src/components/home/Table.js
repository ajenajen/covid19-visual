import React, { Fragment } from 'react'
import { Flex, Box } from '@grid'

import * as CaseService from '@features/case/services'
import { Fetch } from '@lib/api'

export default function Table() {
  return (
    <Fetch
      service={() => CaseService.getCaseByCountry({ country: 'Thailand' })}>
      {({ data }) => {
        // eslint-disable-next-line no-lone-blocks
        {
          return (
            <Flex className="box" my={'15px'}>
              <table className="table" css={{ margin: '0' }}>
                <thead
                  css={{
                    background:
                      'linear-gradient(118deg,#7367f0,rgba(115,103,240,.7))',
                    color: '#fff',
                  }}>
                  <tr>
                    <th css={{ width: '150px' }}>Date</th>
                    <th css={{ width: '18%' }}>Confirmed</th>
                    <th css={{ width: '18%' }}>Hospitalized</th>
                    <th css={{ width: '18%' }}>Recovered</th>
                    <th css={{ width: '18%' }}>Deaths</th>
                  </tr>
                </thead>
              </table>
              <div className="table-responsive" css={{ maxHeight: '300px' }}>
                <table className="table" css={{ position: 'relative' }}>
                  <tbody>
                    {Object.keys(data)
                      .reverse()
                      .map((country, i) => (
                        <tr key={i}>
                          <td
                            css={{
                              textAlign: 'left !important',
                              paddingLeft: '15px !important',
                              width: '150px',
                            }}>
                            {data[country].date}
                          </td>
                          <td css={{ width: '18%' }}>
                            {data[country].confirmed}{' '}
                            {/* <span css={{ color: 'red' }}>
                              ({data[country].newconfirmed})
                            </span> */}
                          </td>
                          <td css={{ width: '18%', color: '#ffc107' }}>
                            {data[country].hospitalized}
                          </td>
                          <td css={{ width: '18%' }}>
                            {data[country].recovered}{' '}
                            {/* <span css={{ color: 'green' }}>
                              ({data[country].newrecovered})
                            </span> */}
                          </td>
                          <td css={{ width: '18%' }}>
                            {data[country].deaths}{' '}
                            {/* <span css={{ color: 'red' }}>
                              ({data[country].newdeaths})
                            </span> */}
                          </td>
                        </tr>
                        // console.log(data[country])
                      ))}
                  </tbody>
                </table>
              </div>
            </Flex>
          )
        }
      }}
    </Fetch>
  )
}
