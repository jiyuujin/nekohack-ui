import Adapter from 'enzyme-adapter-react-16'
import Enzyme, { shallow } from 'enzyme'

Enzyme.configure({ adapter: new Adapter() })

import { Select as NekoSelect } from '../src/components/select'

const options = [
  {
    value: 1,
    text: 'Angular',
  },
  {
    value: 2,
    text: 'React',
  },
  {
    value: 3,
    text: 'Vue',
  },
]

const setValue = () => {
  console.log('updated')
}

describe('Select', () => {
  let wrapper

  beforeEach(() => {
    wrapper = shallow(
      <NekoSelect options={options} value={1} onChange={setValue} />
    )
  })

  it('should render without errors', () => {
    expect(wrapper).toBeTruthy()
    wrapper.update()
  })
})
