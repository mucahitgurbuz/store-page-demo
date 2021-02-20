import { Box, Flex } from 'bumbag'
import React, { PropsWithChildren } from 'react'
import 'regenerator-runtime/runtime'
import Footer from '../molecules/Footer/Footer'
import Header from '../molecules/Header/Header'

export function Main(props: PropsWithChildren<any>) {
  return (
    <Flex height="100vh" width="full" flexDirection="column">
      <Header />
      <Box flexGrow="1">{props.children}</Box>
      <Footer />
    </Flex>
  )
}
