import { Flex } from 'bumbag'
import React from 'react'
import FilterBox from '../../molecules/FilterBox/FilterBox'
import SortBox from '../../molecules/SortBox/SortBox'

const Filters: React.FC = () => {
  return (
    <Flex flexDirection="column" gap="24px">
      <SortBox />
      <FilterBox
        title="Brands"
        searchPlaceholder="Search brand"
        categories={[
          { label: 'All', count: 18, isSelected: true },
          { label: 'Konopelski Group', count: 9, isSelected: false },
          { label: 'Rice Inc', count: 4, isSelected: false },
          { label: 'Rice Inc', count: 4, isSelected: false },
          { label: 'Rice Inc', count: 4, isSelected: false },
        ]}
        onSearch={() => null}
        onSelect={() => null}
      />
      <FilterBox
        title="Tags"
        searchPlaceholder="Search tag"
        categories={[
          { label: 'All', count: 18, isSelected: true },
          { label: 'Beach', count: 9, isSelected: false },
          { label: 'People', count: 4, isSelected: true },
          { label: 'Houses', count: 2, isSelected: false },
          { label: 'Trees', count: 1, isSelected: false },
        ]}
        onSearch={() => null}
        onSelect={() => null}
      />
    </Flex>
  )
}

export default Filters
