import { initializeApp } from "firebase/app";
import firebaseConfig from "./firebase.config";

const initializeAuthentication = () => {
    initializeApp(firebaseConfig);
}

export default initializeAuthentication;

/* 
Steps for Firebase Authentication:
--------------------
Step-1: initial set up
1. firebase: create project 
2. create web app
3. get configuration
4. initialize firebase
5. enable auth method
-------------------------
Step-2: set up component
1. create sign in component
2. create register component
3. creat route for signin and register
------------------------------
Step-3: set auth system
1.set up sign in and sign out method
2. user state
3. special observer
4. return neccessary methods and states from use firebase
------------------------------------
Step-4: create auth context hook(useAuth)
1. create a auth context 
2. create context provider
3. set context provider's context vallue
4. use auth provider
5. create auth hook
--------------------------------------------
Step-5: create private route
1. create private route
2. set private route
*/