import React, { Component } from 'react';

import Input from '@material-ui/core/Input';
import SearchIcon from '@material-ui/icons/Search';
import IconButton from '@material-ui/core/IconButton';

import MenuAppBar from './MenuAppBar';

import gmail from './static/gmail.png'
import pinterest from './static/pinterest.png'
import twitter from './static/twitter.png'
import facebook from './static/facebook.png'
import amazon from './static/amazon.png'
import youtube from './static/youtube.png'

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
    this.handleChange = this.handleChange.bind(this);
    this.state = {'searchValue': ''}
  }

  handleSubmit(event) {
    window.open(this.constructUrl(this.state.searchValue), '_blank');
  }

  constructUrl(value) {
    return "https://www.google.com/search?q=" + value;
  }

  handleChange(event) {
    this.setState({'searchValue': event.target.value})
  }

  render() {
    return (
      <div className="SearchBar">
        <form onSubmit={this.handleSubmit}>
          <Input placeholder="Search the web" onChange={this.handleChange} value={this.state.searchValue}/>
          <IconButton color="primary" onClick={this.handleSubmit}>
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
        <LinksButton image={gmail} url="http://www.gmail.com"/>
        <LinksButton image={amazon} url="http://www.amazon.com"/>
        <LinksButton image={facebook} url="http://www.facebook.com"/>
        <LinksButton image={youtube} url="http://www.youtube.com"/>
        <LinksButton image={twitter} url="http://www.twitter.com"/>
        <LinksButton image={pinterest} url="http://www.pinterest.com"/>
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
      <div className="LinksButtonWrapper">
        <a target="_blank" href={this.props.url}>
          <img src={this.props.image} className="LinksButton"/>
        </a>
      </div>
    );
  }
}


export default App;

