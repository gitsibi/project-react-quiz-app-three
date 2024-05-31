// eslint-disable-next-line no-unused-vars
import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Home extends Component {
  render() {
    return (
      <>
        <div className='home-container'>
          <h1 className='home-heading'>Quiz App</h1>
          <Link to="/quiz">
            <button className='start-quiz-button'>Play</button>
          </Link>
        </div>
      </>
    );
  }
}
