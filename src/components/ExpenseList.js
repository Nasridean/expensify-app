import React from 'react';
import { connect } from 'react-redux';
import ExpenseListItem from './ExpenseListItem';
import selectExpenses from '../selectors/expenses';
import selectExpensesTotal from '../selectors/expenses-total';
import numeral from 'numeral';

const ExpenseList = (props) => (
    <div className="content-container">
        <div className="list-header">
            <div className="show-for-mobile">Expenses</div>
            <div className="show-for-desktop">Expense</div>
            <div className="show-for-desktop">Amount</div>
        </div>
        <div className="list-body">
            {props.expenses.length === 0 ? (
                <div className="list-item list-item__message">
                    <span>No expenses</span>
                </div>
            ) : (
                props.expenses.map((expense) => <ExpenseListItem expense={expense} key={expense.id} />)
                )}
        </div>
    </div>
);

const mapStateToProps = (state) => {
    return {
        expenses: selectExpenses(state.expenses, state.filter),
    };
};

export default connect(mapStateToProps)(ExpenseList);