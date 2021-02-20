import { Flex, Box } from 'bumbag'
import React from 'react'
import CheckoutProduct from '../../molecules/CheckoutProduct/CheckoutProduct'
import CheckoutSum from '../../molecules/CheckoutSum/CheckoutSum'

const Checkout: React.FC = () => {
  const checkoutProducts = [
    { title: 'Example Product 1', price: 14.99, count: 1 },
    { title: 'Example Product 2', price: 29.98, count: 2 },
    { title: 'Example Product 3', price: 29.99, count: 1 },
  ]
  return (
    <Box padding="8px" backgroundColor="primary" borderRadius="xs">
      <Flex flexDirection="column" borderRadius="xs" backgroundColor="white" padding="26px 16px 16px 16px">
        {checkoutProducts.map(product => (
          <React.Fragment key={product.title}>
            <CheckoutProduct product={product} />
            <Box backgroundColor="grey100" marginY="16px" height="1px" />
          </React.Fragment>
        ))}
        <CheckoutSum />
      </Flex>
    </Box>
  )
}

export default Checkout
