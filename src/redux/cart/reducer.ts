import { CartState, CartActionTypes, ADD_ITEM, REMOVE_ITEM } from './types'

const initialState: CartState = []

export const cartReducer = (
  state = initialState,
  action: CartActionTypes
): CartState => {
  switch (action.type) {
    case ADD_ITEM:
      return [...state, action.payload]
    case REMOVE_ITEM:
      return [...state, action.payload]
    default:
      return state
  }
}
