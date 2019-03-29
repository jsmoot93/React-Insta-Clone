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
      filteredData: [],
      input: ""
    };
  }

  componentDidMount() {
    this.setState({
      data: dummyData
    })
  }

  searchDataHandler = e => {
    if (e.target.value !== ""){
    const data = this.state.data.filter(post => {
      if (post.username.includes(e.target.value)) {
        return post;
      }
    });
    this.setState({filteredData: data, input: e.target.value});
  } else {
    this.setState({input: ""})
  }

  };

  render() {
    return (
      <div className="App">
        <SearchBar
          searchPosts={this.searchDataHandler}
        />
        {this.state.input === "" ? this.state.data.map(post => <PostContainer eachPost={post}/>): this.state.filteredData.map(post => <PostContainer eachPost={post}/>)}
      </div>
    );
  }
}

export default App;
