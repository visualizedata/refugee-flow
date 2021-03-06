import React from 'react'
import { Route, Link } from 'react-router-dom'

import GlobeContainer from './GlobeContainer'
import AsyApplicationContainer from './AsyApplicationContainer'

export default class War extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      currentYear: 0,
      stillLoading: true,
      currentCountry: 'GLOBAL'
    }

    this.changeYearManager = this.changeYearManager.bind(this);
    this.loadingManager = this.loadingManager.bind(this);
    this.changeCountryManager = this.changeCountryManager.bind(this);
  }

  changeYearManager(year){
    this.setState({currentYear: year});
  }

  loadingManager(boolean){
    this.setState({ stillLoading: boolean});
  }

  changeCountryManager(country){
    this.setState({currentCountry: country});
  }

  render() {
    return(
      <div>
        <GlobeContainer changeYearManager = {this.changeYearManager}
          loadingManager = { this.loadingManager }
          changeCountryManager = {this.changeCountryManager}
        />
        <AsyApplicationContainer currentYear = {this.state.currentYear}
          currentCountry = {this.state.currentCountry}
          loadingManager = { this.state.stillLoading }
        />
      </div>
    )
  }
}
