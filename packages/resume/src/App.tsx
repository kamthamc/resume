import * as React from 'react';
import styled from 'styled-components';
import ResumeContext from './Contexts/Resume';
import { ProfileData as resumeData } from '@kamthamc/resume-data';
import { Route } from 'react-router';
import { Profile } from './Containers/Profile';

const ContainerDiv = styled('div')({
  height: '100%'
});

const App = () => (
  <Route
    path="/"
    component={() => (
      <ResumeContext.Provider value={resumeData}>
        <Profile />
      </ResumeContext.Provider>
    )}
  />
);

export default App;
