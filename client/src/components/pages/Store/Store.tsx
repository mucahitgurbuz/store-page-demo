import { Box, Flex } from 'bumbag'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getItems } from '../../../state/redux/actions/itemsActions'
import Checkout from '../../organisms/Checkout/Checkout'
import Filters from '../../organisms/Filters/Filters'
import ProductList from '../../organisms/ProductList/ProductList'

const Store: React.FC = () => {
  const dispatch = useDispatch()
  const activeFilters = useSelector(state => state.filters)
  useEffect(() => {
    dispatch(getItems(activeFilters))
  }, [activeFilters])
  return (
    <Flex
      paddingY="40px"
      paddingX={{ default: '104px', tablet: '64px', mobile: '32px' }}
      gap="16px"
      flexWrap="wrap"
    >
      <Box flex={{ default: '1', tablet: '1', mobile: '1' }} minWidth="232px">
        <Filters />
      </Box>
      <Box flex={{ default: '2', tablet: '1', mobile: '1' }} width="100%">
        <ProductList />
      </Box>
      <Box flex={{ default: '1', tablet: '1', mobile: '1' }} minWidth="232px">
        <Checkout />
      </Box>
    </Flex>
  )
}

export default Store
