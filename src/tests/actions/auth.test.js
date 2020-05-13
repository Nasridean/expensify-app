import { login, logout } from '../../actions/auth';

test('should login', () => {
    expect(login('1a2b')).toEqual({
        type: 'LOGIN',
        uid: '1a2b'
    })
});

test('should logout', () => {
    expect(logout()).toEqual({
        type: 'LOGOUT'
    })
});