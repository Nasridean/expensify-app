import { createStore } from 'redux';

const incrementCount = (incrementBy) => ({
    type: 'INCREMENT',
    incrementBy
});
const decrementCount = (decrementBy) => ({
    type: 'DECREMENT',
    decrementBy
})
const setCount = (setTo) => ({
    type: 'SET',
    setTo
})
const resetCount = () => ({
    type: 'RESET'
})
const store = createStore((state = { count: 0 }, action) => {
    switch (action.type) {
        case 'INCREMENT':
            const incrementBy = typeof action.incrementBy === 'number' ? action.incrementBy : 1
            return {
                count: state.count + incrementBy
            };
        case 'DECREMENT':
            const decrementBy = typeof action.decrementBy === 'number' ? action.decrementBy : 1
            return {
                count: state.count - decrementBy
            };
        case 'SET':
            return {
                count: action.setTo
            };
        case 'RESET':
            return {
                count: 0
            }
        default:
            return state;
    }
});
const unsubscribe = store.subscribe(() => console.log(store.getState()));
store.dispatch(incrementCount(100));
store.dispatch({
    type: 'INCREMENT'
});
store.dispatch(resetCount());
store.dispatch({
    type: 'DECREMENT'
});
store.dispatch(decrementCount(100));
store.dispatch(setCount(1000));


import {createStore, combineReducers} from 'redux';
import { v4 as uuidv4 } from 'uuid';

const addExpense = ({ description, createdAt, amount, note }) => ({
    type: 'ADD_EXPENSE',
    expense: {
        id: uuidv4(),
        description,
        createdAt,
        amount,
        note
    }
});
const removeExpense = ({ id }) => ({
    type: 'REMOVE_EXPENSE',
    id
});
const editExpense = (id, updates) => ({
    type: 'EDIT_EXPENSE',
    id,
    updates
});
const setTextFilter = (text) => ({
    type: 'SET_TEXT',
    text
});
const sortByAmount = () => ({
    type: 'SORT_BY_AMOUNT'
});
const sortByDate = () => ({
    type: 'SORT_BY_DATE'
});
const setStartDate = (date) => ({
    type: 'SET_START_DATE',
    date
});
const setEndDate = (date) => ({
    type: 'SET_END_DATE',
    date
});
const expensesReducerDefaultState = [];
const expensesReducer = (state = expensesReducerDefaultState, action) => {
    switch (action.type) {
        case 'ADD_EXPENSE': 
            return [...state, action.expense];
        case 'REMOVE_EXPENSE':
            return state.filter(({id}) => id !== action.id);
        case 'EDIT_EXPENSE':
            return state.map((expense) => expense.id === action.id ?  { ...state, ...action.updates } : expense)
        default:
            return state;
    }
}

const filterReducerDefaultState = {
    text: '',
    sortBy: 'date',
    startDate: undefined,
    endDate: undefined
};
const filterReducer = (state = filterReducerDefaultState, action) => {
    switch (action.type) {
        case 'SET_TEXT':
            return {...state, text: action.text};
        case 'SORT_BY_AMOUNT':
            return {...state, sortBy: 'amount'};
        case 'SORT_BY_DATE':
            return {...state, sortBy: 'date'};
        case 'SET_START_DATE':
            return {...state, startDate: action.date}
        case 'SET_END_DATE':
            return {...state, endDate: action.date}
        default:
            return state;
    }
}
const getVisibleExpenses = (expenses, { text, sortBy, startDate, endDate }) => {
    return expenses.filter(( expense )=> {
        const startDateMatch = typeof startDate !== 'number' || expense.createdAt >= startDate;
        const endDateMatch = typeof endDate !== 'number' || expense.createdAt <= endDate;
        const textMatch = typeof text !== 'string' || text.length === 0 || expense.description.toLowerCase().includes(text.toLowerCase());
        
        return startDateMatch && endDateMatch && textMatch;
    }).sort((a, b) => {
        if (sortBy === 'date') {
            return a.createdAt < b.createdAt ? 1 : -1;
        } else if (sortBy === 'amount') {
            return a.amount < b.amount ? 1 : -1;
        } else {
            return 0;
        }
    });
    
};
const store = createStore(
    combineReducers({
        expenses: expensesReducer,
        filter: filterReducer
    })
);
store.subscribe(() => {
   const visibleExpenses =  getVisibleExpenses(store.getState().expenses, store.getState().filter);
   console.log(visibleExpenses);
});
const expenseOne = store.dispatch(addExpense({ description:'Rent', amount: 100, createdAt: 500 }));
const expenseTwo = store.dispatch(addExpense({ description:'Coffee', amount: 300, createdAt: 100 }));
/* store.dispatch(removeExpense({id: expenseOne.expense.id}));
store.dispatch(editExpense(expenseTwo.expense.id, { amount: 500 }))
store.dispatch(setTextFilter());*/
store.dispatch(sortByAmount());
//store.dispatch(sortByDate()); 
//store.dispatch(setTextFilter('ffe'));
store.dispatch(setStartDate(100));
store.dispatch(setStartDate());
store.dispatch(setEndDate(1250));
console.log(store.getState())
const demostate = {
    expenses: [{
        id: 'afalfkj',
        description: 'January Rent',
        note: 'This is the final payment',
        amount: 54500,
        createdAt: 0
    }],
    filters: {
        text: 'rent',
        sortBy: 'amount',
        startDate: undefined,
        endDate: undefined
    }
}