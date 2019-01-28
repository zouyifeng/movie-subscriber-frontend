import React, {Component} from 'react'
import { connect } from 'react-redux'
import { getHomeList } from './store/actions'

import Card from './components/card'

class Home extends Component {

  componentDidMount() {
    if (!this.props.apps.length) {
      this.props.getHomeList()
    }
  }
  render() {
    const { apps } = this.props
    const totalapps = apps.length;

    return (
       <div>
         <Card apps={apps} totalapps={totalapps} />
       </div>
    );
  }
}
 
const mapStateToProps = function(state) {
  return { apps: state.home.list }
}

const mapDispatchToProps = dispatch => ({
  getHomeList() {
    dispatch(getHomeList())
  }
})

const ExportHome = connect(mapStateToProps, mapDispatchToProps)(Home)
 
ExportHome.loadData = (store) => {
  return store.dispatch(getHomeList())
}

export default ExportHome
