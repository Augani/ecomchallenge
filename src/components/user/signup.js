import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import Report from '../../images/report.svg'
import ReportNight from '../../images/report-night.svg'
import {
  Pane,
  Heading,
  Paragraph,
  Checkbox,
  Spinner,
  toaster
} from 'evergreen-ui'
import { Link, withRouter } from 'react-router-dom'
import Button from '@material-ui/core/Button'
import Apple from '../../images/download-on-the-app-store-apple.svg'
import Google from '../../images/Google_Play_Store_badge_EN.svg'
import Lottie from 'react-lottie'
import Animdata from '../../anim/vehicle.json'
import Carousel from '../carousel'
import fileSearch from '../../images/undraw_file_searching_duff.svg'
import buy from '../../images/undraw_mobile_pay_9abj.svg'
import sync from '../../images/undraw_file_sync_ot38.svg'
import PDF from '../../anim/pdf.json'
import Analytics from '../../anim/analytics.json'
import Payment from '../../anim/payment.json'
import Loader from '../../anim/loading.json'
import { isAndroid, isIOS } from 'react-device-detect'
import { RegisterUser } from '../../actions'

const CarouselImages = [PDF, Analytics, Payment, PDF]
const CarouselCaptions = [
  'View reports in the app with ease',
  'Get informative insights about your vehicles',
  'Purchase report with all forms of payment',
  'Have your reports across our apps with ease'
]

class Signup extends PureComponent {
  constructor (props) {
    super(props)

    this.state = {
      checked: false,
      isStopped: false,
      isPaused: false,
      fullName: '',
      email: '',
      phone: '',
      password: ''
    }
  }

  handleRememberMe = event => {
    this.setState({ ...this.state, rememberMe: !this.state.rememberMe })
  }

  signup = () => {
    var self = this
    const { fullName, phone, email, password } = this.state
    if (!fullName || !phone || !email || !password) {
      return toaster.warning('Please fill all fields')
    }

    this.props.RegisterUser({
      fullName,
      phone,
      email,
      password
    })

    toaster.success(
      'User registered successfully, Please check ' +
        email +
        ' for a mail from us. Thank you'
    )

    return this.props.history.push('/login')
  }

  changeText = e => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  render () {
    const { THEME } = this.props.state
    const { fullName, email, phone, password } = this.state
    const defaultOptions = {
      loop: true,
      autoplay: true,
      animationData: Animdata,
      rendererSettings: {
        preserveAspectRatio: 'xMidYMid slice'
      }
    }
    return (
      <div className='user-login w-full flex flex-row justify-center'>
        <div className='loginForm w-full   md:w-2/5  flex flex-col items-center content-center justify-center '>
          <div className='w-full flex flex-col '>
            <form className='bg-white w-full flex flex-col rounded items-center px-5 md:px-10 pt-6 pb-8 mb-4'>
              <div className='welcome-login w-full  flex flex-col '>
                <h5 className='signupHead w-full text-4xl flex flex-row justify-center'>
                  Join Us
                </h5>
              </div>
              <div className='mb-4 w-full md:w-4/5'>
                <input
                  className='bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-4 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-indigo-700'
                  id='Fullname'
                  type='text'
                  name='fullName'
                  value={fullName}
                  onChange={this.changeText}
                  placeholder='Full name'
                />
              </div>
              <div className='mb-4 w-full md:w-4/5'>
                <input
                  className='bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-4 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-indigo-700'
                  id='email'
                  type='email'
                  onChange={this.changeText}
                  value={email}
                  name='email'
                  placeholder='Email address'
                />
              </div>
              <div className='mb-4 w-full md:w-4/5'>
                <input
                  className='bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-4 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-indigo-700'
                  id='phone'
                  name='phone'
                  onChange={this.changeText}
                  type='text'
                  value={phone}
                  placeholder='Phone number'
                />
              </div>

              <div className='mb-6 w-full md:w-4/5'>
                <input
                  className='bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-4 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-indigo-700'
                  id='password'
                  onChange={this.changeText}
                  name='password'
                  value={password}
                  type='password'
                  placeholder='Password'
                />
              </div>

              <div className='w-full flex flex-row justify-center   mb-5'>
                <Button
                  onClick={this.signup}
                  className={`sign-btn w-full md:w-3/5`}
                >
                  Create account
                </Button>
              </div>
              <Paragraph className='forgot-pass  mb-5'>
                Already have an account?{' '}
                <Link to='/login' className='text-indigo-600 font-weight:700'>
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
          </div>
        </div>

        <div className='login-hero signup-hero  hidden relative   items-center content-center justify-center '>
          {/* {THEME === 'light' ? (
            <img className='login-hero-image' src={Report} />
          ) : (
            <img className='login-hero-image' src={ReportNight} />
          )} */}
          {/* <Lottie options={defaultOptions}
              height={400}
              width={400}
              isStopped={this.state.isStopped}
              isPaused={this.state.isPaused}/> */}
          <Carousel
            height={300}
            captions={CarouselCaptions}
            images={CarouselImages}
          />
        </div>
      </div>
    )
  }
}

const mapStateToProps = state => ({ state })

const mapDispatchToProps = {
  RegisterUser
}

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(Signup))
