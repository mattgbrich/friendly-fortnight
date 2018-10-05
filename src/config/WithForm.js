import React, { Component } from 'react';

class WithForm extends Component {
  state = {
    form: null,
    type: null
  };

  componentDidMount () {
    // RESOLVE DATA FROM API HERE
    const form = {
      name: "matthew glenn brigham rich",
      age: 36,
      job: "laborer"
    };
    const type = 'Survey';
    this.setState({ form, type })
  }

  render () {
    const { form, type } = this.state;
    const childWithData = React.Children.map(this.props.children, (child) => {
      return React.cloneElement(child, { form, type });
    });
    return childWithData ? childWithData : <div>Loading Data...</div>
  }
}

export default WithForm;

