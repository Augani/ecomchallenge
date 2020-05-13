import React from 'react'
import { connect } from 'react-redux';
import Table from '../table';
const Columns  =  [
    { title: 'Transaction ID', field: 'id' },
    { title: 'Type', field: 'type' },
    { title: 'Description', field: 'description' },
    {
      title: 'Amount Paid',
      field: 'amount',
        type: 'numeric'
    },
    { title: 'Date', field: 'date' },

  ];
  const tableData = [
    { id: 'bygyg76g', type: 'Token payment', description: 'yvgyugvjhviy', amount: 103, 'date':  'Apr 13th, 2020 16:56' },
    { id: 'hjbjkbkj', type: 'Token payment', description: 'yvgyugvjhviy', amount: 103, 'date':  'Apr 13th, 2020 16:56' },

  ];
function Transactions() {
    
    return (
        <div className="transact-main w-full h-full px-10 flex flex-col">
        <Table table={{Columns, Data: tableData, title:"List of transactions"}}/>
            
        </div>
    )
}

const mapStateToProps = (state) => ({
    
})

const mapDispatchToProps = (dispatch) => ({
    
})

export default connect(mapStateToProps, mapDispatchToProps)(Transactions)
