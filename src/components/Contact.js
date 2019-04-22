import React, { Component } from 'react'

export default class Contact extends Component {
  render() {
    return (
      <section className="Contact">
        <h2>Contact</h2>
        <h3>Let's Create Something Together!</h3>
        <p>Want to talk about tech? Or do you have a project you'd like me to work on? Shoot me an email or contact me through the social sites listed below.</p>

<div className="links">
          <a href="mailto: sharmnazar@gmail.com" className="links__tab">
            <img src="./assets/email.svg" alt="email" className="links__tab--main"/>
          </a>
          <a href="https://www.linkedin.com/in/sharmaine-nazar/" target="_blank" rel="noopener noreferrer" className="links__tab">
            <img src="/assets/linkedin.svg" alt="linkedin logo and link to profile" className="links__tab--main"/>
          </a>
          <a href="https://github.com/sharmnazar" target="_blank" rel="noopener noreferrer" className="links__tab">
            <img src="/assets/github.svg" alt="github logo and link to profile" className="links__tab--main"/>
          </a>
          <a href="https://bitbucket.org/sharmnazar/" target="_blank" rel="noopener noreferrer" className="links__tab">
            <img src="/assets/bitbucket.svg" alt="bitbucket logo and link to profile" className="links__tab--main"/>
          </a>
        </div>
        
      </section>
    )
  }
}
