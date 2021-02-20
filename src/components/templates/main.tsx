import React, { PropsWithChildren } from 'react'
import 'regenerator-runtime/runtime'

export function Main(props: PropsWithChildren<any>) {
  return <>{props.children}</>
}
