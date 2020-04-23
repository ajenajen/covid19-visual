import React from 'react'
import { Flex, Box } from '@grid'
import withPage from '@lib/page/withPage'
import styled from 'styled-components'

const HomePageWrapper = styled.div`
  background: #eee;
  display: block;
  width: 100%;
  min-height: 300px;
`

function HomePage() {
  return (
    <HomePageWrapper>
      <Flex flexWrap="wrap" css={{ padding: '60px 120px' }}>
        <Box width={1}>
          <h1
            css={{
              fontSize: '2em',
              padding: '50px 10px 10px',
            }}>
            Home Page
          </h1>
        </Box>
      </Flex>
    </HomePageWrapper>
  )
}

export default withPage()(HomePage)
