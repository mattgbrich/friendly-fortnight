// We can add other configs like our router and muiTheme here as well
import React, { Component } from 'react';

import './styles/global-styles.css';
import WithForm from './WithForm';

function withConfig (WrappedComponent) {
  return function () {
    return (
      <WithForm>
        <WrappedComponent />
      </WithForm>
    )
  }
}

export default withConfig;

