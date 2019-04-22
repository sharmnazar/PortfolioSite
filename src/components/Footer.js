import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import '../styles/footer.scss';
import '../styles/links.scss';

export default class Footer extends Component {
  render() {
    return (
      <footer className="footer">
        <div className="footer--left">
          © 2019 Sharmaine Nazar
        </div>
        <div className="footer--middle">
          <Link to="/">about</Link> • <Link to="/">portfolio</Link> • <Link to="./Resume">resume</Link>
        </div>
        <div className="footer--right">
        <div className="links">
          <a href="https://github.com/sharmnazar" target="_blank" rel="noopener noreferrer" className="links__tab">
            <img src="/assets/github.svg" alt="github logo and link to profile" className="links__tab--accent"/>
          </a>
          <a href="https://www.linkedin.com/in/sharmaine-nazar/" target="_blank" rel="noopener noreferrer" className="links__tab">
            <img src="/assets/linkedin.svg" alt="linkedin logo and link to profile" className="links__tab--accent"/>
          </a>
          <a href="https://bitbucket.org/sharmnazar/" target="_blank" rel="noopener noreferrer" className="links__tab">
            <img src="/assets/bitbucket.svg" alt="bitbucket logo and link to profile" className="links__tab--accent"/>
          </a>
        </div>
        </div>
      </footer>
    )
  }
}
