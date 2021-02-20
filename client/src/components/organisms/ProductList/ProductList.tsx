import { Flex, Text, Grid, Box } from 'bumbag'
import React, { Dispatch, useEffect } from 'react'
import { connect } from 'react-redux'
import { AnyAction } from 'redux'
import { ThunkDispatch } from 'redux-thunk'
import { getCompanies } from '../../../state/redux/actions/companiesActions'
import { getItems } from '../../../state/redux/actions/itemsActions'
import Pagination from '../../molecules/Pagination/Pagination'
import ProductItem from '../../molecules/ProductItem/ProductItem'
import ProductListCategoryToggle from '../../molecules/ProductListCategoryToggle/ProductListCategoryToggle'

interface IProductList {
  getCompanies: () => void
  companies: any
  getItems: () => void
  items: any
}

const ProductList: React.FC<IProductList> = ({ getCompanies, companies, getItems, items }) => {
  useEffect(() => {
    getCompanies()
    getItems()
  }, [])
  console.log({ companies, items })

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

const mapStateToProps = (store): Partial<IProductList> => {
  return {
    companies: store.companies,
    items: store.items,
  }
}

export function mapDispatchToProps(
  dispatch: Dispatch<ThunkDispatch<any, any, AnyAction>>
): Partial<IProductList> {
  return {
    getCompanies: () => dispatch(getCompanies()),
    getItems: () => dispatch(getItems()),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ProductList)
