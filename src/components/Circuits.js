import React, { Component } from 'react';
import api from '../utils/api';

class Circuits extends Component {
  constructor(props) {
    super(props);
    this.state = {
      circuitData: null
    };
  }
  componentDidMount() {
    api.fetchData('Circuits')
      .then(circuitData => this.setState({ circuitData }));
  }
  render() {
    const circuitData = this.state.circuitData;
    return (
      <div className="Circuits">
        {
          !circuitData
          ? <p>Loading...</p>
          : (
            <ul>
              {circuitData.map(circuit => (
                <li
                  key={circuit.circuitId}
                >{circuit.circuitId}</li>
              ))}
            </ul>
          )
        }
      </div>
    );
  }
}

export default Circuits;
