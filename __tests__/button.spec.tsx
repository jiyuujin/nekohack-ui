import React from 'react'
import Adapter from 'enzyme-adapter-react-16'
import Enzyme, { shallow } from 'enzyme'

Enzyme.configure({ adapter: new Adapter() })

import { Button as NekoButton } from '../src/components/button'

const submit = () => {
  console.log('clicked')
}

describe('Button', () => {
  let wrapper

  beforeEach(() => {
    wrapper = shallow(<NekoButton onClick={submit}>OK</NekoButton>)
  })

  it('should render without errors', () => {
    expect(wrapper).toBeTruthy()
    wrapper.update()
  })
})