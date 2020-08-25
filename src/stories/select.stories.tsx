import { storiesOf } from '@storybook/react'

import * as React from 'react'

import { Select } from '../components/select'

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
    const [value, setValue] = React.useState(1)
    return (
        <>
            {value}
            {options.find((o) => o.value === Number(value))?.text}
            <br />
            <Select options={options} value={value} onChange={setValue} />
        </>
    )
})
