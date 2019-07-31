import React, { Component } from 'react';
import './Product.scss';
import { Link } from 'react-router-dom';

class Product extends Component {
    render() {
        return (
            <div className="hv-add-prod p-3 m-2">
                <div className="container">
                    <div className="row main-menu">
                        <h2 className="title pl-2">Production Managerment</h2>
                        <div className="col-lg-12 content my-2">
                            <div className="container">
                                <div className="row">
                                    <div className="col-lg-12">
                                        <h4 className="py-2 line">Add Product</h4>
                                    </div>
                                    <div className="col-lg-4 mb-3">
                                        <div className="pick-prod m-1">
                                            <p className="text-justify text-center m-0">
                                                <Link to="ram">
                                                    <i className="fal fa-memory hv-icon"></i>
                                                </Link>
                                            </p>
                                            <p className="text-center">RAM</p>
                                        </div>
                                    </div>
                                    <div className="col-lg-4">
                                        <div className="pick-prod m-1">
                                            <p className="text-justify text-center m-0">
                                                <i className="fal fa-save hv-icon"></i>
                                            </p>
                                            <p className="text-center">SSD/HDD</p>
                                        </div>
                                    </div>
                                    <div className="col-lg-4">
                                        <div className="pick-prod m-1">
                                            <p className="text-justify text-center m-0">
                                                <i className="fal fa-microchip hv-icon"></i>
                                            </p>
                                            <p className="text-center">CPU</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-12 content my-2">
                            <div className="container">
                                <div className="row">
                                    <div className="col-lg-12">
                                        <h4 className="py-2 line">List Product</h4>
                                    </div>
                                    <div className="col-lg-4 mb-3">
                                        <div className="pick-prod m-1">

                                            <p className="text-justify text-center m-0">
                                                <Link to="ram">
                                                    <i className="fal fa-memory hv-icon"></i>
                                                </Link>
                                            </p>
                                            <p className="text-center">RAM</p>
                                        </div>
                                    </div>
                                    <div className="col-lg-4">
                                        <div className="pick-prod m-1">
                                            <p className="text-justify text-center m-0">
                                                <i className="fal fa-save hv-icon"></i>
                                            </p>
                                            <p className="text-center">SSD/HDD</p>
                                        </div>
                                    </div>
                                    <div className="col-lg-4">
                                        <div className="pick-prod m-1">
                                            <p className="text-justify text-center m-0">
                                                <i className="fal fa-microchip hv-icon"></i>
                                            </p>
                                            <p className="text-center">CPU</p>
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

export default Product;
