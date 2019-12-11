import { initializeApp } from 'firebase';

const app = initializeApp({
	apiKey: "AIzaSyCyJEddQ13_GEgGAi_AK0bV7VpIgTC6T2I",
	authDomain: "vue-firebase-tutorial-db20f.firebaseapp.com",
	databaseURL: "https://vue-firebase-tutorial-db20f.firebaseio.com",
	projectId: "vue-firebase-tutorial-db20f",
	storageBucket: "vue-firebase-tutorial-db20f.appspot.com",
	messagingSenderId: "399350957472",
	appId: "1:399350957472:web:52d4cbeca43d7c4e7350c5"
})

export const db = app.firestore();
export const itemsCollection = db.collection('items');