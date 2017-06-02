import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';


const DriverDetail = ({ driverData, history }) => {
  // const picUrl = `../img/drivers/${driverData.driverId}.png`;
  const avatar = require(`../img/drivers/${driverData.driverId}.png`);
  const name = `${driverData.Drivers[0].givenName} ${driverData.Drivers[0].familyName}`;

  const a = localStorage.getItem('history') === null ? [] : JSON.parse(localStorage.getItem('history'));
  const b = [[avatar, name], ...a.slice(0, 4)];
  localStorage.setItem('history', JSON.stringify(b));

  return (
    <div className="DriverDetail">
      <img src={avatar} alt={name} />
      <p>{name}</p>
      <hr />
      <p>Nationality: {driverData.Drivers[0].nationality}</p>
      <p>Date Of Birth: {driverData.Drivers[0].dateOfBirth}</p>
      <p>Starting Number: {driverData.Drivers[0].permanentNumber}</p>
      <p>Biography: {driverData.Drivers[0].url}</p>
      <ul>
        {
          a.map((item, i) => (
            <li key={i}>
              <img src={item[0]} alt=""/>
              <span>{item[1]}</span>
            </li>
          ))
        }
      </ul>
    </div>
  );
};

DriverDetail.propTypes = {
  driverData: PropTypes.shape({
    driverId: PropTypes.string
  })
};

export default DriverDetail;
