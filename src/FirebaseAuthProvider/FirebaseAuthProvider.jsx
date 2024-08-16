import { createUserWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut,} from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import auth from "../Firebase/firebaseConfig";



export const AuthContext = createContext(null);

//social auth providers
const googleLoginProvider = new GoogleAuthProvider();

// eslint-disable-next-line react/prop-types
const FirebaseAuthProvider = ({ children }) => {
    
    const [user, setUser] = useState(null);
  
    const [loading, setLoading] = useState(true)
  
    //create user
    const createUser = (email, password) => {
      setLoading(true)
      return createUserWithEmailAndPassword(auth, email, password);
    };
  
    // sign in user
    const signInUser = (email, password) => {
      setLoading(true)
      return signInWithEmailAndPassword(auth, email, password);
    };
  
    // google login
    const googleLogin = () => {
      setLoading(true)
      return signInWithPopup(auth, googleLoginProvider);
    };
  
    //logout
    const logout =()=>{
      setUser(null)
      signOut(auth)
    };
    // observer
    useEffect(() => {
      const unsubscribe= onAuthStateChanged(auth, (user) => {
        setUser(user);
        setLoading(false); // Set loading to false regardless of user existence
      });
      return ()=> unsubscribe();
    }, []);
  
    const allValues = {
      createUser,
      user,
      signInUser,
      googleLogin,
      logout,
      loading,
      
    };
    return (
      <div>
        <AuthContext.Provider value={allValues}>{children}</AuthContext.Provider>
      </div>
    );
  };
  
  export default FirebaseAuthProvider;