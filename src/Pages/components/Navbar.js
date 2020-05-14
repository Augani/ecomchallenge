import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link, withRouter } from 'react-router-dom'
import Auth from './auth';
import MenuIcon from '@material-ui/icons/Menu';

function Navbar(props){
   
    return (
        <div className={`navBar sticky w-full bg-transparent shadow-sm flex flex-row justify-between items-center ${props.location.pathname=="/login"?'hidden':props.location.pathname=="/create"?'hidden':''}`}>
            <div className="logoH w-1/4">
            <h2 className="logo text-sm  md:text-3xl text-black">OSEI SRIBOE</h2>
            </div>
            
            <div className="md:hidden flex">
                <MenuIcon onClick={props.openMenu}/>
            </div>

            <div className={`navs hidden md:flex flex-row justify-around w-2/5`}>
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
