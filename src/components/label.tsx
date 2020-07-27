import { h, RenderableProps } from 'preact'
import { css } from 'preact-emotion'

const text = css`
    display: inline-block;
    padding: 0.5rem 0.75rem;
    margin: 0.25rem;
    background-color: #68788d;
    color: #fff;
    border-radius: 9999px;
    border-width: 1px;
    border-color: #2e3439;

    a {
        color: #68788d;
    }
`

export default function Label(props: RenderableProps<{}>) {
    return (
        <div>
            <div className={text}>{props.children}</div>
        </div>
    )
}
