import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link, withRouter } from 'react-router-dom'
import Auth from './auth';

function Navbar(props){
   console.log(props)
    return (
        <div className={`navBar w-full bg-transparent shadow-sm flex flex-row justify-between items-center ${props.location.pathname=="/login"?'hidden':props.location.pathname=="/create"?'hidden':''}`}>
            <div className="logoH w-1/4">
            <h2 className="logo text-3xl text-black">OSEI SRIBOE</h2>
            </div>

            <div className={`navs flex flex-row justify-around w-2/5`}>
                <Link><h5 className="navLink">Sunglasses</h5></Link>
                <Link><h5 className="navLink">Shirts</h5></Link>
                <Link><h5 className="navLink">Shoes</h5></Link>
                <Auth className="border-l-2 border-black flex flex-row h-full items-center justify-evenly w-2/4"/>
            </div>
        </div>
    )
}

const mapStateToProps = (state) => ({
    state
})

const mapDispatchToProps = {
    
}

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(Navbar))
