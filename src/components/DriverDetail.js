import React, { Component } from 'react';
import axios from 'axios';

class DriversDetails extends Component {
  constructor(props) {
    super(props);
    this.state = {
      driverData: null
    };
  }
  componentDidMount() {
    axios.get(`http://ergast.com/api/f1/2016/drivers/${this.props.match.params.driverId}.json`)
      .then(response => this.setState({ driverData: response.data.MRData.DriverTable.Drivers[0] }));
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
            : <p>{this.props.match.params.driverId}</p>
        }
      </div>
    );
  }
}

export default DriversDetails;
