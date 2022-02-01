import { action } from '@storybook/addon-actions'

import { Button } from '../components/button'

export const ButtonStory = () => (
  <Button onClick={action('clicked')}>Button</Button>
)
