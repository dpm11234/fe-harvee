import React, { Component } from 'react';
import './Sidebar.scss';
import logo from '../../../assets/images/logow.png';
import { Link } from 'react-router-dom';

class Sidebar extends Component {
    render() {
        return (
            <div className="hv-sidebar">
                <div>
                    <nav className="navbar navbar-dark sticky-top admin-nav flex-md-nowrap p-0">
                        <Link className="logo" to="home">
                            <img className="harvee-logo" src={logo} alt="abc" />
                        </Link>
                        <input className="p-1 mx-2 form-control w-100" type="text" placeholder="Search" aria-label="Search" />
                        <label htmlFor="search">
                            <i class="fas fa-search"></i>
                        </label>
                        <ul className="navbar-nav px-3">
                            <li className="nav-item text-nowrap">
                                <button className="btn btn-admin">
                                    <i class="far fa-power-off"></i>
                                </button>
                            </li>
                        </ul>
                    </nav>
                    <div className="container-fluid">
                        <div className="row">
                            <nav className="col-md-2 d-none d-md-block bg-light sidebar">
                                <img className="harvee-logo-2" src={logo} alt="abc" />
                                <div className="sidebar-sticky">
                                    <ul className="nav flex-column">
                                        <li className="nav-item">
                                            <Link className="nav-link" to="dashboard">
                                                <i class="far fa-home mr-2"></i>
                                                Dashboard
                                           </Link>
                                        </li>
                                        <li className="nav-item">
                                            <Link className="nav-link" to="order">
                                                <i class="far fa-poll-h mr-2"></i>
                                                Order
                                            </Link>
                                        </li>

                                        <li className="nav-item">
                                            <Link className="nav-link" to="product">
                                                <i class="far fa-swatchbook mr-2"></i>
                                                Products
                                            </Link>
                                        </li>
                                    </ul>
                                </div>
                            </nav>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Sidebar;
