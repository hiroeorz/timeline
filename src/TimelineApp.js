import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import './App.css';
import Timeline from './Timeline.js';
import { mapStateToProps, mapDispatchToProps } from './action.js';

class TimelineApp extends Component {
  render() {
    return (
      <div className="Main">
        <p className="App-intro">
          今何してる？
          <input type="text" value={ this.props.text }
            onChange={ (e) => this.props.changeText(e.target.value)} />
        </p>
        <p>
          {this.props.text}
          <button onClick={ () => this.props.postTweet(this.props.text) }>
            つぶやく
          </button>
        </p>

        <Timeline timeline={this.props.timeline} />
      </div>
    );
  }
}

TimelineApp.propTypes = {
  text: PropTypes.string.isRequired,
  timeline: PropTypes.arrayOf(PropTypes.string).isRequired
}

export default connect(mapStateToProps, mapDispatchToProps)(TimelineApp);
