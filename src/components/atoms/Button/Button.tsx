import { Flex, FlexProps } from 'bumbag'
import React from 'react'

interface IButton {
  disabled?: boolean
  isGhost?: boolean
  styleProps?: FlexProps
  icon?: JSX.Element
  iconPosition?: 'left' | 'right'
}

const Button: React.FC<IButton> = ({ children, disabled, isGhost, styleProps, icon, iconPosition }) => {
  return (
    <Flex
      alignItems="center"
      justifyContent="center"
      backgroundColor={isGhost ? 'transparent' : 'primary'}
      color={isGhost ? 'primary' : 'white'}
      borderRadius="xs"
      gap="12px"
      cursor={disabled ? 'not-allowed' : 'pointer'}
      fontWeight="bold"
      _hover={{
        color: isGhost ? 'primary100' : 'white',
        backgroundColor: isGhost ? 'transparent' : 'primary100',
      }}
      disabled={disabled}
      {...styleProps}
    >
      {icon && iconPosition === 'left' && icon}
      {children}
      {icon && iconPosition === 'right' && icon}
    </Flex>
  )
}

export default Button
