import React from 'react'
import { Flex, Box } from '@grid'
import CardStatus from './CardStatus'

export default function DailyUpdate() {
  return (
    <Flex flexWrap="wrap" justifyContent="flex-end" mx={'-7px'}>
      <Box width={[1 / 2, 1, 1, 3.25 / 10]} px={'7px'} mb={'15px'}>
        <CardStatus type={'Confirmed'}></CardStatus>
      </Box>
      <Box width={[1 / 2, 1 / 3, 3 / 9, 2.25 / 10]} px={'7px'} mb={'10px'}>
        <CardStatus type={'Hospitalized'}></CardStatus>
      </Box>
      <Box width={[1 / 2, 1 / 3, 3 / 9, 2.25 / 10]} px={'7px'} mb={'10px'}>
        <CardStatus type={'Recovered'}></CardStatus>
      </Box>
      <Box width={[1 / 2, 1 / 3, 3 / 9, 2.25 / 10]} px={'7px'} mb={'10px'}>
        <CardStatus type={'Deaths'}></CardStatus>
      </Box>
    </Flex>
  )
}
