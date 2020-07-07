import React from 'react'
import { shallow, ShallowWrapper } from 'enzyme'
import Navigator from './Navigator'
import Icons from './Icons'

describe('NavIcon', () => {
  it('should render the MenuIcon', () => {
    let menu = shallow(<Navigator isMenuOpen={false} onClick={() => {}} />)
    expect(menu.find('.menuIcon').length).toEqual(1)
  })

  it('should render the BackIcon', () => {
    let menu = shallow(<Navigator isMenuOpen={true} onClick={() => {}} />)
    expect(menu.find('.backIcon').length).toEqual(1)
  })
})
