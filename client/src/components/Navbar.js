import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

class Navbar extends Component {
  // Helper method to show authenticated content
  renderLogin() {
    switch (this.props.auth.user) {
      // If we don't know yet, show nothing.
      case null:
        return;
      // If the user isn't logged in - show the Login button
      case false:
        return (
          <li className="login"><a href="/auth/google">Login with Google</a></li>
        );
      // Default is that they are logged in - show the Logout button
      default:
        return <li className="login"><a href="/api/logout">Logout</a></li>
    }
  }

  render() {
    return (
      <nav className="navbar bg-dark">
        <Link to="/" className="navbar-logo">The Herbalist</Link>
        <ul>
          <li><Link to="/how_to_use">How To Use</Link></li>
          <li><Link to="/herb_finder">Herb Finder</Link></li>
          <li><Link to="/materia_medica/Yarrow">Materia Medica</Link></li>
          <li><Link to="/dispensary">Dispensary</Link></li>
          <li><Link to="/cabinet">Medicine Cabinet</Link></li>
          <li><Link to="/about">About Us</Link></li>
          {this.renderLogin()}
        </ul>
      </nav>
    )
  }
}

const mapStateToProps = (state) => {
  return { auth: state.auth };
}





export default connect(mapStateToProps)(Navbar);