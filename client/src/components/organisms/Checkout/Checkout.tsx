import { Flex, Box, Text } from 'bumbag'
import React from 'react'
import { useSelector } from 'react-redux'
import CheckoutProduct from '../../molecules/CheckoutProduct/CheckoutProduct'
import CheckoutSum from '../../molecules/CheckoutSum/CheckoutSum'

const Checkout: React.FC = () => {
  const bucket = useSelector(state => state.bucket)

  return (
    <Box padding="8px" backgroundColor="primary" borderRadius="xs">
      <Flex flexDirection="column" borderRadius="xs" backgroundColor="white" padding="26px 16px 16px 16px">
        {bucket.bucketItems.length ? (
          bucket.bucketItems.map(item => (
            <React.Fragment key={item.itemSlug}>
              <CheckoutProduct product={item} />
              <Box backgroundColor="grey100" marginY="16px" height="1px" />
            </React.Fragment>
          ))
        ) : (
          <Text>No items in the bucket.</Text>
        )}
        <CheckoutSum />
      </Flex>
    </Box>
  )
}

export default Checkout
