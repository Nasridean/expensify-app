import React from 'react';
import { connect } from 'react-redux';
import ExpenseForm from './ExpenseForm';
import { startEditExpense, startRemoveExpense } from '../actions/expenses';
export class EditExpensePage extends React.Component {
    onSubmit = ((expense) => {
        this.props.startEditExpense(this.props.expense.id, expense);
        this.props.history.push('/');
    });
    onClick = () => {
        this.props.startRemoveExpense(this.props.expense);
        this.props.history.push('/');
    }
    render() {
        return (
            <div>
        <ExpenseForm 
            expense ={this.props.expense}
            onSubmit={this.onSubmit}
        />
        <button onClick={this.onClick}>Remove</button>
    </div>
        )
    }
}
const mapStateToProps = (state, props) => {
    return {
        expense: state.expenses.find((expense) => props.match.params.id === expense.id)
    }
}
const mapDispatchToProps = (dispatch) => ({
    startEditExpense: (id, expense) => dispatch(startEditExpense(id, expense)),
    startRemoveExpense: (expense) => dispatch(startRemoveExpense(expense))
})
export default connect(mapStateToProps, mapDispatchToProps)(EditExpensePage);