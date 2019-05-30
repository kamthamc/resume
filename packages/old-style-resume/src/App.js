import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import darkBaseTheme from 'material-ui/styles/baseThemes/lightBaseTheme';

import getMuiTheme from 'material-ui/styles/getMuiTheme';

import { ProfileComponent } from './Profile/ProfileComponent';
import { ProfileData } from '@kamthamc/resume-data';

import './App.css';

class App extends Component {
  render() {
    return (
      <MuiThemeProvider muiTheme={getMuiTheme(darkBaseTheme)}>
        <ProfileComponent profile={ProfileData} />
      </MuiThemeProvider>
    );
  }
}

export default App;
