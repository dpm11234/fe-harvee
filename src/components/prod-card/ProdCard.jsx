import React, { Component } from 'react';
import './ProdCard.scss';

class ProdCard extends Component {
    render() {
        return (
            <div className="harvee-product-card m-2">
                <div className="container">
                    <div className="row">
                        <div className="card">
                            <div className="card-header harvee-card-header">
                                <img src={this.props.product} alt="" />
                                <div className="harvee-card-view">
                                    <p className="text-center text-white text-uppercase pt-3">
                                        quick view
            </p>
                                </div>
                                <div className="harvee-card-shadow">
                                </div>
                            </div>
                            <div className="card-body">
                                <div className="col-lg-12">
                                    <p className="text-center">
                                        <input type="hidden" className="rating" defaultValue={2} />
                                    </p>
                                </div>
                                <div className="col-lg-12">
                                    <h4 className="harvee-card-prod-name text-center">
                                        <a href="category/product-detail">
                                            Sony AZ370-PRL
              </a>
                                    </h4>
                                    <p className="harvee-card-prod-price text-center">
                                        <span className="harvee-old-price ">
                                            $500.50
              </span>
                                        <span className="harvee-sale-price font-weight-bold ml-2">
                                            $250.00
              </span>
                                    </p>
                                </div>
                            </div>
                            <div className="card-footer">
                                <div className="col-lg-12 p-0">
                                    <button className="btn w-100 harvee-card-btn">
                                        <i className="fa fa-shopping-bag mr-2" />
                                        Add to cart
            </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default ProdCard;
