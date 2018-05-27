/*global chrome*/
import React, { Component } from 'react';

import { getSearchEngine, storeSearchEngine, getSearchType, storeSearchType } from "./chromeAccessor";

import Input from '@material-ui/core/Input';
import SearchIcon from '@material-ui/icons/Search';
import IconButton from '@material-ui/core/IconButton';
import CssBaseline from '@material-ui/core/CssBaseline';
import MenuAppBar from './MenuAppBar';

import gmail from './static/gmail.png'
import pinterest from './static/pinterest.png'
import twitter from './static/twitter.png'
import facebook from './static/facebook.png'
import amazon from './static/amazon.png'
import youtube from './static/youtube.png'

import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.handleChangeSearchEngine = this.handleChangeSearchEngine.bind(this);
    this.handleChangeSearchType = this.handleChangeSearchType.bind(this);
    this.state = {};
    getSearchEngine(function(result) {
      var searchEngine = result.searchEngine;
      if (searchEngine == null) {
        searchEngine = 'Google'
      }
      this.setState({'searchEngine': searchEngine});
    }.bind(this));
    getSearchType(function(result) {
      var searchType = result.searchType;
      if (searchType == null) {
        searchType = 'Web'
      }
      this.setState({'searchType': searchType});
    }.bind(this));
  }

  // To handle syncing between different instances
  componentDidMount() {
    chrome.storage.onChanged.addListener(function(changes, namespace) {
      console.log("Changes to chrome storage from top level app, syncing");
      console.log(changes);
      for (let key in changes) {
        //TODO: figure out a way to do this better
        if (key === 'searchEngine' || key === 'searchType') {
          if (this.state[key] !== changes[key].newValue) {
            this.setState({[key]: changes[key].newValue});
          }
        }
      }
    }.bind(this));
  }

  handleChangeSearchEngine(event) {
    console.log('New search engine');
    console.log(event);
    this.setState({'searchEngine': event.target.value});
    storeSearchEngine(event.target.value);
  }

  handleChangeSearchType(searchType) {
    this.setState({'searchType': searchType});
    storeSearchType(searchType);
  }

  render() {
    return (
      <div className="App">
        <CssBaseline />
        <MenuAppBar handleChangeSearchEngine={this.handleChangeSearchEngine}
                    handleChangeSearchType={this.handleChangeSearchType}
                    searchType={this.state.searchType}/>
        <div className="ContentBlock">
          <SearchBar searchEngine={this.state.searchEngine} searchType={this.state.searchType} />
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
    // var newUrl = this.constructUrl(this.state.searchValue);
    // chrome.tabs.query({'active': true}, function(tabs) {
    //   chrome.tabs.update(tabs[0].id, {url: newUrl});
    // });
    window.open(this.constructUrl(this.state.searchValue), '_blank');
  }

  constructUrl(value) {
    const searchEngine = this.props.searchEngine;
    const searchType = this.props.searchType;
    //TODO: figure out image/video searching
    if (this.props.searchEngine === 'Google') {
      return "https://www.google.com/search?q=" + value;
    } else if (this.props.searchEngine === 'Yahoo') {
      return "https://search.yahoo.com/search?p=" + value;
    } else if (this.props.searchEngine === 'Bing') {
      return "https://www.bing.com/search?q=" + value;
    } else if (this.props.searchEngine === 'DuckDuckGo') {
      return "https://duckduckgo.com/?q=" + value;
    }
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
  render() {
    return (
      <div className="LinksButtonWrapper">
        <a target="_blank" href={this.props.url}>
          <img src={this.props.image} alt="Could not find" className="LinksButton"/>
        </a>
      </div>
    );
  }
}


export default App;

