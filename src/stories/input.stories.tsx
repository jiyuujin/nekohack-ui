import { storiesOf } from '@storybook/react'

import * as React from 'react'

import { Input } from '../components/input'

storiesOf('Element', module)
    .add('Text Input', () => {
        const [value, setValue] = React.useState('Input')
        return (
            <>
                {value}
                <br/>
                <Input value={value} onChange={setValue} />
            </>
        )
    })
    .add('Password Input', () => {
        const [value, setValue] = React.useState('Input')
        return (
            <>
                {value}
                <br/>
                <Input value={value} password onChange={setValue} />
            </>
        )
    })
