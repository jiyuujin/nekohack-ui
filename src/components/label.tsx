import { FC } from 'react'
import styled from 'styled-components'

const LabelStyle = styled.div`
    display: inline-block;
    padding: 0.5rem 0.75rem;
    margin: 0.25rem;
    background-color: #68788d;
    color: #fff;
    border-radius: 9999px;
    border-width: 1px;
    border-color: #2e3439;

    a {
        color: #68788d;
    }
`

export type LabelProps = {
    children: React.ReactNode
}

export const Label: FC<LabelProps> = ({ children }) => {
  return <LabelStyle>{children}</LabelStyle>
}

Label.displayName = 'NekoLabel'
