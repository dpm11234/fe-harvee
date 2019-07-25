import React, { Component } from 'react';
import './ProdDetail.scss';
import qc from '../../assets/images/qc.jpg';
import qc2 from '../../assets/images/qc2.jpg';
import { TabContent, TabPane, Nav, NavItem, NavLink } from 'reactstrap';
import classnames from 'classnames';
import TabGallery from '../tab-gallery/TabGallery';
import productService from '../../services/ProductService';

let imgUrls = [
    'https://www.elinfor.com/article/1/-/1-3%203D%20QLC,%20MJX%20master%20and%201GB%20LPDDR4.jpg',
    'https://images.samsung.com/is/image/samsung/ie-860-qvo-sata-3-2-5-ssd-mz-76q4t0bw-backblack-131389920?$PD_GALLERY_JPG$',
    'https://www.techadvisor.co.uk/cmsdata/reviews/3689063/samsung_860_qvo_review_thumb800.jpg',
    'https://1.bp.blogspot.com/-HzVb2lJ-A9o/XDrYOKHex9I/AAAAAAAAGr8/jOR76nU6essAikLI4EFo1XlqqiKPvG6vgCLcBGAs/s1600/03.jpg'
]

class ProdDetail extends Component {

    constructor(props) {
        super(props);

        this.toggle = this.toggle.bind(this);
        this.state = {
            activeTab: '1',
            product: {}
        };
    }

    toggle(tab) {
        if (this.state.activeTab !== tab) {
            this.setState({
                activeTab: tab
            });
        }
    }

    componentDidMount() {
        productService.getProduct(150)
            .then(product => {
                this.setState({
                    product
                });
            });
    }

    render() {
        let { product } = this.state;

        return (

            <div className="harvee-prod-detail mb-5 pb-4">

                <div className="container mt-4 pt-4">
                    <div className="row">
                        <div className="col-lg-10">
                            <div className="container">
                                <div className="row">
                                    <div className="col-lg-7">
                                        <div className="harvee-tags-gallery mt-2">
                                            <TabGallery imgUrl={imgUrls} />
                                        </div>
                                    </div>
                                    <div className="col-lg-5">
                                        <h2 className="font-weight-bold">
                                            {product.name}
                                        </h2>
                                        <span className="old-price">
                                            $170
                        </span>
                                        <span className="sale-price font-weight-bold ml-2">
                                            $158
                        </span>
                                        <p>Powered by Samsung V-NAND Technology. Optimized Performance for Everyday Computing; Encryption Support: AES 256-bit Encryption (Class 0)TCG/Opal IEEE1667 (Encrypted drive).</p>
                                        <p className="sale-off">
                                            <i className="fa fa-tags" />
                                            Sale-off program!
                        </p>
                                        <ul style={{ marginLeft: '20px' }}>
                                            <li>
                                                2.8 x 0.3 x 3.9 inches
                          </li>
                                            <li>
                                                SATA 6.0 Gb/s
                          </li>
                                            <li>
                                                560 MB per second
                          </li>
                                            <li>
                                                B079FQ126M
                          </li>
                                            <li>
                                                MZ-76E250BW
                          </li>
                                        </ul>
                                        <p className="text-center">
                                            <button className="btn w-100 mt-4 harvee-card-btn">
                                                <i className="fa fa-shopping-bag mr-2" />
                                                Add to cart
                          </button>
                                        </p>
                                    </div>

                                    <div>
                                        <Nav tabs>
                                            <NavItem>
                                                <NavLink
                                                    className={classnames({ active: this.state.activeTab === '1' })}
                                                    onClick={() => { this.toggle('1'); }}
                                                >
                                                    <a className="text-uppercase hv-tabs" data-toggle="tab" href="#menu1">description</a>
                                                </NavLink>
                                            </NavItem>
                                            <NavItem>
                                                <NavLink
                                                    className={classnames({ active: this.state.activeTab === '2' })}
                                                    onClick={() => { this.toggle('2'); }}
                                                >
                                                    <a className="text-uppercase hv-tabs" data-toggle="tab" href="#menu3">review</a>
                                                </NavLink>
                                            </NavItem>
                                        </Nav>
                                        <TabContent activeTab={this.state.activeTab}>
                                            <TabPane tabId="1">
                                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat.</p>
                                            </TabPane>
                                            <TabPane tabId="2">
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
                                                                        submit</button>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </form>
                                                </div>
                                            </TabPane>
                                        </TabContent>
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
                                <img className="w-100" src={qc} alt="Banner" />
                                <img className="w-100 mt-2" src={qc2} alt="Banner" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        );
    }
}

export default ProdDetail;
