import { useState } from 'react'
import {
  InputStyle,
  SuggestListItemStyle,
  SuggestListStyle,
  TextareaStyle,
} from './Input.styles'

export type InputProps = {
  id?: string;
  role?: string;
  label?: string;
  explain?: string;
  value: string;
  placeholder?: string;
  password?: boolean;
  targets?: string[];
  rows?: number;
  multiple?: boolean;
  onChange: Function;
};

export function Input({
  id,
  role,
  label,
  explain,
  value,
  placeholder = '',
  password = false,
  targets = [],
  rows = 0,
  multiple = false,
  onChange,
}: InputProps) {
  let [suggests, setSuggests] = useState([])
  let [isShow, setIsShow] = useState(targets.length !== 0)

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
            id={id}
            role={role}
            aria-label={label}
            aria-labelledby={explain}
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
          id={id}
          aria-label={label}
          aria-labelledby={explain}
          value={value}
          rows={rows}
          onChange={handleInput}
        />
      )}
    </>
  )
}

Input.displayName = 'NekoInput'
