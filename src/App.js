import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import Input from '@material-ui/core/Input';
import SearchIcon from '@material-ui/icons/Search';
import IconButton from '@material-ui/core/IconButton';
import MenuAppBar from './MenuAppBar';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <MenuAppBar />
        <div className="ContentBlock">
          <SearchBar />
          <LinksBar />
        </div>
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
      <div className="SearchBar">
        <form onSubmit={this.handleSubmit}>
          <Input placeholder="Search the web" />
          <IconButton color="primary">
            <SearchIcon />
          </IconButton>
        </form>
      </div>
    );
  }
}

class LinksBar extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="LinksBar">
        <div><img></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <LinksButton name="Facebook" url="www.facebook.com"/>
        <LinksButton name="Amazon" url="www.amazon.com"/>
        <LinksButton name="Apple" url="www.apple.com"/>
        <LinksButton name="Netflix" url="www.netflix.com"/>
        <LinksButton name="Google" url="www.google.com"/>
      </div>
    );
  }
}

class LinksButton extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Button variant="raised" color="primary" href={this.props.url}>
        {this.props.name}
      </Button>
    );
  }
}


export default App;

