import React, { Component } from 'react'
import Nav from "./Nav"
import Hero from "./Hero"
import Footer from "./Footer"
import About from "./About"
import Portfolio from "./Portfolio"
import Contact from "./Contact"
import Skills from "./Skills"
import '../styles/variables.scss';

export default class Main extends Component {
  render() {
    return (
      <div>
        <Hero/>
        <Nav/>
        <About/>
        <Skills/>
        <Portfolio/>
        <Contact/>
        <Footer/>
      </div>
    )
  }
}
