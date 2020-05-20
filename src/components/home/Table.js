import React, { Fragment } from 'react'
import { Flex, Box } from '@grid'

import * as CaseService from '@features/case/services'
import { Fetch } from '@lib/api'

export default function Table() {
  return (
    <Fetch service={() => CaseService.getUpdateCase()}>
      {({ data }) => {
        // eslint-disable-next-line no-lone-blocks
        {
          return (
            <Fragment my={'15px'}>
              <h2
                css={{
                  fontSize: '2.8em',
                  textAlign: 'center',
                  paddingTop: '27px',
                  paddingBottom: '20px',
                }}>
                World Update Case
              </h2>
              <table className="table" css={{ margin: '0' }}>
                <thead
                  css={{
                    background: 'linear-gradient(-20deg,#ffc107,#FF390E)',
                    color: '#fff',
                  }}>
                  <tr>
                    <th css={{ width: '150px' }}>State</th>
                    <th css={{ width: '18%' }}>Confirmed</th>
                    <th css={{ width: '18%' }}>Active</th>
                    <th css={{ width: '18%' }}>Recovered</th>
                    <th css={{ width: '18%' }}>Deaths</th>
                  </tr>
                </thead>
              </table>
              <div className="table-responsive" css={{ maxHeight: '300px' }}>
                <table className="table" css={{ position: 'relative' }}>
                  <tbody
                    css={{
                      background: '#fff',
                    }}>
                    {Object.keys(data).map((country, i) => (
                      <tr key={i}>
                        <td
                          css={{
                            textAlign: 'left !important',
                            width: '150px',
                          }}>
                          {country}
                        </td>
                        <td css={{ width: '18%' }}>
                          {data[country].confirmed}
                        </td>
                        <td css={{ width: '18%', color: '#FF390E' }}>
                          {data[country].confirmed -
                            data[country].recovered -
                            data[country].deaths}
                        </td>
                        <td css={{ width: '18%' }}>
                          {data[country].recovered}
                        </td>
                        <td css={{ width: '18%' }}>{data[country].deaths}</td>
                      </tr>
                      // console.log(data[country])
                    ))}
                  </tbody>
                </table>
              </div>
            </Fragment>
          )
        }
      }}
    </Fetch>
  )
}
