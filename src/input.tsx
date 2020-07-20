import { h, RenderableProps } from 'preact'
import { css } from 'preact-emotion'

const text = css`
    appearance: none;
    background: transparent;
    padding: 0.8rem 0.2rem;
    background-color: #fff;
    color: #000;
    z-index: 1;
    border: 1px solid #007bc7;
    border-radius: 4px;
    outline: 0;
    line-height: 1;

    :placeholder-shown {
        color: #ddd;
        font-style: italic;
        font-weight: 100;
    }

    ::-webkit-input-placeholder {
        color: #ddd;
        font-style: italic;
        font-weight: 100;
    }

    :-moz-placeholder {
        color: #ddd;
        font-style: italic;
        font-weight: 100;
    }

    ::-moz-placeholder {
        color: #ddd;
        font-style: italic;
        font-weight: 100;
    }

    :-ms-input-placeholder {
        color: #ddd;
        font-style: italic;
        font-weight: 100;
    }
`

export default function Input(
    props: RenderableProps<{
        value: string
        placeholder?: string
        password?: boolean
        onInput: Function
    }>
) {
    const handleInput = (e: any) => {
        props.onInput(e.target.value)
    }

    return (
        <div>
            <input
                value={props.value}
                placeholder={props.placeholder}
                type={!props.password ? 'text' : 'password'}
                className={text}
                onInput={handleInput}
            />
        </div>
    )
}
