import React from 'react'
import styled from 'styled-components'
import AccordionWrapper from './presentational/accordionWrapper'
import ListItems from './presentational/listItems'

type Item = {
    itemId: number
    itemName: string
    backgroundColor: string
    color: string
}

const AccordionLabel = styled.div`
    margin-top: 1rem;
    padding: 0 0.6rem 0.6rem;
    border-bottom: 1px solid #ddd;
    position: relative;
    display: flex;
    justify-content: space-between;
    align-items: stretch;
    width: 100%;
    font-size: 1rem;
    font-weight: bold;
    text-align: left;
    color: #007bc7;
`

export const Accordion = ({
    labelText,
    title,
    items,
    updateItemClass,
}: {
    labelText: string
    title: string
    items: Array<Item>
    updateItemClass: Function
}) => {
    const getItemName = (id: number) => {
        let name = ''
        items.map((item: Item) => {
            if (item.itemId === id) {
                name = item.itemName
            }
        })
        return name
    }

    return (
        <>
            {labelText && <AccordionLabel>{labelText}</AccordionLabel>}
            <AccordionWrapper title={title} itemLength={items.length}>
                <>
                    {items.map((item: Item, index: number) => {
                        return (
                            <ListItems
                                key={index}
                                itemId={item['itemId']}
                                itemName={getItemName(item['itemId'])}
                                handleClickCallback={updateItemClass}
                            />
                        )
                    })}
                </>
            </AccordionWrapper>
        </>
    )
}

Accordion.displayName = 'NekoAccordion'
