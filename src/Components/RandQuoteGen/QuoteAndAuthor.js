import React from 'react'
// import quotes from './QuoteDB'

function QuoteAndAuthor(props) {

    const { quote } = props;
    return (
        <div className="card" >

            <div className="card-body">
                <p className="card-text">{quote.quote}</p>
                <h5 className="card-title">- {quote.author}</h5>                
            </div>
        </div>
    )
}

export default QuoteAndAuthor;
