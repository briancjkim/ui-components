import React from 'react'
import { shallow } from 'enzyme'
import { IOptionProps, OptionList } from './OptionList'
import { FontAwesomeIcon } from '../../Icons'

const exampleOptions = [
  {
    text: 'Georgia Lari (GEL)',
    value: 1,
    leftComponent: <img src='https://github.com/markjames/famfamfam-flag-icons/blob/master/icons/png/ge.png?raw=true' />,
    buttonText: 'GEL'
  },
  {
    text: 'Malaysia Ringgit (MYR)',
    value: 2,
    leftComponent: <img src='https://github.com/markjames/famfamfam-flag-icons/blob/master/icons/png/my.png?raw=true' />,
    buttonText: 'MYR'
  },
  {
    text: 'New Zealand Dollar (NZD)',
    value: 3,
    leftComponent: <img src='https://github.com/markjames/famfamfam-flag-icons/blob/master/icons/png/nz.png?raw=true' />,
    buttonText: 'NZD'
  },
  {
    text: 'Australian Dollar (AUD)',
    value: 4,
    onClick: (option: IOptionProps) => { alert('I have a custom onClick handler!') },
    leftComponent: <img src='https://github.com/markjames/famfamfam-flag-icons/blob/master/icons/png/au.png?raw=true' />,
    rightComponent: <FontAwesomeIcon type='star' />,
    buttonText: 'AUD'
  }
]

const dummyClick = () => console.log('hey')

describe('<OptionList />', () => {
  it('should render a basic option list', () => {
    const wrapper = shallow(
      <OptionList
        handleClick={dummyClick}
        options={exampleOptions}
      />
    )

    expect(wrapper).toMatchSnapshot()
  })

  it('should render a truncated option list', () => {
    const wrapper = shallow(
      <OptionList
        truncated
        handleClick={dummyClick}
        options={exampleOptions}
      />
    )

    expect(wrapper).toMatchSnapshot()
  })

  it('should render an option list with filtered options', () => {
    const handleClick = () => console.log('hey')

    const wrapper = shallow(
      <OptionList
        handleClick={dummyClick}
        query='dollar'
        options={exampleOptions}
      />
    )

    expect(wrapper).toMatchSnapshot()
  })
})
