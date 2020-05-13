import {LOGIN, LOGOUT, REGISTER} from './types'


export const LoginUser = data =>{
    return {
        payload: data,
        type: LOGIN
    }
}

export const LogoutUser  = ()=>{
    return {
        payload: {},
        type: LOGOUT
    }
}

export const RegisterUser = data =>{
    localStorage.setItem('userInfo', JSON.stringify([data]))
    return{
        payload: data,
        type: REGISTER
    }
}