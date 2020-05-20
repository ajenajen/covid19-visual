import React from 'react'
import { Flex, Box } from '@grid'

import withPage from '@lib/page/withPage'
import HeaderText from './HeaderText'
import DailyUpdate from './DailyUpdate'
import WorldUpdate from './WorldUpdate'
import Table from './Table'
// import Chart from './Chart'

function HomePage() {
  return (
    <Flex flexWrap="wrap" mx={'-10px'}>
      <Box px={'5px'} width={[1, 1, 1, 1 / 5]} mb={['15px', '15px', '15px', 0]}>
        <HeaderText></HeaderText>
      </Box>
      <Box px={'5px'} width={[1, 1, 1, 4 / 5]}>
        <DailyUpdate />
      </Box>
      <Box px={'5px'} width={[1, 1, 1 / 2]}>
        {/* <Chart type={'confirmed'}></Chart> */}
      </Box>
      <Box px={'5px'} width={[1, 1, 1 / 2]}>
        <Table />
      </Box>
      <Box px={'5px'} width={[1]}>
        {/* <WorldUpdate /> */}
      </Box>
    </Flex>
  )
}

export default withPage()(HomePage)
