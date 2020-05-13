import React from 'react';
import { shallow } from 'enzyme';
import expenses from '../fixtures/expenses';
import { EditExpensePage } from '../../components/EditExpensePage.js';

let startRemoveExpense, startEditExpense, history, wrapper; //match,;

beforeEach(() => {
    //match = {params: {id: expenses[0].id}};
    startRemoveExpense = jest.fn();
    startEditExpense = jest.fn();
    history = { push: jest.fn() };
    wrapper = shallow(<EditExpensePage expense={expenses[0]} startRemoveExpense = {startRemoveExpense} startEditExpense={startEditExpense} history={history} />);
});

test('should render EditExpensePage correctly', () => {
    expect(wrapper).toMatchSnapshot();
});

test('should handle onSubmit and onClick', () => {
    wrapper.find('button').props().onClick();
    expect(history.push).toHaveBeenLastCalledWith('/');
    expect(startRemoveExpense).toHaveBeenLastCalledWith(expenses[0]);
    wrapper.find('ExpenseForm').props().onSubmit(expenses[0]);
    expect(history.push).toHaveBeenLastCalledWith('/');
    expect(startEditExpense).toHaveBeenLastCalledWith(expenses[0].id, expenses[0]);
})