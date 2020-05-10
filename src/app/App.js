import React, { Suspense } from 'react';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';

import './App.css';

import Header from './shared/header/Header';
import Home from './home/Home';
import Schedule from './schedule/Schedule';
import ErrorHandler from './shared/ErrorHandler';
import { GlobalProvider } from './../context/GlobalContext';

const App = () => {

  const renderRoutes = () => {
    return (
      <Suspense fallback={<div>Loading...</div>}>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/create" component={Schedule} />
          <Route exact path="/edit/:id" component={Schedule} />
          <Redirect to="/" />
        </Switch>
      </Suspense>
    )
  }

  return (
    <div className="container">
      <Router>
        <GlobalProvider>
          <Header></Header>
          <main>
            <ErrorHandler>{renderRoutes()}</ErrorHandler>
          </main>
        </GlobalProvider>
      </Router>
    </div>
  );
}

export default App;
