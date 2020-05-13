import React from 'react'
import { connect } from 'react-redux'
import { Pane, Icon } from 'evergreen-ui'
import Button from '@material-ui/core/Button'
import {isMobile} from 'react-device-detect'

function Tokens (props) {
  return (
    <div className='w-full h-full flex flex-col'>
    
    {
      isMobile?(
        <div className='w-full tokHolder flex flex-col h-full items-center  overflow-scroll'>
        <div className='w-full flex flex-col justify-center items-center'>
        <h3 className='text-3xl text-indigo-900 md:pt-5'>
          Choose your perfect plan
        </h3>
        <p className='text-center py-1 md:py-5 text-gray-700'>
          Carefully priced tokens to make your purchase transactions easier
          Contact us if you need more.
        </p>
      </div>
        <Pane elevation={3} className='firstToken w-3/5 toks'>
        <div className='h-full w-full flex flex-col'>
           

            <div className='tokHead flex flex-col pl-5'>
              <h5 className='tokHeader py-1'>Standard</h5>
              <p className='tokSubTitle'>Check only 1 vehicle.</p>
              <h5 className='tokPrice py-1'>₵35.99</h5>
              <hr className='tokDivider' />
            </div>
            <div className='tokBody flex flex-col px-3'>
              <CheckList name='Make Savings' />
              <CheckList name='Use on all our platforms. Android, iOS and Web App' />
              <CheckList name='Lifetime access. Use it anytime. No Expiry.' />
            </div>

            <div className='tokFooter pb-2 flex flex-row justify-center'>
              <Button className='purBtn w-1/2'>Buy</Button>
            </div>
          </div>
    
        </Pane>
        <Pane elevation={3} className='secondToken w-3/5  toks'>
          <div className='h-full w-full flex flex-col'>
            <div className='tokBanner flex flex-row justify-center items-center text-white'>
              Most preferred plan
            </div>

            <div className='tokHead flex flex-col pl-5'>
              <h5 className='tokHeader py-1'>Scout</h5>
              <p className='tokSubTitle'>Check for 3 different vehicles.</p>
              <h5 className='tokPrice py-1'>₵103.99</h5>
              <hr className='tokDivider' />
            </div>
            <div className='tokBody flex flex-col px-3'>
              <CheckList name='Make Savings. Get a report for only 34.66' />
              <CheckList name='Use on all our platforms. Android, iOS and Web App' />
              <CheckList name='Lifetime access. Use it anytime. No Expiry' />

            </div>

            <div className='tokFooter pb-2 flex flex-row justify-center'>
              <Button className='purBtn w-1/2'>Buy</Button>
            </div>
          </div>
        </Pane>
        <Pane elevation={3} className='thirdToken w-2/3 toks'>
        <div className='h-full w-full flex flex-col'>
          

            <div className='tokHead flex flex-col pl-5'>
              <h5 className='tokHeader py-1'>Pro Scout</h5>
              <p className='tokSubTitle'>Check for 5 different vehicles.</p>
              <h5 className='tokPrice py-1'>₵163.33</h5>
              <hr className='tokDivider' />
            </div>
            <div className='tokBody flex flex-col px-3'>
              <CheckList name='Make Savings. Get a report for only 32.66' />
              <CheckList name='Use on all our platforms. Android, iOS and Web App' />
              <CheckList name='Lifetime access. Use it anytime. No Expiry' />

            </div>

            <div className='tokFooter py-3 flex flex-row justify-center'>
              <Button className='purBtn w-1/2'>Buy</Button>
            </div>
          </div>
    
        </Pane>
      </div>
   
      ):(
        <div className='w-full tokHolder flex flex-col md:flex-row items-center pb-5  md:justify-center md:items-end h-full overflow-auto'>
        <div className='w-full flex flex-col justify-center items-center'>
        <h3 className='text-3xl text-indigo-900 md:pt-5'>
          Choose your perfect plan
        </h3>
        <p className='text-center py-1 md:py-5 text-gray-700'>
          Carefully priced tokens to make your purchase transactions easier
          Contact us if you need more.
        </p>
      </div>
        <Pane elevation={3} className='firstToken w-3/5 md:w-1/5 toks'>
        <div className='h-full w-full flex flex-col'>
           

            <div className='tokHead flex flex-col pl-5'>
              <h5 className='tokHeader py-1'>Standard</h5>
              <p className='tokSubTitle'>Check only 1 vehicle.</p>
              <h5 className='tokPrice py-1'>₵35.99</h5>
              <hr className='tokDivider' />
            </div>
            <div className='tokBody flex flex-col px-3'>
              <CheckList name='Make Savings' />
              <CheckList name='Use on all our platforms. Android, iOS and Web App' />
              <CheckList name='Lifetime access. Use it anytime. No Expiry.' />
            </div>

            <div className='tokFooter pb-2 flex flex-row justify-center'>
              <Button className='purBtn w-1/2'>Buy</Button>
            </div>
          </div>
    
        </Pane>
        <Pane elevation={3} className='secondToken w-4/5 md:w-1/5 toks'>
          <div className='h-full w-full flex flex-col'>
            <div className='tokBanner flex flex-row justify-center items-center text-white'>
              Most preferred plan
            </div>

            <div className='tokHead flex flex-col pl-5'>
              <h5 className='tokHeader py-1'>Scout</h5>
              <p className='tokSubTitle'>Check for 3 different vehicles.</p>
              <h5 className='tokPrice py-1'>₵103.99</h5>
              <hr className='tokDivider' />
            </div>
            <div className='tokBody flex flex-col px-3'>
              <CheckList name='Make Savings. Get a report for only 34.66' />
              <CheckList name='Use on all our platforms. Android, iOS and Web App' />
              <CheckList name='Lifetime access. Use it anytime. No Expiry' />

            </div>

            <div className='tokFooter pb-2 flex flex-row justify-center'>
              <Button className='purBtn w-1/2'>Buy</Button>
            </div>
          </div>
        </Pane>
        <Pane elevation={3} className='thirdToken w-full md:w-1/5 toks'>
        <div className='h-full w-full flex flex-col'>
          

            <div className='tokHead flex flex-col pl-5'>
              <h5 className='tokHeader py-1'>Pro Scout</h5>
              <p className='tokSubTitle'>Check for 5 different vehicles.</p>
              <h5 className='tokPrice py-1'>₵163.33</h5>
              <hr className='tokDivider' />
            </div>
            <div className='tokBody flex flex-col px-3'>
              <CheckList name='Make Savings. Get a report for only 32.66' />
              <CheckList name='Use on all our platforms. Android, iOS and Web App' />
              <CheckList name='Lifetime access. Use it anytime. No Expiry' />

            </div>

            <div className='tokFooter py-3 flex flex-row justify-center'>
              <Button className='purBtn w-1/2'>Buy</Button>
            </div>
          </div>
    
        </Pane>
      </div>
   
      )
    }
    </div>
  )
}

const mapStateToProps = state => ({
  state
})

const mapDispatchToProps = dispatch => ({})

export default connect(mapStateToProps, mapDispatchToProps)(Tokens)

function CheckList (props) {
  const { name } = props
  return (
    <div className='w-full flex flex-row  items-center py-2'>
      <Icon className="checkIc" icon='tick-circle' color='success' marginRight={5} />
      <h6 className='checkName'>{name}</h6>
    </div>
  )
}
