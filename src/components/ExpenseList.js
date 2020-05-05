import React from 'react';
import { connect } from 'react-redux';
import ExpenseListItem from './ExpenseListItem';
import selectExpenses from '../selectors/expenses';
import selectExpensesTotal from '../selectors/expenses-total';
import numeral from 'numeral';

const ExpenseList = (props) => (
    <div>
        <h1>Expense List</h1>
        {props.expenses.map((expense) => <ExpenseListItem expense={expense} key={expense.id} />)}
        <h4>Total of {props.expenses.length} {props.expenses.length > 1 ? 'expenses:' : 'expense:'} </h4>{numeral(selectExpensesTotal(props.expenses)/100).format('$0,0.00')}
    </div>
);

const mapStateToProps = (state) => {
    return {
        expenses: selectExpenses(state.expenses, state.filter),
    };
};

export default connect(mapStateToProps)(ExpenseList);