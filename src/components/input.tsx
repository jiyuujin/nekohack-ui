import * as React from 'react'
import { FC } from 'react'
import styled from 'styled-components'

const InputStyle = styled.input`
    appearance: none;
    background: transparent;
    padding: 0.8rem 0.2rem;
    background-color: #fff;
    color: #000;
    z-index: 1;
    border: 1px solid #007bc7;
    border-radius: 4px;
    outline: 0;
    line-height: 1;

    :placeholder-shown {
        color: #ddd;
        font-style: italic;
        font-weight: 100;
    }

    ::-webkit-input-placeholder {
        color: #ddd;
        font-style: italic;
        font-weight: 100;
    }

    :-moz-placeholder {
        color: #ddd;
        font-style: italic;
        font-weight: 100;
    }

    ::-moz-placeholder {
        color: #ddd;
        font-style: italic;
        font-weight: 100;
    }

    :-ms-input-placeholder {
        color: #ddd;
        font-style: italic;
        font-weight: 100;
    }
`

export type InputProps = {
    value: string
    placeholder?: string
    password?: boolean
    onChange: Function
}

export const Input: FC<InputProps> = ({
    value,
    placeholder,
    password,
    onChange,
}) => {
    const handleInput = (e: any) => {
        onChange(e.target.value)
    }

    return (
        <InputStyle
            value={value}
            placeholder={placeholder}
            type={!password ? 'text' : 'password'}
            onChange={handleInput}
        />
    )
}
