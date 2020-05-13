import {LOGIN, LOGOUT, REGISTER, UPDATE_CART, DELETE_ITEM} from './types'


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
export const UpdateCart  = data=>{
    var f = JSON.parse(localStorage.getItem('cart'))|| [];
    f.push(data);
    localStorage.setItem('cart', JSON.stringify(f));
    return {
        payload: data,
        type: UPDATE_CART
    }
}

export const DeleteItem = data =>{
    var f = JSON.parse(localStorage.getItem('cart'))|| [];
    f = f.filter(v=>v.id != data.id);
    localStorage.setItem('cart', JSON.stringify(f));
    return {
        payload: data,
        type: DELETE_ITEM
    }
}

export const RegisterUser = data =>{
    localStorage.setItem('userInfo', JSON.stringify([data]))
    return{
        payload: data,
        type: REGISTER
    }
}