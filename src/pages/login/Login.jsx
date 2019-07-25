import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Form from 'react-validation/build/form';
import Input from 'react-validation/build/input';
// import CheckButton from 'react-validation/build/button';
import { isEmail, isEmpty } from 'validator';
import { connect } from 'react-redux';

import './Login.scss';
import logo from '../../assets/images/logo.png';
import { login, register } from '../../redux/actions/user';

const required = (value) => {
  if (isEmpty(value)) {
    return <small className="form-text text-danger">This field is required</small>;
  }
}

const email = (value) => {
  if (!isEmail(value)) {
      return <small className="form-text text-danger">Invalid email format</small>;
  }
}

const mapStateToProps = (state) => {
  return {
    user: state.user
  }
}

class Login extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: 'duong mau',
      email: '',
      password: '',
      password_confirmation: ''
    }
  }

  onSubmit = (e) => {
    e.preventDefault();

    this.props.login(this.state.email, this.state.password, this.props.history);
  }

  onSubmitRegister = (e) => {
    e.preventDefault();
    this.setState({
      password_confirmation: this.state.password
    }, () => {
      this.props.register(this.state, this.props.history);
    })


  }

  onChange = (e) => {
		this.setState({
      [e.target.name]: e.target.value,
    });
	}

  render() {
    return (
      <div className="hv-login">
        <div className="container h-100">
          <div className="row h-100">
            <div className="col-lg-12 text-center m-4">
              <Link to="/">
                <img className="harvee-logo" src={logo} alt="Logo" />
              </Link>
            </div>
            <div className="col-lg-12 my-auto">
              <div className="login-form w-75 mx-auto">
                <div className="container">
                  <div className="row">
                    <div className="col-lg-6 my-4 p-4 signin-section">
                      <Form onSubmit={this.onSubmit}>
                        <h4 className="text-uppercase font-weight-bold">
                          login
                        </h4>
                        <p>
                          Already has an account! Sign In Here
                                                </p>
                        <div className="login-email mt-3">
                          <label htmlFor="email">Email Address <span style={{ color: 'red' }}>*</span></label>
                          <Input 
                              className="w-100 p-2 input-text form-control" 
                              type="text" 
                              name="email" 
                              validations={[required, email]}
                              value={this.state.email}
                              onChange={this.onChange}
                          />
                        </div>
                        <div className="login-password mt-3">
                          <label htmlFor="password">Password <span style={{ color: 'red' }}>*</span></label>
                          <Input 
                            className="w-100 p-2 input-text form-control" 
                            type="password" 
                            name="password" 
                            value={this.state.password}
                            onChange={this.onChange}
                          />
                        </div>

                        <div className="container">
                          <div className="row">
                            <div className="btn-submit col-lg-6 mt-4 p-0">
                              <button className="btn-primary btn w-100">Login</button>
                            </div>
                            <div className="col-lg-6 row-reverse mt-4 p-0">
                              <label className="ml-2 remember-me" htmlFor="remember">Remember Me</label>
                              <input type="checkbox" className="p-1 input-checkbox" name="remember" />
                            </div>
                            <div className="col-lg-12 p-0 mt-3">
                              <Link to="#" className="fg-pass">Forgot password!</Link>
                            </div>
                          </div>
                        </div>
                      </Form>
                    </div>

                    <div className="col-lg-6 my-4 p-4 register-section">
                      <Form onSubmit={this.onSubmitRegister}>
                        <h4 className="text-uppercase font-weight-bold">
                          register
                                                </h4>
                        <p>
                          No Account? Sign Up Here
                                                </p>
                        <div className="login-email mt-3">
                          <label htmlFor="email">Email Address <span style={{ color: 'red' }}>*</span></label>
                          <Input 
                            className="w-100 p-2 input-text form-control" 
                            type="text" 
                            name="email"
                            value={this.state.email}
                            onChange={this.onChange}
                           />
                        </div>
                        <div className="login-password mt-3">
                          <label htmlFor="password">Password <span style={{ color: 'red' }}>*</span></label>
                          <Input 
                            className="w-100 p-2 input-text form-control" 
                            type="password" 
                            name="password"
                            value={this.state.password}
                            onChange={this.onChange}
                           />
                        </div>

                        <div className="container">
                          <div className="row">
                            <div className="btn-submit col-lg-6 mt-4 p-0">
                              <button className="btn-primary btn w-100">Register</button>
                            </div>
                            <div className="col-lg-6 row-reverse mt-4 p-0">
                              <label className="ml-2 remember-me" htmlFor="remember">Sing Up Our Newsletter</label>
                              <input type="checkbox" className="p-1 input-checkbox" name="remember" />
                            </div>
                          </div>
                        </div>
                      </Form>
                    </div>

                    <div className="col-lg-12 p-4 social-login">
                      <h5 className="text-uppercase text-center">
                        ACCESS YOUR ACCOUNT THROUGH YOUR SOCIAL NETWORKS.
                                            </h5>
                      <p className="text-center mt-2">
                        <button className="btn btn-danger m-2">
                          <i className="fab fa-google-plus-g mr-2"></i>
                          Google
                                                </button>
                        <button className="btn btn-facebook m-2">
                          <i className="fab fa-facebook-f mr-2"></i>
                          Facebook
                                                </button>
                        <button className="btn btn-twitter m-2">
                          <i className="fab fa-twitter mr-2"></i>
                          Twitter
                                                </button>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-12 login-footer text-center m-4">
            <Link to="#" className="mx-2">
              Conditions of Use
                        </Link>
            <Link to="#" className="mx-2">
              Privacy Notice
                        </Link>
            <Link to="#" className="mx-2">
              Help
                        </Link>
            <p className="font-weight">
              © 2019, Harvee Website, GoCodee Co, Ltd.
                        </p>
          </div>
        </div>
      </div>
    );
  }
}

export default connect(mapStateToProps, { login, register })(Login);
