import React, { Component } from 'react'
import PortfolioCard from "./PortfolioCard"

export default class Portfolio extends Component {

state = {
  portfolioList: [
    {
      name: "Joy/n",
      id: "a001",
      link: "https://github.com/sharmnazar/Joyn",
      desc: "Joy/n is a responsive web application that uses the user’s geolocation and specified interests to recommend suitable locations nearby." ,
      image: "templogo.png"
    },
    {
      name: "Yung Wine",
      id: "a002",
      link: "https://github.com/sharmnazar/YungWine",
      desc: "Yung Wine is a site geared towards young adults, which would recommend a wine that suited their tastes and their budget.",
      image: "templogo.png"
    },
    {
      name: "Trivia Game",
      id: "a003",
      link: "https://github.com/sharmnazar/TriviaGame",
      desc: "Trivia Game is an interactive game with music, a timer, with varying categories and difficulty. ",
      image: "templogo.png"
    },
  ]
}

  render() {

    let newCard = this.state.portfolioList.map((obj) => {
      return <PortfolioCard name={obj.name}
                    id={obj.id}
                    key={obj.id}
                    description = {obj.desc}
                    link={obj.link}
                    image={obj.image}
      />
    })

    return (
        <section className="portfolio">
          <h2>Portfolio</h2>
          {newCard}
        </section>
    )
  }
}
