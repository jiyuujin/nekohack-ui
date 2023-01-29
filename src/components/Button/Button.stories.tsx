import { action } from '@storybook/addon-actions'
import { Button, ButtonProps } from './Button'
import { Meta, Story } from '@storybook/react'

export default {
  component: Button,
  title: 'Button',
  args: {
    //
  },
} as Meta

export const Default: Story<ButtonProps> = (args) => (
  <Button onClick={action('clicked')}>
    <div>hoge</div>
  </Button>
)

export const Disabled: Story<ButtonProps> = (args) => (
  <Button onClick={action('clicked')} disabled>
    <div>hoge</div>
  </Button>
)
