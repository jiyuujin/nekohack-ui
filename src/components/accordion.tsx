import * as React from 'react'
import { FC } from 'react'
import styled from 'styled-components'
import Class from './presentational/class'
import ListItem from './presentational/listItem'

const AtomsAccordionLabelStyle = styled.div`
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

type AccordionProps = {
    labelText: string
    title: string
    items: any
    updateItemClass: any
}

export const Accordion: FC<AccordionProps> = ({
    labelText,
    title,
    items,
    updateItemClass,
}) => {
    const getItemName = (id: string) => {
        let name = ''
        items.map((item: any) => {
            if (item.itemId === id) {
                name = item.itemName
            }
        })
        return name
    }

    return (
        <>
            {labelText && (
                <AtomsAccordionLabelStyle>{labelText}</AtomsAccordionLabelStyle>
            )}
            <Class title={title} itemLength={items.length}>
                {items.map((item: unknown, index: number) => {
                    return (
                        <ListItem
                            key={index}
                            itemId={item['itemId']}
                            itemName={getItemName(item['itemId'])}
                            handleClickCallback={updateItemClass}
                        />
                    )
                })}
            </Class>
        </>
    )
}
