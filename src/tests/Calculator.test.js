import React from 'react';
import Calculator from '../containers/Calculator';
import {mount, configure} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({adapter: new Adapter()});

describe('Calculator', () => {
  let container;
  beforeEach(() => {
    container = mount(<Calculator/>)
  })

  it('should change running total on number enter', () => {
    const button4 = container.find('#number4');
    const runningTotal = container.find('#running-total');
    button4.simulate('click');
    expect(runningTotal.text()).toEqual('4');
  })

  it('should be able to add numbers', () => {
    const button4 = container.find('#number4');
    const button1 = container.find('#number1');
    const operatorAdd = container.find('#operator_add');
    const operatorEquals = container.find('#operator-equals');
    const runningTotal = container.find('#running-total');
    button4.simulate('click');
    operatorAdd.simulate('click');
    button1.simulate('click');
    operatorEquals.simulate('click');
    expect(runningTotal.text()).toEqual('5');
  })

  it('should be able to subtract numbers', () => {
    const button7 = container.find('#number7');
    const button4 = container.find('#number4');
    const operatorSubtract = container.find('#operator-subtract');
    const operatorEquals = container.find('#operator-equals');
    const runningTotal = container.find('#running-total');
    button7.simulate('click');
    operatorSubtract.simulate('click');
    button4.simulate('click');
    operatorEquals.simulate('click');
    expect(runningTotal.text()).toEqual('3');
  })

  it('should be able to multiply numbers', () => {
    const button3 = container.find('#number3');
    const button5 = container.find('#number5');
    const operatorMultiply = container.find('#operator-multiply');
    const operatorEquals = container.find('#operator-equals');
    const runningTotal = container.find('#running-total');
    button3.simulate('click');
    operatorMultiply.simulate('click');
    button5.simulate('click');
    operatorEquals.simulate('click');
    expect(runningTotal.text()).toEqual('15');
  })

  it('should be able to divide numbers', () => {
    const button2 = container.find('#number2');
    const button1 = container.find('#number1');
    const button7 = container.find('#number7');
    const operatorDivide = container.find('#operator-divide');
    const operatorEquals = container.find('#operator-equals');
    const runningTotal = container.find('#running-total');
    button2.simulate('click');
    button1.simulate('click');
    operatorDivide.simulate('click');
    button7.simulate('click');
    operatorEquals.simulate('click');
    expect(runningTotal.text()).toEqual('3');
  })

  it('should be able to concatenate multiple numbers', () => {
    const button2 = container.find('#number2');
    const button1 = container.find('#number1');
    const button7 = container.find('#number7');
    const button8 = container.find('#number8');
    const runningTotal = container.find('#running-total');
    button2.simulate('click');
    button1.simulate('click');
    button7.simulate('click');
    button7.simulate('click');
    button2.simulate('click');
    button8.simulate('click');
    button2.simulate('click');
    expect(runningTotal.text()).toEqual('2177282');
  })

  it('should be able to chain multiple operations', () => {
    const button2 = container.find('#number2');
    const button7 = container.find('#number7');
    const button8 = container.find('#number8');
    const operatorMultiply = container.find('#operator-multiply');
    const operatorAdd = container.find('#operator_add');
    const operatorDivide = container.find('#operator-divide');
    const operatorEquals = container.find('#operator-equals');
    const runningTotal = container.find('#running-total');
    button7.simulate('click');
    operatorMultiply.simulate('click');
    button8.simulate('click');
    operatorDivide.simulate('click');
    button2.simulate('click');
    operatorAdd.simulate('click');
    button2.simulate('click');
    operatorEquals.simulate('click');
    expect(runningTotal.text()).toEqual('30');
  })
})

