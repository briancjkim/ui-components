import { shallow } from 'enzyme'
import React from 'react'

import { Field } from './Field'

describe('<Field />', () => {
  it(`should render a vertical form field with nothing`, () => {
    const wrapper = shallow(
      <Field />
    )

    expect(wrapper).toMatchSnapshot()
  })

  it(`should render a vertical form field with regular props`, () => {
    const wrapper = shallow(
      <Field
        inputName='testInput'
        label='This is a test input'
        isRequired
      >
        Children
      </Field>
    )

    expect(wrapper).toMatchSnapshot()
  })

  it(`should render a vertical form field with error messages`, () => {
    const wrapper = shallow(
      <Field
        label='This is a test input'
        errorMessages={[
          'Error 1',
          'Error 2'
        ]}
      >
        Children
      </Field>
    )

    expect(wrapper).toMatchSnapshot()
  })

  it(`should render a vertical form field with a single error message`, () => {
    const wrapper = shallow(
      <Field
        label='This is a test input'
        errorMessages='Just one error'
      >
        Children
      </Field>
    )

    expect(wrapper).toMatchSnapshot()
  })
})