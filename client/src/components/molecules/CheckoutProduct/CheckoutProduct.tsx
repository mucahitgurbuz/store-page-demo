import { Flex, Text } from 'bumbag'
import React from 'react'
import Button from '../../atoms/Button/Button'
import { useDispatch } from 'react-redux'
import { addItemToBucket, removeItemFromBucket } from '../../../state/redux/actions/bucketActions'

interface ICheckoutProduct {
  product: IProduct
}

interface IProduct {
  name: string
  price: number
  count: number
  itemSlug: string
}

const CheckoutProduct: React.FC<ICheckoutProduct> = ({ product }) => {
  const dispatch = useDispatch()
  return (
    <Flex justifyContent="space-between" alignItems="center" paddingX="6px">
      <Flex flexDirection="column" gap="4px" lineHeight="sm">
        <Text color="black700">{product.name}</Text>
        <Text color="primary">₺{product.price}</Text>
      </Flex>
      <Flex alignItems="center">
        <Button
          isGhost
          styleProps={{ fontSize: '18px', fontWeight: 'normal' }}
          onClick={() => dispatch(removeItemFromBucket(product.itemSlug, true))}
        >
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
        <Button
          isGhost
          styleProps={{ fontSize: '18px', fontWeight: 'normal' }}
          onClick={() => dispatch(addItemToBucket(product))}
        >
          +
        </Button>
      </Flex>
    </Flex>
  )
}

export default CheckoutProduct
