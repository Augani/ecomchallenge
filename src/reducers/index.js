import {LOGIN, LOGOUT, REGISTER, UPDATE_CART, DELETE_ITEM} from '../actions/types';

const INITIAL_STATE = {
    LOGGED_IN: false,
    PROFILE: localStorage.getItem('userInfo')|| {},
    CART: JSON.parse(localStorage.getItem('cart')) || []
};

const Reducer = (state = INITIAL_STATE,action)=>{
    switch(action.type){
        case LOGIN:
            return {
                ...state,
                LOGGED_IN: true,
                PROFILE: action.payload,
            }
         case LOGOUT:
             return {
                 ...state,
                 LOGGED_IN: false,
                 PROFILE: action.payload
             }   
        case REGISTER:
            return {
                ...state,
                PROFILE: action.payload
            }     
         case UPDATE_CART:
             return {
                 ...state,
                 CART: [...state.CART, action.payload]
             }   
          case DELETE_ITEM:
              return {
                  ...state,
                  CART: [...state.CART.filter(r=>r.id != action.payload.id)]
              }      
        default:
            return state;    

    }
}

export default Reducer;