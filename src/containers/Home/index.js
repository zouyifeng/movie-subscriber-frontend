import React, {Component} from 'react'
import { connect } from 'react-redux'
import { getHomeList } from './store/actions'

import Card from './components/card'

class Home extends Component {

  componentDidMount() {
    const { dispatch } = this.props
    // dispatch(fetchAppsIfNeeded())
  }
  render() {
    const { apps } = this.props
    // console.log(list)
    const totalapps = apps.length;

    return (
       <div>
         {apps.length === 0 && <h2>Loading...</h2>}
         {apps.length === 0 && <h2>Empty.</h2>}
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
