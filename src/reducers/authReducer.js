import { type } from '../types/type'

export const authReducer = (state, action) => {
    switch (action.type) {
        case type.login:
            localStorage.setItem('user',JSON.stringify({
                ...action.payload,
                isLogged: true
            }))
            
            return {
                isLogged: true,
                ...action.payload
            }
        case type.logout:
            localStorage.setItem('user',JSON.stringify({
                isLogged: false
            }))
            
            return { isLogged: false }
        default:
            return state
    }
}