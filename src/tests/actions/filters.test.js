import { setTextFilter, sortByAmount, sortByDate } from "../../actions/filters"

test('setTextFilter', () => {
    const action = setTextFilter('date');
    expect(action).toEqual({
        type: 'SET_TEXT',
        text: 'date'
    });
});
test('setTextFilter with default', () => {
    const action = setTextFilter();
    expect(action).toEqual({
        type: 'SET_TEXT',
        text: undefined
    });
});
test('sortByAmount', () => {
    const action = sortByAmount();
    expect(action).toEqual({
        type: 'SORT_BY_AMOUNT',
        text: undefined
    });
});
test('sortByDate', () => {
    const action = sortByDate();
    expect(action).toEqual({
        type: 'SORT_BY_DATE'
    });
});