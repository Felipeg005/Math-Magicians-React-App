import React from 'react';
import { Link } from 'react-router-dom'; // eslint-disable-line

class Nav extends React.Component {
  render() {
    const linkStyles = {
      color: 'white',
    };

    return (
      <nav className={this.props.class}>
        <h1 className="logo">Math Magicians</h1>
        <ul className='menu-container'>
          <Link to="/Math-Magicians-React-App/" style={linkStyles}>
            <li>Home</li>
          </Link>
          <Link to="/calculator" style={linkStyles}>
            <li>Calculator</li>
          </Link>
          <Link to="/quote" style={linkStyles}>
            <li>Quote</li>
          </Link>
        </ul>
      </nav>
    );
  }
}

export default Nav;