import moment from "moment";

export default (expenses, { text, sortBy, startDate, endDate }) => {
    console.log(expenses);
    return expenses.filter(( expense )=> {
        const createdAtMoment = moment(expense.createdAt);
        const startDateMatch = startDate ? startDate.isSameOrBefore(createdAtMoment, 'day') : true;
        const endDateMatch = endDate ? endDate.isSameOrAfter(createdAtMoment, 'day') : true;
        const textMatch = typeof text !== 'string' || text.length === 0 || expense.description.toLowerCase().includes(text.toLowerCase());
        return startDateMatch && endDateMatch && textMatch;
    }).sort((a, b) => {
        if (sortBy === 'date') {
            return  b.createdAt - a.createdAt;
        } else if (sortBy === 'amount') {
            return b.amount - a.amount;
        } else {
            return 0;
        }
    });  
};