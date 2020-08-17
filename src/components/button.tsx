import * as React from 'react'
import { FC } from 'react'
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
    children: React.ReactNode
    onClick: Function
}

export const Button: FC<ButtonProps> = ({ children, onClick }) => {
    const handleClick = (e: any) => {
        onClick()
    }

    return (
        <ButtonStyle onClick={handleClick}>
            {children}
        </ButtonStyle>
    )
}
