import React, { Component } from 'react';
import HeaderCenter from './HeaderCenter';
import HeaderLeft from './HeaderLeft'

class Header extends Component {
  render() {
    return (

      <header>
        <div className='container'>
          <div className='header-wrapper'>
            <HeaderCenter />
            <HeaderLeft />
          </div>
        </div>
      </header >

    );
  }
}

export default Header;