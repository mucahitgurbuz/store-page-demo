import { Flex, Image, Text } from 'bumbag'
import { useSelector } from 'react-redux'
import React from 'react'

const Header: React.FC = () => {
  const totalPrice = useSelector(state => state.bucket.totalPrice)
  return (
    <Flex
      height="76px"
      backgroundColor="primary"
      justifyContent="center"
      alignItems="center"
      position="relative"
    >
      <Image src="/assets/img/logo.png" alt="logo" />
      <Flex
        justifyContent="center"
        alignItems="center"
        backgroundColor="primary100"
        padding="24px"
        position="absolute"
        right="104px"
        height="100%"
        color="white"
      >
        <Image src="/assets/img/basket.png" alt="basket" />
        <Text marginLeft="8px">₺ {totalPrice.toFixed(2)}</Text>
      </Flex>
    </Flex>
  )
}

export default Header
