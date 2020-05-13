import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import { makeStyles } from '@material-ui/core/styles'
import Report from '../../images/report.svg'
import ReportNight from '../../images/report-night.svg'
import {
  Pane,
  Heading,
  Paragraph,
  Checkbox,
  Icon,
  CornerDialog,
  toaster,
  Spinner
} from 'evergreen-ui'
import { FcGoogle } from 'react-icons/fc'
import { Link, withRouter } from 'react-router-dom'
import Button from '@material-ui/core/Button'
import Popover from '@material-ui/core/Popover'
import Apple from '../../images/download-on-the-app-store-apple.svg'
import Google from '../../images/Google_Play_Store_badge_EN.svg'
import Lottie from 'react-lottie'
import Animdata from '../../anim/vehicle.json'
import { LoginUser } from '../../actions'
import Component from '@reactions/component'
import VINIMage from '../../images/locate_vin-uai-516x620.jpeg'
import { isAndroid, isIOS } from 'react-device-detect'
import ListItem from '@material-ui/core/ListItem'
import List from '@material-ui/core/List'
import ListItemAvatar from '@material-ui/core/ListItemAvatar'
import ListItemIcon from '@material-ui/core/ListItemIcon'
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction'
import ListItemText from '@material-ui/core/ListItemText'
import { AiFillGoogleCircle } from 'react-icons/ai'

const useStyles = makeStyles(theme => ({
  root: {
    width: '100%',
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper
  }
}))

class Login extends PureComponent {
  constructor (props) {
    super(props)

    this.state = {
      checked: false,
      isStopped: false,
      isPaused: false,
      reset: false,
      email: '',
      password: '',
      loading: false
    }
  }

  login = () => {
    var self = this
    this.setState({
      loading: true
    })
    if (!this.state.email || !this.state.password) {
      this.setState({
        loading: false
      })
      return toaster.warning('Please fill all fields')
    }
    console.log(this.state, this.props.state.user)
    if (
      this.state.email != this.props.state.user.email ||
      this.state.password != this.props.state.user.password
    ) {
      this.setState({
        email: '',
        password: '',
        loading: false
      })

      return toaster.danger('Incorrect email or password entered')
    }
    this.props.LoginUser(this.props.state.user)
    return this.props.history.push('/home')
  }

  ResetPass = () => {
    this.setState({
      reset: true
    })
  }

  changeText = e => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  returnLogin = () => {
    this.props.history.push('/login')
  }

  handleRememberMe = event => {
    this.setState({ ...this.state, checked: !this.state.checked })
  }

  render () {
    console.log(this.props)
    const { THEME } = this.props.state
    const { email, password } = this.state
    const defaultOptions = {
      loop: true,
      autoplay: true,
      animationData: Animdata,
      rendererSettings: {
        preserveAspectRatio: 'xMidYMid slice'
      }
    }
    if (this.props.location.pathname == '/') {
      return <Landing history={this.props.history} />
    }
    return (
      <div className='user-login w-full flex flex-row'>
        <div className='login-hero hidden   flex  flex-row items-center content-center justify-center '>
          {/* {THEME === 'light' ? (
            <img className='login-hero-image' src={Report} />
          ) : (
            <img className='login-hero-image' src={ReportNight} />
          )} */}
          <Lottie
            options={defaultOptions}
            height={400}
            widh={400}
            isStopped={this.state.isStopped}
            isPaused={this.state.isPaused}
          />
        </div>
        <div className='loginForm w-full h-full   flex flex-col '>
          <div className='w-full h-full flex flex-col items-center justify-center'>
            {this.props.location.pathname == '/forgot' ? (
              <PassReset
                history={this.props.history}
                goBack={() => this.returnLogin()}
              />
            ) : (
              <form className='bg-white w-full md:w-2/5 flex  flex-col justify-center items-center rounded px-10 pt-6 pb-8 mb-4'>
                <div className='welcome-login w-full flex flex-col content-center '>
                  <h2 className='text-3xl md:text-center  md:text-5xl text-indigo-900 heading'>
                    Hello, <br className="md:hidden" /> Welcome back
                  </h2>
                </div>
                <div className='mb-4 w-full md:w-4/5'>
                  <input
                    className='bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-4 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-indigo-700'
                    id='username'
                    type='email'
                    name='email'
                    value={email}
                    onChange={this.changeText}
                    placeholder='Email'
                  />
                </div>
                <div className='mb-6 w-full md:w-4/5'>
                  <input
                    className='bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-4 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-indigo-700'
                    id='password'
                    type='password'
                    value={password}
                    onChange={this.changeText}
                    name='password'
                    placeholder='Password'
                  />
                </div>
                <Pane className='login-tools w-full flex flex-row justify-around md:w-4/5'>
                  <Checkbox
                    checked={this.state.checked}
                    className='rememberMe vinsub  md:text-2xl'
                    onChange={e => this.handleRememberMe(e)}
                    label='Remember Me'
                  />
                  <Link to='/forgot'>
                    <Paragraph
                      className='forgot-pass  md:text-xl'
                      onClick={() => this.ResetPass()}
                    >
                      Forgot your password?
                    </Paragraph>
                  </Link>
                </Pane>
                <div className='w-full  flex flex-row justify-center  mb-5'>
                  {this.state.loading ? (
                    <Spinner />
                  ) : (
                    <Button
                      onClick={() => this.login()}
                      className={`lgn-btn w-full md:w-4/5`}
                    >
                      Login
                    </Button>
                  )}
                </div>
                <Paragraph className='forgot-pass w-full md:w-4/5 flex flex-row justify-center  mb-5'>
                  Don't have an account?{' '}
                  <Link
                    className='text-indigo-600 font-weight:700'
                    style={{ marginLeft: 5 }}
                    to='/signup'
                  >
                    {' '}
                    Click here
                  </Link>
                </Paragraph>
                <Pane className='bag w-full md:w-4/5 flex flex-row justify-around'>
                  {isIOS ? (
                    <Link
                      target='_blank'
                      onClick={() =>
                        (window.location.href =
                          'https://itunes.apple.com/gh/app/homeusedcar/id1450994931?mt=8')
                      }
                    >
                      <img src={Apple} />
                    </Link>
                  ) : null}
                  {isAndroid ? (
                    <Link
                      target='_blank'
                      onClick={() =>
                        (window.location.href =
                          'https://play.google.com/store/apps/details?id=com.lockvin.huca')
                      }
                    >
                      <img src={Google} />
                    </Link>
                  ) : null}
                </Pane>
              </form>
            )}
          </div>
        </div>
      </div>
    )
  }
}

function InfoIcons (props) {
  return (
    <div className='flex flex-row'>
      <Icon icon='tick-circle' color='success' marginRight={10} />
      <h6 className='text-center text-sm md:text-xl'>{props.name}</h6>
    </div>
  )
}

function Landing (props) {
  const [values, setValues] = React.useState({
    whatVin: false,
    whereVin: false,
    howVin: false
  })
  const [anchorEl, setAnchorEl] = React.useState(null)
  const classes = useStyles()
  const [selectedIndex, setSelectedIndex] = React.useState(1)

  const handleListItemClick = (event, index) => {
    setSelectedIndex(index)
  }

  const handleClick = event => {
    setAnchorEl(event.currentTarget)
  }

  const handleClose = () => {
    setAnchorEl(null)
  }

  const open = Boolean(anchorEl)
  const id = open ? 'simple-popover' : undefined

  const corner = update => {
    setValues({
      ...values,
      [update]: true
    })
  }

  React.useEffect(() => {
    console.log('updated', values)
  })
  return (
    <div className='w-full h-full landingHome'>
      <div className='w-full h-full flex flex-col justify-center items-center content-center landingHomeFront'>
        <div className='landingHeading w-4/5 md:w-3/5'>
          <h5 className='text-xl md:text-3xl text-center'>
            Are you buying a used car?
          </h5>
          <p className='text-center my-2  md:my-5'>
            Make the right decision with an informed vehicle report
          </p>
          <div className='w-full hidden md:flex md:flex-row md:justify-evenly md:items-center'>
            <InfoIcons name='Previous accidents' />
            <InfoIcons name='Service Records' />
            <InfoIcons name='Mileage rollback' />
            <InfoIcons name='Service vehicle' />
            <InfoIcons name='Previous Owners' />
          </div>
        </div>
        <Pane
          elevation={2}
          className='landingCard w-4/5 md:w-1/3 my-4 align-middle py-4 justify-center flex flex-col items-center px-2 md:px-4'
        >
          <h5 className='text-lg md:text-3xl text-center'>Check VIN</h5>
          <div className='mb-4 w-full md:w-4/5'>
            <input
              className='bg-gray-200 text-center appearance-none border-2 border-gray-200 rounded w-full py-2 px-1 md:py-5 md:px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-green-700'
              id='vincheck'
              type='text'
              placeholder='For example XTVSBHJYWTVS'
            />
          </div>
          <Button className='text-center vinButton md:text-2xl'>Search</Button>
        </Pane>
        <div className=' w-4/5 align-middle my-2 flex flex-col'>
          <Button
            aria-describedby={id}
            variant='contained'
            className='text-left bg-transparent'
            onClick={handleClick}
          >
            Learn more
          </Button>
          <Popover
            id={id}
            open={open}
            anchorEl={anchorEl}
            onClose={handleClose}
            anchorOrigin={{
              vertical: 'top',
              horizontal: 'left'
            }}
            transformOrigin={{
              vertical: 'top',
              horizontal: 'center'
            }}
          >
            <List component='nav' aria-label='secondary mailbox folder'>
              <Component
                className='w-full'
                initialState={{ isShown: values.whatVin }}
              >
                {({ state, setState }) => (
                  <React.Fragment>
                    <CornerDialog
                      title='What is a VIN'
                      isShown={state.isShown}
                      onConfirm={() =>
                        (window.location.href =
                          'https://www.homeusedcar.com/faqs')
                      }
                      onCloseComplete={() => setState({ isShown: false })}
                    >
                      A Vehicle History Report is a listing of pertinent
                      information of a vehicles past. This may include title
                      records, insurance total loss records, accident records,
                      etc. They can also include mileage information, auction
                      information, damaged records, theft records, and a number
                      of other important information relevant to potential
                      buyers.
                    </CornerDialog>
                    <ListItem
                      button
                      selected={selectedIndex === 3}
                      onClick={() => setState({ isShown: true })}
                    >
                      <ListItemText primary='What is a VIN' />
                    </ListItem>
                  </React.Fragment>
                )}
              </Component>
              <Component initialState={{ isShown: values.whereVin }}>
                {({ state, setState }) => (
                  <React.Fragment>
                    <CornerDialog
                      title='Where to find your VIN'
                      isShown={state.isShown}
                      onConfirm={() =>
                        (window.location.href =
                          'https://www.homeusedcar.com/faqs')
                      }
                      onCloseComplete={() => setState({ isShown: false })}
                    >
                      <img src={VINIMage} />
                    </CornerDialog>
                    <ListItem
                      button
                      selected={selectedIndex === 3}
                      onClick={() => setState({ isShown: true })}
                    >
                      <ListItemText primary='Where can i find my VIN' />
                    </ListItem>
                  </React.Fragment>
                )}
              </Component>
              <Component initialState={{ isShown: values.howVin }}>
                {({ state, setState }) => (
                  <React.Fragment>
                    <CornerDialog
                      title='How does the VIN work'
                      isShown={state.isShown}
                      onConfirm={() =>
                        (window.location.href =
                          'https://www.homeusedcar.com/faqs/#how-it-works')
                      }
                      onCloseComplete={() => setState({ isShown: false })}
                    >
                      The process of checking your vehicle condition is simple.
                      All you need is to supply the CHASSIS or VIN. Our system
                      will provide you with information on whether the vehicle
                      is clean or accidented, flooded, stolen, etc.
                    </CornerDialog>
                    <ListItem
                      button
                      selected={selectedIndex === 3}
                      onClick={() => setState({ isShown: true })}
                    >
                      <ListItemText primary=' How does a VIn work' />
                    </ListItem>
                  </React.Fragment>
                )}
              </Component>
            </List>
          </Popover>
        </div>
        <div className='vinOptions w-full md:w-3/5 md:flex hidden md:flex-row justify-center items-center md:justify-evenly mx-10'>
          <Component
            className='w-full'
            initialState={{ isShown: values.whatVin }}
          >
            {({ state, setState }) => (
              <React.Fragment>
                <CornerDialog
                  title='What is a VIN'
                  isShown={state.isShown}
                  onConfirm={() =>
                    (window.location.href = 'https://www.homeusedcar.com/faqs')
                  }
                  onCloseComplete={() => setState({ isShown: false })}
                >
                  A Vehicle History Report is a listing of pertinent information
                  of a vehicles past. This may include title records, insurance
                  total loss records, accident records, etc. They can also
                  include mileage information, auction information, damaged
                  records, theft records, and a number of other important
                  information relevant to potential buyers.
                </CornerDialog>
                <ListItem
                  button
                  selected={selectedIndex === 3}
                  onClick={() => setState({ isShown: true })}
                >
                  <ListItemText primary='What is a VIN' />
                </ListItem>
              </React.Fragment>
            )}
          </Component>
          <Component initialState={{ isShown: values.whereVin }}>
            {({ state, setState }) => (
              <React.Fragment>
                <CornerDialog
                  title='Where to find your VIN'
                  isShown={state.isShown}
                  onConfirm={() =>
                    (window.location.href = 'https://www.homeusedcar.com/faqs')
                  }
                  onCloseComplete={() => setState({ isShown: false })}
                >
                  <img src={VINIMage} />
                </CornerDialog>
                <ListItem
                  button
                  selected={selectedIndex === 3}
                  onClick={() => setState({ isShown: true })}
                >
                  <ListItemText primary='Where can i find my VIN' />
                </ListItem>
              </React.Fragment>
            )}
          </Component>
          <Component initialState={{ isShown: values.howVin }}>
            {({ state, setState }) => (
              <React.Fragment>
                <CornerDialog
                  title='How does the VIN work'
                  isShown={state.isShown}
                  onConfirm={() =>
                    (window.location.href =
                      'https://www.homeusedcar.com/faqs/#how-it-works')
                  }
                  onCloseComplete={() => setState({ isShown: false })}
                >
                  The process of checking your vehicle condition is simple. All
                  you need is to supply the CHASSIS or VIN. Our system will
                  provide you with information on whether the vehicle is clean
                  or accidented, flooded, stolen, etc.
                </CornerDialog>
                <ListItem
                  button
                  selected={selectedIndex === 3}
                  onClick={() => setState({ isShown: true })}
                >
                  <ListItemText primary=' How does a VIn work' />
                </ListItem>
              </React.Fragment>
            )}
          </Component>
        </div>
        <Pane className='flex flex-col  justify-center py-5 w-4/5 align-middle'>
          <Button
            className='navBMob text-sm md:hidden bg-white mb-2'
            onClick={() => props.history.push('/login')}
          >
            Continue with your email
          </Button>
          <Button
            className='navBMob google text-sm md:hidden  mb-2 bg-red-600'
            onClick={() => props.history.push('/login')}
          >
            <AiFillGoogleCircle
              size='2em'
              style={{ marginRight: 10, color: 'white' }}
            />{' '}
            Continue with google
          </Button>
          <Button
            className='navBMob bel text-sm md:hidden bg-transparent'
            onClick={() => props.history.push('/signup')}
          >
            Create an account
          </Button>
        </Pane>
      </div>
    </div>
  )
}

function PassReset (props) {
  const [values, setValues] = React.useState({
    email: ''
  })

  const ChangeText = e => {
    setValues({
      email: e.target.value
    })
  }
  const Reset = () => {
    if (!values.email) return toaster.warning('Please provide your email')
    toaster.success('Email sent successfully')
    props.history.push('/login')
  }
  return (
    <form className='bg-white w-full md:w-2/5 flex flex-col justify-center items-center rounded px-5 pt-6 pb-8 mb-4'>
      <div className='welcome-login w-full flex flex-col content-center '>
        <h2 className='heading text-2xl text-center md:text-3xl w-full text-indigo-900'>
          Password Reset
        </h2>
        <p className='py-3 text-center w-full'>
          Enter your email and receive instructions on how to reset your
          password
        </p>
      </div>
      <div className='mb-4 w-full md:w-4/5'>
        <input
          className='bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-4 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-indigo-700'
          id='passemail'
          type='email'
          onChange={ChangeText}
          value={values.email}
          placeholder='Email'
        />
      </div>

      <div className='w-full flex flex-col items-center  mb-5'>
        <Button onClick={() => Reset()} className={`lgn-btn w-full md:w-4/5`}>
          Send reset Link
        </Button>
        <div className='forgot-pass w-full md:w-4/5 my-5 flex flex-row justify-center text-center mb-5'>
          <Link
            className='text-indigo-600 font-weight:700'
            onClick={() => props.goBack()}
          >
            Back to login
          </Link>
        </div>
      </div>
    </form>
  )
}

const mapStateToProps = state => ({ state })

const mapDispatchToProps = {
  LoginUser
}

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(Login))
