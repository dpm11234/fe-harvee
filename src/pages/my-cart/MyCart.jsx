import React, { Component } from 'react';
import './MyCart.scss';
import MyProduct from '../../components/my-product/MyProduct';
import { UncontrolledCollapse, Button, CardBody, Card } from 'reactstrap';

class MyCart extends Component {
    render() {
        return (
            <div className="container my-4">
                <div className="row">
                    <div className="col-lg-8">
                        <div className="harvee-title mt-4 mb-2">
                            <div className="container line p-0">
                                <div className="row mb-2 font-weight-bold">
                                    <div className="col-lg-7">
                                        Product
                      </div>
                                    <div className="col-lg-1">
                                        Price
                      </div>
                                    <div className="col-lg-2">
                                        Amount
                      </div>
                                    <div className="col-lg-2">
                                        Subtotal
                      </div>
                                </div>
                            </div>
                        </div>
                        <MyProduct />
                    </div>
                    <div className="col-lg-4">
                        <div className="harvee-summary mt-4">
                            <div className="container">
                                <div className="row">
                                    <div className="col-lg-12 line">
                                        <h3 className="font-weight-bold my-2 mx-0 pb-2 ">
                                            Summary
                        </h3>
                                    </div>
                                    <div className="col-lg-12">
                                        <div>
                                            <Button className="btn px-0 btn-add-infor text-uppercase font-weight-bold" color="primary" id="toggler">
                                                Estimate Shipping and Tax
                            </Button>
                                            <UncontrolledCollapse toggler="#toggler">
                                                <Card>
                                                    <CardBody>
                                                        <label htmlFor="city" className="m-0"> City</label>
                                                        <select className="w-100 p-2 my-2" name="city" id="cityChosen">
                                                            <option value="HCM">Saigon</option>
                                                        </select>
                                                        <label htmlFor="state" className="m-0"> State</label>
                                                        <select className="w-100 p-2 my-2" name="state" id="stateChosen">
                                                            <option value="HCM">Thu Duc</option>
                                                        </select>
                                                    </CardBody>
                                                </Card>
                                            </UncontrolledCollapse>
                                        </div>
                                        <div className="col-lg-12 p-0 line">
                                            <p className="my-2 mx-0 pb-2 ">
                                                Subtotal:
                          </p>
                                        </div>
                                        <div className="col-lg-12 p-0 line">
                                            <p className="my-2 mx-0 pb-2 ">
                                                Promotion:
                          </p>
                                        </div>
                                        <div className="col-lg-12 p-0 my-4">
                                            <button className="btn btn-primary w-100 text-uppercase">
                                                checkout
                          </button>
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

export default MyCart;
