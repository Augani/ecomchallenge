import React from 'react'
import { connect } from 'react-redux'
import { Link, withRouter } from 'react-router-dom'

function Auth(props) {
    console.log(props)
    if(props.state.LOGGED_IN)return null;
   
    return (
        <div className={props.className}>
            <Link to="/login"><h4 className="authLink">Login</h4></Link>
            <Link to="/create"><h4 className="authLink">Create account</h4></Link>
        </div>
    )
}

const mapStateToProps = (state) => ({
   state 
})

const mapDispatchToProps = (dispatch) => ({
    
})

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(Auth))
