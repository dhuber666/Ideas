import React, { Component } from 'react';
import NewIdea from './components/NewIdea';

import Home from './components/Home';

import { BrowserRouter as Router, Route } from 'react-router-dom';

class App extends Component {


  render() {
    return (
      <Router>
        <div>
          <Route exact path="/" component={Home} />
          <Route exact path="/new" component={NewIdea} />
        </div>
      </Router>
    );
  }
}

export default App;
