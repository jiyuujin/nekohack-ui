import { useState } from 'react'

import { Input } from '../components/input'

const escape = (str: string) => {
    return str.replace(/\n/g, '<br/>')
}

export const InputStory1 = () => {
    const [value, setValue] = useState('Input')
    return (
        <>
            {value}
            <br />
            <Input
                id="input"
                role="textbox"
                label="確定する"
                explain="input abc"
                value={value}
                onChange={setValue}
            />
        </>
    )
}

export const InputStory2 = () => {
    const [value, setValue] = useState('Input')
    return (
        <>
            {value}
            <br />
            <Input
                id="input"
                label="確定する"
                explain="input abc"
                value={value}
                password
                onChange={setValue}
            />
        </>
    )
}

export const InputStory3 = () => {
    const [value, setValue] = useState('')
    return (
        <>
            {value}
            <br />
            <Input
                id="input"
                role="textbox"
                label="確定する"
                explain="input abc"
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
}

export const InputStory4 = () => {
    const [value, setValue] = useState('Input')
    return (
        <>
            {escape(value)}
            <br />
            <Input
                id="input"
                role="textbox"
                label="確定する"
                explain="input abc"
                value={value}
                rows={10}
                multiple
                onChange={setValue}
            />
        </>
    )
}

export default { component: InputStory1, InputStory2, InputStory3, InputStory4 }
