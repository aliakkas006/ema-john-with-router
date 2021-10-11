import { initializeApp } from "firebase/app";
import firebaseConfig from "./firebase.config";

const initializeAuthentication = () => {
    initializeApp(firebaseConfig);
}

export default initializeAuthentication;

/* 
Steps for Firebase Authentication:
----------------------
Step-1: initial set up
1. firebase: create project 
2. create web app
3. get configuration
4. initialize firebase
5. enable auth method
-----------------------
Step-2:
1. create sign in component
2. create register component
3. creat route for signin and register
*/