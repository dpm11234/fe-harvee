import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import Home from './../../pages/home/Home';
import Contact from '../../pages/contact/Contact';
import Footer from '../../components/footer/Footer';
import Categories from '../../pages/categories/Categories';
import Navbar from '../navbar/Navbar';

class AppClient extends Component {
   render() {
      return (
         <div>
            <Navbar />

            <Route path="/" exact component={Home} />
            <Route path="/contact" component={Contact} />
            <Route path="/category" component={Categories} />

            <Footer />
         </div>
      );
   }
}

export default AppClient;