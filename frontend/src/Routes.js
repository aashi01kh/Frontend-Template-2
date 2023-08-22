import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import MainPage from './MainPage';
import Help from './Help';
import Contact from './Contact';
import Dashboard from './Dashboard'; // Import other dashboard components

const Routes = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={MainPage} />
        <Route path="/help" component={Help} />
        <Route path="/contact" component={Contact} />
        <Route path="/dashboard" component={Dashboard} />
        {/* Add routes for other dashboard components */}
      </Switch>
    </Router>
  );
};

export default Routes;
