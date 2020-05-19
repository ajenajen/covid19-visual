import React from 'react'
import { Flex, Box } from '@grid'

import * as CaseService from '@features/case/services'
import { Fetch } from '@lib/api'

export default function Table() {
  return (
    <Fetch service={() => CaseService.getUpdateCase()}>
      {({ data }) => console.log('client data =>', data)}
    </Fetch>
  )
}
