import React from 'react'
import { connect } from 'react-redux'
import HomeIcon from '@material-ui/icons/Home'
import PersonIcon from '@material-ui/icons/Person'
import SettingsIcon from '@material-ui/icons/Settings'
import ForumIcon from '@material-ui/icons/Forum'
import Report from '@material-ui/icons/LibraryBooks'
import { Icon } from 'evergreen-ui'
import { withRouter } from 'react-router-dom'
import Badge from '@material-ui/core/Badge'

function Icons (props) {
  console.log(props)
  const renderIcons = name => {
    switch (name) {
      case 'home':
        return <Icon className='icon' title={props.page} icon='home' />
      case 'report':
        return <Icon className='icon' title={props.page} icon='book' />
        case 'tokens':
        return <Icon className='icon' title={props.page} icon='new-grid-item' />
      case 'settings':
        return <Icon className='icon' title={props.page} icon='settings' />
      case 'transactions':
        return <Icon className='icon' title={props.page} icon='list-detail-view' />
      default:
          return <Icon className='icon' title={props.page} icon='home' />
    }
  }
  if (props.message) {
    return (
      <div className='sideIcons'>
        <Badge
          badgeContent={props.message}
          color='secondary'
        >
          {renderIcons(props.page)}
        </Badge>
      </div>
    )
  }
  return <div className='sideIcons'>{renderIcons(props.page)}</div>
}

const mapStateToProps = state => ({})

const mapDispatchToProps = dispatch => ({})

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(Icons))
