import React from 'react'
import Adapter from 'enzyme-adapter-react-16'
import Enzyme, { shallow } from 'enzyme'

Enzyme.configure({ adapter: new Adapter() })

import { Label as NekoLabel } from '../src/components/label'

describe('Label', () => {
    let wrapper

    beforeEach(() => {
        wrapper = shallow(<NekoLabel>Label</NekoLabel>)
    })

    it('should render without errors', () => {
        expect(wrapper).toBeTruthy()
        wrapper.update()
    })
})
