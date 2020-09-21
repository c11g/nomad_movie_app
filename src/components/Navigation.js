import React from 'react';
import {Link} from 'react-router-dom';
import './Navigation.css';

const Naviation = () => <nav className="nav">
  <Link className="nav__link" to="/">Main</Link>
  <Link className="nav__link" to="/about">About</Link>
</nav>;

export default Naviation;