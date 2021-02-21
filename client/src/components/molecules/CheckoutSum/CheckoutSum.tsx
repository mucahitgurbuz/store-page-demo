import { Flex } from 'bumbag'
import React from 'react'
import { useSelector } from 'react-redux'

const CheckoutSum: React.FC = () => {
  const totalPrice = useSelector(state => state.bucket.totalPrice)
  return (
    <Flex alignSelf="flex-end" border="thick" borderRadius="xs" paddingX="24px" paddingY="16px">
      ₺{totalPrice.toFixed(2)}
    </Flex>
  )
}

export default CheckoutSum
