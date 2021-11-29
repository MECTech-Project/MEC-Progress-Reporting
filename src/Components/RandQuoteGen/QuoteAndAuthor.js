import React from 'react'
import { Container } from 'react-bootstrap';

function QuoteAndAuthor(props) {

    const { quote } = props;
    return (
        <div>
            <Container>
                <center>
                    <p className="card-text">{quote.quote}</p>
                    <h5 className="card-title">- {quote.author}</h5>
                </center>   
            </Container>
        </div>
    )
}

export default QuoteAndAuthor;