import React from 'react'
import { connect } from 'react-redux'
import Button from '@material-ui/core/Button'
import { Link } from 'react-router-dom'
function Create () {
  return (
    <div className='h-full w-full flex flex-col justify-center items-center '>
      <form className='w-1/5 loginForm flex flex-col'>
        <h2 className='logo  text-4xl mainLog text-center text-black font-black'>
          OSEI SRIBOE
        </h2>
        <div classname='mb-4  w-full '>
          <label
            className='block text-gray-700 text-sm font-bold mb-2'
            for='username'
          >
            Fullname
          </label>
          <input
            class='shadow appearance-none border rounded w-full py-4 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
            id='Fullname'
            type='text'
            placeholder='Full name'
          />
        </div>
        <div classname='mb-10  w-full '>
          <label
            className='block text-gray-700 text-sm font-bold mb-2'
            for='username'
          >
            Email/ Username
          </label>
          <input
            class='shadow appearance-none border rounded w-full py-4 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
            id='email'
            type='text'
            placeholder='Email'
          />
        </div>
        <div classname='mb-4 w-full '>
          <label
            className='block text-gray-700 text-sm font-bold mb-2'
            for='username'
          >
            Password
          </label>
          <input
            class='shadow appearance-none border rounded w-full py-4 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
            id='password'
            type='password'
            placeholder='password'
          />
        </div>
        <div classname='mb-10 w-full '>
          <label
            className='block text-gray-700 text-sm font-bold mb-2'
            for='username'
          >
            Confirm Password
          </label>
          <input
            class='shadow appearance-none border rounded w-full py-4 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
            id='password'
            type='password'
            placeholder='password'
          />
        </div>

        <Button className='w-full mt-16 mb-16 bg-black text-white h-16'>
          Create Account
        </Button>
        <div className='w-full flex flex-col items-center'>
          <Link to='/login'>
            {' '}
            <h4 className='mb-5 text-xl'>Have an account? Login</h4>
          </Link>
          <Link to='/'>
            {' '}
            <h4 className='mb-5 text-xl'>Back Home</h4>
          </Link>
        </div>
      </form>
    </div>
  )
}

const mapStateToProps = state => ({})

const mapDispatchToProps = dispatch => ({})

export default connect(mapStateToProps, mapDispatchToProps)(Create)