import React from 'react';

export default class QuoteButton extends React.Component {
  render() {
    return (
      <a className="button-cta">{this.props.buttonText}</a>
    );
  }
}
