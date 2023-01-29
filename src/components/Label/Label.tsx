import React from 'react'
import { LabelStyle } from './Label.styles'

export type LabelProps = {
  children: React.ReactNode;
};

export const Label = ({ children }: React.PropsWithChildren<LabelProps>) => {
  return <LabelStyle>{children}</LabelStyle>
}

Label.displayName = 'NekoLabel'
