
import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';
import StoreProvider from '../components/Store/Provider';
import RoutesPrivate from '../components/Routes/Private/Private'
import Login from './Login/Login'
import Bilheteria from './bilheteria/Bilheteria.jsx';

const PagesRoot = () => (
  <Router>
    <StoreProvider>
      <Switch>
        <Route path="/login" component={Login} />
        <RoutesPrivate path="/bilheteria" component={Bilheteria} />
      </Switch>
    </StoreProvider>
  </Router>
)


export default PagesRoot;
