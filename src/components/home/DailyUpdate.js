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
            <Box width={[1 / 2, 1, 1, 3.5 / 10]} px={'7px'} mb={'15px'}>
              <CardStatus data={data[0]} type={'confirmed'}></CardStatus>
            </Box>
            <Box
              width={[1 / 2, 1 / 2, 4 / 8, 3.25 / 10]}
              px={'7px'}
              mb={'10px'}>
              <CardStatus data={data[0]} type={'recovered'}></CardStatus>
            </Box>
            <Box
              width={[1 / 2, 1 / 2, 4 / 8, 3.25 / 10]}
              px={'7px'}
              mb={'10px'}>
              <CardStatus data={data[0]} type={'deaths'}></CardStatus>
            </Box>
          </Flex>
        )
      }}
    </Fetch>
  )
}
