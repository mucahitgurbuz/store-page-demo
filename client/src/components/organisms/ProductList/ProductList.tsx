import { Flex, Text, Grid, Box } from 'bumbag'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getItems } from '../../../state/redux/actions/itemsActions'
import Pagination from '../../molecules/Pagination/Pagination'
import ProductItem from '../../molecules/ProductItem/ProductItem'
import ProductListCategoryToggle from '../../molecules/ProductListCategoryToggle/ProductListCategoryToggle'

const ProductList: React.FC = () => {
  const dispatch = useDispatch()
  const items = useSelector(state => state.items)
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
        {items.items.map(item => (
          <ProductItem key={item.slug} price={item.price} name={item.name} slug={item.slug} />
        ))}
      </Grid>
      <Box marginTop="32px" paddingX="36px">
        <Pagination
          pagination={{
            rowCount: items.pagination.count,
            pageCount: items.pagination.pageCount,
            pagination: { offset: 0, count: 16, currentPage: items.pagination.currentPage },
          }}
          handlePageNumberChange={currentPage => dispatch(getItems(currentPage))}
          pageNeighbours={3}
        />
      </Box>
    </Flex>
  )
}

export default ProductList
