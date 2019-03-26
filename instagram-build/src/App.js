import React, { Component } from 'react';
import './App.css';
import SearchBar from './components/SearchBar/SearchBar';
import PostContainer from './components/PostContainer/PostContainer';
import dummyData from './dummy-data';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      data: []
    };
  }

  componentDidMount() {
    this.setState({
      data: dummyData
    })
  }

  render() {
    return (
      <div className="App">
        <SearchBar />
        {this.state.data.map(post => <PostContainer eachPost={post}/>)}
      </div>
    );
  }
}

export default App;
