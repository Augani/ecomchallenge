import React from 'react'
import { connect } from 'react-redux'
import Button from '@material-ui/core/Button'
import { Link } from 'react-router-dom'

function Login() {
    return (
        <div className="h-full w-full flex flex-col justify-center items-center ">
        <form className="w-1/4 loginForm flex flex-col">
        <h2 className="logo  text-4xl mainLog text-center text-black font-black">OSEI SRIBOE</h2>
        <div classname="mb-4  w-full ">
      <label className="block text-gray-700 text-sm font-bold mb-2" for="username">
        Email/ Username
      </label>
      <input class="shadow appearance-none border rounded w-full py-4 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" type="text" placeholder="Username"/>
    </div>
    <div classname="mb-3 w-full ">
      <label className="block text-gray-700 text-sm font-bold mb-2" for="username">
        Password
      </label>
      <input class="shadow appearance-none border rounded w-full py-4 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" type="text" placeholder="Username"/>
    </div>

    <Button className="w-full mt-6 mb-16 bg-black text-white h-16">Login</Button>
        <div className="w-full flex flex-col items-center">
           <Link to="/forgot"> <h4 className="mb-5 text-xl">Forgot Password?</h4></Link>
           <Link to="/create"> <h4 className="mb-5 text-lg w-full">Don't have an account? Create One?</h4></Link>
           <Link to="/"> <h4 className="mb-5 text-xl">Back Home</h4></Link>
           
        </div>
        </form>

        </div>
    )
}

const mapStateToProps = (state) => ({
    
})

const mapDispatchToProps = (dispatch) => ({
    
})

export default connect(mapStateToProps, mapDispatchToProps)(Login)
