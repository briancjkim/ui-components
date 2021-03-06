import { mount, shallow } from 'enzyme'
import React from 'react'

import { Modal } from './Modal'

describe('<Modal />', () => {
  it('should render a hidden modal', () => {
    const wrapper = mount(
      <Modal
        isOpen={false}
      >
        This text is hidden
      </Modal>
    )

    expect(wrapper).toMatchSnapshot()
  })

  it('should render a shown modal with no close button', () => {
    const wrapper = shallow(
      <Modal
        isOpen
        showCloseButton={false}
      >
        This text is shown
      </Modal>
    )

    expect(wrapper).toMatchSnapshot()
  })
})
