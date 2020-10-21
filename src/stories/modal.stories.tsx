import { storiesOf } from '@storybook/react'

import * as React from 'react'

import { Modal } from '../components/modal'

storiesOf('Element', module).add('Modal', () => (
    <Modal title="Markup">Test</Modal>
))

Modal.displayName = 'NekoModal'
