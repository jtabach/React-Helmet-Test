import React from 'react';
import Helmet from 'react-helmet';
import { Component } from 'react';

export default class App extends Component {
  render() {
    return (
      <div>
      <Helmet title="Helmet Test" />
        Helmet Testing
      </div>
    );
  }
}
