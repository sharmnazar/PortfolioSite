import React, { Component } from 'react'
import {Link} from 'react-router-dom';
import '../styles/nav.scss';

export default class Nav extends Component {
  render() {
    return (
      <nav className="nav">
          <div className="nav__logo">
            <h1 className="nav__logo__text">SN</h1>
          </div>
          <div className="nav__links">
            <div className="nav__links--top">
              <h3 className="nav__links__tab"><Link to="/">About</Link></h3>
              <h3>•</h3>
              <h3 className="nav__links__tab"><Link to="/">Portfolio</Link></h3>
              <h3>•</h3>
              <h3 className="nav__links__tab"><Link to="/">Contact</Link></h3>
              <h3 className="nav__links__tab--hidden">•</h3>
            </div>
            <div className="nav__links--bottom">
              <h3 className="nav__links__tab"><Link to="./Resume">Resume</Link></h3>
              <h3>•</h3>
              <h3 className="nav__links__tab"><Link to="./Blog">Currently Learning</Link></h3>
            </div>
          </div>
      </nav>
    )
  }
}
