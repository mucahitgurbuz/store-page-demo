import { Flex, Text, Image } from 'bumbag'
import React from 'react'
import Button from '../../atoms/Button/Button'
import { useDispatch, useSelector } from 'react-redux'
import { addItemToBucket, removeItemFromBucket } from '../../../state/redux/actions/bucketActions'

interface IProductItem {
  price: number
  name: string
  slug: string
}

const ProductItem: React.FC<IProductItem> = ({ price, name, slug }) => {
  const dispatch = useDispatch()
  const isInBucket = useSelector(
    state => state.bucket.bucketItems.filter(item => item.itemSlug === slug).length > 0
  )
  return (
    <Flex flexDirection="column">
      <Flex width="100%" padding="16px" border="primary" borderRadius="lg">
        <Image
          objectFit="cover"
          width="100%"
          height="92px"
          src="https://www.apple.com/v/product-red/o/images/meta/og__dbjwy50zuc02.png?202012220707"
        />
      </Flex>
      <Text fontFamily="price" lineHeight="xl" marginTop="8px" color="primary">
        ₺ {price}
      </Text>
      <Text fontWeight="bold" lineHeight="xl" color="black700">
        {name}
      </Text>
      <Button
        styleProps={{
          width: '100%',
          backgroundColor: isInBucket ? 'red' : 'primary',
          height: '22px',
          marginTop: '8px',
          fontSize: '12px',
          _hover: { backgroundColor: isInBucket ? 'red100' : 'primary100' },
        }}
        onClick={() =>
          isInBucket
            ? dispatch(removeItemFromBucket(slug))
            : dispatch(addItemToBucket({ itemSlug: slug, price, name }))
        }
      >
        {isInBucket ? 'Remove' : 'Add'}
      </Button>
    </Flex>
  )
}

export default ProductItem
