import React, { Component } from 'react';
import SelectSection from './SelectSection';
import Grid from './Grid';
import api from '../utils/api';
import { BrowserRouter, Route } from 'react-router-dom';

class App extends Component {
  constructor(props) {
    super(props);
    this.updateSection = this.updateSection.bind(this);
    this.state = {
      selectedSection: 'Drivers',
      info: null
    };
  }
  componentDidMount() {
    this.updateSection(this.state.selectedSection);
  }
  updateSection(section) {
    api.fetchData(section)
      .then(info => this.setState({
        selectedSection: section,
        info
      }));
  }
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h1>Formula 1 App</h1>
          <SelectSection
            onSelect={this.updateSection}
            selectedSection={this.state.selectedSection}
          />
        </div>
        <div className="Sections">
          {/*<BrowserRouter>*/}
            {/*<div>*/}
              {/*<Route path="/" component={Grid} />*/}
            {/*</div>*/}
          {/*</BrowserRouter>*/}
          {
            !this.state.info
              ? <p>Loading...</p>
              : <Grid
                info={this.state.info}
                section={this.state.selectedSection}
              />
          }
        </div>
      </div>
    );
  }
}

export default App;
