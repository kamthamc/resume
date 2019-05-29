import * as React from 'react';
import styled, { ThemeProvider } from 'styled-components';
import { Route } from 'react-router';

const ContainerDiv = styled('div')({
  height: '100%',
});


const App = () => (
  <ThemeProvider>
    <ContainerDiv>
      <Route path="/" />
    </ContainerDiv>
  </ThemeProvider>
);

export default App;
