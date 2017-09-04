import React, { Component } from 'react';
import './App.css';
import Timeline from './Timeline.js'

class TimelineApp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text: "",
      timeline: []
    };
  }

  render() {
    return (
      <div className="Main">
        <p className="App-intro">
          今何してる？
          <input type="text" value={ this.state.text }
            onChange={e => {this.setState({text: e.target.value})}}/>
        </p>
        <p>
          {this.state.text}
          <input type="button" value="ツイート" onClick={e => {
            var array = this.state.timeline;
            array.unshift(this.state.text);
            this.setState({timeline: array});
            this.setState({text: ""});
          }} />
        </p>

        <Timeline timeline={this.state.timeline} />
      </div>
    );
  }
}

export default TimelineApp;
