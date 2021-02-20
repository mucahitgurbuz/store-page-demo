import { Box, Flex } from 'bumbag'
import React from 'react'
import Checkout from '../../organisms/Checkout/Checkout'
import ProductList from '../../organisms/ProductList/ProductList'

const Store = () => {
  return (
    <Flex paddingY="40px" paddingX="104px" gap="16px">
      <Box flex="1">AAa</Box>
      <Box flex="2">
        <ProductList />
      </Box>
      <Box flex="1">
        <Checkout />
      </Box>
    </Flex>
  )
}

export default Store
