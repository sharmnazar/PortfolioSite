import React, { Component } from 'react'
import Nav from "./Nav"
import "../styles/project.scss"

export default class YW extends Component {
  render() {
    return (
      <div>
        <Nav />
        <div className="project">
          <h2 className="project__title">Yung Wine</h2>
          <h3 className="project__subtitle">
            Yung Wine is a site geared towards young adults, which would recommend a wine that suited their tastes and their budget.
          </h3>
          <img src="../assets/yungwine.png" alt="" className="project__image"/>
          <p className="project__text">
            Developed alongside UX Designers, Data Scientists, and other Web Developers. Tasked to develop a solution based on a dataset about wines, and a demographic of young adults. 
          </p>
          <p className="project__text">
          Some of the technologies used during the hackathon project include React.js, Bitbucket, Python, Tableau, and Zeplin.
          </p>
        </div>
      </div>
    )
  }
}
