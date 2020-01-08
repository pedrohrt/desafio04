import React, { Component } from 'react';

import logo from '../assets/logo.png';

class Header extends Component {
  render() {
    return (
      <div id="header" >
        <div>
          <a href="#" className="logo"><img src={logo} /></a>
          <a href="#" className="login">Meu Perfil</a>
        </div>
      </div>
    )
  }
}


export default Header;