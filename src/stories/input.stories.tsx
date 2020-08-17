import { storiesOf } from '@storybook/react'

import * as React from 'react'

import { Input } from '../components/input'

const update = (text: string) => {
    console.log(text)
}

storiesOf('Element', module)
    .add('Text Input', () => <Input value="Input" onChange={update} />)
    .add('Password Input', () => (
        <Input value="Input" password onChange={update} />
    ))
