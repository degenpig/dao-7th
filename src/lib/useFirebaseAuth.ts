import { useState, useEffect } from "react";
import firebase from "./firebase";

const formatAuthUser = (user, idToken) => ({
  uid: user.uid,
  email: user.email,
  idToken,
});

export default function useFirebaseAuth() {
  const [authUser, setAuthUser] = useState(null);
  const [loading, setLoading] = useState(true);

  const authStateChanged = async (authState) => {
    if (!authState) {
      setLoading(false);
      return;
    }

    setLoading(true);
    const result = await firebase.auth().getRedirectResult();

    const token = await firebase
      .auth()
      .currentUser.getIdToken(/* forceRefresh */ true);
    // if (result.credential) {
    //   console.log(result.credential.accessToken, "token", token);
    // }
    const formattedUser = formatAuthUser(authState, token);
    setAuthUser(formattedUser);
    setLoading(false);
  };

  const clear = () => {
    setAuthUser(null);
    setLoading(true);
  };

  const signInWithEmailAndPassword = (email, password) =>
    firebase.auth().signInWithEmailAndPassword(email, password);

  const createUserWithEmailAndPassword = (email, password) =>
    firebase.auth().createUserWithEmailAndPassword(email, password);

  const signInWithGoogleProvider = () => {
    const google = new firebase.auth.GoogleAuthProvider();
    google.addScope("https://www.googleapis.com/auth/contacts.readonly");

    const facebook = new firebase.auth.FacebookAuthProvider();
    const twitter = new firebase.auth.TwitterAuthProvider();

    return firebase.auth().signInWithRedirect(google);
  };

  const signOut = () => firebase.auth().signOut().then(clear);

  useEffect(() => {
    const unsubscribe = firebase.auth().onAuthStateChanged(authStateChanged);
    return () => unsubscribe();
  }, []);

  return {
    authUser,
    loading,
    signInWithEmailAndPassword,
    createUserWithEmailAndPassword,
    signOut,
    oauth: {
      signInWithGoogleProvider,
    },
  };
}
