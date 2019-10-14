import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';

import { setMessage } from './store/appReducer';
import Router from './router';

import './App.scss';

class App extends Component {
  componentDidMount() {
    if(!this.props.message) {
      this.props.updateMessage("Hi, I'm from client!");
    }
  }

  render() {
    return (
      <Router />
    );
  }
}

export default withRouter(
  connect(
    ({ app }) => ({ message: app.message }),
    dispatch => ({ updateMessage: (messageText) => dispatch(setMessage(messageText)) })
  )(App)
);
