export const ADD_ITEM = 'ADD_ITEM'
export const REMOVE_ITEM = 'REMOVE_ITEM'

// Reducer Types

export type CartState = string[] | []

// Action Types

interface AddItemAction {
  type: string
  payload: string
}

interface RemoveItemAction {
  type: string
  payload: string
}

export type CartActionTypes = AddItemAction | RemoveItemAction
