import React from 'react';

export default class Quote extends React.Component {
  render() {
    return (
      <div className="quote">
        {this.props.quoteText && <p>&quot;{this.props.quoteText}&quot;</p>}
        {this.props.quoteAuthor && <i>&mdash; {this.props.quoteAuthor}</i>}
      </div>
    );
  }
}

Quote.propTypes = {
  quoteText: React.PropTypes.string.isRequired,
  quoteAuthor: React.PropTypes.string.isRequired
}
