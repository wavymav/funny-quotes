import React from 'react';
import { QuoteButton } from './QuoteButton';
import { Quote } from './Quote';
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
    this.showQuote = this.showQuote.bind(this)
  }

  componentDidMount(){
    this.setState({ buttonText: 'View Quote' })
  }

  showQuote() {
    const quoteObj = quotes.randomQuote();
    const author = quoteObj.author.replace(/\n/gi,"");
    const quote = quoteObj.quote;

    this.setState({
      buttonText: 'View Another Quote',
      quoteInfo: {
       author,
       quote
     }
    })
  }

  render() {
    const {
      buttonText,
      quoteText,
      quoteInfo
    } = this.state
    
    return (
      <div className="container">
        <div className="row">
          <div className="col col--2-of-2">
            <h1>Funny Quotes</h1>
          </div>
          <div className="col col--6-of-12 col--centered button-center">
            <QuoteButton
              text={ buttonText }
              showQuote={ this.showQuote } />
          </div>
          <div className="col col--2-of-2">
            <Quote
              quoteText={ quoteInfo.quote }
              quoteAuthor={ quoteInfo.author } />
          </div>
        </div>
      </div>
    );
  }
}
