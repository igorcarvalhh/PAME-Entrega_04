import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Login from '../../pages/Login';
import Menu from '../../pages/Menu';
import Engine from '../../pages/Engine';

const Main = () => {
  return (
    <Switch> {/* The Switch decides which component to show based on the current URL.*/}
      <Route exact path='/' component={Login}></Route>
      <Route exact path='/menu' component={Menu}></Route>
      <Route exact path='/engine' component={Engine}></Route>
    </Switch>
  );
}

export default Main;