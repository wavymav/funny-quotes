import React from 'react';

export default class Quote extends React.Component {
  render() {
    return (
      <div className="quote">
        <p>"{this.props.quoteText}"</p><i>- {this.props.quoteAuthor}</i>
      </div>
    );
  }
}
