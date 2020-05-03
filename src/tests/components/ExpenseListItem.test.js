import React from 'react';
import expenses from '../fixtures/expenses';
import { shallow } from 'enzyme';
import { ExpenseListItem } from '../../components/ExpenseListItem';

test('should render an expense item with some expense data', () => {
    const wrapper = shallow(<ExpenseListItem expense={expenses[1]} />);
    expect(wrapper).toMatchSnapshot();
})