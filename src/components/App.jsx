import React from 'react';
import QuoteButton from './QuoteButton';
import Quote from './Quote';

export default class App extends React.Component {
  constructor() {
    super();
    this.state = {
      buttonText: '',
      quoteInfo: {
        author: '',
        quote: ''
      }
    }
  }

  componentDidMount(){
    this.setState({
      buttonText: 'View Quote',
      quoteInfo: {
       author: 'Bob Monkhouse',
       quote: 'When I die, I want to go peacefully like my grandfather did–in his sleep. Not yelling and screaming like the passengers in his car.'
     }
    })
  }

  handleButtonClick() {
    this.setState({
      buttonText: 'View Another Quote'
    })
  }

  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col col--2-of-2">
            <h1>Funny Quotes</h1>
          </div>
          <div className="col col--6-of-12 col--centered button-center">
            <QuoteButton
              text={this.state.buttonText}
              showQuote={this.handleButtonClick.bind(this)} />
          </div>
          <div className="col col--2-of-2">
            <Quote
              quoteText={this.state.quoteInfo.quote}
              quoteAuthor={this.state.quoteInfo.author} />
          </div>
        </div>
      </div>
    );
  }
}
