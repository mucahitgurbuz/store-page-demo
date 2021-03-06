import { Flex, Text, Grid, Box } from 'bumbag'
import React from 'react'
import Skeleton from 'react-loading-skeleton'
import { useDispatch, useSelector } from 'react-redux'
import { FilterType, setActiveFilters } from '../../../state/redux/actions/filtersActions'
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
        gridTemplateColumns={{ default: 'repeat(4, 1fr)', tablet: 'repeat(2,1fr)', mobile: 'repeat(1,1fr)' }}
        gridColumnGap="24px"
        gridRowGap="20px"
        padding="20px"
        backgroundColor="white"
        marginTop="16px"
        borderRadius="xs"
        altitude="200"
      >
        {items.loading
          ? [...Array(16)].map((each, i) => <Skeleton key={i.toString()} height="200px" />)
          : items.items?.map(item => (
              <ProductItem key={item.slug} price={item.price} name={item.name} slug={item.slug} />
            ))}
      </Grid>
      <Box marginTop="32px" paddingX={{ default: '36px', tablet: '6px', mobile: '6px' }}>
        {items.loading ? (
          <Flex justifyContent="space-between">
            <Skeleton height="40px" width="100px" />
            <Skeleton height="40px" width="200px" />
            <Skeleton height="40px" width="100px" />
          </Flex>
        ) : (
          <Pagination
            pagination={{
              rowCount: items.pagination.count,
              pageCount: items.pagination.pageCount,
              pagination: { offset: 0, count: 16, currentPage: items.pagination.activePage },
            }}
            handlePageNumberChange={currentPage =>
              dispatch(setActiveFilters({ type: FilterType.ActivePage, value: currentPage }))
            }
            pageNeighbours={2}
          />
        )}
      </Box>
    </Flex>
  )
}

export default ProductList
