import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';
import SearchBar from './components/search_bar';
import VieoList from './components/video_list';

const API_KEY = "AIzaSyCTW6UshFo9wSpKhhJJ_XeBgDegByyZ5W4";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {videos: []};
    YTSearch({key: API_KEY, term: 'surfboards'}, (videos) => {
      this.setState({ videos });
    });
  }
  render() {
    return (
      <div>
        <SearchBar />
        <VieoList videos={this.state.videos} />
      </div>
    );
  }
}

ReactDOM.render(<App />, document.querySelector('.container'));