import React from 'react'
import { mount, ReactWrapper } from 'enzyme'
import App from './App'

import Navigator from '../Navigator/Navigator'
import Menu from '../Menu/Menu'
import CardForm from '../CardForm/CardForm'

describe('App', () => {
  let app: ReactWrapper
  
  beforeEach(() => {
    app = mount(<App />)
  })

  it('should have a Navigator', () => {
    expect(app.find(Navigator).length).toEqual(1)
  })

  it('should change the title', () => {
    let navigatorIcon = app.find('.Navigator')
    expect(app.find('.title').text()).toEqual('Register Card Form')
    navigatorIcon.simulate('click')
    expect(app.find('.title').text()).toEqual('Menu')
    navigatorIcon.simulate('click')
    expect(app.find('.title').text()).toEqual('Register Card Form')
  })

  it('should toogle between Menu and CardForm', () => {
    let navigatorIcon = app.find('.Navigator')
    expect(app.find(CardForm).length).toEqual(1)
    expect(app.find(Menu).length).toEqual(0)
    navigatorIcon.simulate('click')
    expect(app.find(CardForm).length).toEqual(0)
    expect(app.find(Menu).length).toEqual(1)
    navigatorIcon.simulate('click')
    expect(app.find(CardForm).length).toEqual(1)
    expect(app.find(Menu).length).toEqual(0)
  })
})
