import React from 'react'
import { connect } from 'react-redux'
import Button from '@material-ui/core/Button'
import { Link } from 'react-router-dom'

function Login() {
    return (
        <div className="h-full w-full flex flex-col justify-center items-center relative">
         <div className="h-full w-full z-0 backdrop absolute flex flex-row justify-center overflow-y-hidden">
    SRIBOE
    </div>
        <form className="w-4/5  md:w-1/4 loginForm flex flex-col z-10">
        <h2 className="logo text-3xl mb-4 w-full  md:text-5xl mainLog text-center text-black font-black">OSEI SRIBOE</h2>
        <div classname="mb-4 mt-4  w-full ">
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
           {/* <Link to="/"> <h4 className="mb-5 text-xl">Forgot Password?</h4></Link> */}
           <Link to="/create"> <h4 className="mb-5 text-sm md:text-lg w-full">Don't have an account? Create One?</h4></Link>
           <Link to="/"> <h4 className="mb-5 text-lg md:text-xl">Back Home</h4></Link>
           
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
