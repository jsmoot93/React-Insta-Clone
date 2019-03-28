import React, { Component } from 'react';
import './App.css';
import SearchBar from './components/SearchBar/SearchBar';
import PostContainer from './components/PostContainer/PostContainer';
import dummyData from './dummy-data';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      data: [],
      filteredData: []
    };
  }

  componentDidMount() {
    this.setState({
      data: dummyData
    })
  }

  searchDataHandler = e => {
    const data = this.state.data.filter(p => {
      if (p.username.includes(e.target.value)) {
        return p;
      }
    });
    this.setState({ filteredData: data });
  };

  render() {
    return (
      <div className="App">
        <SearchBar
          searchPosts={this.searchDataHandler}
        />
        {this.state.data.map(post => <PostContainer 
          eachPost={
            this.state.filteredData.length > 0
              ? this.state.filteredData
              : this.state.data
          }
        />)}
      </div>
    );
  }
}

export default App;
