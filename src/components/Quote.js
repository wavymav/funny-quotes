import React from 'react';

export const Quote = ({ quoteText, quoteAuthor }) => (
  <div className="quote">
    { quoteText && <p>&quot;{ quoteText }&quot;</p> }
    { quoteAuthor && <i>&mdash; { quoteAuthor }</i> }
  </div>
)

Quote.propTypes = {
  quoteText: React.PropTypes.string.isRequired,
  quoteAuthor: React.PropTypes.string.isRequired
}
