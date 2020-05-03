import {addExpense, editExpense} from '../../actions/expenses';

test('should return edit expenses', () => {
    const result = editExpense('123', { id: '321' });
    expect(result).toEqual({
        type: 'EDIT_EXPENSE',
        id: '123',
        updates: {
            id: '321'
        }
    });

});

test('should return addExpense with default values', () => {
    const result = addExpense();
    expect(result).toEqual({
        type: 'ADD_EXPENSE',
        expense: {
            description: '',
            createdAt: 0,
            amount: 0,
            note: '',
            id: expect.any(String)
        }
        
    
    });
})