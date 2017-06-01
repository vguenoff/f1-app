import React, { Component } from 'react';
import api from '../utils/api';

class Constructors extends Component {
  constructor(props) {
    super(props);
    this.state = {
      constructorData: null
    };
  }
  componentDidMount() {
    api.fetchData('Constructors')
      .then(constructorData => this.setState({ constructorData }));
  }
  render() {
    const constructorData = this.state.constructorData;
    return (
      <div className="Constructors">
        {
          !constructorData
          ? <p>Loading...</p>
          : (
            <ul>
              {constructorData.map(constructor => (
                <li
                  key={constructor.constructorId}
                >{constructor.constructorId}</li>
              ))}
            </ul>
          )
        }
      </div>
    );
  }
}

export default Constructors;
