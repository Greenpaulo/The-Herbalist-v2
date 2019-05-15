import React, { Component } from 'react'

class Header extends Component {
  render() {
    return (
      <nav>
        <div className="nav-wrapper green darken-1">
          <a href="/" className="brand-logo">The Herbalist</a>
          <ul id="nav-mobile" className="right hide-on-med-and-down">
            <li><a href="/auth/google">Login with Google</a></li>
            <li><a href="badges.html"></a></li>

          </ul>
        </div>
      </nav>
    )
  }
}

export default Header;