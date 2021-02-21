import { Flex, Input, Text } from 'bumbag'
import React, { useEffect, useState } from 'react'
import CheckBox from '../../atoms/CheckBox/CheckBox'
import { Scrollbars } from 'react-custom-scrollbars'

interface IFilterBox {
  title: string
  categories: IFilterCategories[]
  onSelect: (label: string) => void
  searchPlaceholder: string
}

interface IFilterCategories {
  label: string
  count?: number
  slug?: string
  isSelected: boolean
}

const FilterBox: React.FC<IFilterBox> = ({ title, categories, onSelect, searchPlaceholder }) => {
  const [filteredCategories, setFilteredCategories] = useState<IFilterCategories[]>([])
  const [searchText, setSearchText] = useState('')
  useEffect(() => {
    setFilteredCategories(categories.filter(category => category.label.includes(searchText)))
  }, [searchText, categories])
  const handleSearch = e => {
    setSearchText(e.target.value)
  }
  return (
    <Flex flexDirection="column">
      <Text fontSize="13px" lineHeight="l" color="black400" fontWeight="600">
        {title}
      </Text>
      <Flex
        flexDirection="column"
        gap="16px"
        marginTop="12px"
        borderRadius="xs"
        altitude="300"
        backgroundColor="white"
        padding="24px"
        maxHeight="244px"
      >
        <Input
          placeholder={searchPlaceholder}
          onChange={handleSearch}
          value={searchText ? searchText : undefined}
        />
        <Scrollbars
          style={{ height: '310px' }}
          renderTrackHorizontal={props => (
            <div {...props} style={{ display: 'none' }} className="track-horizontal" />
          )}
          renderThumbVertical={({ style, ...props }) => (
            <div
              {...props}
              style={{ ...style, backgroundColor: '#E0E0E0', borderRadius: '4px', width: '4px' }}
            />
          )}
        >
          <Flex flexDirection="column" gap="18px" paddingY="4px">
            {filteredCategories.map(category => (
              <CheckBox
                key={category.label}
                label={category.label}
                isSelected={category.isSelected}
                count={category.count}
                onClick={() => category.slug && onSelect(category.slug)}
              />
            ))}
          </Flex>
        </Scrollbars>
      </Flex>
    </Flex>
  )
}

export default FilterBox
