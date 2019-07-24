import React from 'react';
import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom';
import AppClient from './layout/Client/AppClient';
import AppAdmin from './layout/AppAdmin';
import Home from './pages/home/Home';
import Categories from './pages/categories/Categories';
import Contact from './pages/contact/Contact';


function App() {
  return (
    <div className="App">
      <Router>
        <Route exact path="/" render={() => {
          return (
            <Redirect to="/home" />
          );
        }} />

        <Route exact path="/home" render={() => {
          return (
            <AppClient>
              <Home />
            </AppClient>
          );
        }} />

        <Route exact path="/category" render={() => {
          return (
            <AppClient>
              <Categories />
            </AppClient>
          );
        }} />

        <Route exact path="/contact" render={() => {
          return (
            <AppClient>
              <Contact />
            </AppClient>
          );
        }} />


        <Route path="/admin" component={AppAdmin} />

      </Router>
    </div>
  );
}

export default App;
