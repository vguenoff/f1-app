import React, { Component } from 'react';
import api from '../utils/api';

import DriverList from './DriverList';

class Drivers extends Component {
  constructor(props) {
    super(props);
    this.state = {
      driverData: null
    };
  }
  componentDidMount() {
    api.fetchData('Drivers')
      .then(driverData => this.setState({ driverData }));
  }
  componentWillUnmount() {
    this.setState({ driverData: null });
  }
  render() {
    return (
      <div>
        {
          !this.state.driverData
          ? <p>Loading...</p>
          : <DriverList
            className="DriverList"
            driverData={this.state.driverData}
          />
        }
      </div>
    );
  }
}

export default Drivers;
