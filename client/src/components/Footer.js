import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Footer extends Component {

  getYear () {
    const year = new Date().getFullYear();
    return year;
  }


  render() {
    return (
      <footer className="bg-dark">
        <div>
          <Link to="/" className="logo">The Herbalist</Link>
          <span>&copy; {this.getYear()}</span>
        </div>
        <ul>
          <li><Link to="/terms">Terms and Conditions</Link></li>
          <li><Link to="/about">Contact</Link></li>
        </ul>
      </footer>
    )
  }
}

export default Footer;