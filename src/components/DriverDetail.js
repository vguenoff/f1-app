import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';


const DriverDetail = ({ driverData, history }) => {
  const avatar = require(`../img/drivers/${driverData.driverId}.png`);
  const name = `${driverData.Drivers[0].givenName} ${driverData.Drivers[0].familyName}`;

  const a = localStorage.getItem('history') === null ? [] : JSON.parse(localStorage.getItem('history'));
  const b = [[avatar, name], ...a.slice(0, 4)];
  localStorage.setItem('history', JSON.stringify(b));

  return (
    <div>
      <div className="DriverDetail">
        <img src={avatar} alt={name} />
        <h3><span>{name}</span></h3>
        <hr />
        <p>Nationality: {driverData.Drivers[0].nationality}</p>
        <p>Date Of Birth: {driverData.Drivers[0].dateOfBirth}</p>
        <p>Starting Number: {driverData.Drivers[0].permanentNumber}</p>
        <p>Biography:&nbsp;
          <Link to={driverData.Drivers[0].url} target="_blank">
            {driverData.Drivers[0].url}
          </Link>
        </p>
      </div>
      <div className="history">
        <p>Recently Viewed Drivers:</p>
        <ul>
          {
            a.map((item, i) => (
              <li key={i}>
                <img src={item[0]} alt={item[1]} />
                <h4><span>{item[1]}</span></h4>
              </li>
            ))
          }
        </ul>
      </div>
    </div>
  );
};

DriverDetail.propTypes = {
  driverData: PropTypes.shape({
    driverId: PropTypes.string
  })
};

export default DriverDetail;
