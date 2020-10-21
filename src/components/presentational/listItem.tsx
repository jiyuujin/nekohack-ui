import React from 'react'
import styled from 'styled-components'

const ItemListItemStyle = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: stretch;
    transition: all 0.15s linear;
`

const ItemNameStyle = styled.div`
    padding: 0.65rem;
    padding-left: 3rem;
    width: 100%;
    text-align: left;
    cursor: pointer;
`

const ListItem = ({
    itemId,
    itemName,
    handleClickCallback,
}: {
    itemId: string
    itemName: string
    handleClickCallback: any
}) => {
    const handleClick = () => {
        handleClickCallback(itemId)
    }

    return (
        <ItemListItemStyle onClick={handleClick}>
            <ItemNameStyle>{itemName}</ItemNameStyle>
        </ItemListItemStyle>
    )
}

export default ListItem
