import { storiesOf } from '@storybook/react'

import { Accordion } from '../components/accordion'

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

storiesOf('Element', module).add('Accordion', () => {
    const handleItemClass = () => {
        //
    }
    return (
        <Accordion
            labelText="Front"
            title="Markup"
            items={singleItemList}
            updateItemClass={handleItemClass}
        />
    )
})
