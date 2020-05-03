import { v4 as uuidv4 } from 'uuid';
export const addExpense = ({ description = '', createdAt = 0, amount = 0, note = '' } = {}) => ({
    type: 'ADD_EXPENSE',
    expense: {
        id: uuidv4(),
        description,
        createdAt,
        amount,
        note
    }
});
export const removeExpense = ({ id }) => ({
    type: 'REMOVE_EXPENSE',
    id
});
export const editExpense = (id, updates) => ({
    type: 'EDIT_EXPENSE',
    id,
    updates
}); 