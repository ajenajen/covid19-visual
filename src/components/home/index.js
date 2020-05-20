import React from 'react'
import { Flex, Box } from '@grid'

import withPage from '@lib/page/withPage'
import HeaderText from './HeaderText'
import DailyUpdate from './DailyUpdate'
import Table from './Table'
// import Chart from './Chart'

function HomePage() {
  return (
    <Flex flexWrap="wrap" mx={'-10px'}>
      <Box px={'5px'} width={[1, 1, 1, 1 / 5]} mb={['15px', '15px', '15px', 0]}>
        <HeaderText></HeaderText>
      </Box>
      <Box px={'5px'} width={[1, 1, 1 / 2, 1.75 / 5]}>
        <DailyUpdate />
      </Box>
      <Box px={'5px'} width={[1, 1, 1 / 2, 2.25 / 5]}>
        <Table />
        {/* <Chart type={'confirmed'}></Chart> */}
      </Box>
    </Flex>
  )
}

export default withPage()(HomePage)
