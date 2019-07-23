import React, { Component } from 'react';

class Features extends Component {
    render() {
        return (
            <div>
                <div className="hv-feature">
                    <div>
                        <div className="harvee-feature mb-4 py-4">
                            <div className="container">
                                <div className="row">
                                    <div className="col-lg-4 mb-4">
                                        <div className="container-fluid">
                                            <div className="row">
                                                <div className="col-lg-2 col-3">
                                                    <i className="fa fa-star harvee-feature-icon" />
                                                </div>
                                                <div className="col-lg-10 col-9">
                                                    <h4 className="font-weight-bold text-uppercase">
                                                        DEDICATED SERVICE
                </h4>
                                                    <p className="harvee-feature-text">
                                                        Consult our specialists for help with an order, customization, or design advice
                </p>
                                                    <button className="btn text-uppercase harvee-feature-btn">
                                                        get in touch
                </button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-4 mb-4">
                                        <div className="container-fluid">
                                            <div className="row">
                                                <div className="col-lg-2 col-3">
                                                    <i className="fa fa-backward harvee-feature-icon" />
                                                </div>
                                                <div className="col-lg-10 col-9">
                                                    <h4 className="font-weight-bold text-uppercase">
                                                        FREE RETURNS
                </h4>
                                                    <p className="harvee-feature-text">
                                                        We stand behind our goods and services and want you to be satisfied with them.
                </p>
                                                    <button className="btn text-uppercase harvee-feature-btn">
                                                        return policy
                </button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-4 mb-4">
                                        <div className="container-fluid">
                                            <div className="row">
                                                <div className="col-lg-2 col-3">
                                                    <i className="fa fa-paper-plane harvee-feature-icon" />
                                                </div>
                                                <div className="col-lg-10 col-9">
                                                    <h4 className="font-weight-bold text-uppercase">
                                                        INTERNATIONAL SHIPPING
                </h4>
                                                    <p className="harvee-feature-text">
                                                        Currently over 50 countries qualify for express international shipping. </p>
                                                    <button className="btn text-uppercase harvee-feature-btn">
                                                        learn more
                </button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="harvee-banner mb-4" style={{ backgroundImage: 'url("{{ asset("storage/images/gear.jpg")}}")' }}>
                            <div className="container h-100">
                                <div className="row harvee-banner-shadow h-100">
                                    <div className="col-lg-12 my-auto text-center">
                                        <h1 className="text-uppercase font-weight-bold">
                                            the perfect gift
          </h1>
                                        <h2 className="text-uppercase">
                                            CHECK OFF YOUR LIST WITH OUR BEST GIFTS
          </h2>
                                        <button className="btn text-uppercase harvee-feature-btn font-weight-bold px-4 m-4">
                                            shop now
          </button>
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

export default Features;
