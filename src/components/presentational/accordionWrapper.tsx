import React, { useState } from 'react'
import styled from 'styled-components'

const ClassWrapperStyle = styled.div`
    border-bottom: 1px solid #ddd;
`

const ClassStyle = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: stretch;

    &:hover {
        background-color: #f7f7f7;
    }
`

const ClassNameStyle = styled.div`
    padding: 0.65rem;
    width: 100%;
    color: #333;
    text-decoration: none;
    text-align: left;
    cursor: pointer;
`

const ClassCountStyle = styled.small`
    color: #999;
`

const ClassListStyle = styled.div`
    transition: height 0.15s ease-in-out;
    overflow: hidden;
`

const AccordionWrapper = ({
  title,
  itemLength,
  children,
}: {
    title: string
    itemLength: number
    children: React.ReactChild | Array<React.ReactChild>
}) => {
  const [isAccordionOpened, setIsAccordionOpened] = useState(false)

  const handleIsAccordionOpened = (e: any) => {
    setIsAccordionOpened(!isAccordionOpened)
  }

  return (
    <ClassWrapperStyle>
      <ClassStyle>
        <ClassNameStyle onClick={handleIsAccordionOpened}>
          {title}
          <ClassCountStyle>{`(${itemLength})`}</ClassCountStyle>
        </ClassNameStyle>
      </ClassStyle>
      {isAccordionOpened && <ClassListStyle>{children}</ClassListStyle>}
    </ClassWrapperStyle>
  )
}

export default AccordionWrapper
