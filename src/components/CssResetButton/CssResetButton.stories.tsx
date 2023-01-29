import { Meta, Story } from '@storybook/react'
import { CssResetButton, CssResetButtonProps } from './CssResetButton'
import { action } from '@storybook/addon-actions'

export default {
  component: CssResetButton,
  title: 'CssResetButton',
  args: {
    //
  },
} as Meta

export const Default: Story<CssResetButtonProps> = (args) => (
  <CssResetButton {...args} onClick={action('clicked')}>
    <div>hoge</div>
  </CssResetButton>
)

export const Disabled: Story<CssResetButtonProps> = (args) => (
  <CssResetButton {...args} disabled>
    <div>hoge</div>
  </CssResetButton>
)
