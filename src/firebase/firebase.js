import * as firebase from 'firebase';

var firebaseConfig = {
    apiKey: process.env.FIREBASE_API_KEY,
    authDomain: process.env.FIREBASE_AUTH_DOMAIN,
    databaseURL: process.env.FIREBASE_DATABASE_URL,
    projectId: process.env.FIREBASE_PROJECT_ID,
    storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID
  };
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const database = firebase.database();

export { firebase, database as default };

/* firebase.database().ref().set({
      name: 'Nasridean',
      attributes: {
        height: '170sm',
        weight: '60kg'
      },
      location: {
          city: 'Karshi',
          country: 'Uzbekistan'
      }     
});
firebase.database().ref().update({
      name: 'Klichev',
      'location/city': 'Tashkent',
      'attributes/height': '169sm'
}).then(() => console.log('updated!')); */
/* firebase.database().ref('notes').push({
    description: 'Rent',
    amount: 100,
    createdAt: 20000000,
    note: 'Hello'
});
firebase.database().ref('notes').push({
    description: 'Water',
    amount: 10,
    createdAt: 30000000,
    note: 'Hey'
});
firebase.database().ref('notes').push({
    description: 'Gas',
    amount: 500,
    createdAt: 40000000,
    note: 'Hi'
}); */
/* firebase.database().ref('notes').on('value', (snapshot) => {
    const expenses = [];
    snapshot.forEach((childSnapshot) => {
        expenses.push({
            id: childSnapshot.key,
            ...childSnapshot.val()
        });
    });
    console.log(expenses);
}); */
/* firebase.database().ref('notes').on('child_changed', (snapshot) => {
    console.log(snapshot.key, snapshot.val());
}) */