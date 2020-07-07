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

  it('should update the inputs correctly', function() {
    form.find('input[name="cardNumber"]').prop('onChange')({
      target: { name: 'cardNumber', value: '123' },
    })
    form.find('input[name="cvc"]').prop('onChange')({
      target: { name: 'cvc', value: '456' },
    })
    form.find('input[name="expiry"]').prop('onChange')({
      target: { name: 'expiry', value: '01/01/2021' },
    })
    form.update();
    expect(form.find('input[name="cardNumber"]').prop('value')).toEqual('123')
    expect(form.find('input[name="cvc"]').prop('value')).toEqual('456')
    expect(form.find('input[name="expiry"]').prop('value')).toEqual('01/01/2021')
  })
})
