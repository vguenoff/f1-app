import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';


const DriverList = ({ driverData }) => (
  <ul className="DriverList">
    {driverData.map((driver) => {
      const avatar = require(`../img/drivers/${driver.Driver.driverId}.png`);
      const name = `${driver.Driver.givenName} ${driver.Driver.familyName}`;
      const nationality = require(`../img/flags/${driver.Driver.nationality}.png`);
      return (
        <li
          key={driver.Driver.driverId}
        >
          <Link to={`/driverDetail/${driver.Driver.driverId}`}>
            <h3>
              <img className="avatar" src={avatar} alt={name} />
              <span>{name}</span>
            </h3>
          </Link>
          <hr />
          <p className="nationality">
            <span>Nationality:</span>
            <img className="flag" src={nationality} alt={driver.Driver.nationality}/>
          </p>
          <p>Position:{driver.position}</p>
          <p>Points:{driver.points}</p>
          <p>Wins:{driver.wins}</p>
          <hr />
          <p>Constructor: {driver.Constructors[0].name}</p>
        </li>
      );
    })}
  </ul>
);

DriverList.propTypes = {
  driverData: PropTypes.arrayOf(
    PropTypes.shape({
      driverId: PropTypes.string
    }))
};

export default DriverList;
