import { Flex, Text } from 'bumbag'
import React from 'react'
import Button from '../../atoms/Button/Button'

interface ICheckoutProduct {
  product: IProduct
}

interface IProduct {
  title: string
  price: number
  count: number
}

const CheckoutProduct: React.FC<ICheckoutProduct> = ({ product }) => {
  return (
    <Flex justifyContent="space-between" alignItems="center" paddingX="6px">
      <Flex flexDirection="column" gap="4px" lineHeight="sm">
        <Text color="black700">{product.title}</Text>
        <Text color="primary">₺{product.price}</Text>
      </Flex>
      <Flex alignItems="center">
        <Button isGhost styleProps={{ fontSize: '18px', fontWeight: 'normal' }}>
          -
        </Button>
        <Flex
          width="32px"
          height="32px"
          justifyContent="center"
          alignItems="center"
          backgroundColor="primary"
          color="white"
          marginX="12px"
        >
          {product.count}
        </Flex>
        <Button isGhost styleProps={{ fontSize: '18px', fontWeight: 'normal' }}>
          +
        </Button>
      </Flex>
    </Flex>
  )
}

export default CheckoutProduct
