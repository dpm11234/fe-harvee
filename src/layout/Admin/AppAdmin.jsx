import React, { Component } from 'react';
import Sidebar from './sidebar/Sidebar';

class AppAdmin extends Component {
   render() {
      return (
         <div>
            <Sidebar />
            <div style={{ marginLeft: '228px' }}>
               {this.props.children}
            </div>
         </div>

      );
   }
}

export default AppAdmin;