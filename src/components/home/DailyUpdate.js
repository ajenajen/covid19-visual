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
          <Flex flexWrap="wrap" justifyContent="flex-end" mx={'-7px'}>
            <Box width={[1, 1, 1, 5 / 10]} px={'7px'} mb={'15px'}>
              <CardStatus data={data} type={'confirmed'}></CardStatus>
            </Box>
            <Box width={[1 / 2, 1 / 2, 1 / 2, 2.5 / 10]} px={'7px'} mb={'10px'}>
              <CardStatus data={data} type={'recovered'}></CardStatus>
            </Box>
            <Box width={[1 / 2, 1 / 2, 1 / 2, 2.5 / 10]} px={'7px'} mb={'10px'}>
              <CardStatus data={data} type={'deaths'}></CardStatus>
            </Box>
          </Flex>
        )
      }}
    </Fetch>
  )
}
