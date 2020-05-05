import expensesTotal from '../../selectors/expenses-total';
import expenses from '../fixtures/expenses';
test('should add multiple numbers', () => {
    expect(expensesTotal(expenses)).toBe(130);
});
test('should return 0 if no expenses', () => {
    expect(expensesTotal([])).toBe(0);
});
test('should add one number', () => {
    expect(expensesTotal([expenses[0]])).toBe(20);
});