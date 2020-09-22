<p align="center">
  <a href="https://npmjs.com/package/nekohack-ui"><img src="https://i.imgur.com/jGQJLC5.png" alt="nekohack-ui" title="nekohack-ui"/></a>　
</p>

<p align="center">
  <a href="https://npmjs.com/package/nekohack-ui">
    <img alt="" src="https://img.shields.io/npm/v/nekohack-ui/latest.svg?style=flat-square">
  </a>
  <a href="https://npmjs.com/package/nekohack-ui">
    <img alt="" src="https://img.shields.io/npm/v/nekohack-ui/beta.svg?style=flat-square">
  </a>
  <a href="https://npmjs.com/package/nekohack-ui">
    <img alt="" src="https://img.shields.io/npm/dt/nekohack-ui.svg?style=flat-square">
  </a>
</p>

## Installation

Install [nekohack-ui](https://www.npmjs.com/package/nekohack-ui) package.

```bash
npm i nekohack-ui
npm i react react-dom styled-components

yarn add nekohack-ui
yarn add react react-dom styled-components
```

## Atomic Components

### Button

```tsx
import * as React from 'react'

import { NekoButton } from 'nekohack-ui'

export const App = () => {
    const submit = () => {
        //
    }
    return (
        <NekoButton onClick={submit}>Button</NekoButton>
    )
}
```

#### Props

| # | Type | Default |
|:---|:---|:---|
| children | `React.ReactNode` | `` |
| onClick | `Function` | `` |

### Input

```tsx
import * as React from 'react'

import { NekoInput } from 'nekohack-ui'

export const App = () => {
    const [value, setValue] = React.useState('Input')
    return (
        <NekoInput value={value} onChange={setValue} />
    )
}
```

#### Props

| # | Type | Default |
|:---|:---|:---|
| value | `String` | `` |
| placeholder | `String` | `` |
| password | `String` | `` |
| onChange | `Function` | `` |

### Label

```tsx
import * as React from 'react'

import { NekoLabel } from 'nekohack-ui'

export const App = () => {
    return (
        <NekoLabel>Label</NekoLabel>
    )
}
```

#### Props

| # | Type | Default |
|:---|:---|:---|
| children | `React.ReactNode` | `` |

### Select

```tsx
import * as React from 'react'

import { NekoSelect } from 'nekohack-ui'

const options = [
    {
        value: 1,
        text: 'Angular',
    },
    {
        value: 2,
        text: 'React',
    },
    {
        value: 3,
        text: 'Vue',
    },
]

export const App = () => {
    const [value, setValue] = React.useState(1)
    return (
        <NekoSelect options={options} value={value} onChange={setValue} />
    )
}
```

#### Props

| # | Type | Default |
|:---|:---|:---|
| options | `Array<{ value: number text: string}>` | `` |
| value | `Number` | `` |
| onChange | `Function` | `` |
