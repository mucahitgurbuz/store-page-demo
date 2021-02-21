import { Box, Flex } from 'bumbag'
import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { getCompanies } from '../../../state/redux/actions/companiesActions'
import { getItems } from '../../../state/redux/actions/itemsActions'
import Checkout from '../../organisms/Checkout/Checkout'
import Filters from '../../organisms/Filters/Filters'
import ProductList from '../../organisms/ProductList/ProductList'

const Store: React.FC = () => {
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(getCompanies())
    dispatch(getItems(1))
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

export default Store
