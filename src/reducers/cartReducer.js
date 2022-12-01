import { TYPES } from "../types/typesCarrito";

export const cartReducer = (state, action) => {
    switch (action.type) {
        case TYPES.ADD_TO_CART:{
            const producto = action.payload.products.find((product)=>product._id===action.payload.id)
            return {
                ...state,
                cart: [...state.cart, producto]
            }
        }
        case TYPES.CLEAR_CART: {
            return {
                ...state,
                cart: []
            }
        }
        
        default:
            return state
    }
}

