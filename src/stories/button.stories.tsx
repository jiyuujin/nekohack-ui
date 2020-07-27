import { storiesOf } from '@storybook/preact'
import { action } from '@storybook/addon-actions'
import { h } from 'preact'

import Button from '../components/button'

storiesOf('Element', module).add('Button', () => (
    <Button onClick={action('clicked')}>Button</Button>
))
