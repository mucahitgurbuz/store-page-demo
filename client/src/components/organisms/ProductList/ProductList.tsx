import { Flex, Text, Grid, Box } from 'bumbag'
import React from 'react'
import Pagination from '../../molecules/Pagination/Pagination'
import ProductItem from '../../molecules/ProductItem/ProductItem'
import ProductListCategoryToggle from '../../molecules/ProductListCategoryToggle/ProductListCategoryToggle'

const ProductList: React.FC = () => {
  return (
    <Flex flexDirection="column">
      <Text fontSize="20px" color="black" lineHeight="sm">
        Products
      </Text>
      <ProductListCategoryToggle />
      <Grid
        gridTemplateColumns="repeat(4, 1fr)"
        gridColumnGap="24px"
        gridRowGap="20px"
        padding="20px"
        backgroundColor="white"
        marginTop="16px"
        borderRadius="xs"
        altitude="200"
      >
        {[...Array(16)].map(each => (
          <ProductItem />
        ))}
      </Grid>
      <Box marginTop="32px" paddingX="36px">
        <Pagination
          pagination={{ rowCount: 50, pageCount: 10, pagination: { offset: 10, count: 10, currentPage: 1 } }}
          handlePageNumberChange={() => null}
        />
      </Box>
    </Flex>
  )
}

export default ProductList
