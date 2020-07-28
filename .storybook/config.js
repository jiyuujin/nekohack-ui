import { configure } from '@storybook/preact'

const req = require.context('../src/stories', true, /.stories.tsx$/)

function loadStories() {
  req.keys().forEach(filename => req(filename))
}

configure(loadStories, module)
