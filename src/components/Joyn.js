import React, { Component } from 'react'
import Nav from "./Nav"

export default class Joyn extends Component {
  render() {
    return (
      <div>
        <Nav/>
        <h2>Joyn</h2>
        <h3>
            A responsive web application that uses the user’s geolocation and specified interests to recommend suitable locations nearby.
        </h3>
        <p> 
            The solo project used Google Places API to provide recommendations, and Google Maps API to display these locations on a map. Other technologies used within the project are React, Socket.io, Node, React Router, and Axios.
        </p>
      </div>
    )
  }
}
