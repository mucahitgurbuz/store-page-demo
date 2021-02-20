import { Flex, Input, Text } from 'bumbag'
import React from 'react'
import CheckBox from '../../atoms/CheckBox/CheckBox'
import { Scrollbars } from 'react-custom-scrollbars'

interface IFilterBox {
  title: string
  categories: IFilterCategories[]
  onSelect: (label: string) => void
  onSearch: (query: string) => void
  searchPlaceholder: string
}

interface IFilterCategories {
  label: string
  count: number
  isSelected: boolean
}

const FilterBox: React.FC<IFilterBox> = ({ title, categories, onSelect, onSearch, searchPlaceholder }) => {
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
        <Input placeholder={searchPlaceholder} />
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
            {categories.map(category => (
              <CheckBox
                key={category.label}
                label={category.label}
                isSelected={category.isSelected}
                count={category.count}
                onClick={() => null}
              />
            ))}
          </Flex>
        </Scrollbars>
      </Flex>
    </Flex>
  )
}

export default FilterBox
