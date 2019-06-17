import React, { Component } from 'react';

class HerbSearch extends Component {
  render() {
    return (
      // Herb select and search bar - TODO
      <div className="dropdown">
        <button onClick="myFunction()" className="dropbtn">Dropdown</button>
        <div id="myDropdown" class="dropdown-content">
          <li key={uuid.v4()} >
            <Link to={`/materia_medica/vitex`}> Vitex </Link>
          </li>
        </div>
      </div>
    )
  }
}