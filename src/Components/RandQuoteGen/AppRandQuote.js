import React, {Component} from 'react'
import QuoteAndAuthor from './QuoteAndAuthor';
import quotes from './QuoteDB';

export default class AppRandQuote extends Component {

  //state
  state = {
    quote: quotes[Math.floor(Math.random() * quotes.length)].quote,
    author: quotes[Math.floor(Math.random() * quotes.length)].author
  }

  render() {
    return (
      <div className="container">
        <h5 >Motivation Quote</h5>
        <QuoteAndAuthor
          generateRandomQuote={this.generateRandomQuote}
          quote={this.state}
        />
      </div>
    )
  }
}
