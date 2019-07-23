import React, { Component } from 'react';
import CarouselComponet from '../../components/carousel/Carousel';
import ListProduct from '../../components/list-product/ListProduct';

const product = 'https://www.overclockers.co.uk/media/image/thumbnail/MY10LGS_167490_800x800.png';
class Home extends Component {
  
  render() {
    return (
      <div>
        <div className="hv-home">
          <CarouselComponet />
          <div className="hv-list-product">
            <div className="container my-4">
            <ListProduct product={product}/>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Home;