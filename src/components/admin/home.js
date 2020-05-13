import React from 'react'
import { connect } from 'react-redux'
import { makeStyles } from '@material-ui/core/styles'
import ListSubheader from '@material-ui/core/ListSubheader'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemIcon from '@material-ui/core/ListItemIcon'
import ListItemText from '@material-ui/core/ListItemText'
import Collapse from '@material-ui/core/Collapse'
import InboxIcon from '@material-ui/icons/MoveToInbox'
import DraftsIcon from '@material-ui/icons/Drafts'
import SendIcon from '@material-ui/icons/Send'
import ExpandLess from '@material-ui/icons/ExpandLess'
import ExpandMore from '@material-ui/icons/ExpandMore'
import StarBorder from '@material-ui/icons/StarBorder'
import { Pane } from 'evergreen-ui'
import AdminComps from './index'

const useStyles = makeStyles(theme => ({
  root: {
    width: '100%',
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper
  },
  nested: {
    paddingLeft: theme.spacing(4)
  }
}))

function Home () {
  const classes = useStyles()
  const [values, setValues] = React.useState({
    products: false,
    corporate: false,
    reports: false,
    messaging: false,
    users: false,
    pricing: false,
    country: false,
    expert: false,
    duty: false,
    risk: false,
    resource: false,
    page: ''
  })


  const showComponent = (page)=>{
    switch(page){
        default:
            return <AdminComps.Dashboard/>
    }
  }

  const handleClick = update => {
    setValues({
      ...values,
      ...update
    })
  }
  return (
    <div className='w-full h-full flex flex-row'>
      <div className='adminSide flex h-full flex-col w-1/5'>
        <List
          component='nav'
          aria-labelledby='nested-list-subheader'
          className={classes.root}
        >
          <ListItem button>
            <ListItemText primary='Dashboard' />
          </ListItem>
          <ListItem
            button
            onClick={() => handleClick({ products: !values.products })}
          >
            <ListItemText primary='Products' />
            {values.products ? <ExpandLess /> : <ExpandMore />}
          </ListItem>
          <Collapse in={values.products} timeout='auto' unmountOnExit>
            <List component='div' disablePadding>
              <ListItem button className={classes.nested}>
                <ListItemText primary='VIN Reports' />
              </ListItem>
              <ListItem button className={classes.nested}>
                <ListItemText primary='Expert Advise' />
              </ListItem>
              <ListItem button className={classes.nested}>
                <ListItemText primary='Vehicle Test Results' />
              </ListItem>
              <ListItem button className={classes.nested}>
                <ListItemText primary='Token or Credit' />
              </ListItem>
            </List>
          </Collapse>
          <ListItem
            button
            onClick={() => handleClick({ corporate: !values.corporate })}
          >
            <ListItemText primary='Corporate Clients' />
            {values.corporate ? <ExpandLess /> : <ExpandMore />}
          </ListItem>
          <Collapse in={values.corporate} timeout='auto' unmountOnExit>
            <List component='div' disablePadding>
              <ListItem button className={classes.nested}>
                <ListItemText primary='Business' />
              </ListItem>
            </List>
          </Collapse>
          <ListItem
            button
            onClick={() => handleClick({ reports: !values.reports })}
          >
            <ListItemText primary='Reports' />
            {values.reports ? <ExpandLess /> : <ExpandMore />}
          </ListItem>
          <Collapse in={values.reports} timeout='auto' unmountOnExit>
            <List component='div' disablePadding>
              <ListItem button className={classes.nested}>
                <ListItemText primary='Sales' />
              </ListItem>
              <ListItem button className={classes.nested}>
                <ListItemText primary='User Registration' />
              </ListItem>
              <ListItem button className={classes.nested}>
                <ListItemText primary='Vin Purchases' />
              </ListItem>
              <ListItem button className={classes.nested}>
                <ListItemText primary='Business Purchases' />
              </ListItem>
              <ListItem button className={classes.nested}>
                <ListItemText primary='User Searches' />
              </ListItem>
              <ListItem button className={classes.nested}>
                <ListItemText primary='Tokens assignments' />
              </ListItem>
              <ListItem button className={classes.nested}>
                <ListItemText primary='B2B Vin Purchases' />
              </ListItem>
              <ListItem button className={classes.nested}>
                <ListItemText primary='B2B Token balances' />
              </ListItem>
              <ListItem button className={classes.nested}>
                <ListItemText primary='B2B Token uses' />
              </ListItem>
              <ListItem button className={classes.nested}>
                <ListItemText primary='Custom Reports' />
              </ListItem>
            </List>
          </Collapse>
          <ListItem
            button
            onClick={() => handleClick({ messaging: !values.messaging })}
          >
            <ListItemText primary='Messaging' />
            {values.messaging ? <ExpandLess /> : <ExpandMore />}
          </ListItem>
          <Collapse in={values.messaging} timeout='auto' unmountOnExit>
            <List component='div' disablePadding>
              <ListItem button className={classes.nested}>
                <ListItemText primary='IOS' />
              </ListItem>
              <ListItem button className={classes.nested}>
                <ListItemText primary='Android Web App' />
              </ListItem>
              <ListItem button className={classes.nested}>
                <ListItemText primary='Welcome Email' />
              </ListItem>
              <ListItem button className={classes.nested}>
                <ListItemText primary='B2B' />
              </ListItem>
              <ListItem button className={classes.nested}>
                <ListItemText primary='Normal User' />
              </ListItem>
              <ListItem button className={classes.nested}>
                <ListItemText primary='Purchase Email' />
              </ListItem>
            </List>
          </Collapse>
          <ListItem
            button
            onClick={() => handleClick({ users: !values.users })}
          >
            <ListItemText primary='Users' />
            {values.users ? <ExpandLess /> : <ExpandMore />}
          </ListItem>
          <Collapse in={values.users} timeout='auto' unmountOnExit>
            <List component='div' disablePadding>
              <ListItem button className={classes.nested}>
                <ListItemText primary='Staff' />
              </ListItem>
              <ListItem button className={classes.nested}>
                <ListItemText primary='Consumers' />
              </ListItem>
            </List>
          </Collapse>
          <ListItem
            button
            onClick={() => handleClick({ pricing: !values.pricing })}
          >
            <ListItemText primary='Pricing' />
            {values.pricing ? <ExpandLess /> : <ExpandMore />}
          </ListItem>
          <Collapse in={values.pricing} timeout='auto' unmountOnExit>
            <List component='div' disablePadding>
              <ListItem button className={classes.nested}>
                <ListItemText primary='VIN Reports' />
              </ListItem>
              <ListItem button className={classes.nested}>
                <ListItemText primary='Tokens & Credits' />
              </ListItem>
              <ListItem button className={classes.nested}>
                <ListItemText primary='Business Credits' />
              </ListItem>
              <ListItem button className={classes.nested}>
                <ListItemText primary='Expert Advise' />
              </ListItem>
            </List>
          </Collapse>
          <ListItem
            button
            onClick={() => handleClick({ country: !values.country })}
          >
            <ListItemText primary='Country Ave. Distance' />
            {values.country ? <ExpandLess /> : <ExpandMore />}
          </ListItem>
          <Collapse in={values.country} timeout='auto' unmountOnExit>
            <List component='div' disablePadding>
              <ListItem button className={classes.nested}>
                <ListItemText primary='United States' />
              </ListItem>
              <ListItem button className={classes.nested}>
                <ListItemText primary='Canada' />
              </ListItem>
              <ListItem button className={classes.nested}>
                <ListItemText primary='EU' />
              </ListItem>
            </List>
          </Collapse>
          <ListItem
            button
            onClick={() => handleClick({ expert: !values.expert })}
          >
            <ListItemText primary='Expert Advise' />
            {values.expert ? <ExpandLess /> : <ExpandMore />}
          </ListItem>
          <Collapse in={values.expert} timeout='auto' unmountOnExit>
            <List component='div' disablePadding>
              <ListItem button className={classes.nested}>
                <ListItemText primary='VINs' />
              </ListItem>
            </List>
          </Collapse>
          <ListItem button onClick={() => handleClick({ duty: !values.duty })}>
            <ListItemText primary='Duty' />
            {values.duty ? <ExpandLess /> : <ExpandMore />}
          </ListItem>
          <Collapse in={values.duty} timeout='auto' unmountOnExit>
            <List component='div' disablePadding>
              <ListItem button className={classes.nested}>
                <ListItemText primary='Taxes' />
              </ListItem>
            </List>
          </Collapse>
          <ListItem button onClick={() => handleClick({ risk: !values.risk })}>
            <ListItemText primary='Risk' />
            {values.risk ? <ExpandLess /> : <ExpandMore />}
          </ListItem>
          <Collapse in={values.risk} timeout='auto' unmountOnExit>
            <List component='div' disablePadding>
              <ListItem button className={classes.nested}>
                <ListItemText primary='Risk Rating Components' />
              </ListItem>
            </List>
          </Collapse>
          <ListItem
            button
            onClick={() => handleClick({ resource: !values.resource })}
          >
            <ListItemText primary='Resource Downloads' />
            {values.resource ? <ExpandLess /> : <ExpandMore />}
          </ListItem>
          <Collapse in={values.resource} timeout='auto' unmountOnExit>
            <List component='div' disablePadding>
              <ListItem button className={classes.nested}>
                <ListItemText primary='Manual Vin Downloads' />
              </ListItem>
            </List>
          </Collapse>
          <ListItem button>
            <ListItemText primary='Glossary' />
          </ListItem>
        </List>
      </div>

      <div className="pageSide flex h-full flex-col w-4/5">
        {showComponent(values.page)}
      </div>  
    
    </div>
  )
}

const mapStateToProps = state => ({})

const mapDispatchToProps = dispatch => ({})

export default connect(mapStateToProps, mapDispatchToProps)(Home)
