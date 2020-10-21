import React, { useState } from 'react'
import styled from 'styled-components'

const ItemClassAccordionStyle = styled.div`
    border-bottom: 1px solid #ddd;
`

const ItemClassStyle = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: stretch;
`

const ItemClassNameStyle = styled.a`
    padding: 0.65rem;
    width: 100%;
    color: #333;
    text-decoration: none;
    text-align: left;
    cursor: pointer;
`

const ItemCountStyle = styled.small`
    color: #999;
`

const ItemListStyle = styled.div`
    transition: height 0.15s ease-in-out;
    overflow: hidden;
`

const Class = ({
    title,
    itemLength,
    children,
}: {
    title: string
    itemLength: number
    children: React.ReactChild
}) => {
    const [isAccordionOpened, setIsAccordionOpened] = useState(false)

    const handleIsAccordionOpened = (e: any) => {
        setIsAccordionOpened(!isAccordionOpened)
    }

    return (
        <ItemClassAccordionStyle>
            <ItemClassStyle>
                <ItemClassNameStyle onClick={handleIsAccordionOpened}>
                    {title}
                    <ItemCountStyle>{itemLength}</ItemCountStyle>
                </ItemClassNameStyle>
            </ItemClassStyle>
            {isAccordionOpened && <ItemListStyle>{children}</ItemListStyle>}
        </ItemClassAccordionStyle>
    )
}

export default Class
