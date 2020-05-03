import { Provider } from 'react-redux';
import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/configureStore';
import AppRouter from './routers/AppRouter';
import { addExpense, removeExpense } from './actions/expenses';
import { setTextFilter } from './actions/filters';
import getVisibleExpenses from './selectors/expenses'
import 'normalize.css/normalize.css';
import './styles/styles.scss';
import 'react-dates/lib/css/_datepicker.css';


const store = configureStore();
store.dispatch(addExpense({description: 'Water bill', createdAt: 1000, amount: 100, note: 'Just a note' }));
store.dispatch(addExpense({description: 'Gas bill', createdAt: 500, amount: 500, note: 'Just a note' }));
store.dispatch(setTextFilter('bill'));
const visibleExpenses =  getVisibleExpenses(store.getState().expenses, store.getState().filter);
const jsx = (
    <Provider store = {store}>
        <AppRouter />
    </Provider>
)
ReactDOM.render(jsx, document.getElementById('app'));

/* class Header extends React.Component {
    render() {
        return (
            <div>
                <h1>{this.props.title}</h1>
                <h2>{this.props.subtitle}</h2>
            </div>
        );
    }
} */

/* class Action extends React.Component {
    render() {
        return (
            <div>
                <button onClick={this.props.handlePick} disabled={!this.props.hasOptions}>What should I do?</button>
            </div>
        );
    }
} */

/* class Options extends React.Component {
    render() {
        return (
            <div>
                <button onClick={this.props.handleDeleteOptions}>Remove All</button>
                {this.props.options.map((option) => <p key={option}>{option}</p>)}
                <Option />
            </div>
        );
    }
} */

/* class Option extends React.Component {
    <script src="https://unpkg.com/react@16/umd/react.development.js" crossorigin></script>
    <script src="https://unpkg.com/react-dom@16/umd/react-dom.development.js" crossorigin></script>
    render() {
        return (
            <div>
                <h4>Option component here</h4>
            </div>
        );
    }
} */




