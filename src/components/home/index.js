import React from 'react'
import { Flex, Box } from '@grid'

import * as CaseService from '@features/case/services'
import { Fetch } from '@lib/api'

import withPage from '@lib/page/withPage'
import HeaderText from './HeaderText'
import DailyUpdate from './DailyUpdate'
import Table from './Table'
// import Chart from './Chart'

function HomePage() {
  return (
    <Fetch
      service={() =>
        CaseService.getCaseDailyByCountry({ country: 'Thailand' })
      }>
      {({ data }) => <Table data={data} />}
    </Fetch>
    // <Fetch
    //   service={() => CaseService.getCaseByCountry({ country: 'Thailand' })}>
    //   {({ data }) => <Table data={data} />}
    // </Fetch>
    // <Flex flexWrap="wrap" mx={'-10px'}>
    //   <Box px={'10px'} width={[1, 1, 1 / 3, 1 / 4]} mb={['15px', '15px', 0, 0]}>
    //     <HeaderText></HeaderText>
    //   </Box>
    //   <Box px={'10px'} width={[1, 1, 2 / 3, 3 / 4]}>
    //     <DailyUpdate></DailyUpdate>
    //   </Box>
    //   <Box px={'10px'} width={1}>

    //     <Table></Table>
    //     {/* <Chart type={'confirmed'}></Chart> */}
    //   </Box>
    // </Flex>
  )
}

export default withPage()(HomePage)
