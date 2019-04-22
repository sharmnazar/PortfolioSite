import React, { Component } from 'react'
import Nav from "./Nav"

export default class Trivia extends Component {
  render() {
    return (
      <div>
        <Nav/>
        <h2>Trivia Game</h2>
        <h3>
            An interactive game with music, a timer, with varying categories and difficulty. 
        </h3>
        <p> 
            Developed alongside Aveen Pattni (@aveenpattni), the pair programming project used questions from the Open Trivia Database API via HTTP requests. Tools used within the project include React, React Router, Axios, HTML decoder, a timer, and an audio player.  
        </p>
      </div>
    )
  }
}
