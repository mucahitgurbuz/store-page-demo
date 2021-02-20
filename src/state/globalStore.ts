import React from 'react'
import globalHook, { Store } from 'use-global-hook'
import { IGlobalActions, IGlobalStore } from './types'

export const initialState: IGlobalStore = {
  userInfo: undefined,
}

const actions: IGlobalActions = {
  clearState: (store: Store<Partial<IGlobalStore>, IGlobalActions>) => {
    store.setState(initialState)
  },
  setUserInfo: (store: Store<Partial<IGlobalStore>, IGlobalActions>, userInfo: any) => {
    store.setState({ userInfo })
  },
}

const useGlobalStore = globalHook<IGlobalStore, IGlobalActions>(React, initialState, actions)

export default useGlobalStore
