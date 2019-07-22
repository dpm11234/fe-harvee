import React, { Component } from 'react';
import Footer from './../../layout/footer/Footer';
import Navbar from '../../layout/navbar/Navbar';
import CarouselComponet from '../../components/carousel/Carousel';

class Home extends Component {
  render() {
    return (
      <div>
        <div>
          <Navbar />
        </div>
        <div className="hv-home">
          <CarouselComponet />
        </div>
        <Footer />
      </div>
    );
  }
}

export default Home;