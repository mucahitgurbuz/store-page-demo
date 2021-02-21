import { Flex } from 'bumbag'
import React from 'react'
import { ItemCategory } from '../../../state/redux/reducers/filters'
import Button from '../../atoms/Button/Button'
import { useSelector, useDispatch } from 'react-redux'
import { FilterType, setActiveFilters } from '../../../state/redux/actions/filtersActions'

const ProductListCategoryToggle: React.FC = () => {
  const dispatch = useDispatch()
  const activeItemCategory = useSelector(state => state.filters.category)
  return (
    <Flex gap="8px" marginTop="16px">
      {Object.keys(ItemCategory).map(category => (
        <Button
          key={ItemCategory[category]}
          styleProps={{
            height: '30px',
            paddingX: '16px',
            backgroundColor: ItemCategory[category] === activeItemCategory ? 'primary' : 'ghostWhite',
            color: ItemCategory[category] === activeItemCategory ? 'ghostWhite' : 'primary',
            fontSize: '13px',
            _hover: {
              backgroundColor: ItemCategory[category] === activeItemCategory ? 'primary100' : 'ghostWhite100',
            },
          }}
          onClick={() =>
            dispatch(setActiveFilters({ type: FilterType.Category, value: ItemCategory[category] }))
          }
        >
          {ItemCategory[category]}
        </Button>
      ))}
    </Flex>
  )
}

export default ProductListCategoryToggle
