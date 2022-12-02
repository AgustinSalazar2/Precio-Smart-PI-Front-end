import {
    TYPES
} from "../types/typesCarrito";

export const cartReducer = (state, action) => {
    switch (action.type) {

        case TYPES.ADD_TO_CART: {
            let producto = action.payload.products.find((product) => product._id === action.payload.id)
            // console.log("El producto del carro: ", producto);
            let productoEnCarrito = state.cart.find((item) => item._id === producto._id)
            
            
            productoEnCarrito ? console.log("El producto que se repite:", productoEnCarrito) : console.log("Es otro producto")

           
            return productoEnCarrito
            ? {
                ...state,
                cart: state.cart.map( (item) =>
                    item._id === producto._id
                    ? { ...item, cantidad : item.cantidad + 1 }
                    : item
                )
            }
            : {
                ...state,
                cart: [...state.cart, { ...producto, cantidad: 1}]
            }
        }


        case TYPES.CLEAR_CART: {
            return {
                ...state,
                cart: []
            }
        }
        case TYPES.DELETE_ALL_FROM_CART: {

        }

        case TYPES.DELETE_ONE_FROM_CART: {

        }

        default:
            return state
    }
}