import React, { Component } from 'react';
import NewIdea from './components/NewIdea';

import Home from './components/Home';

import { BrowserRouter as Router, Route } from 'react-router-dom';

class App extends Component {

  state = {
    ideas: [
      {
        id: 0,
        title: "Calculator Application",
        body: "a description",
        claimed: false,
        likes: 3,
        toggled: false
      },
      {
        id: 1,
        title: "Tic Tac Toe Game",
        body: "a description",
        claimed: true,
        likes: 1,
        toggled: false
      }
    ]
  }

  addNewIdea = (title, body) => {
    const newIdea = { id: 2, title, body, claimed: false, likes: 0, toggled: false }
    this.setState({
      ideas: [...this.state.ideas, newIdea]
    })
  }

  toggleIdea = (id) => {
    const { ideas } = this.state;

    const toggledIdeas = ideas.filter(idea => {

      if (idea.id !== id) {
        return idea;
      } else {
        idea.toggled = !idea.toggled
        return idea
      }
    })

    this.setState({
      ideas: toggledIdeas
    })
  }

  render() {
    return (
      <Router>
        <div>
          <Route exact path="/" render={(props) => <Home {...props} ideas={this.state.ideas} toggleIdea={this.toggleIdea} />} />
          <Route exact path="/new" render={(props) => <NewIdea {...props} addNewIdea={this.addNewIdea} />} />
          {/* Debugging button */}
          <button onClick={() => console.log(this.state)}>Show State</button>
        </div>
      </Router >
    );
  }
}

export default App;
