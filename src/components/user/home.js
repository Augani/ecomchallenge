import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import Sidebar from '../sidebar';
import { withRouter } from 'react-router-dom';
import Tokens from './tokens';
import Default from './default';
import Transactions from './transactions'
import Reports from './reports';
import Settings from './settings'
class Home extends PureComponent {
    constructor(props) {
        super(props)

        this.state = {
            mobile: props.mobile
        }
    }

   componentDidUpdate(){
     this.props.drawer()
   }

    renderPage = props => {
        const { pathname } = props.location
        const {mobile, drawer, newT} = props;
        this.setState({
          page: pathname
        })
       
        switch (pathname) {
          case '/home':
            return <Default />
          case '/reports':
            return <Reports />
          case '/transactions':
            return <Transactions />
          case '/tokens':
            return <Tokens />
          case '/settings':
            return <Settings />
    
          default:
            return <Default/>
        }
      }

    

    render() {
        return (
            <div className="userHome flex flex-row w-full h-full">
            <div className="userSide hidden">
            <Sidebar/>
            </div>
            <div className="restOfPage w-full h-full">
            {this.renderPage(this.props)}
            </div>

            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    state
})

const mapDispatchToProps = (dispatch) => ({
    dispatch
})

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(Home))
