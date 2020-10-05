import React, { useState } from 'react'
import Game from './game'

function App() {
  const [m, setM] = useState('')
  const [n, setN] = useState('')
  const [x, setX] = useState('')
  const [start, setStart] = useState(false)

  const handleInputChange = (event) => {
    const { name, value } = event.target
    if (name === 'm') {
      setM(value)
    }
    if (name === 'n') {
      setN(value)
    }
    if (name === 'x') {
      setX(value)
    }
  }

  const handleStart = () => {
    setStart(true)
  }
  if (!start) {
    return (
      <div>
        <main>
          <h2>Grid</h2>
          <input placeholder="m" value={m} name="m" onChange={handleInputChange} />
          X
          <input placeholder="n" value={n} onChange={handleInputChange} name="n" />
          <br />
          <h2>Number of mines</h2>
          <input type="no of mines" name="x" value={x} onChange={handleInputChange} />
          <button onClick={handleStart}>Start</button>
        </main>
      </div>
    )
  }
  return <Game rows={Number(m)} columns={Number(n)} mines={Number(x)} />
}

export default App
