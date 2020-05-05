import React from 'react';
import { NavLink } from 'react-router-dom';
import moment from 'moment';
import numeral from 'numeral';

export const ExpenseListItem =  (props) => (
    <div>
        <NavLink to={`/edit/${props.expense.id}`} activeClassName="is-active">{props.expense.description}</NavLink>
<p>{numeral(props.expense.amount/100).format('$0,0.00')} - {moment(props.expense.createdAt).format('DD/MM/YYYY')}</p>
    </div>
);


export default ExpenseListItem;