import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
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
import { Link, withRouter } from 'react-router-dom'
import Button from '@material-ui/core/Button'
import Apple from '../../images/download-on-the-app-store-apple.svg'
import Google from '../../images/Google_Play_Store_badge_EN.svg'
import Lottie from 'react-lottie'
import Animdata from '../../anim/vehicle.json'
import { LoginUser } from '../../actions'
import Component from '@reactions/component'
import VINIMage from '../../images/locate_vin-uai-516x620.jpeg'
import { isAndroid, isIOS } from 'react-device-detect'

function InfoIcons (props) {
    return (
      <div className='flex flex-row'>
        <Icon icon='tick-circle' color='success' marginRight={10} />
        <h6 className='text-center text-sm md:text-xl'>{props.name}</h6>
      </div>
    )
  }
  
  function Default (props) {
    const [values, setValues] = React.useState({
      whatVin: false,
      whereVin: false,
      howVin: false
    })
  
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
          <h5 className='text-xl md:text-3xl text-center'>Are you buying a used car?</h5>
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
              className='bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-1 md:py-5 md:px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-green-700'
              id='vincheck'
              type='text'
              placeholder='For example XTVSBHJYWTVS'
            />
          </div>
          <Button className='text-center vinButton md:text-2xl'>Search</Button>
        </Pane>
      
          <div className='vinOptions w-full md:w-3/5 flex flex-col md:flex-row justify-center items-center md:justify-evenly mx-10'>
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
                  <p
                    onClick={() => setState({ isShown: true })}
                    className='vinsub text-xl cursor-pointer'
                  >
                    What is a VIN
                  </p>
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
                  <p
                    onClick={() => setState({ isShown: true })}
                    className='vinsub text-xl cursor-pointer'
                  >
                    Where can i find my VIN
                  </p>
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
                  <p
                    onClick={() => setState({ isShown: true })}
                    className='vinsub text-xl cursor-pointer'
                  >
                    How does a VIn work
                  </p>
                </React.Fragment>
              )}
            </Component>
          </div>
         
        </div>
      </div>
    )
  }

const mapStateToProps = (state) => ({
    
})

const mapDispatchToProps = (dispatch) => ({
    
})

export default connect(mapStateToProps, mapDispatchToProps)(Default)
