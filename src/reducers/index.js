import {LoginUser} from '../actions';
import {LOGIN, LOGOUT, REGISTER} from '../actions/types';

const INITIAL_STATE = {
    LOGGED_IN: false,
    USER: {},
    THEME: "light",
    user:localStorage.getItem('userInfo')? JSON.parse(localStorage.getItem('userInfo'))[0]:{},
    PROFILE:{
      fullName: 'Augustus Otu'
    }
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
                user: action.payload
            }     
        default:
            return state;    

    }
}

export default Reducer;