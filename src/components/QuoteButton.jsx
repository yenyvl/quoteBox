import React from 'react'

const QuoteButton = ({newQuote,color}) => {
  return (
    <button className='quoteBox_button' onClick={newQuote} style={{background:color}}>
        <i className='bx bx-chevron-right'></i>
    </button>
  )
}

export default QuoteButton