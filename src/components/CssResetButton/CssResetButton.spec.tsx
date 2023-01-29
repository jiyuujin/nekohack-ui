import Adapter from 'enzyme-adapter-react-16'
import Enzyme, { shallow } from 'enzyme'

Enzyme.configure({ adapter: new Adapter() })

import { CssResetButton } from './CssResetButton'

const submit = () => {
  console.log('clicked')
}

describe('Button', () => {
  let wrapper

  beforeEach(() => {
    wrapper = shallow(<CssResetButton onClick={submit}>OK</CssResetButton>)
  })

  it('should render without errors', () => {
    expect(wrapper).toBeTruthy()
    wrapper.update()
  })
})
