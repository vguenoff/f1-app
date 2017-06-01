import React, { Component } from 'react';
import { Link } from 'react-router-dom';

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
  componentWillUnmount() {
    this.setState({ circuitData: null });
  }
  render() {
    const circuitData = this.state.circuitData;
    return (
      <div>
        {
          !circuitData
            ? <p>Loading...</p>
            : (
              <ul className="Circuits">
                {
                  circuitData.map((circuit) => {
                    const circuitsPic = require(`../img/circuits/${circuit.circuitId}.png`);
                    const linkPic = require('../img/link.png');

                    return (
                      <li
                        key={circuit.circuitId}
                      >
                        <div>
                          <img src={circuitsPic} alt={circuit.circuitName} />
                        </div>
                        <p>
                          <span>
                            Name: {circuit.circuitName}
                          </span>
                          <Link to={circuit.url} target="_blank">
                            <img src={linkPic} alt="Wiki Link" />
                          </Link>
                        </p>
                        <p>
                          Locality: {`${circuit.Location.country}, ${circuit.Location.locality}`}
                        </p>
                      </li>
                    );
                  })
                }
              </ul>
          )
        }
      </div>
    );
  }
}

export default Circuits;
