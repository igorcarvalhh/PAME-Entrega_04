import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Login from '../../pages/Login';
import Menu from '../../pages/Menu';
import Engine from '../../pages/Engine';
import Perfil from '../../pages/Perfil';
import Funcionarios from '../../pages/Funcionarios';
import Pesos from '../../pages/Pesos';
import SignUp from '../../pages/SignUp';

const Main = () => {
  return (
    <Switch> {/* The Switch decides which component to show based on the current URL.*/}
      <Route exact path='/' component={Login}></Route>
      <Route exact path='/menu' component={Menu}></Route>
      <Route exact path='/engine' component={Engine}></Route>
      <Route exact path='/perfil' component={Perfil}></Route>
      <Route exact path='/funcionarios' component={Funcionarios}></Route>
      <Route exact path='/pesos' component={Pesos}></Route>
      <Route exact path='/signup' component={SignUp}></Route>
    </Switch>
  );
}

export default Main;