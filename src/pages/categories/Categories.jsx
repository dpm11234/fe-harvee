import React, { Component } from 'react';
import './Categories.scss';

class Categories extends Component {
   render() {
      return (
         <div className="harvee-category py-4 my-4">
            <div className="container">
               <div className="row">
                  <div className="col-lg-3">
                     <div className="col-lg-12 p-0">
                        <div id="accordion-1" className="harvee-accordion">
                           <div className="card">
                              <div className="card-header mt-2" id="fashion">
                                 <h5 className="mb-0 line">
                                    <button className="btn text-uppercase font-weight-bold collapsed py-4" data-toggle="collapse" data-target="#collapseFashion" aria-expanded="false" aria-controls="collapseFashion">
                                       type
                         </button>
                                 </h5>
                              </div>
                              <div id="collapseFashion" className="collapse line" aria-labelledby="fashion" data-parent="#accordion-1">
                                 <div className="card-body">
                                    <button className="btn d-block">
                                       Keyboard
                         </button>
                                    <button className="btn d-block">
                                       Headphone
                         </button>
                                    <button className="btn d-block">
                                       Mouse
                         </button>
                                    <button className="btn d-block">
                                       RAM
                         </button>
                                    <button className="btn d-block">
                                       Moniter
                         </button>
                                    <button className="btn d-block">
                                       SSD/HDD
                         </button>
                                 </div>
                              </div>
                           </div>
                        </div>
                        <div id="accordion-4" className="harvee-accordion">
                           <div className="card">
                              <div className="card-header mt-2" id="brand">
                                 <h5 className="mb-0 line">
                                    <button className="btn text-uppercase font-weight-bold collapsed py-4" data-toggle="collapse" data-target="#collapseBrand" aria-expanded="false" aria-controls="collapseBrand">
                                       brand
                         </button>
                                 </h5>
                              </div>
                              <div id="collapseBrand" className="collapse line" aria-labelledby="brand" data-parent="#accordion-4">
                                 <div className="card-body">
                                    <button className="btn d-block">
                                       Samsung
                         </button>
                                 </div>
                              </div>
                           </div>
                        </div>
                        <div id="accordion-2" className="harvee-accordion">
                           <div className="card">
                              <div className="card-header mt-2" id="price">
                                 <h5 className="mb-0 line">
                                    <button className="btn text-uppercase font-weight-bold collapsed py-4" data-toggle="collapse" data-target="#collapsePrice" aria-expanded="false" aria-controls="collapsePrice">
                                       price
                         </button>
                                 </h5>
                              </div>
                              <div id="collapsePrice" className="collapse line" aria-labelledby="price" data-parent="#accordion-2">
                                 <div className="card-body mt-2">
                                    <div className="container">
                                       <div className="row">
                                          <div className="col-lg-12">
                                             <input name="maxprice" type="text" className="w-100 px-2" placeholder="Max Price $" />
                                          </div>
                                          <div className="col-lg-12 my-2">
                                             <input name="minprice" type="text" className="w-100 px-2" placeholder="Min Price $" />
                                          </div>
                                          <div className="col-lg-12 my-2">
                                             <button className="btn btn-dark text-uppercase harvee-btn-filter py-0">
                                                filter
                               </button>
                                          </div>
                                       </div>
                                    </div>
                                 </div>
                              </div>
                           </div>
                        </div>
                        <div id="accordion-3" className="harvee-accordion">
                           <div className="card">
                              <div className="card-header mt-2" id="size">
                                 <h5 className="mb-0 line">
                                    <button className="btn text-uppercase font-weight-bold collapsed py-4" data-toggle="collapse" data-target="#collapseSize" aria-expanded="false" aria-controls="collapseSize">
                                       size
                         </button>
                                 </h5>
                              </div>
                              <div id="collapseSize" className="collapse line" aria-labelledby="size" data-parent="#accordion-3">
                                 <div className="card-body mt-2">
                                    <div className="container">
                                       <div className="row">
                                          <div className="col-lg-12 my-2 text-center">
                                             <button className="btn btn-dark text-uppercase harvee-btn-filter py-0">
                                                S
                               </button>
                                             <button className="btn btn-dark text-uppercase harvee-btn-filter py-0">
                                                M
                               </button>
                                             <button className="btn btn-dark text-uppercase harvee-btn-filter py-0">
                                                L
                               </button>
                                          </div>
                                       </div>
                                    </div>
                                 </div>
                              </div>
                           </div>
                        </div>
                        <div id="accordion-5" className="harvee-accordion">
                           <div className="card">
                              <div className="card-header mt-2" id="color">
                                 <h5 className="mb-0 line">
                                    <button className="btn text-uppercase font-weight-bold collapsed py-4" data-toggle="collapse" data-target="#collapseColor" aria-expanded="false" aria-controls="collapseColor">
                                       Color
                         </button>
                                 </h5>
                              </div>
                              <div id="collapseColor" className="collapse line" aria-labelledby="color" data-parent="#accordion-5">
                                 <div className="card-body text-center">
                                    <button className="btn btn-primary text-uppercase harvee-btn-filter p-3 m-2" />
                                    <button className="btn btn-dark text-uppercase harvee-btn-filter p-3 m-2" />
                                    <button className="btn btn-success text-uppercase harvee-btn-filter p-3 m-2" />
                                    <button className="btn btn-warning text-uppercase harvee-btn-filter p-3 m-2" />
                                 </div>
                              </div>
                           </div>
                        </div>
                     </div>
                     <div className="harvee-category-carousel my-4 ">
                        <div className="container">
                           <h5 className="text-uppercase">
                              features product
                   </h5>
                           {/* <div class="owl-carousel owl-theme">
                             <div class="item">
                                 @include('components.product-card')
                             </div>
                             <div class="item">
                                 @include('components.product-card')
                             </div>
                             <div class="item">
                                 @include('components.product-card')
                             </div>
                         </div> */}
                        </div>
                     </div>
                  </div>
                  <div className="col-lg-9">
                     <div className="col-lg-12">
                        <div className="harvee-banner mb-4" style={{ backgroundImage: 'url("{{ asset("storage/images/iw.jpg")}}")' }}>
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
                 <div className="col-lg-12">
                           sort
                 </div>
                        <div className="col-lg-12">
                           danh muc san pham
                 </div>
                        <div className="col-lg-12">
                           phan trang
                 </div>
                     </div>
                  </div>
               </div>
            </div>
         </div>

      );
   }
}

export default Categories;