import React, { Component } from 'react'
import "../styles/portfoliocard.scss"

export default class PortfolioCard extends Component {
  render() {
    return (
      <div className="portfolio__card">
            <h3 className="portfolio__card__title">{this.props.name}</h3>
            <img src={`assets/${this.props.image}`} alt={`${this.props.name} + " " sample images`} className="portfolio__card__image"/>
            <h4 className="portfolio__card__desc">{this.props.description}</h4>
            <div className="portfolio__card__links">
            <a href={`/portfolio/${this.props.id}`} alt="link to additional information on project" className="portfolio__card__link">
              <img src="/assets/desc.svg" alt="description symbol and link to additional info" className="portfolio__card__link--code"/>
            </a>
            <a href={`${this.props.link}`} alt="link to github repo associated with project" className="portfolio__card__link">
              <img src="/assets/code.svg" alt="code symbol and link to project" className="portfolio__card__link--code"/>
            </a>
            </div>
      </div>
    )
  }
}
