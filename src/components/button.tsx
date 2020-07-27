import { h, RenderableProps } from 'preact'
import { css } from 'preact-emotion'

const text = css`
    display: inline-flex;
    align-items: center;
    padding: 0.8rem;
    text-decoration: none;
    text-align: center;
    border: 1px solid #007bc7;
    border-radius: 4px;
    cursor: pointer;
    line-height: 1;
    white-space: nowrap;
    background-color: #fff;
    color: #000;
`

export default function Button(props: RenderableProps<{ onClick }>) {
    const handleClick = (e: any) => {
        props.onClick()
    }

    return (
        <div>
            <button className={text} onClick={handleClick}>
                {props.children}
            </button>
        </div>
    )
}
