import { Flex } from 'bumbag'
import React from 'react'
import Button from '../../atoms/Button/Button'

const ProductListCategoryToggle: React.FC = () => {
  const productCategories = [
    { title: 'mug', isActive: true },
    { title: 'shirt', isActive: false },
  ]
  return (
    <Flex gap="8px" marginTop="16px">
      {productCategories.map(category => (
        <Button
          key={category.title}
          styleProps={{
            height: '30px',
            paddingX: '16px',
            backgroundColor: category.isActive ? 'primary' : 'ghostWhite',
            color: category.isActive ? 'ghostWhite' : 'primary',
            fontSize: '13px',
            _hover: { backgroundColor: category.isActive ? 'primary100' : 'ghostWhite100' },
          }}
        >
          {category.title}
        </Button>
      ))}
    </Flex>
  )
}

export default ProductListCategoryToggle
