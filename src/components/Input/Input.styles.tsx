import styled from 'styled-components'

export const InputStyle = styled.input`
  appearance: none;
  background: transparent;
  padding: 0.8rem 0.2rem;
  background-color: #fff;
  color: #000;
  z-index: 1;
  border: 1px solid #007bc7;
  border-radius: 4px;
  outline: 0;
  line-height: 1;
  :placeholder-shown {
    color: #ddd;
    font-style: italic;
    font-weight: 100;
  }
  ::-webkit-input-placeholder {
    color: #ddd;
    font-style: italic;
    font-weight: 100;
  }
  :-moz-placeholder {
    color: #ddd;
    font-style: italic;
    font-weight: 100;
  }
  ::-moz-placeholder {
    color: #ddd;
    font-style: italic;
    font-weight: 100;
  }
  :-ms-input-placeholder {
    color: #ddd;
    font-style: italic;
    font-weight: 100;
  }
`

export const TextareaStyle = styled.textarea`
  appearance: none;
  background: transparent;
  padding: 0.8rem 0.2rem;
  background-color: #fff;
  color: #000;
  z-index: 1;
  border: 1px solid #007bc7;
  border-radius: 4px;
  outline: 0;
`

export const SuggestListStyle = styled.ul`
  padding: 0 4px;
  margin: 0;
  border: solid 1px #d6d6d6;
  border-top: none;
  border-radius: 0 0 10px 10px;
  overflow: hidden;
`

export const SuggestListItemStyle = styled.li`
  border-top: solid 1px #d6d6d6;
  background-color: #fff;
  line-height: 2.5;
  height: 2.5em;
  display: flex;
`
