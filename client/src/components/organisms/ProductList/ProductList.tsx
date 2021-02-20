import { Flex, Text, Grid, Box } from 'bumbag'
import React, { Dispatch, useState } from 'react'
import { connect } from 'react-redux'
import { AnyAction } from 'redux'
import { ThunkDispatch } from 'redux-thunk'
import { getItems } from '../../../state/redux/actions/itemsActions'
import Pagination from '../../molecules/Pagination/Pagination'
import ProductItem from '../../molecules/ProductItem/ProductItem'
import ProductListCategoryToggle from '../../molecules/ProductListCategoryToggle/ProductListCategoryToggle'

interface IProductList {
  items: any
  onPageChange: (currentPage: number) => void
}

const ProductList: React.FC<IProductList> = ({ items, onPageChange }) => {
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
        {items.items.map(each => (
          <ProductItem />
        ))}
      </Grid>
      <Box marginTop="32px" paddingX="36px">
        <Pagination
          pagination={{
            rowCount: items.pagination.count,
            pageCount: items.pagination.pageCount,
            pagination: { offset: 0, count: 16, currentPage: items.pagination.currentPage },
          }}
          handlePageNumberChange={onPageChange}
          pageNeighbours={3}
        />
      </Box>
    </Flex>
  )
}

const mapStateToProps = (store): Partial<IProductList> => {
  return {
    items: store.items,
  }
}

export function mapDispatchToProps(
  dispatch: Dispatch<ThunkDispatch<any, any, AnyAction>>
): Partial<IProductList> {
  return {
    onPageChange: currentPage => dispatch(getItems(currentPage)),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ProductList)
