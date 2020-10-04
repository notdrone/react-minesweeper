import React from 'react'
import styled from 'styled-components'

const Cell = ({data = {}}) => {
  const text = data.isMine ? '💣' : ''
  return (
    <StyledWrapper {...data}>
      {text}
    </StyledWrapper>
  )
}

const StyledWrapper = styled.div`
  height: 40px;
  display: grid;
  place-items: center;
  border: 1px solid black ;
`

export default Cell
