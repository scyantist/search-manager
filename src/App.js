import React, { Component } from 'react';

function LinksButton(props) {
  return <button>Hello, {props.name}</button>;
}

function SearchBar(props) {
  return (
    <form>
      <input type="text" value={props.value}/>
      <input type="submit" />
    </form>
  );
}

function App() {
  return (
    <div>
      <div>
        <SearchBar value="Search the internet"/>
      </div>
      <LinksButton name="Facebook" />
      <LinksButton name="Amazon" />
      <LinksButton name="Apple" />
      <LinksButton name="Netflix" />
      <LinksButton name="Google" />
    </div>
  );
}

export default App;
