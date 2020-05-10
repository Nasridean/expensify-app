import expenses from '../fixtures/expenses';
import expensesReducer from '../../reducers/expenses'

test('should add en expense', () => {
    const state = expensesReducer(expenses,
        {
        type: 'ADD_EXPENSE',
        expense: {
            id: '1',
            description: 'New',
            createdAt: 2,
            amount: 300
        }
    });
    expect(state).toEqual([...expenses, {id: '1',
    description: 'New',
    createdAt: 2,
    amount: 300}]);
});
test('should edit en expense', () => {
    const state = expensesReducer(expenses,
        {
        type: 'EDIT_EXPENSE',
        id: expenses[0].id,
        updates: {
            description: 'Edited',
        }
    });
    expect(state[0].description).toBe('Edited');
});
test('should edit en expense if expense is not found', () => {
    const state = expensesReducer(expenses,
        {
        type: 'EDIT_EXPENSE',
        id: 'aaa',
        updates: {
            description: 'Edited',
        }
    });
    expect(state).toEqual(expenses);
});
test('should set expenses', () => {
    const state = expensesReducer(expenses,
        {
        type: 'SET_EXPENSES',
        expenses: {
            description: 'Edited',
        }
    });
    expect(state).toEqual({
        description: 'Edited',
    });
})