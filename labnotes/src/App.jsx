import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from 'react-router-dom'
import GuardarNotas from './componentes/Notas'
import Header from './componentes/Header'
import Login from './componentes/Login'
import LogoutEnd from './componentes/Logout'

function App() {
  
  return (
      <Router>
        <Switch>
          <Route path="/notas">
            <Header></Header>
            <GuardarNotas></GuardarNotas>
          </Route>
          <Route path="/logout">
            <LogoutEnd></LogoutEnd>
          </Route>
          <Route path="/">
            <Login></Login>
          </Route>
        </Switch>

      </Router>
  );
}

export default App;
