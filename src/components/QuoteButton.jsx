import React from 'react';

export default class QuoteButton extends React.Component {
  handleClick() {
    this.props.showQuote();
  }

  render() {
    return (
      <a className="button-cta" onClick={this.handleClick.bind(this)}>{this.props.text}</a>
    );
  }
}
