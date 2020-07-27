import { storiesOf } from '@storybook/preact'
import { h } from 'preact'

import Select from '../components/select'

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

const update = (value: number) => {
    console.log(value)
}

storiesOf('Element', module).add('Select', () => (
    <Select options={options} value={0} onChange={update} />
))
