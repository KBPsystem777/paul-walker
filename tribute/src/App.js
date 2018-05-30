import React, { Component } from 'react';
import './App.css';


class Header extends React.Component {
  render() {
    return (
      <div>
        <h1>Paul William Walker</h1>
        <em>The Fast and Furious</em>
      </div>
    )
  }
}

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
      </div>
    );
  }
}

export default App;
