import React from 'react';
import { shallow } from 'enzyme';
import ExpenseForm from '../../components/ExpenseForm';
import expenses from '../fixtures/expenses';

test('should render ExpenseForm', () => {
    const wrapper = shallow(<ExpenseForm />);
    expect(wrapper).toMatchSnapshot();
});
test('should render ExpenseForm with data', () => {
    const wrapper = shallow(<ExpenseForm expense={expenses[0]} />);
    expect(wrapper).toMatchSnapshot();
});
test('should render ExpenseForm textarea change', () => {
    const wrapper = shallow(<ExpenseForm expense={expenses[0]} />);
    wrapper.find('textarea').simulate('change', {
        target: { value: 'Changed!' }
    })
    expect(wrapper.state('note')).toBe('Changed!');
});
test('should set amount', () => {
    const value = '12.50';
    const wrapper = shallow(<ExpenseForm expense={expenses[0]} />);
    wrapper.find('input').at(1).simulate('change', {
        target: { value }
    })
    expect(wrapper.state('amount')).toBe(value);
});
test('should set invalid amount', () => {
    const value = '12.505';
    const wrapper = shallow(<ExpenseForm expense={expenses[0]} />);
    wrapper.find('input').at(1).simulate('change', {
        target: { value }
    })
    expect(wrapper.state('amount')).not.toBe(value);
});
test('should test calendar focus on change', () => {
    const focused = true;
    const wrapper = shallow(<ExpenseForm />);
    wrapper.find('withStyles(SingleDatePicker)').prop('onFocusChange')({ focused });
    expect(wrapper.state('calendarFocused')).toBe(true);
})