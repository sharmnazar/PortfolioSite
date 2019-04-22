import React, { Component } from 'react'
import '../styles/links.scss';

export default class Links extends Component {
  render() {
    return (
      <div className="links">
          <a href="https://github.com/sharmnazar" target="_blank" rel="noopener noreferrer">
            <img src="/assets/github.svg" alt="github logo and link to profile" className="links__tab"/>
          </a>
          <a href="https://www.linkedin.com/in/sharmaine-nazar/" target="_blank" rel="noopener noreferrer">
            <img src="/assets/linkedin.svg" alt="linkedin logo and link to profile" className="links__tab"/>
          </a>
          <a href="https://bitbucket.org/sharmnazar/" target="_blank" rel="noopener noreferrer">
            <img src="/assets/bitbucket.svg" alt="bitbucket logo and link to profile" className="links__tab"/>
          </a>
        </div>
    )
  }
}
