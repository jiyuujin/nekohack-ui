import React from 'react'
import { SelectStyle, SelectWrapperStyle } from './Select.styles'

export type SelectProps = {
  id?: string;
  label?: string;
  explain?: string;
  options: Array<{
    value: number;
    text: string;
  }>;
  value: number;
  onChange: Function;
};

export const Select: React.FC<SelectProps> = ({
  id,
  label,
  explain,
  options,
  value,
  onChange,
}) => {
  const handleChange = (e: any) => {
    onChange(e.target.value)
  }

  return (
    <SelectWrapperStyle>
      <SelectStyle
        id={id}
        aria-label={label}
        aria-labelledby={explain}
        onChange={handleChange}
      >
        {options.map((o: { value: number; text: string }) => {
          return (
            <option key={o.value} value={o.value}>
              {o.text}
            </option>
          )
        })}
      </SelectStyle>
    </SelectWrapperStyle>
  )
}

Select.displayName = 'NekoSelect'
