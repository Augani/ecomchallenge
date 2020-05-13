import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import Report from '../../images/report.svg'
import ReportNight from '../../images/report-night.svg'
import { Pane, Heading, Paragraph, Checkbox, Spinner } from 'evergreen-ui'
import { Link , withRouter} from 'react-router-dom'
import Button from '@material-ui/core/Button'



class Login extends PureComponent {
  constructor (props) {
    super(props)

    this.state = { checked: false, isStopped: false, isPaused: false, reset: false, loading: false }
  }

  login= ()=>{

   return this.setState({
        loading: true
    })
    
    // this.props.LoginUser({
    //   fullName: "Augustus Otu"
    // });
    // this.props.history.push('/home')
  }

  ResetPass = ()=>{
    this.setState({
      reset: true
    })
  }

  returnLogin = ()=>{
    this.setState({
      reset: false
    })
  }

  handleRememberMe = event => {
    this.setState({ ...this.state, checked: !this.state.checked })
  }

  render () {
    const { THEME } = this.props.state
   
    return (
      <div className='user-login w-full flex flex-row'>
        <div className='login-hero hidden   flex  flex-row items-center content-center justify-center '>
          {/* {THEME === 'light' ? (
            <img className='login-hero-image' src={Report} />
          ) : (
            <img className='login-hero-image' src={ReportNight} />
          )} */}
         
        </div>
        <div className='loginForm w-full h-full   flex flex-col '>
         
          <div className='w-full h-full flex flex-col items-center justify-center'>
          {
            this.state.reset?
            <PassReset goBack={()=>this.returnLogin()}/>:
            (  <form className='bg-white w-full md:w-1/3 flex  flex-col rounded px-10 pt-6 pb-8 mb-4'>
            <div className='welcome-login w-full flex flex-col content-center '>
            <h2 className="text-3xl text-center w-full md:w-4/5  md:text-5xl text-indigo-900 heading">
              Admin Console
            </h2>
          </div>
              <div className='mb-4 w-full md:w-4/5'>
                <input
                  className='bg-gray-200 appearance-none border-2 border-gray-200  rounded w-full py-5 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-indigo-700'
                  id='username'
                  type='email'
                  placeholder='Email'
                />
              </div>
              <div className='mb-6 w-full md:w-4/5'>
                <input
                  className='bg-gray-200 appearance-none border-2 border-gray-200  rounded w-full py-5 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-indigo-700'
                  id='password'
                  type='password'
                  placeholder='Password'
                />
              </div>
             
              <div className='w-full md:w-4/5 flex flex-row sm:justify-center  mb-5'>
              {this.state.loading?<Spinner/>:(
                <Button onClick={()=>this.login()} className={`lgn-btn w-full md:w-4/5`}>
                Login
                </Button>
              )}
               
              </div>
             
              
            </form>
       )
          }
             </div>
        </div>
      </div>
    )
  }
}

function PassReset(props){
  const [values, setValues] = React.useState({
    email: ''
  })
  const Reset = ()=>{

  }
  return (
    <form className='bg-white w-full md:w-1/3 flex flex-col rounded px-5 pt-6 pb-8 mb-4'>
    <div className='welcome-login w-full flex flex-col content-center '>
    <h2 className="heading text-2xl text-center md:text-3xl md:w-4/5 text-indigo-900">
      Password Reset
    </h2>
    <p className="py-3 font-mono text-center w-full md:w-4/5">Enter your email and receive instructions on how to reset your password</p>
  </div>
      <div className='mb-4 w-full md:w-4/5'>
        <input
          className='bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-4 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-indigo-700'
          id='passemail'
          type='email'
          placeholder='Email'
        />
      </div>
     
      <div className='w-full flex flex-col  mb-5'>
        <Button onClick={()=>Reset()} className={`lgn-btn w-full md:w-4/5`}>Send reset Link</Button>
        <div className='forgot-pass w-full md:w-4/5 my-5 flex flex-row justify-center text-center mb-5'>
        <Link className="text-xl text-indigo-900" onClick={()=>props.goBack()}>Back to login</Link>
      </div>
      </div>
      
     
    </form>

  )
}

const mapStateToProps = state => ({ state })

const mapDispatchToProps = {
}

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(Login))
