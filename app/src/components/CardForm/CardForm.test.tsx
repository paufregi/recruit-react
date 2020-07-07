import React from 'react';
import { shallow, ShallowWrapper } from 'enzyme';
import CardForm from './CardForm';
import { assert } from 'console';

describe('CardForm', () => {
  let form: ShallowWrapper
  
  beforeEach(() => {
    form = shallow(<CardForm />)
  })

  it('should have 2 text imput', () => {
    expect(form.find('input[type="text"]').length).toEqual(2);
  })

  it('should have 1 date imput', () => {
    expect(form.find('input[type="date"]').length).toEqual(1);
  })

  it('should have 1 submit imput', () => {
    expect(form.find('input[type="submit"]').length).toEqual(1);
  })

  it('should have no error message on first render', function() {
    expect(form.find('.error').length).toBe(0);
  })

  
})
