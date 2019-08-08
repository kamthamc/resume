/// <reference path="../typings/index.d.ts" /> #

import 'typeface-roboto';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';

import App from './App';
import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  @import 'https://fonts.googleapis.com/css?family=Open+Sans:300,400&display=swap';
  html, body, #app {
    height: 100%;
    margin: 0;
    font-family: 'Open Sans', sans-serif;
    font-weight: 300;
  }
  * {
    box-sizing: border-box;
  }
`;

const mountNode = document.getElementById('app');

ReactDOM.render(
  <>
    <Router>
      <App />
    </Router>
    <GlobalStyle />
  </>,
  mountNode
);
