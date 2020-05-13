import React from 'react'
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from 'recharts'
import colors from '@features/_ui/config/colors'

import * as ConfirmCaseService from '@features/confirmcase/services'
import { Fetch } from '@lib/api'

Chart.defaultProps = {
  data: [
    {
      name: 'Page A',
      date: '1/22/20',
      uv: 4000,
      pv: 2400,
      amt: 2400,
    },
    {
      name: 'Page B',
      date: '1/23/20',
      uv: 3000,
      pv: 1398,
      amt: 2210,
    },
    {
      name: 'Page C',
      date: '1/24/20',
      uv: 2000,
      pv: 9800,
      amt: 2290,
    },
    {
      name: 'Page D',
      date: '1/25/20',
      uv: 2780,
      pv: 3908,
      amt: 2000,
    },
  ],
}

export default function Chart({ data }) {
  return (
    <Fetch service={() => ConfirmCaseService.getConfirmCase()}>
      {({ data }) => {
        return (
          <div
            css={{
              backgroundColor: colors.background.transparent,
              padding: '15px 15px 0 0',
              margin: '15px 0',
              width: '100%',
              height: 400,
            }}>
            <ResponsiveContainer>
              <LineChart data={data}>
                <XAxis dataKey="date" />
                <YAxis />
                <Tooltip dataKey="name" />
                <Line
                  type="monotone"
                  dataKey="pv"
                  stroke="#9e0b0f"
                  activeDot={{ r: 6 }}
                />
                <Line
                  type="monotone"
                  dataKey="uv"
                  stroke="#b7b7b7"
                  activeDot={{ r: 3 }}
                />
              </LineChart>
            </ResponsiveContainer>
          </div>
        )
      }}
    </Fetch>
  )
}
