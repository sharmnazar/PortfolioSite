import React, { Component } from 'react'
import Nav from "./Nav"

export default class Trivia extends Component {
  render() {
    return (
      <div>
        <Nav />
        <div className="project">
          <h2 className="project__title">Trivia Game</h2>
          <h3 className="project__subtitle">
            An interactive game with music, a timer, with varying categories and difficulty.
        </h3>
          <img src="../assets/triviaGame.png" alt="" className="project__image" />
          <p className="project__text">
            Developed alongside Aveen Pattni, the pair programming project used questions from the Open Trivia Database API via HTTP requests.
        </p>
          <img src="../assets/triviaGame2.png" alt="" className="project__image" />
          <p className="project__text">
            Tools used within the project include React, React Router, Axios, HTML decoder, a timer, and an audio player.
        </p>
        </div>
      </div>
    )
  }
}
