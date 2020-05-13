import React from 'react'
import { connect } from 'react-redux'
import { Pane, Table } from 'evergreen-ui'
import Grid from '@material-ui/core/Grid';
import DateFnsUtils from '@date-io/date-fns';
import {
  MuiPickersUtilsProvider,
  KeyboardTimePicker,
  KeyboardDatePicker,
} from '@material-ui/pickers';
import {
  AiOutlineUsergroupAdd,
  AiOutlineSearch,
  AiFillCreditCard,
  AiOutlineShoppingCart,
  AiOutlineUserDelete,
  AiFillProject
} from 'react-icons/ai'
import { Divider, Avatar } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles';
import Chip from '@material-ui/core/Chip';

const useStyles = makeStyles((theme) => ({
  root: {
    ...theme.typography.button,
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(1),
    fontSize: 18
  },
  vin:{
    padding: theme.spacing(2),
    fontSize: 14,
    margin: '5px'
  },
  DateShow:{
      ...theme.typography.button,
      backgroundColor: 'rgb(49, 100, 196)',
      padding: theme.spacing(2),
      fontSize:12,
      color: '#fff'
  
  }
}));





function Dashboard () {
  const classes = useStyles();


  const profiles = [
    {id: 1, vin: "ZU&FTCUG&YGV", searchedBy: 'Augustus Otu', date: '2020-04-30 10:23'},
    {id: 2, vin: "YU&XZEXTCF&YGV", searchedBy: 'Augustus Otu', date: '2020-04-30 10:23'},
    {id: 3, vin: "YU&GF56TY67&YGV", searchedBy: 'Augustus Otu', date: '2020-04-30 10:23'},
    {id: 4, vin: "YU&FTCUG&76T6T", searchedBy: 'Augustus Otu', date: '2020-04-30 10:23'},
    {id: 5, vin: "YU&YF67F5&YGV", searchedBy: 'Augustus Otu', date: '2020-04-30 10:23'},
    {id: 6, vin: "YU&H78YG&YGV", searchedBy: 'Augustus Otu', date: '2020-04-30 10:23'},

    
  ]

  const actions = [
    {
      id: 1,
      action: 'Changed user Password',
      user: 'Kofi'
    },
    {
      id: 2,
      action: 'Changed user Password',
      user: 'Kofi'
    },
    {
      id: 3,
      action: 'Changed user Password',
      user: 'Kofi'
    }
  ]
  return (
    <div className='h-full w-full flex-col flex'>
      <div className='p-4 theCards grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 lg:gap-2'>
        <CardBrief
          icon={<AiOutlineUsergroupAdd size='70%' />}
          number='101'
          title='Registrations'
        />
        <CardBrief
          icon={<AiFillCreditCard size='70%' />}
          number='204'
          title='Transactions'
        />
        <CardBrief
          icon={<AiOutlineSearch size='70%' />}
          number='19'
          title='Vin Searches'
        />
        <CardBrief
          icon={<AiOutlineShoppingCart size='70%' />}
          number='39'
          title='Vin Purchases'
        />
        <CardBrief
          icon={<AiOutlineUserDelete size='70%' />}
          number='80'
          title='User Tokens'
        />
        <CardBrief
          icon={<AiFillProject size='70%' />}
          number='55'
          title='Business Tokens'
        />
      </div>
      <Pane
        elevation={2}
        className='h-full w-full  p-5 grid grid-rows-3 grid-flow-col gap-4'
      >
        <Pane elevation={2} className='row-span-3 p-3 col-span-4'>
        {/* <div className={classes.root}>{"Vin Searches"}</div> */}
        <Chip className={classes.vin} label="Vin Searches" color="primary" />
        <Chip className={classes.vin} label="Vin Purchases" color="secondary" />

        <Chip className={classes.vin} label="Registrations" color="secondary" />
        <Chip className={classes.vin} label="Transactions" color="secondary" />


        
        {/* <Divider dark/> */}
        <TheTable data={profiles} params={['vin', 'searchedBy', 'date']}/>
         
        </Pane>
        <Pane elevation={2} className='row-span-1 col-span-1'>
                <Datedash/>
        </Pane>
        <Pane elevation={2} className='row-span-2 col-span-1'>
          <TheTable data={actions} params={['action', 'user']}/>
        </Pane>
      </Pane>
    </div>
  )
}



function TheTable(props){
  const {data, params} = props;
  return(
    <Table>
    <Table.Head className="vinSearchTableHead">
    {params.map(head=>(
      <Table.TextHeaderCell>{head.toUpperCase()}</Table.TextHeaderCell>
    ))}
    </Table.Head>
    <Table.Body height="100%">
      {data.map(profile => (
        <Table.Row
          key={profile.id}
          isSelectable
          onSelect={() => alert(profile.vin)}
        >
        {params.map(row=>(
          <Table.TextCell>{profile[row]}</Table.TextCell>
        ))}
        </Table.Row>
      ))}
    </Table.Body>
  </Table>
  )
}


function Datedash(){
  const classes = useStyles();
  const [selectedDate, setSelectedDate] = React.useState(new Date());

  const handleDateChange = (date) => {
    console.log(date)
    setSelectedDate(date);
  };
  return(
    <MuiPickersUtilsProvider utils={DateFnsUtils}>
    <Grid container justify="space-around">
    <Grid justify="space-around" item >
    <div className={classes.DateShow}>{`${selectedDate}`}</div>
    </Grid>
    <KeyboardDatePicker
        className="mx-4 text-2xl dateH"
        variant="inline"
        fullWidth
        autoOk={true}
        disableFuture={true}
        format="MM/dd/yyyy"
        margin="normal"
        id="date-picker-inline"
        label="Pick a date to show data for that selected date"
        value={selectedDate}
        onChange={handleDateChange}
        KeyboardButtonProps={{
          'aria-label': 'change date',
        }}
      />
     
    </Grid>
  </MuiPickersUtilsProvider>
  )
}

function CardBrief (props) {
  const { title, icon, number } = props
  return (
    <Pane
      elevation={1}
      className='admin-dashboard-cards grid grid-rows-3 grid-flow-col gap-4'
    >
      <Pane className='row-span-3 flex flex-col justify-center items-center'>
        {icon}
      </Pane>
      <Pane className='row-span-1 col-span-2 flex flex-col justify-center items-center p-2'>
        <h1 className='cardHeadings'>{title}</h1>
      </Pane>
      <Pane className='row-span-2 col-span-2 flex flex-col justify-center items-center p-2'>
        <h2 className='cardSubs'>{number}</h2>
      </Pane>
    </Pane>
  )
}

const mapStateToProps = state => ({})

const mapDispatchToProps = dispatch => ({})

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard)
