import filterReducer from '../../reducers/filters';

test('should set text filter', () => {
    const state = filterReducer(undefined, { type: 'SET_TEXT', text: 'hello' });
    expect(state.text).toBe('hello');
});
test('should set startDate filter', () => {
    const state = filterReducer(undefined, { type: 'SET_START_DATE', date: 100 });
    expect(state.startDate).toBe(100);
})
test('should set endDate filter', () => {
    const state = filterReducer(undefined, { type: 'SET_END_DATE', date: 2000 });
    expect(state.endDate).toBe(2000);
})