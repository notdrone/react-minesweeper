import React, { useState } from 'react'
import Game from './game'
import styled, { css } from 'styled-components'
import Button from './components/button'

function App() {
  const [m, setM] = useState('10')
  const [n, setN] = useState('10')
  const [x, setX] = useState('20')
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

  const handleStart = () => setStart(true)

  if (!start) {
    return (
      <StyledSetup>
        <div>
          <StyledTitle>💣 Minesweeper</StyledTitle>
          <StyledGridInputWrapper>
            <StyledInput placeholder="m" value={m} name="m" onChange={handleInputChange} />
            x
            <StyledInput placeholder="n" value={n} onChange={handleInputChange} name="n" />
          </StyledGridInputWrapper>
          <br />
          <StyledMinesWrapper>
            <div className="mine">💣</div>
            <StyledInput name="x" value={x} onChange={handleInputChange} placeholder="x" />
          </StyledMinesWrapper>
          <br />
          <br />
          <Button onClick={handleStart}>Start</Button>
        </div>
      </StyledSetup>
    )
  }
  return <Game rows={Number(m)} columns={Number(n)} mines={Number(x)} />
}

const cardCss = css`
  border: 1px solid #e0e0e0;
  padding: 12px;
  border-radius: 8px;
`

const StyledSetup = styled.div`
  display: grid;
  place-items: center;
  margin-top: 64px;
  > div {
    ${cardCss};
  }
`

const StyledInput = styled.input.attrs({ type: 'number' })`
  padding: 12px;
  border-radius: 4px;
  border: 1px solid #e0e0e0;
`

const StyledGridInputWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr auto 1fr;
  grid-gap: 12px;
  align-items: center;
`

const StyledTitle = styled.h1`
  text-align: center;
`

const StyledMinesWrapper = styled.div`
  display: grid;
  grid-template-columns: auto 1fr;
  align-items: center;
  grid-gap: 12px;
  .mine {
    font-size: 1.5rem;
  }
`

export default App
