import React from 'react'
import { ButtonStyle } from './Button.styles'

export type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement>;

export const Button = React.forwardRef<
  HTMLButtonElement,
  React.PropsWithChildren<ButtonProps>
>(function Button(props, ref) {
  return (
    <ButtonStyle role="button" aria-pressed="true" ref={ref} {...props}>
      {props.children}
    </ButtonStyle>
  )
})

Button.displayName = 'NekoButton'
