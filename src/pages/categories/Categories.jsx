import React, { Component } from "react";
import { UncontrolledCollapse, Button, CardBody, Card } from "reactstrap";
import "./Categories.scss";
import watch from "../../assets/images/w.jpg";

class Categories extends Component {
   render() {
      return (
         <div className="harvee-category py-4 my-4">
            <div className="container">
               <div className="row">
                  <div className="col-lg-3">
                     <div className="col-lg-12 p-0">
                        <div className="harvee-accordion">
                           <div className="card">
                              <div className="card-header">
                                 <h5 className="mb-0 line">
                                    <Button
                                       className="w-100 text-left font-weight-bold p-4 btn-collapse"
                                       id="togglerType"
                                    >
                                       TYPE
                        </Button>
                                 </h5>
                              </div>
                              <UncontrolledCollapse toggler="#togglerType">
                                 <Card>
                                    <CardBody>
                                       <div className="card-body">
                                          <button className="btn d-block">Keyboard</button>
                                          <button className="btn d-block">Headphone</button>
                                          <button className="btn d-block">Mouse</button>
                                          <button className="btn d-block">RAM</button>
                                          <button className="btn d-block">Moniter</button>
                                          <button className="btn d-block">SSD/HDD</button>
                                       </div>
                                    </CardBody>
                                 </Card>
                              </UncontrolledCollapse>
                           </div>
                        </div>
                        <div id="accordion-4" className="harvee-accordion">
                           <div className="card">
                              <div className="card-header" id="brand">
                                 <h5 className="mb-0 line">
                                    <Button
                                       className="w-100 text-left font-weight-bold p-4 btn-collapse"
                                       id="togglerBrand"
                                    >
                                       BRAND
                        </Button>
                                 </h5>
                              </div>
                              <UncontrolledCollapse toggler="#togglerBrand">
                                 <Card>
                                    <CardBody>
                                       <div className="card-body">
                                          <button className="btn d-block">Apple</button>
                                       </div>
                                    </CardBody>
                                 </Card>
                              </UncontrolledCollapse>
                           </div>
                        </div>
                        <div id="accordion-2" className="harvee-accordion">
                           <div className="card">
                              <div className="card-header" id="price">
                                 <h5 className="mb-0 line">
                                    <Button
                                       className="w-100 text-left font-weight-bold p-4 btn-collapse"
                                       id="togglerPrice"
                                    >
                                       PRICE
                        </Button>
                                 </h5>
                              </div>
                              <UncontrolledCollapse toggler="#togglerPrice">
                                 <Card>
                                    <CardBody>
                                       <div className="card-body">
                                          <div className="container">
                                             <div className="row">
                                                <div className="col-lg-12 mt-3">
                                                   <input
                                                      name="maxprice"
                                                      type="text"
                                                      className="w-100 px-2"
                                                      placeholder="Max Price $"
                                                   />
                                                </div>
                                                <div className="col-lg-12 my-2">
                                                   <input
                                                      name="minprice"
                                                      type="text"
                                                      className="w-100 px-2"
                                                      placeholder="Min Price $"
                                                   />
                                                </div>
                                                <div className="col-lg-12 my-2">
                                                   <button className="btn btn-dark harvee-btn-filter py-0">
                                                      FILTER
                                  </button>
                                                </div>
                                             </div>
                                          </div>
                                       </div>
                                    </CardBody>
                                 </Card>
                              </UncontrolledCollapse>
                           </div>
                        </div>
                     </div>
                  </div>
                  <div className="col-lg-9">
                     <div className="col-lg-12">
                        <div
                           className="harvee-banner mb-4"
                           style={{ backgroundImage: `url(${watch})` }}
                        >
                           <div className="container h-100">
                              <div className="row harvee-banner-shadow h-100">
                                 <div className="col-lg-12 my-auto">
                                    <h1 className="text-uppercase font-weight-bold">
                                       CHECK OUT OVER 200+
                        </h1>
                                    <h2 className="text-uppercase">
                                       COASTS &amp; JACKETS FOR WOMAN
                        </h2>
                                    <button className="btn text-uppercase harvee-feature-btn font-weight-bold px-4 my-4">
                                       shop now
                        </button>
                                 </div>
                              </div>
                           </div>
                        </div>
                     </div>
                     <div className="col-lg-12">
                        catechinh
                <div className="col-lg-12">sort</div>
                        <div className="col-lg-12">danh muc san pham</div>
                        <div className="col-lg-12">phan trang</div>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      );
   }
}

export default Categories;
