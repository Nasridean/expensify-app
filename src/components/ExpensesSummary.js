import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import selectExpenses from '../selectors/expenses';
import selectExpensesTotal from '../selectors/expenses-total';
import numeral from 'numeral';

export const ExpensesSummary = (props) => (
    <div className="page-header">
        <div className="content-container">
            <h1 className="page-header__title">Total of <span>{props.expenses.length}</span> {props.expenses.length > 1 ? 'expenses:' : 'expense:'} <span>{numeral(selectExpensesTotal(props.expenses)/100).format('$0,0.00')}</span></h1>
            <div className="page-header__actions">
                <Link className="button" to="/create">Add Expense</Link>
            </div>
        </div>
    </div>
);

const mapStateToProps = (state) => {
    return {
        expenses: selectExpenses(state.expenses, state.filter),
    };
};

export default connect(mapStateToProps)(ExpensesSummary);