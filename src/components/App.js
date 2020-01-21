import React from 'react';
import { BrowserRouter, Route, Link } from 'react-router-dom';
import './styles/App.css'

import youtube, { baseParams } from '../apis/youtube';

import Header from './Header';
import SearchBar from './SearchBar';
import VideoList from './VideoList';
import VideoDetail from './VideoDetail';
import Graph from './Graph';


class App extends React.Component {
  state = {
    videos: [],
    selectedVideo: null,
  }

  componentDidMount() {
    try {
      this.onTermSubmit('https://www.youtube.com/channel/UCvO6uJUVJQ6SrATfsWR5_aA')
    } catch (error) {
      console.log(error, 'APP.JS');
    }
  }


  onTermSubmit = async term => {
    const resp = await youtube.get('/search', {
      params: {
        ...baseParams,
        q: term
      }
    });

    this.setState({
      videos: resp.data.items,
      selectedVideo: resp.data.items[0],
    })

  }


  onVideoSelect = (video) => {
    this.setState({
      selectedVideo: video
    })
  }

  render() {
    return (
      <BrowserRouter>
        <Route exact path="/graph" component={Graph} />
        <Header/>
        <div className="ui container" >
          <div><SearchBar onFormSubmit={this.onTermSubmit} /></div>
          <div className="ui grid" >
            <div className="ui row" >
              <div className="eleven wide column" >
                <VideoDetail video={this.state.selectedVideo} />
              </div>
              <div className="five wide column">
                <VideoList onVideoSelect={this.onVideoSelect} videos={this.state.videos} />
              </div>
            </div>
          </div>
        </div>
      </BrowserRouter>
    );
  }
}

export default App