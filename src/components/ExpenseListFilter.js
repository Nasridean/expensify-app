import React from 'react';
import { connect } from 'react-redux';
import { DateRangePicker } from 'react-dates';
import { setTextFilter, sortByDate, sortByAmount, setStartDate, setEndDate } from '../actions/filters';

export class ExpenseListFilter extends React.Component {
    state = {
        calendarFocused: null
    };
    onDatesChange = ({ startDate, endDate }) => {
        this.props.setStartDate(startDate);
        this.props.setEndDate(endDate);
    };
    onFocusChange = (calendarFocused) => {
        this.setState(() => ({ calendarFocused }));
    };
    onSortByChange = (e) => {
            e.target.value === 'date' ? this.props.sortByDate() : this.props.sortByAmount();
    };
    onTextChange = (e) => {
            this.props.setTextFilter(e.target.value);
    };
    render() {
        return (
            <div>
                <input type="text" value={this.props.filter.text} onChange={this.onTextChange} />
                <select value={this.props.filter.sortBy} onChange={this.onSortByChange}>
                    <option value="date">Date</option>
                    <option value="amount">Amount</option>
                </select>
                <DateRangePicker 
                    startDate={this.props.filter.startDate}
                    endDate={this.props.filter.startDate}
                    onDatesChange={this.onDatesChange}
                    focusedInput={this.state.calendarFocused}
                    onFocusChange={this.onFocusChange}
                    showClearDates={true}
                    numberOfMonths={1}
                    isOutsideRange={() => false}
                />
            </div>
        );
    };
}; 

const mapStateToProps = (state) => {
    return {
        filter: state.filter
    };
};
const mapDispatchToProps = (dispatch) => ({
    setTextFilter: (text) => dispatch(setTextFilter(text)),
    sortByAmount: () => dispatch(sortByAmount()),
    sortByDate: () => dispatch(sortByDate()),
    setEndDate: (startDate) => dispatch(setEndDate(startDate)),
    setStartDate: (endDate) => dispatch(setStartDate(endDate))
})

export default connect(mapStateToProps, mapDispatchToProps)(ExpenseListFilter);