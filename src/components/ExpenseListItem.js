import React from 'react';
import { NavLink } from 'react-router-dom';

export const ExpenseListItem =  (props) => (
    <div>
        <NavLink to={`/edit/${props.expense.id}`} activeClassName="is-active">{props.expense.description}</NavLink>
        <p>{props.expense.amount}</p>
    </div>
);


export default ExpenseListItem;