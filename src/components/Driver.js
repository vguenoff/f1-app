import React, { Component } from 'react';
import DriverDetail from './DriverDetail';

import axios from 'axios';

class Driver extends Component {
  constructor(props) {
    super(props);
    this.state = {
      driverData: null,
      history: []
    };
  }
  componentWillMount() {
    const localStorageRef = localStorage.getItem('history');
    if (localStorageRef) {
      this.setState({
        history: JSON.parse(localStorageRef)
      });
    }
  }
  componentDidMount() {
    axios.get(`http://ergast.com/api/f1/2016/drivers/${this.props.match.params.driverId}.json`)
      .then(response => this.setState({ driverData: response.data.MRData.DriverTable }));
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
            : <DriverDetail driverData={this.state.driverData} history={this.state.history} />
        }
      </div>
    );
  }
}

export default Driver;
