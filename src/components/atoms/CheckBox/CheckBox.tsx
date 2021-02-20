import { Flex, Text } from 'bumbag'
import React from 'react'
import { FaCheck } from 'react-icons/fa'

interface ICheckBox {
  isSelected: boolean
  label: string
  count?: number
  onClick: () => void
}

const CheckBox: React.FC<ICheckBox> = ({ isSelected, label, count, onClick }) => {
  return (
    <Flex alignItems="center" onClick={() => !isSelected && onClick()} cursor="pointer" paddingX="4px">
      <Flex
        justifyContent="center"
        alignItems="center"
        width="22px"
        height="22px"
        borderRadius="xs"
        flexShrink="0"
        backgroundColor={isSelected ? 'primary' : 'white'}
        altitude="100"
      >
        {isSelected && <FaCheck style={{ color: '#fff' }} fontSize="10px" />}
      </Flex>
      <Text marginLeft="12px">{label}</Text>
      {count && (
        <Text marginLeft="4px" color="black300">
          ({count})
        </Text>
      )}
    </Flex>
  )
}

export default CheckBox
