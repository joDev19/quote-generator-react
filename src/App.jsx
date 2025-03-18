import { useEffect, useState } from 'react'
import './App.css'
const colors = ["blue", "red", "green", "yellow", "pink", "purple", "gray", "brown"]
async function getNewQuote() {
  let quote = {}
  await fetch("https://thequoteshub.com/api/")
    .then(res => res.json())
    .then(data => quote = data)
  return quote
}
const generateColor = () => {
  const nbr = Math.floor(Math.random()*(colors.length))
  return (colors[nbr])
}

function QuoteGenerator() {
  const [quote, setQuote] = useState({})
  useEffect(() => {
    handleClick()
  }, [])
  const handleClick = () => {
    getNewQuote().then((data) =>{
      setQuote(data)
    })
  }

  return (
    <>
      <div id="quote-box" style={{ backgroundColor: generateColor(), "border": "none", "color": "white" }}>
        <p id="text">{quote.text || "Loaging..."}</p>
        <p id="author">{quote.author || "Loaging..."}</p>
        <button id="new-quote" onClick={handleClick}>
          New quote
        </button>
        <a href={`twitter.com/intent/tweet/${quote.id}`} target="_blank" id="tweet-quote" >Twitter</a>
      </div>
    </>
  )
}
function App() {
  return (
    <QuoteGenerator />
  )
}



export default App
