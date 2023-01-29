import { action } from '@storybook/addon-actions'

import { Button } from './Button'

export const ButtonStory = () => (
  <Button onClick={action('clicked')}>Button</Button>
)
