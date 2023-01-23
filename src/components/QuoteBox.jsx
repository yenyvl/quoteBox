import React from 'react'
import QuoteButton from './QuoteButton'

const QuoteBox = ({quote,newQuote,color}) => {
  return (
    <div className='container-quoteBox' style={{color:color}}>
        <i className='quoteBox-icon bx bxs-quote-left'></i>
        <p className='quoteBox-quote'>{quote.quote}</p>
        <h3 className='quoteBox-author'>{quote.author}</h3>
        <QuoteButton color={color} newQuote={newQuote} />
    </div>
  )
}

export default QuoteBox