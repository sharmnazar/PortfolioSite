import React, { Component } from 'react'
import Nav from "./Nav"

export default class YW extends Component {
  render() {
    return (
        <div>
        <Nav/>
        <h2>Yung Wine</h2>
        <h3>
            Yung Wine is a site geared towards young adults, which would recommend a wine that suited their tastes and their budget.
        </h3>
        <p> 
            Developed alongside UX Designers, Data Scientists, and other Web Developers. Tasked to develop a solution based on a dataset about wines, and a demographic of young adults. Some of the technologies used during the hackathon project include React.js, Bitbucket, Python, Tableau, and Zeplin.
        </p>
      </div>
    )
  }
}
