import React from 'react'
import styled from 'styled-components'

const ListItemStyle = styled.button`
    display: flex;
    justify-content: space-between;
    align-items: stretch;
    transition: all 0.15s linear;
    width: 100%;
    border: none;
`

const ItemNameStyle = styled.div`
    padding: 0.65rem;
    padding-left: 3rem;
    width: 100%;
    text-align: left;
    cursor: pointer;

    &:hover {
        background-color: #f7f7f7;
    }

    &.is-selected {
        .item-name {
            opacity: 0.5;
        }
    }

    &.is-selected-items {
        .item-name {
            padding-left: 0.65rem;
        }

        &.is-selected {
            .item-name {
                opacity: 1;
            }
        }
    }
`

const ListItems = ({
    itemId,
    itemName,
    handleClickCallback,
}: {
    itemId: number
    itemName: string
    handleClickCallback: any
}) => {
    const handleClick = () => {
        handleClickCallback(itemId)
    }

    return (
        <ListItemStyle onClick={handleClick}>
            <ItemNameStyle>{itemName}</ItemNameStyle>
        </ListItemStyle>
    )
}

export default ListItems
