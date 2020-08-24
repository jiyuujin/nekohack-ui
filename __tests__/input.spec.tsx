import React from 'react'
import Adapter from 'enzyme-adapter-react-16'
import Enzyme, { shallow } from 'enzyme'

Enzyme.configure({ adapter: new Adapter() })

import { Input as NekoInput } from '../src/components/input'

const setValue = () => {
  console.log('updated')
}

describe('Input', () => {
  let wrapper

  beforeEach(() => {
    wrapper = shallow(<NekoInput value={'Input'} onChange={setValue} />)
  })

  it('should render without errors', () => {
    expect(wrapper).toBeTruthy()
    wrapper.update()
  })
})