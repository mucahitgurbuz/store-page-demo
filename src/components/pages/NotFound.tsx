import { Box } from 'bumbag'
import React, { PropsWithChildren } from 'react'
import { useTranslation } from 'react-i18next'
import { useHistory } from 'react-router-dom'

export interface INotFound {}

function NotFound(props: PropsWithChildren<INotFound>) {
  return (
    <Box alignX="center" alignY="center" minHeight="100vh" backgroundColor="black">
      Not Found
    </Box>
  )
}

export default NotFound
