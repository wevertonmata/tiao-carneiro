import React from 'react';

import './nav.css';

import logo from '../../assets/img/logo.png';

export default function Nav() {
  return (
    <div className="Nav">
      <img src={logo} alt="logo" className="logo" />
      <p>Discografia</p>
    </div>

  );
}
