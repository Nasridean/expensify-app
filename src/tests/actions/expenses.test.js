import {startAddExpense, editExpense} from '../../actions/expenses';
import expenses from '../fixtures/expenses';
import thunk from 'redux-thunk';
import configureMockStore from 'redux-mock-store';
import database from '../../firebase/firebase';

const createMockStore = configureMockStore([thunk]);

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
test('should add expense to database and store', (done) => {
    const store = createMockStore({});
    const expenseData = {
        description: 'Mouse',
        amount: 3000,
        note: 'this one is better',
        createdAt: 1000
    };

    store.dispatch(startAddExpense(expenseData)).then(() => {
        const actions = store.getActions();
        expect(actions[0]).toEqual({
            type: 'ADD_EXPENSE',
            expense: {
                id: expect.any(String),
                ...expenseData
            }
        });

        return database.ref(`expenses/${actions[0].expense.id}`).once('value');
    }).then((snapshot) => {
        expect(snapshot.val()).toEqual(expenseData);
        done();
    });
});
test('should add expense with default values to database and store', (done) => {
    const store = createMockStore({});

    store.dispatch(startAddExpense()).then(() => {
        const actions = store.getActions();
        expect(actions[0]).toEqual({
            type: 'ADD_EXPENSE',
            expense: {
                id: expect.any(String),
                description: '',
                note: '',
                amount: 0,
                createdAt: 0
            }
        });

        return database.ref(`expenses/${actions[0].expense.id}`).once('value');
    }).then((snapshot) => {
        expect(snapshot.val()).toEqual({
            description: '',
            note: '',
            amount: 0,
            createdAt: 0
        });
        done();
    });
});
/* test('should return addExpense with default values', () => {
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
}) */