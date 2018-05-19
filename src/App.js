import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <SearchBar />
        <LinksButton name="Facebook" />
        <LinksButton name="Amazon" />
        <LinksButton name="Apple" />
        <LinksButton name="Netflix" />
        <LinksButton name="Google" />
      </div>
    );
  }
}

class SearchBar extends Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(event) {
    alert('Submit handled');
    event.preventDefault();
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input type="text" value={this.props.value} />
        <input type="submit" />
      </form>
    );
  }
}

function LinksButton(props) {
  return <button>Hello, {props.name}</button>;
}

export default App;

