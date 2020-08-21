import * as React from 'react'
import { FC } from 'react'
import styled from 'styled-components'

const SelectWrapperStyle = styled.div`
    position: relative;
    display: inline-block;

    &:after {
        content: '';
        width: 6px;
        height: 6px;
        border: 0;
        border-bottom: solid 2px #b4b3b3;
        border-right: solid 2px #b4b3b3;
        transform: rotate(45deg);
        position: absolute;
        top: 50%;
        margin-top: -4px;
        margin-left: -14px;
    }
`

const SelectStyle = styled.select`
    appearance: none;
    background: transparent;
    padding: 0.8rem 2.8rem 0.8rem 0.2rem;
    background-color: #fff;
    color: #000;
    position: relative;
    border: 1px solid #007bc7;
    border-radius: 4px;
    outline: 0;
    line-height: 1;

    :-ms-expand {
        display: none;
    }
`

export type SelectProps = {
    options: Array<{
        value: number
        text: string
    }>
    value: number
    onChange: Function
}

export const Select: FC<SelectProps> = ({ options, value, onChange }) => {
    const handleChange = (e: any) => {
        onChange(e.target.value)
    }

    return (
        <SelectWrapperStyle>
            <SelectStyle onChange={handleChange}>
                {options.map((o: { value: number; text: string }) => {
                    return (
                        <option
                            key={o.value}
                            value={o.value}
                            tabIndex={o.value}
                        >
                            {o.text}
                        </option>
                    )
                })}
            </SelectStyle>
        </SelectWrapperStyle>
    )
}

Select.displayName = 'NekoSelect'
