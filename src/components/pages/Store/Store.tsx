import { Box, Flex } from 'bumbag'
import React from 'react'
import Checkout from '../../organisms/Checkout/Checkout'
import Filters from '../../organisms/Filters/Filters'
import ProductList from '../../organisms/ProductList/ProductList'

const Store = () => {
  return (
    <Flex paddingY="40px" paddingX="104px" gap="16px">
      <Box flex="1">
        <Filters />
      </Box>
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
