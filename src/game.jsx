import React, { useMemo, useState } from 'react'
import Cell from './cell'
import styled from 'styled-components'
import { cardCss, StyledTitle } from './styles'
import Button from './components/button'

const Game = ({ rows, columns, mines, onStartAgain }) => {
  const grid = useMemo(() => generateGrid(columns, rows, mines), [])
  const [gameOver, setGameOver] = useState(false)
  return (
    <StyledOuterWrapper>
      <div>
        <StyledTitle>{gameOver ? '😵' : '😃'}</StyledTitle>
        <StyledWrapper columns={columns}>
          {(() => {
            const cells = []
            for (let i = 0; i < columns; i++) {
              for (let j = 0; j < rows; j++) {
                cells.push(
                  <Cell
                    key={`${i},${j}`}
                    grid={grid}
                    i={i}
                    j={j}
                    columns={columns}
                    rows={rows}
                    onMine={() => setGameOver(true)}
                    gameOver={gameOver}
                  />,
                )
              }
            }
            return cells
          })()}
        </StyledWrapper>
        {gameOver && <Button onClick={onStartAgain}>Start Again</Button>}
      </div>
    </StyledOuterWrapper>
  )
}

const StyledWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(${(props) => props.columns}, 40px);
`

const StyledOuterWrapper = styled.div`
  display: grid;
  margin-top: 64px;
  place-items: center;
  > div {
    ${cardCss};
  }
`

const generateGrid = (columns, rows, mines) => {
  const grid = new Array(columns)
  for (let i = 0; i < grid.length; i++) {
    grid[i] = new Array(rows)
  }
  const allGrids = []
  for (let i = 0; i < columns; i++) {
    for (let j = 0; j < rows; j++) {
      allGrids.push([i, j])
    }
  }
  for (let x = 0; x < mines; x++) {
    const index = Math.floor(Math.random() * allGrids.length)
    const choice = allGrids[index]
    const i = choice[0]
    const j = choice[1]
    allGrids.splice(index, 1)
    grid[i][j] = { isMine: true }
  }
  return grid
}

export default Game
