import axios from 'axios';

export default {
  fetchData: (section) => {
    switch (section) {
      case 'Drivers':
        return axios.get('https://ergast.com/api/f1/2016/driverStandings.json')
          .then(response => response.data.MRData.StandingsTable.StandingsLists[0].DriverStandings);
      case 'Circuits':
        return axios.get('https://ergast.com/api/f1/2016/circuits.json')
          .then(response => response.data.MRData.CircuitTable.Circuits);
      case 'Constructors':
        return axios.get('https://ergast.com/api/f1/2016/constructors.json')
          .then(response => response.data.MRData.ConstructorTable.Constructors);
      default:
        return null;
    }
  }
};
