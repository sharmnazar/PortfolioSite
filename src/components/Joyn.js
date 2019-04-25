import React, { Component } from 'react'
import Nav from "./Nav"
import "../styles/project.scss"

export default class Joyn extends Component {
  render() {
    return (
      <div>
        <Nav />
        <div className="project">
          <h2 className="project__title">Joyn</h2>
          <h3 className="project__subtitle">
            A responsive web application that uses the user’s geolocation and specified interests to recommend suitable locations nearby.
        </h3>
          <img src="../assets/joynmain.png" alt="main" className="project__image" />
          <p className="project__text">
            The solo project used Google Places API to provide recommendations, and Google Maps API to display these locations on a map. </p>

          <img src="../assets/joynResults.png" alt="results" className="project__image" />
          <p className="project__text">Other technologies used within the project are React, Socket.io, Node, React Router, and Axios.
        </p>
          <img src="../assets/joynEvent.png" alt="events" className="project__image" />

        </div>
      </div>
    )
  }
}
