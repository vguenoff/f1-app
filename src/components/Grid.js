import React from 'react';
import PropTypes from 'prop-types';

const Grid = ({ info, section }) => {
  switch (section) {
    case 'Drivers':
      return (
        <ul>
          {info.map(driver => (
            <li
              key={driver.Driver.driverId}
            >{driver.Driver.driverId}</li>
          ))}
        </ul>
      );
    case 'Constructors':
      return (
        <ul>
          {info.map(constructor => (
            <li
              key={constructor.constructorId}
            >{constructor.constructorId}</li>
          ))}
        </ul>
      );
    case 'Circuits':
      return (
        <ul>
          {info.map(circuit => (
            <li
              key={circuit.circuitId}
            >{circuit.circuitId}</li>
          ))}
        </ul>
      );
    default:
      return null;
  }
};

export default Grid;
