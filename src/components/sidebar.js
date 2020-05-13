import React from 'react'
import { connect } from 'react-redux'
import { Pane } from 'evergreen-ui'
import Icons from './menu'
import { withRouter, Link } from 'react-router-dom'
import { IoIosHome, IoIosSettings } from "react-icons/io";
import { AiOutlineFileProtect } from "react-icons/ai";
import {FaMoneyCheck} from 'react-icons/fa'
import {GrMoney} from 'react-icons/gr'

function SideBar (props) {
  const location = props.location.pathname;
  return (
    <Pane  className='sideBar flex flex-col items-center h-full'>
      <div className='iconsHolder flex flex-col w-full content-center items-center md:items-start'>
                <Link
                to="/home"
                className={`w-full py-5  my-2 iconBack ${
                    location == '/home' ? 'active' : ''
                }`}
                >
                <div className='circleIcon'>
                    {/* <Icons page='home' /> */}
                    <IoIosHome size="1.6rem"/>
                     <h5>Home</h5>
                </div>  
                </Link>
                <Link
                to="/reports"
                className={`w-full py-2  my-2 iconBack ${
                    location == '/reports' ? 'active' : ''
                }`}
                >
                <div className='circleIcon'>
                    
                    {/* <Icons page='report' /> */}
                    <AiOutlineFileProtect size="1.6rem"/>
                     <h5>Reports</h5>
                </div>
                </Link>
                <Link
                to="/transactions"
                className={`w-full py-2  my-2 iconBack ${
                    location == '/transactions' ? 'active' : ''
                }`}
                >
                <div className='circleIcon'>
                    {/* <Icons page='transactions' message={3} /> */}
                    <FaMoneyCheck size="1.6rem"/>
                    <h5>Transactions</h5>
                </div>
                </Link>
                <Link
                to="/tokens"
                className={`w-full py-2  my-2 iconBack ${
                    location == '/tokens' ? 'active' : ''
                }`}
                >
                <div className='circleIcon'>
                    {/* <Icons page='tokens' message={3} /> */}
                    <GrMoney size="1.6rem"/>
                    <h5>Tokens & promos</h5>
                </div>
                </Link>
                <Link
                to="/settings"
                className={`w-full py-2  my-2 iconBack ${
                    location == '/settings' ? 'active' : ''
                }`}
                >
                <div className='circleIcon'>
                    {/* <Icons page='settings' /> */}
                    <IoIosSettings size="1.6rem"/>
                    <h5>Settings</h5>
                </div>
                </Link>
      </div>
    </Pane>
  )
}

const mapStateToProps = state => ({})

const mapDispatchToProps = dispatch => ({})

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(SideBar))
