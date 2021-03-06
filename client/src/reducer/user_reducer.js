import {
    LOGIN_USER,
    REGISTER_USER,
    AUTH_USER,
    LOGOUT_USER,
    ADD_TO_CART_USER,
    GET_CART_ITEMS,
    REMOVE_FROM_CART
} from '../action/types'



export default function(state={},action){

    switch(action.type){
        case LOGIN_USER:
             return {...state, loginSuccess:action.payload}
        case REGISTER_USER:
             return {...state, register:action.payload}
        case AUTH_USER:
            return {...state, userData: action.payload}
        case LOGOUT_USER:
            return {...state}
        case ADD_TO_CART_USER:
            return {...state,userData:{
                ...state.userData,
               cart: action.payload
            }}
            case GET_CART_ITEMS:
                return{...state,cartDetails:action.payload}
            case REMOVE_FROM_CART:
                return{...state,
                     userData:{
                         ...state.userData,
                         cart:action.payload.cart
                     },
                     cartDetails:action.payload.cartDetails
                }
                default:
            return state; 
    }
}