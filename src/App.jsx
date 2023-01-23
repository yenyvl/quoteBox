import { useState } from 'react';
import './App.css'
import QuoteBox from './components/QuoteBox'
import db from "./db/quotes.json"

const arrayColors=
  [
    "#95b8f6",
    "#7286D3",
    "#e1b1bc",
    "#9b9b9b",
    "#f15fff",
    "#ff8097"
  ]
//recibe cualquier tipo de arreglo y devuelve un numero entero
const getRandom= (arrayElements) => {
  const quantityValues = arrayElements.length
  const randomIndex=Math.floor(Math.random() * quantityValues)
  return arrayElements[randomIndex] 
};

function App() {
  
  const [quote, setQuote] = useState(getRandom(db))

  const [color,setColor] = useState(getRandom(arrayColors))

  const newQuote = () => {
    setQuote(getRandom(db))
    setColor(getRandom(arrayColors))
  }

  console.log(getRandom(db));

  return (
    <div className="App" style={{backgroundColor: color}}>
      
      <QuoteBox 
        quote={quote} 
        newQuote={newQuote}  
        color={color}/>
      
    </div>
  )
}

export default App
