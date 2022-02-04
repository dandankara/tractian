import React from 'react';
import { Switch, Route } from 'react-router-dom';

// Import das pages
import Companies from '../pages/companies';
import Home from '../pages/home';
import Units from '../pages/unitys';
import Assets from '../pages/assets';
import Users from '../pages/users';
import Info from '../pages/info';

const Routes: React.FC = () => {
  return (
    <Switch>
        <Route path='/' component={Home} exact />
        <Route path="/companies" component={Companies} />
        <Route path='/units' component={Units} />
        <Route path='/assets' component={Assets} />
        <Route path='/users' component={Users} />
        <Route path='/info' component={Info} />
    </Switch>
  );
};

export default Routes;