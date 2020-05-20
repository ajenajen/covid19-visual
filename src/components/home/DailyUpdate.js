import React from 'react'
import { Flex, Box } from '@grid'
import CardStatus from './CardStatus'

import * as CaseService from '@features/case/services'
import { Fetch } from '@lib/api'

export default function DailyUpdate() {
  return (
    <Fetch
      service={() =>
        CaseService.getUpdateCaseByCountry({ country: 'Thailand' })
      }>
      {({ data }) => {
        return (
          <Flex flexWrap="wrap" justifyContent="flex-end" mx={'-5px'}>
            <Box width={[1, 1]} px={'5px'} mb={'10px'}>
              <CardStatus data={data} type={'confirmed'}></CardStatus>
            </Box>
            <Box width={[1, 1 / 2]} px={'5px'} mb={'5px'}>
              <CardStatus data={data} type={'recovered'}></CardStatus>
            </Box>
            <Box width={[1, 1 / 2]} px={'5px'} mb={'5px'}>
              <CardStatus data={data} type={'deaths'}></CardStatus>
            </Box>
          </Flex>
        )
      }}
    </Fetch>
  )
}
