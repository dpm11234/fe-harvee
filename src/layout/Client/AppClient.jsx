import React, { Component } from 'react';
// import { Route, Redirect } from 'react-router-dom';

import Footer from '../../components/footer/Footer';
import Navbar from '../../components/navbar/Navbar';



class AppClient extends Component {

   render() {
      return (
         <div>
            <Navbar />
            {this.props.children}
            <Footer />
         </div>
      );
   }
}

export default AppClient;