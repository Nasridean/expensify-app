import React from 'react';
import { shallow } from 'enzyme';
import expenses from '../fixtures/expenses';
import { ExpenseListFilter } from '../../components/ExpenseListFilter';
import { filter, altFilter } from '../fixtures/filters';
import moment from 'moment';

let setTextFilter, sortByDate, sortByAmount, setStartDate, setEndDate, wrapper;
beforeEach(() => {
    sortByAmount = jest.fn();
    setTextFilter = jest.fn();
    sortByDate = jest.fn();
    setStartDate = jest.fn();
    setEndDate = jest.fn();
    wrapper = shallow(<ExpenseListFilter
        expenses={expenses}
        sortByAmount = {sortByAmount}
        setTextFilter={setTextFilter}
        sortByDate = {sortByDate}
        setStartDate={setStartDate}
        setEndDate={setEndDate}
        filter={filter}
        />);
});
test('should render ExpenseListFilter correctly', () => {
    expect(wrapper).toMatchSnapshot();
});
test('should handle text change', () => {
    wrapper.find('input').simulate('change', {
        target: { value: 'bill' }
    });
    expect(setTextFilter).toHaveBeenLastCalledWith('bill');
});
test('should sort by date', () => {
    wrapper.find('select').simulate('change', {
        target: { value: 'date' }
    });
    expect(sortByDate).toHaveBeenCalled();
});
test('should sort by amount', () => {
    wrapper.find('select').simulate('change', {
        target: { value: 'amount' }
    });
    expect(sortByAmount).toHaveBeenCalled();
});
test('should handle date changes', () => {
    wrapper.find(`withStyles(DateRangePicker)`).prop('onDatesChange')({ startDate: moment(0), endDate: moment(0).add(2, 'days') });
    expect(setStartDate).toHaveBeenLastCalledWith(moment(0));
    expect(setEndDate).toHaveBeenLastCalledWith(moment(0).add(2, 'days'));
});
test('should handle date changes', () => {
    wrapper.find(`withStyles(DateRangePicker)`).prop('onFocusChange')(true);
    expect(wrapper.state('calendarFocused')).toBe(true);
});