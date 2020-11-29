import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'

import { Button } from '../components/button'

storiesOf('Element', module).add('Button', () => (
    <Button onClick={action('clicked')}>Button</Button>
))
