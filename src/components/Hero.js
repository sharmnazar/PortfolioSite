import React, { Component } from 'react'
import '../styles/hero.scss';
import '../styles/links.scss';

export default class Hero extends Component {
  render() {
    return (
      <div className="hero">
        <div className="hero__text">
          <h1 className="hero__text__title">Sharmaine Nazar</h1>
          <h3 className="hero__text__subtitle">Web Developer • Lifelong Learner • Adventurer</h3>
          <h4 className="hero__text__desc">Passionate about Science, Technology, Travel, and Education</h4>
        </div>
        <div className="links">
          <a href="https://github.com/sharmnazar" target="_blank" rel="noopener noreferrer" className="links__tab">
            <img src="/assets/github.svg" alt="github logo and link to profile" className="links__tab--main"/>
          </a>
          <a href="https://www.linkedin.com/in/sharmaine-nazar/" target="_blank" rel="noopener noreferrer" className="links__tab">
            <img src="/assets/linkedin.svg" alt="linkedin logo and link to profile" className="links__tab--main"/>
          </a>
          <a href="https://bitbucket.org/sharmnazar/" target="_blank" rel="noopener noreferrer" className="links__tab">
            <img src="/assets/bitbucket.svg" alt="bitbucket logo and link to profile" className="links__tab--main"/>
          </a>
        </div>
      </div>
    )
  }
}
