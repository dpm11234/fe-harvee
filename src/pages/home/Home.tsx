import React, { Component } from 'react';
import CarouselComponet from '../../components/carousel/Carousel';
import ListProduct from '../../components/list-product/ListProduct';
import Features from '../../components/features/Features';
import './Home.scss';
import api from "../../utils/api";

const product = 'https://www.overclockers.co.uk/media/image/thumbnail/MY10LGS_167490_800x800.png';
const ram = 'https://www.anphatpc.com.vn/media/product/20296_geforce_gtx_1080_g1_gaming_1.png';
class Home extends Component {

  render() {
    api.post('/login', {

      'email': 'deoyellow3@gmail.com',
      'password': 'password',

    }).then(({ data }) => {
      console.log(data);
      let a = data.token_type + ' ' + data.token;
      api.defaults.headers.common['Authorization'] = a;
      console.log(a);
      api.post('/products/', {
        "name": "Iphone 5",
        "category_id": 2,
          "brand_id": 8,
          "user_id": 1,
          "price": 3866202.00,
          "thumbnail": "https://lorempixel.com/300/300/?51994",
          "discount": 12,
          "tag": "Phone",
          "status": 1,
          "intro": "Earum at quasi vitae est."
        // "review": "Et expedita ut nam quaerat aliquid consequuntur et",
      }).then(data => console.log(data))

    })

    return (
      <div>
        <div className="hv-home">
          <CarouselComponet />
          <div className="hv-list-product">
            <div className="container-fluid my-4">
              <div className="harvee-list-prod-nav mb-4">
                <div className="row harvee-line pb-4">
                  <div className="container">
                    <div className="row">
                      <div className="col-auto">
                        <h3 className="text-uppercase bd-l pl-2">
                          hot sales
                         </h3>
                      </div>
                    </div>
                    <ListProduct product={product} />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <Features />
          <div className="hv-list-product">
            <div className="container-fluid my-4">
              <div className="harvee-list-prod-nav mb-4">
                <div className="row harvee-line pb-4">
                  <div className="container">
                    <div className="row">
                      <div className="col-auto">
                        <h3 className="text-uppercase bd-l pl-2">
                          recommend for you
                         </h3>
                      </div>
                    </div>
                    <ListProduct product={ram} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
    );
  }
}

export default Home;