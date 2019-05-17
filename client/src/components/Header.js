import React, { Component } from 'react';
import { connect } from 'react-redux';

class Header extends Component {
  render() {
    return (
      <nav>
        <div className="nav-wrapper green darken-1">
          <a href="/" className="brand-logo">The Herbalist</a>
          <ul id="nav-mobile" className="right hide-on-med-and-down">
            <li><a href="/auth/google">Login with Google</a></li>
          </ul>
        </div>
      </nav>
    )
  }
}

const mapStateToProps = (state) => {
  return { auth: state.auth };
}





export default connect(mapStateToProps)(Header);