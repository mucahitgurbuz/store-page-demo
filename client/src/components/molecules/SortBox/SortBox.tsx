import { Flex, Text } from 'bumbag'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { FilterType, setActiveFilters } from '../../../state/redux/actions/filtersActions'
import { SortType } from '../../../state/redux/reducers/filters'
import RadioButton from '../../atoms/RadioButton/RadioButton'

const SortBox: React.FC = () => {
  const sortFilters = [
    { label: 'Price low to high', isSelected: true },
    { label: 'Price high to low', isSelected: false },
    { label: 'New to old', isSelected: false },
    { label: 'Old to new', isSelected: false },
  ]
  const dispatch = useDispatch()
  const activeSort = useSelector(state => state.filters.sort)
  return (
    <Flex flexDirection="column">
      <Text fontSize="13px" lineHeight="l" color="black400" fontWeight="600">
        Sorting
      </Text>
      <Flex
        flexDirection="column"
        gap="16px"
        marginTop="12px"
        borderRadius="xs"
        altitude="300"
        backgroundColor="white"
        padding="24px"
      >
        {Object.keys(SortType).map(sort => (
          <RadioButton
            key={SortType[sort]}
            isSelected={SortType[sort] === activeSort}
            label={SortType[sort]}
            onClick={() => dispatch(setActiveFilters({ type: FilterType.Sort, value: SortType[sort] }))}
          />
        ))}
      </Flex>
    </Flex>
  )
}

export default SortBox
