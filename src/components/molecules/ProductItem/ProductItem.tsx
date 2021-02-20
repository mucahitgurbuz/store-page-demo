import { Flex, Text, Image } from 'bumbag'
import React from 'react'
import Button from '../../atoms/Button/Button'

const ProductItem: React.FC = () => {
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
      <Text fontFamily="price" lineHeight="l" marginTop="8px" color="primary">
        ₺ 14,99
      </Text>
      <Text fontWeight="bold" lineHeight="l" color="black700">
        Gorgeous Office Mug
      </Text>
      <Button styleProps={{ width: '100%', height: '22px', marginTop: '8px', fontSize: '12px' }}>Add</Button>
    </Flex>
  )
}

export default ProductItem
