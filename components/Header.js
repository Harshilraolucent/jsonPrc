import React, { Component } from 'react';
import HeaderCenter from './HeaderCenter';

class Header extends Component {
  render() {
    return (

      <header>
        <div className='container'>
          <div className='header-wrapper'>
            <HeaderCenter />
          </div>
        </div>
      </header >

    );
  }
}

export default Header;