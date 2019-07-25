import React, { Component } from 'react';
import './MyProduct.scss';

class MyProduct extends Component {
    render() {
        return (
            <div className="harvee-cart-section">
            <div className="container">
              <div className="row">
                <div className="col-lg-12 p-0">
                  <div className="harvee-my-product">
                    <div className="harvee-my-product-detail mt-4">
                      <div className="container">
                        <div className="row">
                          <div className="col-lg-4 p-0">
                            <img className="product-size" src="https://images-eu.ssl-images-amazon.com/images/I/4139fIEPs8L._SL500_AC_SS350_.jpg" alt="" />
                          </div>
                          <div className="col-lg-3 my-auto font-weight-bold">
                            WF-1000XM3
                          </div>
                          <div className="col-lg-1 my-auto">
                            $14.70
                          </div>
                          <div className="col-lg-2 my-auto">
                            <input className="w-50 p-2" type="text" placeholder="No." defaultValue={1} />
                          </div>
                          <div className="col-lg-2 my-auto text-center">
                            $14.70
                          </div>
                          <div className="col-lg-12">
                            <div className="contaier">
                              <div className="row">
                                <div className="col-lg-6">
                                  <p className="text-left mt-2">
                                    <a href="#" className="mt-2 font-weight-bold">Buy later</a>
                                  </p>
                                </div>
                                <div className="col-lg-6 ">
                                  <p className="text-right mt-2">
                                    <a href="#" className="mt-2 font-weight-bold">Remove</a>
                                  </p>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
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

export default MyProduct;
