import React, { Component } from 'react'
import "../styles/portfoliocard.scss"

export default class PortfolioCard extends Component {
  render() {
    return (
      <div className="">
        <div className="portfolio__card">
          <div className="portfolio__card__left">
            <a href={`/portfolio/${this.props.id}`}>
              <img src={`assets/${this.props.image}`} alt={`${this.props.name} + " " sample images`} className="portfolio__card__left__image" />
            </a>
            <div className="portfolio__card__left__link">
              <a href={`/portfolio/${this.props.id}`} alt="link to additional information on project" >
                <img src="/assets/desc.svg" alt="description symbol and link to additional info" className="portfolio__card__left__link--code" />
              </a>
              <a href={`${this.props.link}`} alt="link to github repo associated with project" >
                <img src="/assets/code.svg" alt="code symbol and link to project" className="portfolio__card__left__link--code" />
              </a>
            </div>
          </div>

          <div className="portfolio__card__right">
            <h3 className="portfolio__card__right__title">{this.props.name}</h3>
            <h4 className="portfolio__card__right__desc">{this.props.description}</h4>

          </div>

        </div>
        <hr />
      </div>
    )
  }
}
