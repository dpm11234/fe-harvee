import React, { Component } from 'react';
import './ProdDetail.scss';

class ProdDetail extends Component {
    
    render() {
        return (
            <div className="harvee-prod-detail">
                <div className="container mt-4 pt-4">
                    <div className="row">
                        <div className="col-lg-10">
                            <div className="container">
                                <div className="row">
                                    <div className="col-lg-7">
                                        <div className="harvee-tags-gallery mt-2">
                                            <div className="container">
                                                <div className="mySlides tile" data-scale="1.8" data-image="{{asset('storage/images/m1.jpg')}}">
                                                </div>
                                                <div className="mySlides tile" data-scale="1.8" data-image="{{asset('storage/images/m2.jpg')}}">
                                                </div>
                                                <div className="mySlides tile" data-scale="1.8" data-image="{{asset('storage/images/m3.jpg')}}">
                                                </div>
                                                <a className="prev" onclick="plusSlides(-1)">❮</a>
                                                <a className="next" onclick="plusSlides(1)">❯</a>
                                                <div className="caption-container">
                                                    <p id="caption" />
                                                </div>
                                                <div className="container mt-4" style={{ display: 'flex' }}>
                                                    <div className="row">
                                                        <div className="column m-1">
                                                            <img className="demo cursor" src="{{asset('storage/images/m1.jpg')}}" style={{ width: '100%' }} onclick="currentSlide(1)" alt="" />
                                                        </div>
                                                        <div className="column m-1">
                                                            <img className="demo cursor" src="{{asset('storage/images/m2.jpg')}}" style={{ width: '100%' }} onclick="currentSlide(2)" alt="" />
                                                        </div>
                                                        <div className="column m-1">
                                                            <img className="demo cursor" src="{{asset('storage/images/m3.jpg')}}" style={{ width: '100%' }} onclick="currentSlide(3)" alt="" />
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-5">
                                        <h2 className="font-weight-bold">
                                            Macbook Pro 15 Touch Bar i9 2.3GHz/16G/512GB (2019)
                        </h2>
                                        <span className="old-price">
                                            $2760
                        </span>
                                        <span className="sale-price font-weight-bold ml-2">
                                            $2600
                        </span>
                                        <p>MacBook Pro elevates the notebook to a whole new level of performance and portability. Wherever your ideas take you, you’ll get there faster than ever with high‑performance processors and memory, advanced graphics, blazing‑fast storage, and more.</p>
                                        <p className="sale-off">
                                            <i className="fa fa-tags" />
                                            Sale-off program!
                        </p>
                                        <ul style={{ marginLeft: '20px' }}>
                                            <li>
                                                CPU: Intel Core i9 2.3GHz
                          </li>
                                            <li>
                                                Màn hình LCD 13.3 inch
                          </li>
                                            <li>
                                                VGA: Intel Graphics 1280
                          </li>
                                            <li>
                                                RAM: 16GB
                          </li>
                                            <li>
                                                HDD: 512SSD
                          </li>
                                        </ul>
                                        <p className="text-center">
                                            <button className="btn w-100 mt-4 harvee-card-btn">
                                                <i className="fa fa-shopping-bag mr-2" />
                                                Add to cart
                          </button>
                                        </p>
                                    </div>
                                    <div className="col-lg-12">
                                        <div className="harvee-prod-infor">
                                            <ul className="nav nav-tabs">
                                                <li className="mr-4"><a className="text-uppercase" data-toggle="tab" href="#menu1">description</a></li>
                                                <li className="ml-4"><a className="text-uppercase" data-toggle="tab" href="#menu3">review</a></li>
                                            </ul>
                                            <div className="tab-content">
                                                <div id="menu1" className="tab-pane fade mt-4">
                                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat.</p>
                                                </div>
                                                <div id="menu3" className="tab-pane fade mt-4">
                                                    <div className="user-review my-4 line">
                                                        <div className="container">
                                                            <div className="row">
                                                                <div className="col-lg-12 p-0">
                                                                    <h4 className="reviewer-name font-weight-bold">
                                                                        Edward Newgate
                                      </h4>
                                                                    <p>
                                                                        <i className="fa fa-star ml-1" />
                                                                        <i className="fa fa-star ml-1" />
                                                                        <i className="fa fa-star ml-1" />
                                                                        <i className="fa fa-star ml-1" />
                                                                        <i className="fa fa-star ml-1" />
                                                                    </p>
                                                                    <p className="reviewer-content">
                                                                        MacBook Pro elevates the notebook to a whole new level of performance and portability.
                                      </p>
                                                                    <p className="font-weight-bold">
                                                                        12:20:34 June 06, 2019
                                      </p>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="review">
                                                        <form action>
                                                            <div className="container">
                                                                <div className="row">
                                                                    <div className="col-lg-12 p-0">
                                                                        <h4 className="text-uppercase">
                                                                            WRITE YOUR OWN REVIEW
                                        </h4>
                                                                        <p className>
                                                                            How do you rate this product? *
                                        </p>
                                                                        <table className="table w-100">
                                                                            <thead className="thead-dark">
                                                                                <tr className="text-center">
                                                                                    <th scope="col" />
                                                                                    <th scope="col">1 STAR</th>
                                                                                    <th scope="col">2 STARS</th>
                                                                                    <th scope="col">3 STARS</th>
                                                                                    <th scope="col">4 STARS</th>
                                                                                    <th scope="col">5 STARS</th>
                                                                                </tr>
                                                                            </thead>
                                                                            <tbody>
                                                                                <tr>
                                                                                    <th scope="row" className="p-2">Evaluate</th>
                                                                                    <td className="text-center"> <input type="radio" name="vehicle1" defaultValue="one-star" /><br /></td>
                                                                                    <td className="text-center"> <input type="radio" name="vehicle1" defaultValue="one-star" /><br /></td>
                                                                                    <td className="text-center"> <input type="radio" name="vehicle1" defaultValue="one-star" /><br /></td>
                                                                                    <td className="text-center"> <input type="radio" name="vehicle1" defaultValue="one-star" /><br /></td>
                                                                                    <td className="text-center"> <input type="radio" name="vehicle1" defaultValue="one-star" /><br /></td>
                                                                                </tr>
                                                                            </tbody>
                                                                        </table>
                                                                    </div>
                                                                    <div className="col-lg-12 p-0 mt-4 review-input">
                                                                        <label htmlFor="nickname">Your name*</label>
                                                                        <input name="nickname" type="text" className="w-100 px-2" />
                                                                    </div>
                                                                    <div className="col-lg-12 p-0 mt-4 review-input">
                                                                        <label htmlFor="title-review">Your title*</label>
                                                                        <input name="title-review" type="text" className="w-100 px-2" />
                                                                    </div>
                                                                    <div className="col-lg-12 p-0 mt-4 review-input">
                                                                        <label htmlFor="content-review">Review*</label>
                                                                        <textarea name="content-review" type="text" className="w-100 px-2" defaultValue={""} />
                                                                    </div>
                                                                    <div className="col-lg-12 p-0 mt-4">
                                                                        <button type="submit" className="btn harvee-card-btn text-uppercase w-50">
                                                                            submit
                                        </button>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </form>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-2 p-1">
                            <p className="supplier-name">
                                <span className="font-weight-bold">
                                    Supplier:
                    </span> Apple
                  </p>
                            <p className="performance-prod">
                                <span className="font-weight-bold">
                                    Formality:
                    </span> New 100%
                  </p>
                            <p className="status-prod">
                                <span className="font-weight-bold">
                                    Status:
                    </span>Available
                  </p>
                            <div className="policy ">
                                <a className href>
                                    <button className="text-left mt-2 btn btn-policy text-uppercase w-100">
                                        <i className="fa fa-user" />
                                        Member privileges
                      </button>
                                </a>
                                <a className href>
                                    <button className="text-left mt-2 btn btn-policy text-uppercase w-100">
                                        <i className="fa fa-truck" />
                                        Shipment policy
                      </button>
                                </a>
                                <a className href>
                                    <button className="text-left mt-2 btn btn-policy text-uppercase w-100">
                                        <i className="fa fa-bitcoin" />
                                        100% MONEY
                                        BACK
                      </button>
                                </a>
                                <a className href>
                                    <button className="text-left my-2 btn btn-policy text-uppercase w-100">
                                        <i className="fa fa-hourglass-start" />
                                        24h support
                      </button>
                                </a>
                            </div>
                            <div className="ads-prp">
                                <img className="w-100" src="{{asset('storage/images/qc.jpg')}}" alt="Banner" />
                                <img className="w-100 mt-2" src="{{asset('storage/images/qc2.png')}}" alt="Banner" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        );
    }
}

export default ProdDetail;
