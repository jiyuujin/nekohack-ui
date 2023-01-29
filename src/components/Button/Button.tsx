import React from 'react'
import { ButtonStyle } from './Button.styles'

export type ButtonProps = {
  onClick: Function;
};

export function Button({
  children,
  onClick,
}: React.PropsWithChildren<ButtonProps>) {
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
