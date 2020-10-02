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

const TextareaStyle = styled.textarea`
    appearance: none;
    background: transparent;
    padding: 0.8rem 0.2rem;
    background-color: #fff;
    color: #000;
    z-index: 1;
    border: 1px solid #007bc7;
    border-radius: 4px;
    outline: 0;
`

const SuggestListStyle = styled.ul`
    padding: 0 4px;
    margin: 0;
    border: solid 1px #d6d6d6;
    border-top: none;
    border-radius: 0 0 10px 10px;
    overflow: hidden;
`

const SuggestListItemStyle = styled.li`
    border-top: solid 1px #d6d6d6;
    background-color: #fff;
    line-height: 2.5;
    height: 2.5em;
    display: flex;
`

export type InputProps = {
    value: string
    placeholder?: string
    password?: boolean
    targets?: string[]
    rows?: number
    multiple?: boolean
    onChange: Function
}

export const Input: FC<InputProps> = ({
    value,
    placeholder = '',
    password = false,
    targets = [],
    rows = 0,
    multiple = false,
    onChange,
}) => {
    let [suggests, setSuggests] = React.useState([])
    let [isShow, setIsShow] = React.useState(targets.length !== 0)

    const handleInput = (e: any) => {
        setIsShow(true)
        let newSuggest = []
        for (const t of targets) {
            if (t.toLowerCase().indexOf(e.target.value.toLowerCase()) !== -1) {
                newSuggest.push(t)
            }
        }
        setSuggests(newSuggest)
        onChange(e.target.value)
    }

    const handleInputDirectly = (text: string) => {
        onChange(text)
        setIsShow(false)
    }

    return (
        <>
            {!multiple ? (
                <>
                    <InputStyle
                        value={value}
                        placeholder={placeholder}
                        type={!password ? 'text' : 'password'}
                        onChange={handleInput}
                    />
                    {isShow && (
                        <SuggestListStyle>
                            {value &&
                                suggests.map((s) => (
                                    <SuggestListItemStyle
                                        key={s}
                                        onClick={() => handleInputDirectly(s)}
                                    >
                                        {s}
                                    </SuggestListItemStyle>
                                ))}
                        </SuggestListStyle>
                    )}
                </>
            ) : (
                <TextareaStyle
                    value={value}
                    rows={rows}
                    onChange={handleInput}
                />
            )}
        </>
    )
}

Input.displayName = 'NekoInput'
