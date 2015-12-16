import React from 'react';
import QuoteButton from './QuoteButton';
import Quote from './Quote';
import quotes from 'quotrr'

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
      buttonText: 'View Quote'
    })
  }

  showQuote() {
    const quoteObj = quotes.randomQuote();
    const author = quoteObj.author.replace(/\n/gi,"");
    const quote = quoteObj.quote;

    this.setState({
      buttonText: 'View Another Quote',
      quoteInfo: {
       author: author,
       quote: quote
     }
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
              showQuote={this.showQuote.bind(this)} />
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
