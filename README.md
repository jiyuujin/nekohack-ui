# nekohack-ui

<p align="left">
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
| children | `React.ReactNode` `Array<React.ReactNode>` | `` |
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
| id | `String` | `` |
| role | `String` | `` |
| label | `String` | `` |
| explain | `String` | `` |
| value | `String` | `` |
| placeholder | `String` | `` |
| password | `String` | `` |
| targets | `Array<String>` | `[]` |
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
| id | `String` | `` |
| label | `String` | `` |
| explain | `String` | `` |
| options | `Array<{ value: number text: string}>` | `` |
| value | `Number` | `` |
| onChange | `Function` | `` |

## Modules

### Accordion

```tsx
import * as React from 'react'

import { NekoAccordion } from 'nekohack-ui'

type Item = {
    itemId: number
    itemName: string
    backgroundColor: string
    color: string
}

const singleItemList: Item[] = [
    {
        itemId: 0,
        itemName: 'Web',
        backgroundColor: '#0033ff',
        color: '#fff',
    },
    {
        itemId: 1,
        itemName: 'HTML5',
        backgroundColor: '#0099ff',
        color: '#000',
    },
    {
        itemId: 2,
        itemName: 'CSS',
        backgroundColor: '#00ff99',
        color: '#000',
    },
]

export const App = () => {
    const handleItemClass = () => {
        //
    }
    return (
        <NekoAccordion
            labelText="Front"
            title="Markup"
            items={singleItemList}
            updateItemClass={handleItemClass}
        />
    )
}
```

#### Props

| # | Type | Default |
|:---|:---|:---|
| labelText | `String` | `` |
| title | `String` | `` |
| items | `Array<Item>` | `` |
| updateItemClass | `Function` | `` |
