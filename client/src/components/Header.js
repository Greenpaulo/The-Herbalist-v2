import React, { Component } from 'react';
import { connect } from 'react-redux';

class Header extends Component {
  // Helper method to show authenticated content
  renderContent() {
    switch (this.props.auth) {
      // If we don't know yet, show nothing.
      case null:
        return;
      // If the user isn't logged in - show the Login button
      case false:
        return (
          <li className="nav-item"><a className="nav-link login-link" href="/auth/google">Login with Google</a></li>
        );
      // Default is that they are logged in - show the Logout button
      default:
        return <li className="nav-item"><a className="nav-link login-link" href="/api/logout">Logout</a></li>
    }
  }

  render() {
    return (
      <nav>
        <div className="navbar">
          <a href="/" className="logo">The Herbalist</a>
          <ul className="main-nav">
            <li className="nav-item"><a href="/materia_medica" className="nav-link">Materia Medica</a></li>
            <li className="nav-item"><a href="/dispensary" className="nav-link">Dispensary</a></li>
            <li className="nav-item"><a href="/cabinet" className="nav-link">Medicine Cabinet</a></li>
            <li className="nav-item"><a href="/about" className="nav-link">About Us</a></li>
            {this.renderContent()}
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