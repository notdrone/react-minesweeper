import React, { useState } from 'react'
import styled from 'styled-components'

function getText(data, i, j, grid, columns, rows) {
  if (data.isMine) {
    return '💣'
  }
  let adjacentMines = 0
  for (let columnOffset = i - 1; columnOffset <= i + 1; columnOffset++) {
    for (let rowOffset = j - 1; rowOffset <= j + 1; rowOffset++) {
      if (rowOffset >= 0 && columnOffset >= 0 && columnOffset < columns && rowOffset < rows) {
        if (grid[columnOffset][rowOffset] && grid[columnOffset][rowOffset].isMine) {
          adjacentMines += 1
        }
      }
    }
  }
  return adjacentMines
}

const Cell = ({ grid, i, j, columns, rows }) => {
  const [isVisible, setIsVisible] = useState(false)
  const data = grid[i][j] || {}
  const text = getText(data, i, j, grid, columns, rows)
  return (
    <StyledWrapper
      {...data}
      role="button"
      tabIndex={1}
      onClick={() => {
        if (data.isMine) {
          // game over
        }
        setIsVisible(true)
      }}
      isVisible={isVisible}
    >
      {isVisible && text !== 0 ? text : ''}
    </StyledWrapper>
  )
}

const StyledWrapper = styled.div`
  height: 40px;
  display: grid;
  place-items: center;
  border: 1px solid black;
  background: ${(props) => (props.isVisible ? 'white' : 'lightgray')};
`

export default Cell
