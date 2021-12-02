import React, {Component} from 'react'
import QuoteAndAuthor from './QuoteAndAuthor';
import quotes from './QuoteDB';

//get random numbers
let num = Math.floor(Math.random() * quotes.length)

export default class AppRandQuote extends Component {

  //state
  state = {
    quote: quotes[num].quote,
    author: quotes[num].author
  }

  render() {
    return (
      <div>
        <QuoteAndAuthor quote={this.state} />
      </div>
    )
  }
}
