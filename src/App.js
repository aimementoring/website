import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';

import { setMessage } from './store/appReducer';
import Router from './router';
import { getAllRedirectUrlEntries } from "./services/getcontentful";

import './App.scss';

class App extends Component {
  constructor(props) { // added new code here just for testing.
    super(props);
    this.state = {
      data: null,
    };
  }

  componentDidMount() {
    getAllRedirectUrlEntries().then(redirects => {
      this.setState({
          data: redirects,
        });
    });

    if(!this.props.message) {
      this.props.updateMessage("Hi, I'm from client!");
    }
  }

  render() {
    const { data } = this.state;

    console.log('TCL: App -> render -> data', data);

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
