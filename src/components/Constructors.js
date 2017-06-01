import React, { Component } from 'react';
import { Link } from 'react-router-dom';
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
  componentWillUnmount() {
    this.setState({ constructorData: null });
  }
  render() {
    const constructorData = this.state.constructorData;
    return (
      <div>
        {
          !constructorData
          ? <p>Loading...</p>
          : (
            <ul className="Constructors">
              {
                constructorData.map((constructor) => {
                  const constructorPic = require(`../img/constructors/${constructor.constructorId}.png`);
                  const linkPic = require('../img/link.png');
                  return (
                    <li
                      key={constructor.constructorId}
                    >
                      <div>
                        <img src={constructorPic} alt={constructor.name} />
                      </div>
                      <p>
                        <span>
                          Constructor: {constructor.name}
                        </span>
                        <Link to={constructor.url} target="_blank">
                          <img src={linkPic} alt="Wiki Link" />
                        </Link>
                      </p>
                      <p>Nationality: {constructor.nationality}</p>
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

export default Constructors;
