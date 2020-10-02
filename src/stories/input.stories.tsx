import { storiesOf } from '@storybook/react'

import * as React from 'react'

import { Input } from '../components/input'

const escape = (str: string) => {
    return str.replace(/\n/g, '<br/>')
}

storiesOf('Element', module)
    .add('Text Input', () => {
        const [value, setValue] = React.useState('Input')
        return (
            <>
                {value}
                <br />
                <Input value={value} onChange={setValue} />
            </>
        )
    })
    .add('Password Input', () => {
        const [value, setValue] = React.useState('Input')
        return (
            <>
                {value}
                <br />
                <Input value={value} password onChange={setValue} />
            </>
        )
    })
    .add('Suggestible Input', () => {
        const [value, setValue] = React.useState('')
        return (
            <>
                {value}
                <br />
                <Input
                    value={value}
                    targets={[
                        'Evergreen',
                        'Material UI',
                        'React',
                        'React DOM',
                        'React Router',
                        'React16',
                        'React17',
                        'Redux',
                        'Vue',
                        'Vue Router',
                        'Vue2',
                        'Vue3',
                        'Vuesax',
                        'Vuetify',
                        'Vuex',
                    ]}
                    onChange={setValue}
                />
            </>
        )
    })
    .add('Textarea', () => {
        const [value, setValue] = React.useState('Input')
        return (
            <>
                {escape(value)}
                <br />
                <Input value={value} rows={10} multiple onChange={setValue} />
            </>
        )
    })
