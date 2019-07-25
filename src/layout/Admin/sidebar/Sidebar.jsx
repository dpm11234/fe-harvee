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
                                <div className="sidebar-sticky">
                                    <ul className="nav flex-column">
                                        <li className="nav-item">
                                            <a className="nav-link" href="#">
                                            <i class="far fa-home mr-2"></i>
                                                Dashboard
                                            </a>
                                        </li>
                                        <li className="nav-item">
                                            <a className="nav-link" href="#">
                                            <i class="far fa-poll-h mr-2"></i>
                                                Orders
              </a>
                                        </li>
                                        <li className="nav-item">
                                            <a className="nav-link" href="#">
                                            <i class="far fa-swatchbook mr-2"></i>
                                                Products
              </a>
                                        </li>
                                        <li className="nav-item">
                                            <a className="nav-link" href="#">
                                                <span data-feather="users" />
                                                Customers
              </a>
                                        </li>
                                        <li className="nav-item">
                                            <a className="nav-link" href="#">
                                                <span data-feather="bar-chart-2" />
                                                Reports
              </a>
                                        </li>
                                        <li className="nav-item">
                                            <a className="nav-link" href="#">
                                                <span data-feather="layers" />
                                                Integrations
              </a>
                                        </li>
                                    </ul>
                                    <h6 className="sidebar-heading d-flex justify-content-between align-items-center px-3 mt-4 mb-1 text-muted">
                                        <span>Saved reports</span>
                                        <a className="d-flex align-items-center text-muted" href="#">
                                            <span data-feather="plus-circle" />
                                        </a>
                                    </h6>
                                    <ul className="nav flex-column mb-2">
                                        <li className="nav-item">
                                            <a className="nav-link" href="#">
                                                <span data-feather="file-text" />
                                                Current month
              </a>
                                        </li>
                                        <li className="nav-item">
                                            <a className="nav-link" href="#">
                                                <span data-feather="file-text" />
                                                Last quarter
              </a>
                                        </li>
                                        <li className="nav-item">
                                            <a className="nav-link" href="#">
                                                <span data-feather="file-text" />
                                                Social engagement
              </a>
                                        </li>
                                        <li className="nav-item">
                                            <a className="nav-link" href="#">
                                                <span data-feather="file-text" />
                                                Year-end sale
              </a>
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
