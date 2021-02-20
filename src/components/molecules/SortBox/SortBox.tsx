import { Box, Flex, Text } from 'bumbag'
import React from 'react'
import RadioButton from '../../atoms/RadioButton/RadioButton'

const SortBox: React.FC = () => {
  const sortFilters = [
    { label: 'Price low to high', isSelected: true },
    { label: 'Price high to low', isSelected: false },
    { label: 'New to old', isSelected: false },
    { label: 'Old to new', isSelected: false },
  ]
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
        {sortFilters.map(filter => (
          <RadioButton
            key={filter.label}
            isSelected={filter.isSelected}
            label={filter.label}
            onClick={() => null}
          />
        ))}
      </Flex>
    </Flex>
  )
}

export default SortBox
