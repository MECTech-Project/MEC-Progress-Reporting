import React, {useState} from 'react'
import QuoteAndAuthor from './QuoteAndAuthor';
import quotes from './QuoteDB';

function AppRandQuote() {
    
    //get random numbers
    let num = Math.floor(Math.random() * quotes.length)

    //state
    const [quoteState] = useState({
      quote: quotes[num].quote,
      author: quotes[num].author
    })

    return (
      <div>
        <QuoteAndAuthor quote={quoteState} />
      </div>
    )
  }
export default AppRandQuote;