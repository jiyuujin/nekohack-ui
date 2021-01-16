import { storiesOf } from '@storybook/react'

import { useState } from 'react'

import { Select } from '../components/select'
import { Input } from '../components/input'

const options = [
    {
        value: 1,
        text: 'Angular',
    },
    {
        value: 2,
        text: 'React',
    },
    {
        value: 3,
        text: 'Vue',
    },
]

storiesOf('Element', module).add('Select', () => {
    const [value, setValue] = useState(1)
    return (
        <>
            {value}
            {options.find((o) => o.value === Number(value))?.text}
            <br />
            <Select
                id="select"
                label="確定する"
                explain="select abc"
                options={options}
                value={value}
                onChange={setValue}
            />
        </>
    )
})
