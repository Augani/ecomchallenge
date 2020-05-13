import React from 'react'
import { connect } from 'react-redux'
import Table from '../table';
import ClickAwayListener from '@material-ui/core/ClickAwayListener';
import Grow from '@material-ui/core/Grow';
import Paper from '@material-ui/core/Paper';
import Popper from '@material-ui/core/Popper';
import MenuItem from '@material-ui/core/MenuItem';
import MenuList from '@material-ui/core/MenuList';
import { makeStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
const Columns = [
  { title: 'Transaction ID', field: 'id' },
  { title: 'Type', field: 'type' }
]
const tableData = [
  { id: 'bygyg76g', type: 'Token payment' },
  { id: 'hjbjkbkj', type: 'Token payment' },
  { id: 'bygyg76g', type: 'Token payment' },
  { id: 'hjbjkbkj', type: 'Token payment' },
  { id: 'bygyg76g', type: 'Token payment' },
  { id: 'hjbjkbkj', type: 'Token payment' },
  { id: 'bygyg76g', type: 'Token payment' },
  { id: 'hjbjkbkj', type: 'Token payment' },
  { id: 'bygyg76g', type: 'Token payment' },
  { id: 'hjbjkbkj', type: 'Token payment' },
  { id: 'bygyg76g', type: 'Token payment' },
  { id: 'hjbjkbkj', type: 'Token payment' },
  { id: 'bygyg76g', type: 'Token payment' },
  { id: 'hjbjkbkj', type: 'Token payment' }
]

function Reports () {
  const [values, setValues] = React.useState({
    reportSelected: false
  })

  const ViewReport = (event, data) => {
    setValues({
      reportSelected: true
    })
  }

  const viewDetail = (e)=>{
      console.log(e.target);
  }

  const CloseifOpened = () => {
    if (values.reportSelected) setValues({ reportSelected: false })
  }
  return (
    <div className='w-full h-full flex overflow-hidden flex-row reportMain'>
      <div
        className='h-full reportTableFilter '
        onClick={() => CloseifOpened()}
      >
        <Table
          table={{
            Columns,
            Data: tableData,
            title: 'Reports',
            options: { view: ViewReport }
          }}
        />
      </div>

      <div
        className={`h-full reportView flex flex-row  bg-indigo-900 ${
          values.reportSelected ? 'active' : 'unactive'
        }`}
      >
        <div className='rViewList w-1/4 bg-white flex flex-col'>
        <MenuList>
          <MenuItem className="text-indigo-900 listM" onClick={(e)=>viewDetail(e)}>Auction History</MenuItem>
          <MenuItem className="text-indigo-900 listM" onClick={(e)=>viewDetail(e)}>Images</MenuItem>
          <MenuItem className="text-indigo-900 listM" onClick={(e)=>viewDetail(e)}>Damages</MenuItem>
          <MenuItem className="text-indigo-900 listM" onClick={(e)=>viewDetail(e)}>Condition</MenuItem>
          <MenuItem className="text-indigo-900 listM" onClick={(e)=>viewDetail(e)}>General Information</MenuItem>
          <MenuItem className="text-indigo-900 listM" onClick={(e)=>viewDetail(e)}>Mechanical Age</MenuItem>
          <MenuItem className="text-indigo-900 listM" onClick={(e)=>viewDetail(e)}>Engine Servicing Inf.</MenuItem>
          <MenuItem className="text-indigo-900 listM" onClick={(e)=>viewDetail(e)}>Recalls</MenuItem>
          <MenuItem className="text-indigo-900 listM" onClick={(e)=>viewDetail(e)}>Port Clearance</MenuItem>
          <MenuItem className="text-indigo-900 listM" onClick={(e)=>viewDetail(e)}>Expert Advise/Summary</MenuItem>
          <MenuItem className="text-indigo-900 listM" onClick={(e)=>viewDetail(e)}>Estimated Duty Now</MenuItem>
          <MenuItem className="text-indigo-900 listM" onClick={(e)=>viewDetail(e)}>Other Details</MenuItem>
          <MenuItem className="text-indigo-900 listM" onClick={(e)=>viewDetail(e)}>Vehicle Risk Assessment</MenuItem>
          <MenuItem className="text-indigo-900 listM" onClick={(e)=>viewDetail(e)}>Expert Advise</MenuItem>
          <MenuItem className="text-indigo-900 listM" onClick={(e)=>viewDetail(e)}>Values</MenuItem>

        </MenuList>
        </div>
        <div className='rViewDetail w-3/4 bg-gray-100'></div>
      </div>
    </div>
  )
}

const mapStateToProps = state => ({})

const mapDispatchToProps = dispatch => ({})

export default connect(mapStateToProps, mapDispatchToProps)(Reports)
