import React from 'react';
import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom';
import AppClient from './layout/Client/AppClient';
import AppAdmin from './layout/Admin/AppAdmin';
import Home from './pages/home/Home';
import Categories from './pages/categories/Categories';
import Contact from './pages/contact/Contact';
import ProdDetail from './components/prod-detail/ProdDetail';
import Login from './pages/login/Login';
import MyCart from './pages/my-cart/MyCart';

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
    
        <Route exact path="/detail" render={() => {
          return (
            <AppClient>
              <ProdDetail />
            </AppClient>
          );
        }} />

        <Route exact path="/my-cart" render={() => {
          return (
            <AppClient>
              <MyCart />
            </AppClient>
          );
        }} />

        <Route path="/login" component={Login} />
        <Route path="/admin" component={AppAdmin} />

      </Router>
    </div>
  );
}

export default App;
