import React, { Component } from 'react';
import api from '../utils/api';

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
  render() {
    const driverData = this.state.driverData;
    return (
      <div className="Drivers">
        {
          !driverData
          ? <p>Loading...</p>
          : (
            <ul>
              {driverData.map(driver => (
                <li
                  key={driver.Driver.driverId}
                >{driver.Driver.driverId}</li>
              ))}
            </ul>
          )
        }
      </div>
    );
  }
}

export default Drivers;
