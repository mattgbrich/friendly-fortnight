import React, { Component } from 'react';

import Form from './components/Form';
import Nav from './components/Nav';

import withConfig from './config';

class App extends Component {
  render() {
    return (
      <div>
        <Nav type={this.props.type} />
        <Form form={this.props.form} />
      </div>
    );
  }
}

export default withConfig(App);
