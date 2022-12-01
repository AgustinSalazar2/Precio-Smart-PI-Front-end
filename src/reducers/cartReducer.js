
import { TYPES } from "../types/cartActions"



export const cartInitialState = {
    cart: {
        products: [],
        total: 0,
        loading: false,
        error: false,
    }
    
}


export function cartReducer(state, action) {
    switch (action.type) {
        case TYPES.ADD_TO_CART : {
            let newItem = state.products.find(
                (product) => product.id === action.payload
            )
            
            let itemInCart = state.cart.find(
                (item) => item.id === newItem.id
            )

            return itemInCart 
                ? {
                    ...state, 
                    cart: state.cart.map((item) => {
                        item.id === newItem.id 
                        ? { ...item, quantity: item.quantity + 1 }
                        : item
                    })
                }
                : {
                    ...state, 
                    cart: [ ...state.cart, { ...newItem, quantity: 1 } ]
                }

        }

        case TYPES.REMOVE_ONE_FROM_CART : {

        }

        case TYPES.REMOVE_ALL_FROM_CART : {

        }
        case TYPES.CLEAR_CART : {
            return {
                ...cartInitialState
            }
        }
        default: {
            return state;
        }
    }
}
