import React from 'react';

export default class QuoteButton extends React.Component {
  render() {
    return (
      <a className="button-cta" onClick={this.props.showQuote}>{this.props.text}</a>
    );
  }
}

QuoteButton.propTypes = {
  text: React.PropTypes.string.isRequired,
  showQuote: React.PropTypes.func.isRequired
}
