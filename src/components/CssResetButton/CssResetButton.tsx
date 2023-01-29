import React from 'react'
import { ButtonStyle } from './CssResetButton.styles'

export type CssResetButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement>;

export const CssResetButton = React.forwardRef<
  HTMLButtonElement,
  React.PropsWithChildren<CssResetButtonProps>
>(function CssResetButton(props, ref) {
  return (
    <ButtonStyle ref={ref} {...props}>
      {props.children}
    </ButtonStyle>
  )
})
