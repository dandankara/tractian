import React from 'react';
import { Switch, Route } from 'react-router-dom';

// Import das pages
import Companies from '../pages/companies';
import Home from '../pages/home';
import Units from '../pages/unitys';

const Routes: React.FC = () => {
  return (
    <Switch>
        <Route path='/' component={Home} exact />
        <Route path="/companies" component={Companies} />
        <Route path='/units' component={Units} />
    </Switch>
  );
};

export default Routes;