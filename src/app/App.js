import React from 'react';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';

import './App.css';

import Header from './shared/header/Header';
import Home from './home/Home';
import Schedule from './schedule/Schedule';

import { GlobalProvider } from './../context/GlobalContext';

const App = () => {

  const renderRoutes = () => {
    return (

      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/create" component={Schedule} />
        <Route exact path="/edit/:id" component={Schedule} />
        <Redirect to="/" />
      </Switch>

    )
  }

  return (
    <div className="container">
      <Router>
        <GlobalProvider>
          <Header></Header>
          <main>
            {renderRoutes()}
          </main>
        </GlobalProvider>
      </Router>
    </div>
  );
}

export default App;
