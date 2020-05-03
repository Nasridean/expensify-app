import moment from 'moment';

const filter = {
    text: '',
    sortBy: 'date',
    endDate: undefined,
    startDate: undefined
};
const altFilter = {
    text: 'bill',
    sortBy: 'amount',
    endDate: moment(0).add(2, 'days').valueOf(),
    startDate: moment(0)
};
export { filter, altFilter };