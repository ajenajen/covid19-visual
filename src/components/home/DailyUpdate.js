import React from 'react'
import { Flex, Box } from '@grid'
import MyCountryUpdate from './MyCountryUpdate'

export default function DailyUpdate() {
  return (
    <Flex flexWrap="wrap" justifyContent="flex-end" mx={'-7px'}>
      <Box width={[1 / 2, 1, 1, 3.25 / 10]} px={'7px'} mb={'15px'}>
        <MyCountryUpdate type={'confirmed'}></MyCountryUpdate>
      </Box>
      <Box width={[1 / 2, 1 / 3, 3 / 9, 2.25 / 10]} px={'7px'} mb={'10px'}>
        <MyCountryUpdate type={'recovered'}></MyCountryUpdate>
      </Box>
      <Box width={[1 / 2, 1 / 3, 3 / 9, 2.25 / 10]} px={'7px'} mb={'10px'}>
        <MyCountryUpdate type={'deaths'}></MyCountryUpdate>
      </Box>
    </Flex>
  )
}
