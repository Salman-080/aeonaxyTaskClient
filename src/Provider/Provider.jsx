import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import app from "../Firebase/firebase.config";


export const Authcontext = createContext(null);
const Provider = ({ children }) => {
    const [user, setUser] = useState(null);
    const auth = getAuth(app);

    const createUser = (email, password) => {

        return createUserWithEmailAndPassword(auth, email, password);

    }

    useEffect(() => {

        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser);
            
        });

        return () => {
            unsubscribe();
        }
    }, [])


    const authInfo = {
        createUser,
        user
    }
    return (
        <Authcontext.Provider value={authInfo}>
            {children}
        </Authcontext.Provider>
    );
};

export default Provider;