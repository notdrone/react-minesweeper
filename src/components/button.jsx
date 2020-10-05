import React from 'react'
import styled from 'styled-components'

const Button = ({ children, ...restProps }) => {
  return <StyledButton {...restProps}>{children}</StyledButton>
}

const StyledButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 12px;
  border: 1px solid #8f9092;
  border-radius: 12px;
  color: #606060;
  width: 100%;
  outline: none;
`

export default Button
