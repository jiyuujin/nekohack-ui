import styled from 'styled-components'

export const ButtonStyle = styled.button`
  border: none;
  margin: 0;
  padding: 0;
  width: auto;
  overflow: visible;
  cursor: pointer;
  outline: none;
  background-color: transparent;
  &:disabled {
    opacity: 0.3;
    pointer-events: none;
  }
`
