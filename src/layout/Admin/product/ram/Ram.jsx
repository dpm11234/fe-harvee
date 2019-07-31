import React, { Component } from 'react';
import './Ram.scss';

class Ram extends Component {
    render() {
        return (
            <div className="hv-add-prod p-3 m-2">
                <div className="container">
                    <div className="row main-menu">
                        <h2 className="title pl-2">RAM Information</h2>
                        <div className="col-lg-12 content my-2">
                            <form action="">
                                <div className="container hv-ram mt-4">
                                    <div className="row">
                                        <div className="col-lg-8 hv-general">
                                            <div className="container">
                                                <div className="row">
                                                    <div className="col-lg-12 p-0 form-group">
                                                        <label htmlFor="name">Product's Name</label>
                                                        <input type="text" className="form-control" name="name" placeholder="Ex. RAM PC Kingston HyperX Pedator DDR4 RBG 8GB" />
                                                    </div>
                                                    <div className="col-lg-12 p-0 form-group">
                                                        <label htmlFor="brand">Brand</label>
                                                        <select name="brand" class="form-control">
                                                        <option value="DDR">Intel</option>
                                                        <option value="DDR2">Apple</option>
                                                        <option value="DDR3">Vegance</option>
                                                        <option value="DDR4">Kingston</option>
                                                        </select>
                                                    </div>
                                                    <div className="col-lg-12 p-0 form-group">
                                                        <label htmlFor="model">Model number</label>
                                                        <input type="text" className="form-control" name="model" placeholder="RSX1752" />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-4 form-gourp pt-4">
                                            <div className="input-file-choose-bg h-75 m-4">
                                                <input type="file" className="custom-file-input" />
                                            </div>
                                        </div>
                                        <div className="col-3 form-group">
                                            <label htmlFor="vol">Voltage</label>
                                            <input type="text" className="form-control" name="vol" placeholder="(W)" />
                                        </div>
                                        <div className="col-3 form-group">
                                            <label htmlFor="type">Type</label>
                                            <select name="type" class="form-control">
                                            <option value="laptop">RAM Laptop</option>
                                            <option value="pc">RAM PC</option>
                                            </select>
                                        </div>
                                        <div className="col-3 form-group">
                                            <label htmlFor="standard">Standard</label>
                                            <select name="standard" class="form-control">
                                            <option value="DDR">DDR</option>
                                            <option value="DDR2">DDR2</option>
                                            <option value="DDR3">DDR3</option>
                                            <option value="DDR4">DDR4</option>
                                            </select>
                                            {/* <input type="text" className="form-control" name="standard" /> */}
                                        </div>
                                        <div className="col-3 form-group">
                                            <label htmlFor="bus">BUS</label>
                                            <input type="text" className="form-control" name="bus" placeholder="(GHz)" />
                                        </div>
                                        <div className="col-3 form-group">
                                            <label htmlFor="size">Size</label>
                                            <input type="text" className="form-control" name="size" placeholder="(GB)" />
                                        </div>
                                        <div className="col-3 form-group">
                                            <label htmlFor="amout">Amout</label>
                                            <input type="text" className="form-control" name="amout" placeholder="(Number)" />
                                        </div>
                                        <div className="col-3 form-group">
                                            <label htmlFor="guarantee">Guarantee</label>
                                            <input type="text" className="form-control" name="guarantee" placeholder="(Year)" />
                                        </div>
                                        <div className="col-3 form-group">
                                            <label htmlFor="price">Price</label>
                                            <input type="text" className="form-control" name="price" placeholder="($)" />
                                        </div>
                                        <div className="col-lg-12 form-group">
                                            <label htmlFor="picture">Pictures</label>
                                            <div className="hv-gallery">
                                                <div className="container">
                                                    <div className="row m-2">
                                                        <div className="col-lg-3 hv-package">
                                                            <button type="button" className="btn btn-primary btn-del" role="button">
                                                            <i className="far fa-trash-alt"></i>
                                                            </button>
                                                            <img className="hv-picture" src="https://images-na.ssl-images-amazon.com/images/I/61mlx7jlbVL._SY355_.jpg" alt="#"/>
                                                        </div>
                                                        <div className="col-lg-3 hv-package">
                                                            <button type="button" className="btn btn-primary btn-del" role="button">
                                                            <i className="far fa-trash-alt"></i>
                                                            </button>
                                                            <img className="hv-picture" src="https://images-na.ssl-images-amazon.com/images/I/4139fIEPs8L._SL500_AC_SS350_.jpg" alt="#"/>
                                                        </div>
                                                     
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-12 hv-ram-submit mb-4 mt-2">
                                            <button type="submit" role="submit" className="btn btn-primary float-right w-25"><i className="far fa-layer-plus mr-2"></i>Create</button>
                                        </div>
                                    </div>
                                </div>
                            </form>

                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Ram;
