import { storiesOf } from '@storybook/preact'
import { h } from 'preact'

import Input from '../components/input'

const update = (text: string) => {
    console.log(text)
}

storiesOf('Element', module)
    .add('Text Input', () => <Input value="Input" onInput={update} />)
    .add('Password Input', () => (
        <Input value="Input" password onInput={update} />
    ))
