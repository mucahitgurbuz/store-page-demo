import { Box, Flex } from 'bumbag'
import React, { Dispatch, useEffect } from 'react'
import { connect } from 'react-redux'
import { AnyAction } from 'redux'
import { ThunkDispatch } from 'redux-thunk'
import { getCompanies } from '../../../state/redux/actions/companiesActions'
import { getItems } from '../../../state/redux/actions/itemsActions'
import Checkout from '../../organisms/Checkout/Checkout'
import Filters from '../../organisms/Filters/Filters'
import ProductList from '../../organisms/ProductList/ProductList'

interface IStore {
  getCompanies: () => void
  getItems: (pageNumber: number) => void
}

const Store: React.FC<IStore> = ({ getCompanies, getItems }) => {
  useEffect(() => {
    getCompanies()
    getItems(1)
  }, [])
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

export function mapDispatchToProps(dispatch: Dispatch<ThunkDispatch<any, any, AnyAction>>): Partial<IStore> {
  return {
    getCompanies: () => dispatch(getCompanies()),
    getItems: pageNumber => dispatch(getItems(pageNumber)),
  }
}

export default connect(null, mapDispatchToProps)(Store)
