import React, { useState,useEffect} from 'react'
import button from './components/Button'
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import Channel from './components/Channel';

firebase.initializeApp({
    apiKey: "AIzaSyBfrg0Y75C9MhsANcSR2yZXpbKvlJxLi80",
    authDomain: "hangouthavenchat.firebaseapp.com",
    projectId: "hangouthavenchat",
    storageBucket: "hangouthavenchat.appspot.com",
    messagingSenderId: "486312293539",
    appId: "1:486312293539:web:89d1a40c39f44a20c8bb16",
    measurementId: "G-RT736Z7TDC"
});

const auth = firebase.auth();
const db = firebase.firestore();

function App() {
    const [user, setuser] = useState(() => auth.currentUser);
 
        const [initializing, setInitializing] = useState(true);

        useEffect(() => {
            const unsubscribe = auth.onAuthStateChanged(user => {
                if (user) {
                    setuser(user);
                }
                else {
                    setuser(null);
                }
                if (initializing) {
                    setInitializing(false);
                }
            })
            return unsubscribe;
        }, []);

        const signInWGoogle = async () => {

        const provider = new firebase.auth.GoogleAuthProvider();
        auth.useDeviceLanguage();

        try {
            await auth.signInWithRedirect(provider);
        } catch (error) {
            console.error(error);
        }
    };

    const signOut = async () => {
        try {
            await firebase.auth().signOut();
        } catch (error) {
            console.log(error);
        }
    };

    if (initializing) return "Loading ...";

    return (
    <div>
            {user ? (
                <>
                    <button onClick={signOut}>Sign Out</button>
                    <Channel user={user} db={db} />
                </>
                ): (
                    <button onClick={signInWGoogle}>Sign in with Google</button>
                    )}
    </div >
        );
}
export default App;
