import Adapter from 'enzyme-adapter-react-16'
import Enzyme, { shallow } from 'enzyme'

Enzyme.configure({ adapter: new Adapter() })

import { Accordion as NekoAccordion } from '../src/components/accordion'

type Item = {
    itemId: number
    itemName: string
    backgroundColor: string
    color: string
}

const singleItemList: Item[] = [
    {
        itemId: 0,
        itemName: 'Web',
        backgroundColor: '#0033ff',
        color: '#fff',
    },
    {
        itemId: 1,
        itemName: 'HTML5',
        backgroundColor: '#0099ff',
        color: '#000',
    },
    {
        itemId: 2,
        itemName: 'CSS',
        backgroundColor: '#00ff99',
        color: '#000',
    },
]

const handleItemClass = () => {
    console.log('clicked')
}

describe('Accordion', () => {
    let wrapper

    beforeEach(() => {
        wrapper = shallow(
            <NekoAccordion
                labelText="Front"
                title="Markup"
                items={singleItemList}
                updateItemClass={handleItemClass}
            />
        )
    })

    it('should render without errors', () => {
        expect(wrapper).toBeTruthy()
        wrapper.update()
    })
})
