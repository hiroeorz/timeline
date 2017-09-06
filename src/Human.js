import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import './App.css';
import { mapStateToProps, mapDispatchToProps } from './action.js';

class Human extends Component {
  render() {
    return (
      <div className="Main">
        <button onClick={ () => this.props.searchHuman() }>表示</button>

        <table>
          <tbody>
            <tr>
              <th>名前</th> <td>{ this.props.human.name }</td>
            </tr>
            <tr>
              <th>年齢</th> <td>{ this.props.human.age }歳</td>
            </tr>
            <tr>
              <th>ニックネーム</th> <td>{ this.props.human.nickname }</td>
            </tr>
          </tbody>
        </table>

      </div>
    );
  }
}

Human.propTypes = {
  human: PropTypes.shape({
    name: PropTypes.string.isRequired,
    age: PropTypes.number.isRequired,
    nickname: PropTypes.string.isRequired
  }).isRequired
}

export default connect(mapStateToProps, mapDispatchToProps)(Human);
