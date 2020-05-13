import { firebase, googleAuthProvider } from '../firebase/firebase';

export const login = (uid) => ({
    type: 'LOGIN',
    uid
})

export const startLogin = () => () => firebase.auth().signInWithPopup(googleAuthProvider).then(()=>console.log('3'));

export const logout = () => ({
type: 'LOGOUT'
})

export const startLogout = () => () => firebase.auth().signOut();