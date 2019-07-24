import React, { Component } from 'react';

import './Contact.scss';

class Contact extends Component {

   constructor(props) {
      super(props);

      this.state = {
         name: '',
         email: '',
         phone: '',
         message: ''
      }
   }

   render() {
      return (
         <div className="harvee-contact mb-5">
            <div className="container">
               <div className="row">
                  <div className="col-lg-7">
                     <h1>Write <span>Us</span></h1>
                     <form>
                        <div className="form-group">
                           <label htmlFor="name">Name <span>*</span></label>
                           <input name="name" type="text" className="form-control input" id="name" />
                        </div>
                        <div className="form-group">
                           <label htmlFor="email">Email <span>*</span></label>
                           <input name="email" type="email" className="form-control input" id="email" />
                        </div>
                        <div className="form-group">
                           <label htmlFor="phone">Phone Number</label>
                           <input name="phone" type="text" className="form-control input" id="phone" />
                        </div>
                        <div className="form-group">
                           <label htmlFor="message">What’s on your mind? <span>*</span></label>
                           <textarea name="message" className="form-control" id="message" rows={5} />
                        </div>

                        <button type="submit" className="btn btn-primary btn-submit">SUBMIT</button>
                     </form>

                  </div>
                  <div className="col-lg-5">
                     <div className="w-75 ml-auto">
                        <h1>Contact <span>Details</span></h1>
                        <div className="contact-info">
                           <div className="d-flex my-3">
                              <div className="icon mr-3">
                                 <i class="fa fa-mobile-alt"></i>
                              </div>
                              <div>
                                 <p className="my-0">
                                    <a href="abc">
                                       0201 203 2032
                                 </a>
                                 </p>
                                 <p className="my-0">
                                    <a href="abc">
                                       0201 203 2032
                                 </a>
                                 </p>
                              </div>
                           </div>
                           <div className="d-flex mt-3">
                              <div className="icon mr-3">
                                 <i class="fa fa-envelope"></i>
                              </div>
                              <div>
                                 <p className="my-0">
                                    <a href="abc">
                                       porto@gmail.com
                                 </a>
                                 </p>
                                 <p className="my-0">
                                    <a href="abc">
                                       porto@portotemplate.com
                                 </a>
                                 </p>
                              </div>
                           </div>
                           <div className="d-flex mt-3">
                              <div className="icon mr-3">
                                 <i class="fab fa-skype"></i>
                              </div>
                              <div>
                                 <p className="my-0">
                                    <a href="abc">
                                       porto_skype
                                    </a>
                                 </p>
                                 <p className="my-0">
                                    <a href="abc">
                                       porto_template
                                    </a>
                                 </p>
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

export default Contact;