import React from 'react'
import { shallow, ShallowWrapper } from 'enzyme'
import App from './App'
import Menu from '../Menu/Menu'
import CardForm from '../CardForm/CardForm'

describe('App', () => {
  let app: ShallowWrapper
  
  beforeEach(() => {
    app = shallow(<App />);
  })

  it('should have a Menu', () => {
    expect(app.find(Menu).length).toEqual(1)
  })

  it('should have a CardForm', () => {
    expect(app.find(CardForm).length).toEqual(1)
  })
})
