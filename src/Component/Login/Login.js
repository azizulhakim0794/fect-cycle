import React, { useContext} from 'react';
import './Login.css'
import google from './../../image/logo-icon/google.png'
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { initializeApp } from 'firebase/app';
import firebaseConfig from './firebaseConfig/firebase.config'
import { UserContext } from '../../App';
import { useHistory, useLocation } from 'react-router';
const Login = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext)
    const history = useHistory()
    const location = useLocation()
    let { from } = location.state || { from: { pathname: "/" } };
    const app = initializeApp(firebaseConfig);
    if (app.length === 0) {
      initializeApp(firebaseConfig)
    }
  
    const signInWithGoogle = (e) => {
  
      // const provider = new firebase.auth.GoogleAuthProvider();
      const provider = new GoogleAuthProvider();
      const auth = getAuth();
      signInWithPopup(auth, provider)
        .then((result) => {
          /** @type {firebase.auth.OAuthCredential} */
          const user = result.user;
          const { displayName, email, uid ,photoURL} = user
          const newUserData = { ...loggedInUser }
          newUserData.isSignedIn = true
          newUserData.name = displayName
          newUserData.email = email
          newUserData.uid = uid
          newUserData.photo = photoURL
          setLoggedInUser(newUserData)
          history.replace(from);
  
  
          // ...
        }).catch((error) => {
          // Handle Errors here.
          var errorCode = error.code;
          var errorMessage = error.message;
          // The email of the user's account used.
          var email = error.email;
          // The firebase.auth.AuthCredential type that was used.
          var credential = error.credential;
          // ...
          if (errorCode || errorMessage || email || credential) {
            console.log(errorMessage, errorCode, email, credential);
          }
        });
      e.preventDefault()
    }
    return (
        <div className="container">
            <div className="text-center mt-5">
                <h1>Fect Cycle</h1>
            </div>
            <div className="d-flex justify-content-center mt-5">
                <div className="card col-md-4 col-sm-12 col-xs-12">
                    <div className="round-pill p-5 ">
                        <h2 className="text-center">Login with</h2><br />
                        <p className="text-center row d-flex" onClick={signInWithGoogle}>
                            <span className="border google-formate p-1"> <img className="col-md-4 google-icon" src={google} alt="" /> <span className="col-md-8 mr-3"> Continue with google</span></span>
                        </p>
                        <p className="text-center">
                            Don't have an account <span className="text-primary create-account" onClick={signInWithGoogle}><u>Create a new account</u></span>
                        </p>
                    </div>
                </div>
            </div>
            <br/><br/>
        </div>
    )
}

export default Login
