import React from 'react'
import { connect } from 'react-redux'
import Huca from '../images/huca-logo.png'
import {Link} from 'react-router-dom'

function Logo (props) {

  // if(props.class) return (<div></div>);
  return (
   
      <div className={`flex flex-row justify-center md:w-1/3 sm:mb-10  md:h-full md:flex md:flex-row md:pl-5 items-center ${props.class}`}>
       <Link to="/" className="flex flex-row w-full items-center">
       <img className="log-main" src={Huca} />
        <h5 className='logo-l'>H</h5>
        <h5 className='logo-l'>o</h5>
        <h5 className='logo-l'>m</h5>
        <h5 className='logo-l'>e</h5>
        <h5 className='logo-l'>U</h5>
        <h5 className='logo-l'>s</h5>
        <h5 className='logo-l'>e</h5>
        <h5 className='logo-l'>d</h5>
        <h5 className='logo-l'>C</h5>
        <h5 className='logo-l'>a</h5>
        <h5 className='logo-l'>r</h5>
       </Link>
      </div>
    
  )
}

const mapStateToProps = state => ({
  state
})

const mapDispatchToProps = dispatch => ({
  dispatch
})

export default connect(mapStateToProps, mapDispatchToProps)(Logo)
