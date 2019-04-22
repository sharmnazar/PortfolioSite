import React, { Component } from 'react'
import "../styles/skills.scss"

export default class Skills extends Component {
    render() {
        return (
            <section className="skills">
                <h2>Skills</h2>
                <div className="skills__program">
                    <h3>Programming Languages</h3>
                    <ul>
                        <li>
                            JavaScript
                    </li>
                        <li>
                            Python
                    </li>
                        <li>
                            R
                    </li>
                    </ul>
                </div>

                <div className="skills__full">
                    <div className="skills__full--front">
                        <h3>Front-End Development</h3>
                        <ul>
                            <li>
                                HTML
                    </li>
                            <li>
                                React.js
                    </li>
                            <li>
                                CSS/SASS
                    </li>

                        </ul>
                    </div>

                    <div className="skills__full--back">
                        <h3>Back-End Development</h3>
                        <ul>
                            <li>
                                Node.js
                    </li>
                            <li>
                                Express.js
                    </li>
                            <li>
                                RESTful APIs
                    </li>
                        </ul>
                    </div>
                </div>

                <div className="skills__other">
                    <h3>Other Skills</h3>
                    <ul>
                        <li>
                            Git (GitHub & BitBucket)
                    </li>
                        <li>
                            Agile Methodology
                    </li>
                        <li>
                            Socket.io
                    </li>
                    </ul>
                </div>

            </section>
        )
    }
}
