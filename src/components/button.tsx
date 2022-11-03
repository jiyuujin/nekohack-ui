import React from 'react'
import styled from 'styled-components'

const ButtonStyle = styled.button`
    display: inline-flex;
    align-items: center;
    padding: 0.8rem;
    text-decoration: none;
    text-align: center;
    border: 1px solid #007bc7;
    border-radius: 4px;
    cursor: pointer;
    line-height: 1;
    white-space: nowrap;
    background-color: #fff;
    color: #000;
`

export type ButtonProps = {
  onClick: Function
}

export const Button = ({ children, onClick }: React.PropsWithChildren<ButtonProps>) => {
  const handleClick = (e: any) => {
    onClick()
  }

  return (
    <ButtonStyle role="button" aria-pressed="true" onClick={handleClick}>
      {children}
    </ButtonStyle>
  )
}

Button.displayName = 'NekoButton'
