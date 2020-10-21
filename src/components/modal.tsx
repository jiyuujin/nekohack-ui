import * as React from 'react'
import { FC, useState, useRef, useCallback } from 'react'
import styled from 'styled-components'

const ModalMaskStyle = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    background: rgba(0, 0, 0, 0.5);
    position: fixed;
    z-index: 100;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
`

const ModalContainerStyle = styled.div`
    position: relative;
    z-index: 101;
    background-color: #fff;
    color: #000;
    height: auto;
    min-height: 330px;
    min-width: 546px;
    padding-bottom: 64px;
    display: flex;
`

import { Button as NekoButton } from './button'

export type ModalProps = {
    title: string
    children: React.ReactNode
}

export const Modal: FC<ModalProps> = ({ title, children }) => {
    const ref = useRef(null)

    const [open, setOpen] = useState(false)

    const handleOpen = () => {
        setOpen(!open)
    }

    const handleClose = useCallback(
        (e: any) => {
            if (!(ref.current! as any).contains(e.target)) {
                setOpen(!open)
            }
        },
        [ref.current]
    )

    return (
        <>
            <NekoButton onClick={handleOpen}>{title}</NekoButton>
            <ModalMaskStyle>
                <ModalContainerStyle onClick={handleClose}>
                    {children}
                </ModalContainerStyle>
            </ModalMaskStyle>
        </>
    )
}

Modal.displayName = 'NekoModal'
