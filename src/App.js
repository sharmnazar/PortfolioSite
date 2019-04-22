import React, { Component } from 'react';
import './App.scss';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import Main from "./components/Main"
import Resume from "./components/Resume"
import Blog from "./components/Blog"
import Joyn from "./components/Joyn"
import YW from "./components/YW"
import Trivia from "./components/Trivia"

class App extends Component {
  render() {
    return (

      <Router>
        <div className="App">
          <Switch>
            <Route path="/" exact component={Main}/>
            <Route path="/resume" component={Resume}/>
            <Route path="/blog" component={Blog}/>
            <Route path="/portfolio/a001" component={Joyn}/>
            <Route path="/portfolio/a002" component={YW}/>
            <Route path="/portfolio/a003" component={Trivia}/>
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
