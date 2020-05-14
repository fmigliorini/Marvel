import React from 'react';
import './App.css';
import { Router } from 'react-router-dom';
import { createBrowserHistory } from 'history';
import Routes from './Routes';

const history = createBrowserHistory();

function App() {
  return (
    <Router history={history}>
      <Routes />
    </Router>
  );
}

export default App;
