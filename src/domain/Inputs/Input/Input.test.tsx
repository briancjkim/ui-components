import { shallow } from 'enzyme'
import React from 'react'

import { Icon } from '../../Icons'
import { Input } from './Input'

const dummyClick = () => console.log('hey')

describe('<Input />', () => {
  it(`should render an input`, () => {
    const wrapper = shallow(
      <Input
        name='test-input'
        type='text'
      />
    )

    expect(wrapper).toMatchSnapshot()
  })

  it(`should render an input with an icon`, () => {
    const wrapper = shallow(
      <Input
        name='test-input'
        type='text'
        icon={
          <Icon
            icon='fa-check'
          />
        }
      />
    )

    expect(wrapper).toMatchSnapshot()
  })

  it(`should render with an onBlur function if handleBlur is passed in`, () => {
    const mockHandleBlur = jest.fn()

    const wrapper = shallow(
      <Input
        name='test-input'
        type='text'
        handleBlur={mockHandleBlur}
      />
    )

    wrapper.simulate('blur')

    expect(mockHandleBlur.mock.calls.length).toBe(1)
    expect(wrapper).toMatchSnapshot()
  })

  it(`should highlight all text when focused and highlightOnFocus is true`, () => {
    const mockedEvent = {
      target: {
        select: jest.fn()
      }
    }

    const wrapper = shallow(
      <Input
        name='test-input'
        type='text'
        highlightOnFocus
      />
    )

    wrapper.simulate('focus', mockedEvent)

    expect(mockedEvent.target.select.mock.calls.length).toBe(1)
    expect(wrapper).toMatchSnapshot()
  })

  it(`should not highlight all text when focused and highlightOnFocus is false\``, () => {
    const mockedEvent = {
      target: {
        select: jest.fn()
      }
    }

    const wrapper = shallow(
      <Input
        name='test-input'
        type='text'
        highlightOnFocus={false}
      />
    )

    wrapper.simulate('focus', mockedEvent)

    expect(mockedEvent.target.select.mock.calls.length).toBe(0)
    expect(wrapper).toMatchSnapshot()
  })

  it(`should render an input with a disable prefix text`, () => {
    const wrapper = shallow(
      <Input
        name='test-input'
        type='text'
        disabledPrefix='test'
      />
    )

    expect(wrapper).toMatchSnapshot()
  })

  it(`should render an input with a clear button`, () => {
    const wrapper = shallow(
      <Input
        name='test-input'
        type='text'
        handleClear={dummyClick}
      />
    )

    expect(wrapper).toMatchSnapshot()
  })

  it(`should render with an onChange function if onChange is passed in`, () => {
    const wrapper = shallow(
      <Input
        name='test-input'
        type='text'
        onChange={dummyClick}
      />
    )

    expect(wrapper).toMatchSnapshot()
  })
})
