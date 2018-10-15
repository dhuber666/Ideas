import React, { Component } from 'react';
import Header from './components/Header';
import Ideas from './components/Ideas';

class App extends Component {

  
  render() {
    return (
      <div className="App">
        <Header />
        <Ideas />
      </div>
    );
  }
}

export default App;
