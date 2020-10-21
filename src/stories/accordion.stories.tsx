import { storiesOf } from '@storybook/react'

import * as React from 'react'

import { Accordion } from '../components/accordion'

const items = [
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

const handleItemClass = () => {
    //
}

storiesOf('Element', module).add('Accordion', () => (
    <Accordion
        labelText="Front"
        title="Markup"
        items={items}
        updateItemClass={handleItemClass}
    />
))

Accordion.displayName = 'NekoAccordion'
