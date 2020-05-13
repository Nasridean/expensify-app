import authReducer from '../../reducers/auth';

test('should login', () => {
    const state = authReducer({},
        {
        type: 'LOGIN',
        uid: '1a2b'
    });
    expect(state).toEqual({
        uid: '1a2b'
    });
});

test('should logout', () => {
    const state = authReducer({ uid: '1a2b' },
        {
        type: 'LOGOUT',
        uid: '1a2b'
    });
    expect(state).toEqual({});
});