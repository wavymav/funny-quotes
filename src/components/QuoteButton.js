import React from 'react';

export const QuoteButton = ({ showQuote, text }) => (
  <a className="button-cta" onClick={ showQuote }>{ text }</a>
)

QuoteButton.propTypes = {
  text: React.PropTypes.string.isRequired,
  showQuote: React.PropTypes.func.isRequired
}
