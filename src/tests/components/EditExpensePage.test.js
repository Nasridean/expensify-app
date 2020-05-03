import React from 'react';
import { shallow } from 'enzyme';
import expenses from '../fixtures/expenses';
import { EditExpensePage } from '../../components/EditExpensePage.js';

let removeExpense, editExpense, history, wrapper; //match,;

beforeEach(() => {
    //match = {params: {id: expenses[0].id}};
    removeExpense = jest.fn();
    editExpense = jest.fn();
    history = { push: jest.fn() };
    wrapper = shallow(<EditExpensePage expense={expenses[0]} removeExpense = {removeExpense} editExpense={editExpense} history={history} />);
});

test('should render EditExpensePage correctly', () => {
    expect(wrapper).toMatchSnapshot();
});

test('should handle onSubmit and onClick', () => {
    wrapper.find('button').props().onClick();
    expect(history.push).toHaveBeenLastCalledWith('/');
    expect(removeExpense).toHaveBeenLastCalledWith(expenses[0]);
    wrapper.find('ExpenseForm').props().onSubmit(expenses[0]);
    expect(history.push).toHaveBeenLastCalledWith('/');
    expect(editExpense).toHaveBeenLastCalledWith(expenses[0].id, expenses[0]);
})