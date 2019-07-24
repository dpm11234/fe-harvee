import React, { Component } from 'react';
import { Route, Redirect } from 'react-router-dom';
import Home from './../../pages/home/Home';
import Contact from '../../pages/contact/Contact';
import Footer from '../../components/footer/Footer';
import Categories from '../../pages/categories/Categories';
import Navbar from '../../components/navbar/Navbar';
import ProdDetail from '../../components/prod-detail/ProdDetail';
import Login from '../../pages/login/Login';

class AppClient extends Component {
   render() {
      return (
         <div>
            <Navbar />
            <Route path="/" exact render={() => <Redirect to="/home" />} />
            <Route path="/home" component={Home}/>
            <Route path="/contact" component={Contact} />
            <Route path="/category" component={Categories} />
            <Route path="/detail" component={ProdDetail} />
            <Route path="/login" component={Login}/>
            <Footer />
         </div>
      );
   }
}

export default AppClient;